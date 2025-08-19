import Header from "./components/Header";
import ParallaxFloat from "./components/parallaxFloat";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-black flex flex-col flex-1 min-h-screen">
      {/* <div className="font-sans">
        <Header />
      </div> */}
      <ParallaxFloat />
      {/* <div className="flex-1" /> */}
      {/* <Footer /> */}
    </main>
  );
}
