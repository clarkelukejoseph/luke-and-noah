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
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <main className="w-full bg-black">
      <Header />

      {/* luke and noah section */}
      <div className="h-screen max-sm:h-auto flex flex-col luke-noah-section relative pt-24 max-sm:pt-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/about/banner.png"
            alt="Background"
            fill
            className="object-cover opacity-25"
            priority
          />
          {/* Black gradient overlay - top */}
          <div className="pointer-events-none absolute left-0 right-0 top-0 h-1/6 bg-gradient-to-b from-black to-transparent"></div>
          {/* Black gradient overlay - bottom */}
          <div className="pointer-events-none absolute left-0 right-0 bottom-0 h-1/3 max-sm:h-1/6 bg-gradient-to-t from-black to-transparent"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 h-full max-sm:h-auto flex flex-col items-end justify-center">
          {/* Text Row */}
          <div className="h-full max-sm:h-auto flex items-center justify-center max-sm:items-start max-sm:mt-0 max-sm:mb-6">
            <div className="w-full px-16 max-sm:px-6 text-2xl max-sm:text-xl gap-1 leading-10">
              <button
                onClick={() => scrollToSection("luke-section")}
                className="hover:text-amber-400 transition-all duration-70 inline text-amber-200 cursor-pointer"
              >
                Luke
              </button>{" "}
              &{" "}
              <button
                onClick={() => scrollToSection("noah-section")}
                className="hover:text-amber-400 transition-all duration-70 inline text-amber-200 cursor-pointer"
              >
                Noah
              </button>{" "}
              Clarke are New York-based filmmakers, videographers and artists.
              Born, raised, and based in Maryland, the brothers also frequently
              work in DC, Baltimore, Pennsylvania & Florida. The two have been
              making videos for as long as they can remember, with their love
              of the craft leading them to a public access television station
              while only in middle school. <br />
              <br />
              Since then, the duo have built a portfolio including award winning
              documentaries, shorts, music videos, commercials and a feature
              length film. No matter the medium, their work skates the
              line between absurd comedy, prescient commentary, stark imagery
              and quiet drama. Since graduating from Florida State University,
              Luke & Noah have continued to hone their skills as directors,
              writers, producers, editors, actors, musicians, photographers and
              more, both independently and together. <br />
              <br />
              Explore their work{" "}
              <Link
                href="/work"
                className="hover:text-amber-400 transition-all duration-70 ease-in-out inline text-amber-200"
              >
                here
              </Link>{" "}
              or contact them{" "}
              <Link
                href="/contact"
                className="hover:text-amber-400 transition-all duration-70 ease-in-out inline text-amber-200"
              >
                here
              </Link>
              .
            </div>
          </div>
        </div>
      </div>

      {/* Luke Section */}
      <div id="luke-section" className="scroll-mt-24 max-sm:scroll-mt-20">
        <LukeSection />
      </div>

      {/* Noah Section */}
      <div id="noah-section" className="scroll-mt-24 max-sm:scroll-mt-20">
        <NoahSection />
      </div>
      <Footer />
    </main>
  );
}
