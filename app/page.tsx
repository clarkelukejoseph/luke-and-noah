import Header from "./components/Header";
import ParallaxFloat from "./components/parallaxFloat";

export default function Home() {
  return (
    <main className="bg-black flex flex-col flex-1 min-h-screen">
      {/* <div className="font-sans">
        <Header />
      </div> */}
      <ParallaxFloat />
    </main>
  );
}
