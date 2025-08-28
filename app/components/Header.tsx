"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="backdrop-blur-[2px] bg-gradient-to-b from-black/50 via-black/20 to-transparent relative">
      <div className="w-11/12 mx-auto flex justify-between items-center py-8 max-sm:pb-0 text-xl">
        <h1 className="font-normal tracking-normal text-white hover:text-amber-200 ease-in-out duration-70 transition-colors max-sm:text-base">
          <Link href="/" onClick={closeMenu}>Luke & Noah Clarke</Link>
        </h1>

        {/* Desktop Navigation */}
        <div className="flex gap-4 max-sm:text-base">
          <Link href="/work" className="text-white hover:text-amber-200 ease-in-out duration-70 transition-colors">Work</Link>
          <Link href="/about" className="text-white hover:text-amber-200 ease-in-out duration-70 transition-colors">About</Link>
          <Link href="/contact" className="text-white hover:text-amber-200 ease-in-out duration-70 transition-colors">Contact</Link>
        </div>

      </div>
      
    </div>
  );
}