import Image from "next/image";

interface WorkCardProps {
  image: string;
  title: string;
  className?: string;
  onClick?: () => void;
  opacity?: number;
}

export default function WorkCard({ image, title, className = "", onClick, opacity = 1 }: WorkCardProps) {
  return (
    <div 
      className={`relative overflow-hidden rounded-sm bg-white hover:shadow-xl transition-all duration-300 cursor-pointer group ${className}`}
      onClick={onClick}
      style={{ opacity }}
    >
      {/* Image */}
      <div className="relative aspect-video w-full">
        <Image
          src={image || "/images/test.jpeg"}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}
