import Link from "next/link";
import Image from "next/image";

interface ThumbnailCardProps {
  href: string;
  title: string;
  subtitle: string;
  image?: string;
  className?: string;
}

export default function ThumbnailCard({ href, title, subtitle, image, className = "" }: ThumbnailCardProps) {
  return (
    <Link href={href} className={`block h-full group ${className}`}>
      <div className="relative h-full overflow-hidden transition-all duration-300 hover:scale-[1.02]">
        {/* background image */}
        {image && (
          <div className="absolute-inset">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        )}
        
        {/* dark overlay */}
        <div className={`absolute-inset ${image ? 'bg-black/60' : 'bg-gradient-to-br from-gray-800/40 to-gray-900/40'}`}></div>
        
        {/* backdrop blur */}
        <div className="absolute-inset backdrop-blur-sm"></div>
        
        {/* content */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center p-12 text-center">
          <h2 className="text-4xl font-light text-white mb-4">{title}</h2>
          <p className="text-gray-300 text-lg">{subtitle}</p>
        </div>
      </div>
    </Link>
  );
}
