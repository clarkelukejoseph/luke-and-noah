import Link from "next/link";
import Header from "../components/Header";

export default function AboutPage() {
  return (
    <main className="w-full">
        <Header />
        <div className="w-full px-16 py-12 text-xl max-sm:text-base gap-1">
           

          <Link href="/about/luke" className="hover:text-amber-400 transition-all duration-70 inline">Luke</Link> & <Link href="/about/noah" className="hover:text-amber-400 transition-all duration-70 inline">Noah</Link> Clarke are Maryland-based filmmakers, videographers and artists. Born, raised, and based in the DC area, the brothers also frequently work in Baltimore, Pennsylvania, Florida, California and the Tri State area. The two have been making videos for as long as they can remember, with their love of the craft leading them to a public access television station while only in middle school. Since then, the duo have built a portfolio including award winning documentaries, short films, music videos, commercials and a feature length movie. No matter the medium, their work skates the line between absurd comedy, prescient commentary, stark imagery and quiet drama. Since graduating from Florida State University, Luke & Noah have continued to hone their skills as directors, writers, producers, editors, actors, musicians, photographers and more, both independently and together. Explore their work <Link href="/work">here</Link> or contact them <Link href="/contact">here</Link>.
        </div>
    </main>
  )
}