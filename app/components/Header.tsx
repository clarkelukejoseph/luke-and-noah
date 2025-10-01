"use client";

import Link from "next/link";

export default function Header() {

  return (
    <div className="backdrop-blur-[2px] bg-gradient-to-b from-black/50 via-black/20 to-transparent sticky top-0 z-50">
      <div className="w-11/12 mx-auto flex justify-between items-center py-8 max-sm:pb-0 text-xl">
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