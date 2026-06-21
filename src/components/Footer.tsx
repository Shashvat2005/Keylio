import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">

      <div className="mx-auto max-w-6xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-2">

          {/* Brand */}
          <div>

            <div className="mb-4 flex items-center gap-2">

              <span className="text-zinc-500">
                ◇
              </span>

              <span className="font-semibold tracking-wide text-white">
                KEYLIO
              </span>

            </div>

            <p className="max-w-sm leading-7 text-zinc-500">
              Generate secure passwords from a single secret.
              Private by design. Open source. Runs entirely
              in your browser.
            </p>

          </div>

          {/* Links */}
          <div className="flex flex-col items-start gap-4 md:items-end">

            <Link
              href="/how-it-works"
              className="text-zinc-500 transition hover:text-white"
            >
              How It Works
            </Link>

            <Link
              href="/security"
              className="text-zinc-500 transition hover:text-white"
            >
              Security
            </Link>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 transition hover:text-white"
            >
              GitHub
            </a>

          </div>

        </div>

        {/* Bottom Row */}

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-zinc-600 md:flex-row">

          <span>
            © {new Date().getFullYear()} Keylio
          </span>

          <span>
            Built by Shashvat Garg
          </span>

        </div>

      </div>

    </footer>
  );
}