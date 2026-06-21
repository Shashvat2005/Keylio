import Link from "next/link";
import { Shield } from "lucide-react";
import { SITE } from "@/constants/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-6xl px-6 py-16">
        {/* Top Grid */}
        <div className="grid gap-12 md:grid-cols-2">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600/15">
                <Shield size={16} className="text-blue-400" />
              </div>
              <span className="font-bold tracking-tight text-white">
                {SITE.name}
              </span>
            </div>
            <p className="max-w-sm leading-relaxed text-zinc-500">
              One secret. Unlimited passwords. Zero storage.
              <br />
              Private by design, fully open source, and runs entirely
              in your browser.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col items-start gap-4 md:items-end">
            <Link
              href="/"
              className="text-sm text-zinc-500 transition hover:text-white"
            >
              Generator
            </Link>
            <Link
              href="/how-it-works"
              className="text-sm text-zinc-500 transition hover:text-white"
            >
              How It Works
            </Link>
            <Link
              href="/security"
              className="text-sm text-zinc-500 transition hover:text-white"
            >
              Security
            </Link>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-zinc-500 transition hover:text-white"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Bottom Row – Copyright & Credits */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-zinc-600 md:flex-row">
          <span>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </span>
          <span>Built by Shashvat Garg</span>
        </div>

        {/* ADDED: Extra legal/disclaimer line at the very bottom */}
        <div className="mt-4 text-center text-xs text-zinc-600/60">
          All password generation occurs locally in your browser.
          No data is ever stored, transmitted, or logged.
        </div>
      </div>
    </footer>
  );
}