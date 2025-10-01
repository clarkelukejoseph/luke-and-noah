import Link from "next/link";
import HomeHeader from "./components/HomeHeader";

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <HomeHeader />
      <div className="relative h-screen w-full overflow-hidden ">
        <iframe
          className="absolute inset-0 w-full h-full pointer-events-none video-bg opacity-70"
          src="https://www.youtube.com/embed/xxvAzOGf3gs?si=wCLiDUfhNU4-uNsR&autoplay=1&mute=1&playsinline=1&loop=1&playlist=xxvAzOGf3gs&controls=0&rel=0&showinfo=0&modestbranding=1"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        {/* Invisible overlay to prevent any interaction */}
        <div className="absolute inset-0 w-full h-full pointer-events-auto" />

        <div className="absolute inset-0 flex flex-col items-center justify-center z-10  text-white text-center px-4 gap-8">
          <h1 className="w-6/12 max-sm:w-full max-sm:text-2xl text-4xl leading-relaxed font-light">
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
