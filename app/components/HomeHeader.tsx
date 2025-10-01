"use client";

import Link from "next/link";

export default function HomeHeader() {
  return (
    <div className="absolute top-0 left-0 right-0 z-50">
      <div className="w-11/12 mx-auto flex justify-between items-center py-8 max-sm:pb-0 text-xl">
        <h1 className="font-normal tracking-normal max-sm:text-base">
          <Link href="/" className="text-white hover:text-gray-300 transition-colors">Luke & Noah Clarke</Link>
        </h1>

        {/* Desktop Navigation */}
        <div className="flex gap-4 max-sm:text-base">
          <Link href="/work" className="text-white hover:text-gray-300 transition-colors">Work</Link>
          <Link href="/about" className="text-white hover:text-gray-300 transition-colors">About</Link>
          <Link href="/contact" className="text-white hover:text-gray-300 transition-colors">Contact</Link>
        </div>
      </div>
    </div>
  );
}
