"use client";

import {
  Shield,
  CheckCircle,
  XCircle,
  EyeOff,
  Database,
  Lock,
  Key,
  Code,
  AlertTriangle,
  Server,
  User,
  BarChart,
  ExternalLink,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { SITE } from "@/constants/site";

export default function SecurityPage() {
  return (
    <section className="relative overflow-hidden bg-black px-6 py-24 md:py-32">
      {/* Background Glows */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-purple-600/10 blur-3xl" />
        <div className="absolute bottom-1/3 left-0 h-[300px] w-[300px] rounded-full bg-emerald-600/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-4xl">
        {/* --- Hero --- */}
        <div className="mb-16 text-center">
          <div className="mb-4 flex items-center justify-center gap-3 text-sm uppercase tracking-[0.25em] text-zinc-500">
            <span className="h-px w-6 bg-white/10" />
            Security
            <span className="h-px w-6 bg-white/10" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            Security by{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Design
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
            {SITE.name} was built around a simple principle:{" "}
            <span className="font-medium text-white">
              your passwords should never need to be stored.
            </span>
          </p>
        </div>

        {/* --- Core Principle Card --- */}
        <div className="mb-20 rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl md:p-10">
          <div className="flex flex-col items-center gap-6 text-center md:flex-row md:text-left">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg shadow-blue-500/25">
              <Shield size={28} className="text-white" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white">
                Zero‑storage architecture
              </h2>
              <p className="text-zinc-400">
                Unlike traditional password managers, {SITE.name} does not
                maintain password vaults, user accounts, databases, or cloud
                synchronization services.
              </p>
              <p className="mt-2 text-sm text-zinc-500">
                Every password is generated on demand using information that
                only you know. The result is a system that minimizes the amount
                of sensitive information that exists in the first place.
              </p>
            </div>
          </div>
        </div>

        {/* --- What Happens When You Generate --- */}
        <div className="mb-20">
          <h3 className="mb-8 text-2xl font-bold text-white">
            What happens when you click <span className="text-blue-400">Generate</span>?
          </h3>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="flex flex-col items-center rounded-xl border border-white/5 bg-black/30 p-5 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10">
                  <Key size={20} className="text-blue-400" />
                </div>
                <div className="mt-3 text-sm font-medium text-white">Your Master Secret</div>
                <div className="mt-1 h-px w-8 bg-white/10" />
                <div className="mt-2 text-xs text-zinc-500">+</div>
                <div className="text-sm font-medium text-white">Website</div>
                <div className="mt-1 h-px w-8 bg-white/10" />
                <div className="mt-2 text-xs text-zinc-500">+</div>
                <div className="text-sm font-medium text-white">Version</div>
              </div>
              <div className="flex flex-col items-center justify-center rounded-xl border border-white/5 bg-black/30 p-5 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10">
                  <Server size={20} className="text-purple-400" />
                </div>
                <div className="mt-3 text-sm font-medium text-white">Processed locally</div>
                <div className="mt-1 text-xs text-zinc-500">Entirely in your browser</div>
                <div className="mt-2 rounded-full bg-emerald-500/10 px-3 py-0.5 text-xs text-emerald-400">
                  No server request
                </div>
              </div>
              <div className="flex flex-col items-center rounded-xl border border-white/5 bg-black/30 p-5 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10">
                  <Lock size={20} className="text-emerald-400" />
                </div>
                <div className="mt-3 text-sm font-medium text-white">Password generated</div>
                <div className="mt-1 text-xs text-zinc-500">Never leaves your device</div>
                <div className="mt-2 rounded-full bg-blue-500/10 px-3 py-0.5 text-xs text-blue-400">
                  Zero credentials exposed
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- What We Store & What We Collect --- */}
        <div className="mb-20 grid gap-8 md:grid-cols-2">
          {/* Store */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm">
            <div className="mb-4 flex items-center gap-3">
              <Database size={18} className="text-red-400" />
              <h4 className="font-semibold text-white">What We Store</h4>
            </div>
            <div className="space-y-2 text-sm">
              {[
                "Passwords",
                "Master Secrets",
                "User Accounts",
                "Personal Information",
                "Recovery Keys",
                "Password History",
                "Cloud Backups",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-zinc-400">
                  <XCircle size={14} className="text-red-400/60" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-xl bg-red-500/5 p-3 text-center text-xs text-red-400/70">
              There is no database containing user secrets because there is no
              database at all.
            </div>
          </div>

          {/* Collect */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm">
            <div className="mb-4 flex items-center gap-3">
              <BarChart size={18} className="text-orange-400" />
              <h4 className="font-semibold text-white">What We Collect</h4>
            </div>
            <div className="space-y-2 text-sm">
              {[
                "Analytics",
                "Tracking Data",
                "Usage Statistics",
                "Advertising Identifiers",
                "Behavioral Data",
                "Marketing Profiles",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-zinc-400">
                  <XCircle size={14} className="text-orange-400/60" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-xl bg-orange-500/5 p-3 text-center text-xs text-orange-400/70">
              The application functions entirely without requiring personal
              information.
            </div>
          </div>
        </div>

        {/* --- Open Source Transparency --- */}
        <div className="mb-20 rounded-3xl border border-white/10 bg-gradient-to-br from-blue-500/5 to-purple-500/5 p-8 backdrop-blur-xl md:p-10">
          <div className="flex flex-col items-center text-center md:flex-row md:text-left">
            <div className="mb-6 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-black/40 md:mb-0 md:mr-8">
              <Code size={28} className="text-blue-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Open Source Transparency</h3>
              <p className="max-w-2xl text-zinc-400">
                Trust should never require blind faith. The complete source code
                for {SITE.name} is publicly available.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-1.5 text-xs text-zinc-300">
                  <CheckCircle size={14} className="text-emerald-400" /> Review
                  the implementation
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-1.5 text-xs text-zinc-300">
                  <CheckCircle size={14} className="text-emerald-400" /> Verify
                  generation
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-1.5 text-xs text-zinc-300">
                  <CheckCircle size={14} className="text-emerald-400" /> Audit
                  the security model
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-1.5 text-xs text-zinc-300">
                  <CheckCircle size={14} className="text-emerald-400" /> Build
                  and run independently
                </span>
              </div>
              <div className="mt-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-medium text-blue-400 transition hover:text-blue-300"
                >
                  View source on GitHub <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* --- Threat Model --- */}
        <div className="mb-20">
          <h3 className="mb-6 text-2xl font-bold text-white">Threat Model</h3>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-6 backdrop-blur-sm">
              <h4 className="mb-3 flex items-center gap-2 font-semibold text-emerald-400">
                <CheckCircle size={18} /> Protects against
              </h4>
              <ul className="space-y-2 text-sm text-zinc-300">
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span> Password Reuse
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span> Weak Passwords
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span> Password Database
                  Breaches
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span> Cloud Password
                  Vault Exposure
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span> Third-Party
                  Credential Storage
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6 backdrop-blur-sm">
              <h4 className="mb-3 flex items-center gap-2 font-semibold text-red-400">
                <AlertTriangle size={18} /> Does not protect against
              </h4>
              <ul className="space-y-2 text-sm text-zinc-300">
                <li className="flex items-center gap-2">
                  <span className="text-red-400">✗</span> Malware on Your Device
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-red-400">✗</span> Keyloggers
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-red-400">✗</span> Browser Extensions
                  with Malicious Permissions
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-red-400">✗</span> Weak Master Secrets
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-red-400">✗</span> Physical Access to an
                  Unlocked Device
                </li>
              </ul>
            </div>
          </div>
          <p className="mt-4 text-center text-sm text-zinc-500">
            Security ultimately depends on both the tool and the environment in
            which it is used.
          </p>
        </div>

        {/* --- Master Secret Advice --- */}
        <div className="mb-20 rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl md:p-10">
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center">
            <div className="rounded-xl border border-white/10 bg-black/40 p-3">
              <Key size={24} className="text-yellow-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Your Master Secret</h3>
              <p className="text-zinc-400">
                Your Master Secret is the foundation of your security. Choose
                something:
              </p>
            </div>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              { label: "Long", icon: "📏" },
              { label: "Unique", icon: "🔄" },
              { label: "Difficult to Guess", icon: "🧩" },
              { label: "Not Used Anywhere Else", icon: "🚫" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 rounded-xl border border-white/5 bg-black/30 px-4 py-3 text-sm text-zinc-300"
              >
                <span>{item.icon}</span> {item.label}
              </div>
            ))}
          </div>
          <p className="mt-4 text-center text-sm text-zinc-500">
            Avoid common words, predictable phrases, and reused passwords.
            <br />
            A strong Master Secret strengthens every password generated by
            {SITE.name}.
          </p>
        </div>

        {/* --- Cryptography & Verification --- */}
        <div className="mb-20 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm">
            <div className="mb-3 flex items-center gap-3">
              <Lock size={18} className="text-blue-400" />
              <h4 className="font-semibold text-white">Cryptography</h4>
            </div>
            <p className="text-sm text-zinc-400">
              {SITE.name} relies on established cryptographic primitives
              rather than proprietary algorithms. Security should come from
              strong, peer-reviewed cryptography, not secrecy.
            </p>
            <p className="mt-3 text-sm text-zinc-500">
              Implementation details, algorithms, and the derivation process are
              publicly documented and available for inspection.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm">
            <div className="mb-3 flex items-center gap-3">
              <CheckCircle size={18} className="text-emerald-400" />
              <h4 className="font-semibold text-white">Verification</h4>
            </div>
            <p className="text-sm text-zinc-400">
              If you do not trust {SITE.name}, you should not use it. That is
              why the project is open source.
            </p>
            <p className="mt-3 text-sm text-zinc-500">
              You are encouraged to inspect the code, verify the implementation,
              and understand exactly how the system works. Security is strongest
              when it can be independently verified.
            </p>
          </div>
        </div>

        {/* --- Privacy First - Tagline --- */}
        <div className="mb-20 rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl md:p-10">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white">Privacy First</h3>
            <div className="mt-4 flex flex-wrap justify-center gap-4 text-sm font-medium text-zinc-300">
              <span className="flex items-center gap-2 rounded-full border border-white/10 px-4 py-1.5">
                <EyeOff size={14} className="text-blue-400" /> No Accounts
              </span>
              <span className="flex items-center gap-2 rounded-full border border-white/10 px-4 py-1.5">
                <EyeOff size={14} className="text-blue-400" /> No Tracking
              </span>
              <span className="flex items-center gap-2 rounded-full border border-white/10 px-4 py-1.5">
                <Database size={14} className="text-blue-400" /> No Storage
              </span>
              <span className="flex items-center gap-2 rounded-full border border-white/10 px-4 py-1.5">
                <Server size={14} className="text-blue-400" /> No Syncing
              </span>
              <span className="flex items-center gap-2 rounded-full border border-white/10 px-4 py-1.5">
                <Lock size={14} className="text-blue-400" /> No Vaults
              </span>
            </div>
            <p className="mt-6 text-sm text-zinc-500">
              Just deterministic password generation performed locally on your
              device.
              <br />
              <span className="font-medium text-white">
                Simple by design. Private by default.
              </span>
            </p>
          </div>
        </div>

        {/* --- CTA to Generator --- */}
        <div className="text-center">
          <Link
            href="/generator"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-3.5 font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:scale-105 hover:shadow-blue-500/40"
          >
            Try {SITE.name} now
            <ArrowRight
              size={18}
              className="transition group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}