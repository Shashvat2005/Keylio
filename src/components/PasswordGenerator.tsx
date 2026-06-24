"use client";

import { useState } from "react";
import {
  Copy,
  Check,
  Eye,
  EyeOff,
  Shield,
  Key,
  Globe,
  Hash,
  Ruler,
  Layers,
} from "lucide-react";
import { generatePassword } from "@/lib/password";
import type { Algorithm } from "@/lib/password";



export default function PasswordGenerator() {
  // --- State for all inputs ---
  const [masterSecret, setMasterSecret] = useState("");
  const [website, setWebsite] = useState("");
  const [version, setVersion] = useState(1);
  const [length, setLength] = useState(16);
  const [algorithm, setAlgorithm] = useState<Algorithm>("argon2id");

  // Character set toggles
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const hasCharSetSelected = includeUppercase || includeLowercase || includeNumbers || includeSymbols;

  // Result states
  const [generatedPassword, setGeneratedPassword] = useState("");
  const [copied, setCopied] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  // Strength shown after generation
  const [strengthState, setStrengthState] = useState<{ label: string; color: string; text: string; width: string } | null>(null);
  const [entropyBitsState, setEntropyBitsState] = useState<number | null>(null);

  // --- Placeholder generation logic (replace with your actual crypto) ---
  const handleGenerate = async () => {
    if (!hasCharSetSelected) {
      alert("Please select at least one character set (A-Z, a-z, 0-9, or symbols).");
      return;
    }
    try {
      const pwd = await generatePassword(
        masterSecret.trim(),
        website.trim(),
        Number(version),
        Number(length),
        algorithm,
        {
          includeUppercase,
          includeLowercase,
          includeNumbers,
          includeSymbols,
        }
      );

      setGeneratedPassword(pwd);
      setCopied(false);

      // Compute and store strength + entropy only after generation
      const s = getStrength();
      setStrengthState(s);
      const poolSize =
        (includeUppercase ? 26 : 0) +
        (includeLowercase ? 26 : 0) +
        (includeNumbers ? 10 : 0) +
        (includeSymbols ? 30 : 0) || 26;
      const entropy = Math.round(Math.log2(poolSize) * length);
      setEntropyBitsState(entropy);
    } catch (error) {
      console.error(error);

      const message =
        error instanceof Error
          ? error.message
          : "Failed to generate password";

      alert(message);
    }
  };

  const copyToClipboard = () => {
    if (!generatedPassword) return;
    navigator.clipboard.writeText(generatedPassword);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // --- Strength & Entropy Calculation (UI only) ---
  const getStrength = () => {
    let poolSize = 0;
    if (includeUppercase) poolSize += 26;
    if (includeLowercase) poolSize += 26;
    if (includeNumbers) poolSize += 10;
    if (includeSymbols) poolSize += 30;
    if (poolSize === 0) poolSize = 26;

    const entropy = Math.log2(poolSize) * length;
    if (entropy >= 80) return { label: "Strong", color: "bg-emerald-500", text: "text-emerald-400", width: "w-full" };
    if (entropy >= 50) return { label: "Good", color: "bg-yellow-500", text: "text-yellow-400", width: "w-3/4" };
    return { label: "Weak", color: "bg-red-500", text: "text-red-400", width: "w-2/5" };
  };
  

  return (
    <section className="relative bg-black px-6 py-32" id="generator">
      {/* Subtle background glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-5xl">
        {/* --- Section Heading --- */}
        <div className="mb-16 text-center">
          <div className="mb-4 flex items-center justify-center gap-3 text-sm uppercase tracking-[0.25em] text-zinc-500">
            <span className="h-px w-6 bg-white/10" />
            Password Generator
            <span className="h-px w-6 bg-white/10" />
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
            One secret. <br />
            <span className="bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Every password.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-500">
            Deterministically generate strong, unique passwords for every website
            without ever storing them.
          </p>
        </div>

        {/* --- Generator Card --- */}
        <div className="rounded-3xl border border-white/10 bg-white/3 p-8 backdrop-blur-xl md:p-10">
          {/* Row 1: Master Secret + Website */}
          <div className="mb-6 grid gap-6 md:grid-cols-2">
            <div>
              <label className="mb-3 flex items-center gap-2 text-sm text-zinc-400">
                <Key size={16} />
                Master Secret
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={masterSecret}
                  onChange={(e) => setMasterSecret(e.target.value)}
                  placeholder="Enter your master secret"
                  className="w-full rounded-2xl border border-white/10 bg-black/40 px-5 py-4 text-white placeholder:text-zinc-600 outline-none transition-all focus:border-white/20 focus:ring-1 focus:ring-white/10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div>
              <label className="mb-3 flex items-center gap-2 text-sm text-zinc-400">
                <Globe size={16} />
                Website
              </label>
              <input
                type="text"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                placeholder="Enter the website"
                className="w-full rounded-2xl border border-white/10 bg-black/40 px-5 py-4 text-white placeholder:text-zinc-600 outline-none transition-all focus:border-white/20 focus:ring-1 focus:ring-white/10"
              />
            </div>
          </div>

          {/* Row 2: Version + Length + Algorithm (Dropdown) */}
          <div className="mb-8 grid gap-6 md:grid-cols-3">
            <div>
              <label className="mb-3 flex items-center gap-2 text-sm text-zinc-400">
                <Hash size={16} />
                Version / Counter
              </label>
              <input
                type="number"
                value={version}
                onChange={(e) => setVersion(Number(e.target.value))}
                min={1}
                className="w-full rounded-2xl border border-white/10 bg-black/40 px-5 py-4 text-white outline-none transition-all focus:border-white/20 focus:ring-1 focus:ring-white/10"
              />
            </div>

            <div>
              <label className="mb-3 flex items-center gap-2 text-sm text-zinc-400">
                <Ruler size={16} />
                Password Length
              </label>
              <input
                type="number"
                value={length}
                onChange={(e) => setLength(Number(e.target.value))}
                min={6}
                max={64}
                className="w-full rounded-2xl border border-white/10 bg-black/40 px-5 py-4 text-white outline-none transition-all focus:border-white/20 focus:ring-1 focus:ring-white/10"
              />
            </div>

            <div>
              <label className="mb-3 flex items-center gap-2 text-sm text-zinc-400">
                <Layers size={16} />
                Cryptography
              </label>
              <select
                value={algorithm}
                onChange={(e) => setAlgorithm(e.target.value as Algorithm)}
                className="w-full cursor-pointer rounded-2xl border border-white/10 bg-black/40 px-5 py-4 text-white outline-none transition-all hover:border-white/20 focus:border-white/20 focus:ring-1 focus:ring-white/10"
              >
                <option value="argon2id">Argon2id (Recommended)</option>
                <option value="sha256">SHA256</option>
                <option value="sha512">SHA512</option>
                <option value="pbkdf2">PBKDF2</option>
              </select>
            </div>
          </div>

          {/* Row 3: Character Set Toggles */}
          <div className="mb-8">
            <p className="mb-3 text-sm text-zinc-400">Include character sets</p>
            <div className="flex flex-wrap gap-3">
              <label className="flex cursor-pointer items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-zinc-300 transition hover:bg-white/10">
                <input
                  type="checkbox"
                  checked={includeUppercase}
                  onChange={() => setIncludeUppercase(!includeUppercase)}
                  className="h-4 w-4 rounded border-white/20 bg-black/50 text-blue-500 focus:ring-blue-500/50"
                />
                A-Z
              </label>
              <label className="flex cursor-pointer items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-zinc-300 transition hover:bg-white/10">
                <input
                  type="checkbox"
                  checked={includeLowercase}
                  onChange={() => setIncludeLowercase(!includeLowercase)}
                  className="h-4 w-4 rounded border-white/20 bg-black/50 text-blue-500 focus:ring-blue-500/50"
                />
                a-z
              </label>
              <label className="flex cursor-pointer items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-zinc-300 transition hover:bg-white/10">
                <input
                  type="checkbox"
                  checked={includeNumbers}
                  onChange={() => setIncludeNumbers(!includeNumbers)}
                  className="h-4 w-4 rounded border-white/20 bg-black/50 text-blue-500 focus:ring-blue-500/50"
                />
                0-9
              </label>
              <label className="flex cursor-pointer items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-zinc-300 transition hover:bg-white/10">
                <input
                  type="checkbox"
                  checked={includeSymbols}
                  onChange={() => setIncludeSymbols(!includeSymbols)}
                  className="h-4 w-4 rounded border-white/20 bg-black/50 text-blue-500 focus:ring-blue-500/50"
                />
                !@#$
              </label>
            </div>
            {!hasCharSetSelected && (
              <p className="mt-2 text-sm text-rose-400">Please select at least one character set.</p>
            )}
          </div>

          {/* --- Generate Button --- */}
          <button
            onClick={handleGenerate}
            disabled={!hasCharSetSelected}
            className={
              `group w-full rounded-2xl py-4 font-medium text-white shadow-lg transition-all active:scale-[0.98] ` +
              (hasCharSetSelected
                ? "bg-linear-to-r from-blue-600 to-purple-600 shadow-blue-500/25 hover:scale-[1.02] hover:shadow-blue-500/40"
                : "bg-white/5 text-zinc-400 cursor-not-allowed opacity-60")
            }
          >
            <span className="flex items-center justify-center gap-2">
              <Shield size={18} />
              Generate Password
            </span>
          </button>

          {/* --- Result Area --- */}
          {generatedPassword && (
            <div className="mt-8 rounded-2xl border border-white/10 bg-black/40 p-5 transition-all">
              <div className="mb-2 flex items-center justify-between text-sm text-zinc-500">
                <span>Generated Password</span>
                <span className="flex items-center gap-2 font-mono text-xs text-zinc-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500/50" />
                  {entropyBitsState ?? "--"} bits
                </span>
              </div>

              <div className="flex items-center justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div
                    className="font-mono text-lg tracking-wide text-white whitespace-nowrap overflow-x-auto pr-2 password-scroll"
                    tabIndex={0}
                    role="textbox"
                    aria-readonly
                  >
                    {showPassword ? generatedPassword : "•".repeat(generatedPassword.length)}
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setShowPassword(!showPassword)}
                    className="rounded-xl p-2 text-zinc-500 transition hover:bg-white/5 hover:text-white"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                  <button
                    onClick={copyToClipboard}
                    className="flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2 text-sm text-zinc-300 transition hover:bg-white/5"
                  >
                    {copied ? <Check size={16} /> : <Copy size={16} />}
                    {copied ? "Copied" : "Copy"}
                  </button>
                </div>
              </div>

              {/* Strength Bar */}
              <div className="mt-4 flex items-center gap-4">
                <span className="text-xs font-medium text-zinc-500">Strength</span>
                <div className="flex-1 h-1.5 rounded-full bg-white/10 overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${(strengthState?.color) ?? "bg-white/10"}`}
                    style={{ width: (strengthState?.width) ?? "w-0" }}
                  />
                </div>
                <span className={`text-xs font-semibold ${(strengthState?.text) ?? "text-zinc-400"}`}>
                  {strengthState?.label ?? "--"}
                </span>
              </div>
            </div>
          )}

          {/* Empty state placeholder if no password generated */}
          {!generatedPassword && (
            <div className="mt-8 rounded-2xl border border-white/5 bg-black/20 p-5 text-center">
              <p className="text-sm text-zinc-600">
                Enter your details and click generate to create your secure password.
              </p>
            </div>
          )}

          {/* Trust Footer */}
          <p className="mt-6 text-center text-xs text-zinc-600">
            🔒 Your master secret never leaves your browser. All derivation happens client-side.
          </p>
        </div>
      </div>
    </section>
  );
}