"use client";

import Link from "next/link";
import Image from "next/image";
import Header from "../components/Header";
import LukeSection from "./luke/page";
import NoahSection from "./noah/page";
import Footer from "../components/Footer";

export default function AboutPage() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <main className="w-full">
      <Header />

      {/* luke and noah section */}
      <div className="h-screen flex flex-col luke-noah-section gap-18">
        {/* Banner Image Row */}
        <div className="relative w-full px-16 max-sm:px-6 h-6/12 overflow-hidden">
          <Image
            src="/about/banner.jpg"
            alt="About banner"
            fill
            className="object-cover"
            priority
          />
        </div>
        {/* Text Row */}
        <div className="h-6/12 flex items-end">
          <div className="w-full px-16 max-sm:px-6 pb-32 max-sm:pb-8 text-2xl max-sm:text-base gap-1 leading-10">
        <button
          onClick={() => scrollToSection('luke-section')}
          className="hover:text-amber-400 transition-all duration-70 inline text-amber-200 cursor-pointer"
        >
          Luke
        </button>{" "}
        &{" "}
        <button
          onClick={() => scrollToSection('noah-section')}
          className="hover:text-amber-400 transition-all duration-70 inline text-amber-200 cursor-pointer"
        >
          Noah
        </button>{" "}
        Clarke are Maryland-based filmmakers, videographers and artists. Born,
        raised, and based in the DC area, the brothers also frequently work in
        Baltimore, Pennsylvania, Florida, California and the Tri State area. The
        two have been making videos for as long as they can remember, with their
        love of the craft leading them to a public access television station
        while only in middle school. <br/><br/>Since then, the duo have built a portfolio
        including award winning documentaries, short films, music videos,
        commercials and a feature length movie. No matter the medium, their work
        skates the line between absurd comedy, prescient commentary, stark
        imagery and quiet drama. Since graduating from Florida State University,
        Luke & Noah have continued to hone their skills as directors, writers,
        producers, editors, actors, musicians, photographers and more, both
        independently and together. <br/><br/>Explore their work{" "}
        <Link href="/work" className="hover:text-amber-400 transition-all duration-70 ease-in-out inline text-amber-200">here</Link> or contact them{" "}
        <Link href="/contact" className="hover:text-amber-400 transition-all duration-70 ease-in-out inline text-amber-200">here</Link>.
          </div>
        </div>
      </div>

      {/* Luke Section */}
      <div id="luke-section">
        <LukeSection />
      </div>

      {/* Noah Section */}
      <div id="noah-section">
        <NoahSection />
      </div>
      <Footer />
    </main>
  );
}
