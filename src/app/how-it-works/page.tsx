"use client";

import {
  Key,
  Globe,
  Hash,
  ArrowRight,
  RefreshCw,
  EyeOff,
  Code,
  ShieldCheck,
  Lock,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { SITE } from "@/constants/site";

export default function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-black px-6 py-24 md:py-32">
      {/* Background Aura */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-purple-600/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-4xl">
        {/* --- Header --- */}
        <div className="mb-16 text-center">
          <div className="mb-4 flex items-center justify-center gap-3 text-sm uppercase tracking-[0.25em] text-zinc-500">
            <span className="h-px w-6 bg-white/10" />
            How It Works
            <span className="h-px w-6 bg-white/10" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            Generate unique passwords{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              without storing anything
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
            Traditional password managers store your passwords in a vault and
            synchronize them across devices.
            <br />
            <span className="font-medium text-white">{SITE.name} does the opposite.</span>
          </p>
        </div>

        {/* --- Intro Card: The Core Concept --- */}
        <div className="mb-20 rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl md:p-10">
          <div className="flex flex-col items-center gap-6 text-center md:flex-row md:text-left">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg shadow-blue-500/25">
              <Sparkles size={28} className="text-white" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white">
                Deterministic by design
              </h2>
              <p className="text-zinc-400">
                Instead of storing passwords, {SITE.name} generates them
                whenever you need them using a combination of:
              </p>
              <div className="mt-3 flex flex-wrap justify-center gap-4 text-sm font-medium text-white md:justify-start">
                <span className="flex items-center gap-2 rounded-full border border-white/10 px-4 py-1.5">
                  <Key size={14} className="text-blue-400" /> Master Secret
                </span>
                <span className="flex items-center gap-2 rounded-full border border-white/10 px-4 py-1.5">
                  <Globe size={14} className="text-blue-400" /> Website
                </span>
                <span className="flex items-center gap-2 rounded-full border border-white/10 px-4 py-1.5">
                  <Hash size={14} className="text-blue-400" /> Version
                </span>
              </div>
              <p className="mt-4 text-sm text-zinc-500">
                Same inputs → Same output. Recreate your passwords instantly,
                anywhere, without storing a single file.
              </p>
            </div>
          </div>
        </div>

        {/* --- The 3 Steps --- */}
        <div className="mb-20">
          <h3 className="mb-12 text-center text-2xl font-bold text-white">
            Three simple steps to infinite passwords
          </h3>

          <div className="relative grid gap-8 md:grid-cols-3">
            {/* Vertical connecting line (desktop) */}
            <div className="absolute left-1/2 top-12 hidden h-[calc(100%-6rem)] w-px -translate-x-1/2 bg-gradient-to-b from-blue-500/20 via-purple-500/20 to-transparent md:block" />

            {/* Step 1 */}
            <div className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition hover:border-white/20">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-lg font-bold text-blue-400">
                1
              </div>
              <div className="flex items-center gap-3">
                <Key size={18} className="text-blue-400" />
                <h4 className="font-semibold text-white">Choose a Master Secret</h4>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                Your Master Secret is the only thing you need to remember. Think
                of it as the key to all of your passwords.
              </p>
              <div className="mt-4 rounded-xl border border-white/5 bg-black/40 px-4 py-2 font-mono text-sm text-white/70">
                MySuperSecretPhrase2026!
              </div>
              <p className="mt-3 text-xs text-zinc-500">
                ⚡ The stronger your Master Secret, the stronger every password
                generated becomes.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition hover:border-white/20">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 text-lg font-bold text-purple-400">
                2
              </div>
              <div className="flex items-center gap-3">
                <Globe size={18} className="text-purple-400" />
                <h4 className="font-semibold text-white">Enter a Website</h4>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                Choose the website you want a password for. Each service gets a
                completely unique output.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full border border-white/10 px-3 py-1 font-mono text-xs text-zinc-300">
                  github.com
                </span>
                <span className="rounded-full border border-white/10 px-3 py-1 font-mono text-xs text-zinc-300">
                  amazon.com
                </span>
                <span className="rounded-full border border-white/10 px-3 py-1 font-mono text-xs text-zinc-300">
                  linkedin.com
                </span>
              </div>
              <p className="mt-3 text-xs text-zinc-500">
                🔄 Same Master Secret, completely different passwords per site.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition hover:border-white/20">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-lg font-bold text-emerald-400">
                3
              </div>
              <div className="flex items-center gap-3">
                <Hash size={18} className="text-emerald-400" />
                <h4 className="font-semibold text-white">Generate</h4>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                {SITE.name} combines your inputs through modern cryptographic
                algorithms to output a strong, deterministic password.
              </p>
              <div className="mt-4 space-y-2 rounded-xl border border-white/5 bg-black/40 p-3 font-mono text-xs">
                <div className="flex justify-between text-zinc-500">
                  <span>Master Secret:</span>
                  <span className="text-white/70">MySuperSecretPhrase2026!</span>
                </div>
                <div className="flex justify-between text-zinc-500">
                  <span>Website:</span>
                  <span className="text-white/70">github.com</span>
                </div>
                <div className="h-px w-full bg-white/5" />
                <div className="flex justify-between text-emerald-400">
                  <span>Generated Password:</span>
                  <span className="tracking-wide">A7#kL9@xP3!vN8$</span>
                </div>
              </div>
              <p className="mt-3 text-xs text-zinc-500">
                ⏳ Every time you enter the same info, the exact same password
                is generated.
              </p>
            </div>
          </div>
        </div>

        {/* --- Password Rotation --- */}
        <div className="mb-20 rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl md:p-10">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center">
            <div className="rounded-xl border border-white/10 bg-black/40 p-3">
              <RefreshCw size={24} className="text-blue-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white">Password Rotation</h3>
              <p className="text-zinc-400">
                Need to change a password? Simply increase the version number.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-4 rounded-xl border border-white/5 bg-black/40 p-6 md:grid-cols-3">
            <div className="rounded-lg border border-white/5 bg-white/5 p-4 text-center transition hover:border-white/10">
              <span className="text-sm font-medium text-zinc-500">Version</span>
              <div className="mt-1 text-3xl font-bold text-white">1</div>
              <div className="mt-2 font-mono text-sm text-zinc-400">
                → Password A
              </div>
              <div className="mt-1 h-px w-full bg-white/10" />
              <div className="mt-1 text-xs text-zinc-600">Initial password</div>
            </div>
            <div className="relative rounded-lg border border-white/5 bg-white/5 p-4 text-center transition hover:border-white/10">
              <span className="text-sm font-medium text-zinc-500">Version</span>
              <div className="mt-1 text-3xl font-bold text-white">2</div>
              <div className="mt-2 font-mono text-sm text-zinc-400">
                → Password B
              </div>
              <div className="mt-1 h-px w-full bg-white/10" />
              <div className="mt-1 text-xs text-zinc-600">Post-breach reset</div>
            </div>
            <div className="rounded-lg border border-white/5 bg-white/5 p-4 text-center transition hover:border-white/10">
              <span className="text-sm font-medium text-zinc-500">Version</span>
              <div className="mt-1 text-3xl font-bold text-white">3</div>
              <div className="mt-2 font-mono text-sm text-zinc-400">
                → Password C
              </div>
              <div className="mt-1 h-px w-full bg-white/10" />
              <div className="mt-1 text-xs text-zinc-600">Regular rotation</div>
            </div>
          </div>
          <p className="mt-4 text-center text-sm text-zinc-500">
            Generate entirely new passwords without changing your Master Secret.
          </p>
        </div>

        {/* --- Nothing is Stored (Security Grid) --- */}
        <div className="mb-20">
          <div className="mb-8 flex items-center gap-3">
            <EyeOff size={20} className="text-zinc-400" />
            <h3 className="text-xl font-bold text-white">Nothing Is Stored</h3>
          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
            {[
              "Passwords",
              "Master Secrets",
              "User Accounts",
              "Databases",
              "Backups",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center justify-center gap-2 rounded-xl border border-white/5 bg-white/[0.02] p-4 text-center text-sm font-medium text-zinc-500 backdrop-blur-sm transition hover:border-red-500/20 hover:text-red-400"
              >
                <span className="text-red-500/50">✗</span> {item}
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-xl border border-emerald-500/10 bg-emerald-500/5 p-5 text-center text-sm text-emerald-300/70">
            Everything happens locally inside your browser.
            <span className="block text-xs text-emerald-500/40">
              Once you close the tab, no information remains.
            </span>
          </div>
        </div>

        {/* --- Open Source --- */}
        <div className="mb-20 rounded-3xl border border-white/10 bg-gradient-to-br from-blue-500/5 to-purple-500/5 p-8 backdrop-blur-xl md:p-10">
          <div className="flex flex-col items-center text-center md:flex-row md:text-left">
            <div className="mb-6 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-black/40 md:mb-0 md:mr-8">
              <Code size={28} className="text-blue-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Fully Open Source</h3>
              <p className="max-w-2xl text-zinc-400">
                Trust should never require faith. Every line of code powering
                {SITE.name} is publicly available.
              </p>
              <div className="mt-4 flex flex-wrap gap-4">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-1.5 text-xs text-zinc-300">
                  <ShieldCheck size={14} className="text-emerald-400" /> Audit
                  the source
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-1.5 text-xs text-zinc-300">
                  <Lock size={14} className="text-emerald-400" /> Verify
                  implementations
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-1.5 text-xs text-zinc-300">
                  <span className="text-emerald-400">⚡</span> Run entirely
                  offline
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* --- Closing Tagline --- */}
        <div className="text-center">
          <div className="inline-block rounded-full border border-white/10 bg-white/5 px-6 py-3 backdrop-blur-sm">
            <p className="text-sm font-medium tracking-wide text-zinc-300">
              <span className="text-blue-400">Simple.</span>{" "}
              <span className="text-purple-400">Private.</span>{" "}
              <span className="text-emerald-400">Deterministic.</span>
            </p>
          </div>
          <div className="mt-8 flex flex-col items-center justify-center gap-2 text-2xl font-bold tracking-tight text-white md:text-3xl">
            <span>One Secret.</span>
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Unlimited Passwords.
            </span>
            <span className="text-lg font-normal text-zinc-500">Zero Storage.</span>
          </div>

          {/* CTA to Generator */}
          <Link
            href="/generator"
            className="group mt-10 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-3.5 font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:scale-105 hover:shadow-blue-500/40"
          >
            Try it now
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