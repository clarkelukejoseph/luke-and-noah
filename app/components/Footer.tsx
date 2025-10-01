import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-gradient-to-t from-black/50 via-black/20 to-transparent">
      <div className="w-11/12 mx-auto flex justify-between items-center py-8 text-xl max-sm:text-base">
        <div className="flex gap-4">
          <Link href="https://www.youtube.com/@lukennoahclarke" className="link-primary">YouTube</Link>
          <Link href="https://www.instagram.com/lukennoahclarke/" className="link-primary">Instagram</Link>
        </div>
      </div>
    </div>
  );
}
