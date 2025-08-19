import Header from "../components/Header";
import AboutLuke from "./components/AboutLuke";

export default function AboutPage() {
  return (
    <main className="w-full">
        <Header />

        {/* <div className="flex-col items-center justify-center">
          <h1>Luke & Noah Clarke</h1>
        </div> */}
        <AboutLuke />
    </main>
  )
}