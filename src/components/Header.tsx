"use client";

import Link from "next/link";
import { Shield, Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-black/80 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 transition-opacity hover:opacity-80"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg shadow-blue-500/25">
            <Shield size={18} className="text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">
            PasswordForge
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <NavLink href="/how-it-works">How It Works</NavLink>
          <NavLink href="/security">Security</NavLink>
          <NavLink href="https://github.com" external>
            GitHub
          </NavLink>
          <Link
            href="/get-started"
            className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-2 text-sm font-medium text-white shadow-lg shadow-blue-500/25 transition-all hover:scale-105 hover:shadow-blue-500/40"
          >
            Get Started
          </Link>
        </nav>

        {/* Mobile menu button (placeholder) */}
        <button
          className="rounded-lg p-2 text-white/70 hover:bg-white/10 hover:text-white md:hidden"
          aria-label="Toggle menu"
        >
          <Menu size={24} />
        </button>
      </div>
    </header>
  );
}

// Reusable nav link with underline animation
function NavLink({
  href,
  children,
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  const classes =
    "relative text-sm font-medium text-white/70 transition-colors before:absolute before:-bottom-1 before:left-0 before:h-[2px] before:w-0 before:bg-gradient-to-r before:from-blue-400 before:to-purple-400 before:transition-all before:duration-300 hover:text-white hover:before:w-full";

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}