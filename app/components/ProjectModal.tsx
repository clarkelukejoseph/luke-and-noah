import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import { WorkProject } from "../data/projects";
import Link from "next/link";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: WorkProject | null;
}

export default function ProjectModal({
  isOpen,
  onClose,
  project,
}: ProjectModalProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (!isOpen || !project?.gifLink) return;
    const video = videoRef.current;
    if (!video) return;
    // Ensure muted for Chromium autoplay policy
    video.muted = true;
    const tryPlay = async () => {
      try {
        await video.play();
      } catch (_) {
        // no-op: autoplay may still be blocked in extreme cases
      }
    };
    // If metadata not loaded yet, wait for it
    if (video.readyState < 2) {
      const onLoaded = () => {
        tryPlay();
        video.removeEventListener("loadeddata", onLoaded);
      };
      video.addEventListener("loadeddata", onLoaded);
    } else {
      tryPlay();
    }
  }, [isOpen, project?.gifLink]);
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && project && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/80"
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ 
              opacity: 1, 
              backdropFilter: "blur(8px)",
              transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }
            }}
            exit={{ 
              opacity: 0, 
              backdropFilter: "blur(0px)",
              transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }
            }}
            onClick={onClose}
          />

          {/* Modal Content */}
          <motion.div
            className="relative bg-black/100 rounded-lg max-w-2xl w-full max-sm:w-11/12 max-h-[90vh] overflow-y-auto shadow-2xl"
            initial={{ 
              opacity: 0,
              scale: 0.8,
              y: 50,
              rotateX: -15
            }}
            animate={{ 
              opacity: 1,
              scale: 1,
              y: 0,
              rotateX: 0,
              transition: { 
                duration: 0.3,
                ease: [0.25, 0.46, 0.45, 0.94],
                type: "spring",
                stiffness: 300,
                damping: 30
              }
            }}
            exit={{ 
              opacity: 0,
              scale: 0.8,
              y: 50,
              rotateX: -15,
              transition: { 
                duration: 0.3,
                ease: [0.25, 0.46, 0.45, 0.94]
              }
            }}
            style={{
              transformStyle: "preserve-3d",
              perspective: "1000px"
            }}
          >
            {/* Close Button */}
            <motion.button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 bg-black/20 hover:bg-black/40 rounded-full transition-colors backdrop-blur-sm"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                transition: { delay: 0.2, duration: 0.3 }
              }}
              exit={{ opacity: 0, scale: 0.8 }}
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </motion.button>

            {/* Header Image */}
            <motion.div 
              className="relative h-64 w-full"
              initial={{ opacity: 0, y: -20 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                transition: { delay: 0.1, duration: 0.3 }
              }}
              exit={{ opacity: 0, y: -20 }}
            >
              {project.gifLink ? (
                <video
                  key={project.gifLink}
                  ref={videoRef}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className="w-full h-full object-cover rounded-t-lg"
                  poster={project.image[0]}
                  src={project.gifLink}
                />
              ) : (
                <Image
                  src={project.image[0]}
                  alt={project.title}
                  fill
                  className="object-cover rounded-t-lg"
                  priority
                />
              )}
              <div className="absolute-inset overlay-gradient-top rounded-t-lg pointer-events-none" />
            </motion.div>

            {/* Content */}
            <motion.div 
              className="p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                transition: { delay: 0.2, duration: 0.3 }
              }}
              exit={{ opacity: 0, y: 20 }}
            >
              <div className="text-white">
                <motion.h1 
                  className="text-3xl font-medium mb-2 max-sm:text-2xl"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ 
                    opacity: 1, 
                    x: 0,
                    transition: { delay: 0.3, duration: 0.3 }
                  }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  {project.title} <span className="text-gray-400 text-2xl max-sm:text-xl">{project.releaseYear}</span>
                </motion.h1>
              </div>
              
              {/* Description */}
              <motion.div 
                className="mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { delay: 0.4, duration: 0.3 }
                }}
                exit={{ opacity: 0, y: 20 }}
              >
                <p className="text-gray-300 leading-relaxed text-base max-sm:text-sm">
                  {project.description}
                </p>
              </motion.div>

              {/* Quote */}
              {project.quotes && project.quotes.length > 0 && (
                <motion.div 
                  className="mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    transition: { delay: 0.5, duration: 0.3 }
                  }}
                  exit={{ opacity: 0, y: 20 }}
                >
                  <div className="bg-amber-900/30 border-l-4 border-amber-400 p-4 rounded-r-lg">
                    <p className="text-gray-200 leading-relaxed text-base max-sm:text-sm italic">
                      "{project.quotes[0]}"
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Genre */}
              <motion.div 
                className="mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { delay: 0.6, duration: 0.3 }
                }}
                exit={{ opacity: 0, y: 20 }}
              >
                <h2 className="section-title">Genre</h2>
                <div className="flex flex-wrap gap-2">
                  {project.genre.map((genre, index) => (
                    <motion.span 
                      key={index} 
                      className="chip-gray"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ 
                        opacity: 1, 
                        scale: 1,
                        transition: { delay: 0.6 + index * 0.1, duration: 0.2 }
                      }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {genre}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Cast */}
              {project.cast.length > 0 && (
                <motion.div 
                  className="mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    transition: { delay: 0.7, duration: 0.3 }
                  }}
                  exit={{ opacity: 0, y: 20 }}
                >
                <h2 className="section-title">Cast</h2>
                  <div className="flex flex-col gap-2">
                    {project.cast.map((member, index) => (
                      <motion.div 
                        key={index} 
                        className="flex flex-row items-center justify-between text-xl"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ 
                          opacity: 1, 
                          x: 0,
                          transition: { delay: 0.7 + index * 0.1, duration: 0.2 }
                        }}
                        exit={{ opacity: 0, x: -20 }}
                      >
                        <span className="text-gray-400 text-sm">{member.name}</span>
                        {member.character && (
                          <span className="text-gray-300 text-sm"> as {member.character}</span>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
              
              {/* Crew */}
              {project.crew.length > 0 && (
                <motion.div 
                  className="mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    transition: { delay: 0.9, duration: 0.3 }
                  }}
                  exit={{ opacity: 0, y: 20 }}
                >
                <h2 className="section-title">Crew</h2>
                  <div className="flex flex-col gap-2">
                    {project.crew.map((member, index) => (
                      <motion.div 
                        key={index} 
                        className="flex flex-row items-center justify-between text-xl"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ 
                          opacity: 1, 
                          x: 0,
                          transition: { delay: 0.9 + index * 0.1, duration: 0.2 }
                        }}
                        exit={{ opacity: 0, x: -20 }}
                      >
                        <span className="text-gray-400 text-sm">{member.name}</span>
                        <span className="text-gray-300 text-sm">  {member.role.join(", ")}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Accolades */}
              {project.accolades && project.accolades.length > 0 && (
                <motion.div 
                  className="mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    transition: { delay: 1.0, duration: 0.3 }
                  }}
                  exit={{ opacity: 0, y: 20 }}
                >
                <h2 className="section-title">Accolades</h2>
                  <div className="flex flex-wrap gap-2">
                    {project.accolades.map((accolade, index) => (
                      <motion.span 
                        key={index} 
                      className="chip-amber"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ 
                          opacity: 1, 
                          scale: 1,
                              transition: { delay: 1.0 + index * 0.1, duration: 0.2 }
                        }}
                      >
                        {accolade}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Streaming Links */}
              {project.links.length > 0 && (
                <motion.div 
                  className="mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    transition: { delay: 1.2, duration: 0.3 }
                  }}
                  exit={{ opacity: 0, y: 20 }}
                >

                  {/* change this to just have youtube, the others are supplementary */}
                <h2 className="section-title mb-2">
                    Project Links:
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {project.links.map((platform, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ 
                          opacity: 1, 
                          scale: 1,
                          transition: { delay: 1.3 + index * 0.1, duration: 0.2 }
                        }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Link
                          href={platform.link}
                          target="_blank"
                          className="px-3 py-1 bg-gray-700 text-gray-200 rounded-full text-sm font-medium hover:bg-gray-600 transition-colors duration-70 ease-in-out"
                        >
                          {platform.name}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Photography strip - only for Photography grouped projects */}
              {project.groupings?.some(g => g.group.includes("Photography")) && (
                <motion.div 
                  className="mt-8"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0, transition: { duration: 0.25 } }}
                  exit={{ opacity: 0, y: 10 }}
                >
                  <h3 className="text-lg font-medium mb-3 text-gray-200 max-sm:text-base">Photos</h3>
                  <div className="relative">
                    <div
                      className="flex gap-3 overflow-x-auto scrollbar-hide px-1 py-2"
                      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                      onWheel={(e) => {
                        e.preventDefault();
                        const container = e.currentTarget as HTMLDivElement;
                        container.scrollLeft += e.deltaY;
                      }}
                      onMouseEnter={() => {
                        if (typeof document !== 'undefined') document.body.style.overflow = 'hidden';
                      }}
                      onMouseLeave={() => {
                        if (typeof document !== 'undefined') document.body.style.overflow = '';
                      }}
                      onTouchStart={() => {
                        if (typeof document !== 'undefined') document.body.style.overflow = 'hidden';
                      }}
                      onTouchEnd={() => {
                        if (typeof document !== 'undefined') document.body.style.overflow = '';
                      }}
                    >
                      {(project.modalPhotos ?? []).map((src, idx) => (
                        <div key={idx} className="relative h-32 w-48 min-w-48 max-sm:h-28 max-sm:w-44 overflow-hidden bg-gray-800/40">
                          <Image src={src} alt={`photo ${idx + 1}`} fill className="object-cover" />
                        </div>
                      ))}
                    </div>
                    {/* Edge gradients */}
                    <div className="pointer-events-none absolute top-0 left-0 w-8 h-full bg-gradient-to-r from-black/80 to-transparent" />
                    <div className="pointer-events-none absolute top-0 right-0 w-8 h-full bg-gradient-to-l from-black/80 to-transparent" />
                  </div>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
