import Link from "next/link";
import Header from "./components/Header";

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <div className="relative h-screen w-full overflow-hidden">
        <iframe
          className="absolute-inset w-full h-full pointer-events-none video-bg"
          src="https://www.youtube.com/embed/xxvAzOGf3gs?si=wCLiDUfhNU4-uNsR&autoplay=1&mute=1&playsinline=1"
          title="YouTube video player"
          
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"

          allowFullScreen
        ></iframe>
        {/* Invisible overlay to prevent any interaction */}
        <div className="absolute-inset w-full h-full pointer-events-auto" />

        <div className="absolute-inset flex flex-col items-center justify-center z-10  text-white text-center px-4 text-4xl gap-8">
          <h1 className="w-6/12 max-sm:w-full max-sm:text-2xl leading-relaxed font-light">
          Luke and Noah Clarke are a Northeastern based filmmaking duo.
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
