import Link from "next/link";

export default function Header() {
  return (
    <div className="backdrop-blur-[2px] bg-gradient-to-b from-black/50 via-black/20 to-transparent">
      <div className="w-11/12 mx-auto flex justify-between items-center py-8 text-xl">
        <h1 className="font-normal tracking-normal text-white hover:text-amber-200 ease-in-out duration-200 transition-colors"><Link href="/">Luke & Noah Clarke</Link></h1>

        <div className="flex gap-4">
          <Link href="/work" className="text-white hover:text-amber-200 ease-in-out duration-200 transition-colors">Work</Link>
          <Link href="/about" className="text-white hover:text-amber-200 ease-in-out duration-200 transition-colors">About</Link>
          <Link href="/contact" className="text-white hover:text-amber-200 ease-in-out duration-200 transition-colors">Contact</Link>
        </div>
      </div>
    </div>
  );
}