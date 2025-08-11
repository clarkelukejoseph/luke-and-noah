import Link from "next/link";

export default function Header() {
  return (
    <div className="flex fixed top-0 left-0 right-0 justify-between items-center p-8 text-xl z-10000 bg-gradient-to-b from-black/50  via-black/25 via-black/10 via-black/5 to-transparent">
      <h1 className="font-normal tracking-wide"><Link href="/">Luke and Noah Clarke</Link></h1>

      <div className="flex gap-4">
        <Link href="/work">Work</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </div>
  );
}