"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import HomeHeader from "./components/HomeHeader";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const playVideo = () => {
      const video = videoRef.current;
      if (!video) return;

      video.muted = true;
      video.play().catch(() => {
        // Mobile browsers may delay autoplay until the page is fully active.
      });
    };

    playVideo();

    const handlePageShow = () => playVideo();
    const handleVisibilityChange = () => {
      if (!document.hidden) playVideo();
    };

    window.addEventListener("pageshow", handlePageShow);
    window.addEventListener("focus", playVideo);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.removeEventListener("pageshow", handlePageShow);
      window.removeEventListener("focus", playVideo);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <main className="bg-black min-h-screen">
      <HomeHeader />
      <div className="relative h-screen w-full overflow-hidden">
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover opacity-70"
          src="/videos/homepage-loop.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/20" />

        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-white text-center px-4 gap-8">
          <h1 className="w-6/12 max-sm:w-full max-sm:text-2xl text-4xl leading-relaxed font-light">
            Luke & Noah Clarke are a Northeastern and Mid-Atlantic based
            filmmaking duo.
          </h1>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <p className="text-xl max-sm:text-base z-50 hover:scale-110 transition-transform bg-white text-black rounded-full py-2 px-6 cursor-pointer">
              <Link href="/work">View Work</Link>
            </p>
            <p className="text-xl max-sm:text-base z-50 hover:scale-110 transition-transform bg-transparent text-white border border-white rounded-full py-2 px-6 cursor-pointer">
              <Link href="/about">About the Duo</Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
