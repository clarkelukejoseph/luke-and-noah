import Header from "./components/Header";

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <div className="relative h-screen w-full">
        <div className="absolute inset-0 w-full h-full">
          <iframe
            src="https://www.youtube.com/embed/PhzWmwT-Vns?si=PZL3bYqdff1B-7xB&autoplay=1&mute=1&controls=0&playsinline=1&loop=1&rel=0&modestbranding=1&enablejsapi=1&iv_load_policy=3&showinfo=0&playlist=PhzWmwT-Vns&fs=0&cc_load_policy=0&disablekb=1"
            className="absolute inset-0 w-full h-full pointer-events-none object-cover"
            title="Luke and Noah Highlight Reel"
            style={{ 
              border: 'none',
              width: '100vw',
              height: '100vh',
              objectFit: 'cover'
            }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
          {/* Invisible overlay to prevent any interaction */}
          <div className="absolute inset-0 w-full h-full pointer-events-auto" />
        </div>
        
        <div className="absolute top-0 left-0 right-0 z-10 font-sans">
          <Header />
        </div>
      </div>
    </main>
  );
}
