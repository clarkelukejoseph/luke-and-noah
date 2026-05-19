"use client";

import Link from "next/link";

export default function Header() {

  return (
    <div className="relative sticky top-0 z-50 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.72)_0%,rgba(0,0,0,0.38)_55%,rgba(0,0,0,0.14)_82%,transparent_100%)] backdrop-blur-[2px]">
      <div className="pointer-events-none absolute left-0 right-0 top-full h-24 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.14)_0%,rgba(0,0,0,0.06)_45%,transparent_100%)]" />
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
