import Link from "next/link";
import Header from "./components/Header";

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <div className="relative h-screen w-full overflow-hidden">
          <iframe
            src="https://www.youtube.com/embed/PhzWmwT-Vns?si=PZL3bYqdff1B-7xB&autoplay=1&mute=1&controls=0&playsinline=1&loop=1&rel=0&modestbranding=1&enablejsapi=1&iv_load_policy=3&showinfo=0&playlist=PhzWmwT-Vns&fs=0&cc_load_policy=0&disablekb=1"
            className="absolute inset-0 w-full h-full pointer-events-none video-bg"
            title="Luke and Noah Highlight Reel"
            style={{ 
              border: 'none',
              width: '100vw',
              height: '100vh',
              objectFit: 'cover',
              opacity: 0.7,
              transform: 'scale(1.2)',
              transformOrigin: 'center center',
            }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        {/* Invisible overlay to prevent any interaction */}
        <div className="absolute inset-0 w-full h-full pointer-events-auto" />
        
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10  text-white text-center px-4 text-4xl gap-8">
          <h1 className="w-6/12 max-sm:w-full max-sm:text-2xl leading-relaxed">Luke and Noah are a filmmaking and artist duo based in the Maryland area.</h1>
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
