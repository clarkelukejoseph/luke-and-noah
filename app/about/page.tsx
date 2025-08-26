import Link from "next/link";
import Header from "../components/Header";

export default function AboutPage() {
  return (
    <main className="w-full">
        <Header />

        {/* <div className="flex-col items-center justify-center">
          <h1>Luke & Noah Clarke</h1>
        </div> */}
        <div className="w-10/12 px-16 py-12">
          Learn more about <Link href="/about/luke" className="hover:text-amber-400 transition-all duration-200">Luke</Link> and <Link href="/about/noah" className="hover:text-amber-400 transition-all duration-200">Noah</Link> Clarke
        </div>
    </main>
  )
}