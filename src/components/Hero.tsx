"use client";

import { ArrowRight, ServerOff, Eye } from "lucide-react";
import Link from "next/link";
import { SITE } from "@/constants/site";
import { FaGithub } from "react-icons/fa";
export default function HeroCopy() {
  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] items-center overflow-hidden bg-black px-6 py-20">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl">
        {/* Main Copy */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-zinc-300 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Zero-Knowledge • 100% Client-Side
          </div>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            Passwords engineered for the{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              modern threat landscape
            </span>
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-zinc-400 sm:text-xl">
            Stop recycling weak credentials. {SITE.name} generates 
            <span className="font-medium text-white"> cryptographically secure</span> passwords 
            resistant to brute-force, dictionary, and AI-driven cracking attempts. 
            <span className="block mt-2 text-sm text-zinc-500">
              Every character is forged directly in your browser. We never see, store, or transmit your passwords.
            </span>
          </p>
        </div>

        {/* Feature Grid - Pure Text/Content */}
        <div className="mt-16 grid gap-6 border-t border-white/5 pt-12 sm:grid-cols-3">
          <div className="flex items-start gap-4">
            <div className="rounded-lg border border-white/10 bg-white/5 p-2.5">
              <ServerOff size={18} className="text-blue-400" />
            </div>
            <div>
              <h3 className="font-semibold text-white">Zero Server Contact</h3>
              <p className="mt-1 text-sm text-zinc-500 leading-relaxed">
                The generator runs entirely via WebAssembly in your local memory. No requests, no logs, no tracking.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="rounded-lg border border-white/10 bg-white/5 p-2.5">
              <Eye size={18} className="text-purple-400" />
            </div>
            <div>
              <h3 className="font-semibold text-white">Audited Open Source</h3>
              <p className="mt-1 text-sm text-zinc-500 leading-relaxed">
                Our entropy pool and generation algorithms are publicly available on GitHub for full transparency.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="rounded-lg border border-white/10 bg-white/5 p-2.5">
              <FaGithub size={18} className="text-zinc-400" />
            </div>
            <div>
              <h3 className="font-semibold text-white">Enterprise-Grade Entropy</h3>
              <p className="mt-1 text-sm text-zinc-500 leading-relaxed">
                We leverage the Web Crypto API and local mouse/keystroke entropy to ensure true randomness.
              </p>
            </div>
          </div>
        </div>

        {/* Trust / Call to Action Copy (No Generator) */}
        <div className="mt-12 flex flex-wrap items-center gap-6 border-t border-white/5 pt-8">
          <Link
            href="/how-it-works"
            className="ml-auto flex items-center gap-2 text-sm font-medium text-blue-400 transition hover:text-blue-300"
          >
            Learn how it works
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}