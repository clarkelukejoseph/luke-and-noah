import Image from "next/image";

interface WorkCardProps {
  image: string;
  title: string;
  className?: string;
  onClick?: () => void;
}

export default function WorkCard({ image, title, className = "", onClick }: WorkCardProps) {
  return (
    <div 
      className={`relative overflow-hidden rounded-sm bg-white hover:shadow-xl transition-all duration-300 cursor-pointer group ${className}`}
      onClick={onClick}
    >
      {/* Image */}
      <div className="relative aspect-video w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
        {/* Overlay */}
        {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" /> */}
      </div>
      
      {/* Title */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 line-clamp-2 group-hover:text-amber-600 transition-colors duration-300">
          {title}
        </h3>
      </div>
    </div>
  );
}
