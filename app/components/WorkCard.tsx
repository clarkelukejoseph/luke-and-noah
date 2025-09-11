import Image from "next/image";

interface WorkCardProps {
  image: string;
  title: string;
  className?: string;
  onClick?: () => void;
  opacity?: number;
  comingSoon?: boolean;
}

export default function WorkCard({ image, title, className = "", onClick, opacity = 1, comingSoon = false }: WorkCardProps) {
  return (
    <div 
      className={`relative overflow-hidden rounded-sm bg-white hover:shadow-xl transition-all duration-300 cursor-pointer group ${className}`}
      onClick={onClick}
      style={{ opacity }}
    >
      {/* Image */}
      <div className="relative aspect-video w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
        {comingSoon && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="px-4 py-2 bg-black/50 border border-white/60 rounded-full backdrop-blur-sm">
              <span className="text-white text-lg tracking-wider uppercase">Coming Soon</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
