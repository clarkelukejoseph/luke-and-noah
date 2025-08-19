import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-full bg-amber-300 text-amber-800 p-16">
      <div className="flex flex-row justify-start items-start gap-16">
        <div className="flex flex-col gap-2">
          <Link href="/" className="text-4xl font-bold">
            Luke & Noah Clarke
          </Link>
          <p className="text-xl font-normal">Creating films since 2019.</p>
        </div>
        <div className="flex flex-col gap-2 text-base">
          <Link
            href="https://www.youtube.com/@lukennoahclarke"
            className=" font-normal"
          >
            Youtube
          </Link>
          <Link
            href="https://www.instagram.com/lukennoahclarke/"
            className="font-normal"
          >
            Instagram
          </Link>
          <Link
            href="https://vimeo.com/lukeandnoahclarke"
            className="font-normal"
          >
            Vimeo
          </Link>
          <Link
            href="https://www.tiktok.com/@lukeandnoahclarke?lang=en"
            className="font-normal"
          >
            Tiktok
          </Link>
        </div>
      </div>
    </div>
  );
}
