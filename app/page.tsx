import Link from "next/link";
import HomeHeader from "./components/HomeHeader";
import { useEffect, useRef } from "react";

export default function Home() {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  useEffect(() => {
    const tryPlay = () => {
      const iframe = iframeRef.current;
      if (!iframe || !iframe.contentWindow) return;
      // YouTube IFrame API command via postMessage
      iframe.contentWindow.postMessage(
        JSON.stringify({ event: "command", func: "playVideo", args: [] }),
        "*"
      );
    };

    // Attempt immediately after mount
    const immediate = setTimeout(tryPlay, 100);

    // Retry on load event
    const onLoad = () => {
      setTimeout(tryPlay, 100);
    };
    iframeRef.current?.addEventListener("load", onLoad);

    // Fallback: trigger on first user gesture
    const onFirstGesture = () => {
      tryPlay();
      window.removeEventListener("click", onFirstGesture);
      window.removeEventListener("touchstart", onFirstGesture);
    };
    window.addEventListener("click", onFirstGesture, { once: true });
    window.addEventListener("touchstart", onFirstGesture, { once: true });

    // Retry when tab becomes visible
    const onVisibility = () => {
      if (!document.hidden) tryPlay();
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      clearTimeout(immediate);
      iframeRef.current?.removeEventListener("load", onLoad);
      window.removeEventListener("click", onFirstGesture);
      window.removeEventListener("touchstart", onFirstGesture);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);
  return (
    <main className="bg-black min-h-screen">
      <HomeHeader />
      <div className="relative h-screen w-full overflow-hidden ">
        <iframe
          ref={iframeRef}
          className="absolute inset-0 w-full h-full pointer-events-none video-bg opacity-70"
          src="https://www.youtube.com/embed/xxvAzOGf3gs?si=wCLiDUfhNU4-uNsR&autoplay=1&mute=1&playsinline=1&loop=1&playlist=xxvAzOGf3gs&controls=0&rel=0&showinfo=0&modestbranding=1&enablejsapi=1"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        {/* Invisible overlay to prevent any interaction */}
        <div className="absolute inset-0 w-full h-full pointer-events-auto" />

        <div className="absolute inset-0 flex flex-col items-center justify-center z-10  text-white text-center px-4 gap-8">
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
