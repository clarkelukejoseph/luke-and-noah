"use client";

import Link from "next/link";

export default function Header() {

  return (
    <div className="relative sticky top-0 z-50 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.76)_0%,rgba(0,0,0,0.46)_58%,rgba(0,0,0,0.22)_82%,rgba(0,0,0,0.08)_100%)]">
      <div className="pointer-events-none absolute left-0 right-0 top-full h-40 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.08)_0%,rgba(0,0,0,0.045)_32%,rgba(0,0,0,0.018)_66%,transparent_100%)]" />
      <div className="relative w-11/12 mx-auto flex justify-between items-center py-8 max-sm:pb-0 text-xl">
        <h1 className="font-normal tracking-normal max-sm:text-base">
          <Link href="/" className="link-primary">Luke & Noah Clarke</Link>
        </h1>

        {/* Desktop Navigation */}
        <div className="flex gap-4 max-sm:text-base">
          <Link href="/work" className="link-primary">Work</Link>
          <Link href="/about" className="link-primary">About</Link>
          <Link href="/contact" className="link-primary">Contact</Link>
        </div>

      </div>
      
    </div>
  );
}
