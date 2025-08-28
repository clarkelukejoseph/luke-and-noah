import Link from "next/link";
import Header from "../components/Header";

export default function AboutPage() {
  return (
    <main className="w-full">
        <Header />

        {/* <div className="flex-col items-center justify-center">
          <h1>Luke & Noah Clarke</h1>
        </div> */}
        <div className="w-full px-16 py-12 text-lg max-sm:text-base flex justify-start items-center gap-1">
          <Link href="/about/luke" className="hover:text-amber-400 transition-all duration-70">Luke &</Link> <Link href="/about/noah" className="hover:text-amber-400 transition-all duration-70">Noah</Link> Clarke
        </div>
    </main>
  )
}