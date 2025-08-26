import { useEffect } from "react";
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
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
            className="relative bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
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
                duration: 0.5,
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
                transition: { delay: 0.1, duration: 0.4 }
              }}
              exit={{ opacity: 0, y: -20 }}
            >
              <Image
                src={project.image[1] || project.image[0]}
                alt={project.title}
                fill
                className="object-cover rounded-t-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-t-lg" />
            </motion.div>

            {/* Content */}
            <motion.div 
              className="p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                transition: { delay: 0.2, duration: 0.4 }
              }}
              exit={{ opacity: 0, y: 20 }}
            >
              <div className="text-black">
                <motion.h1 
                  className="text-3xl font-medium mb-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ 
                    opacity: 1, 
                    x: 0,
                    transition: { delay: 0.3, duration: 0.4 }
                  }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  {project.title} <span className="text-gray-400 text-2xl">{project.releaseYear}</span>
                </motion.h1>
              </div>
              
              {/* Description */}
              <motion.div 
                className="mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { delay: 0.4, duration: 0.4 }
                }}
                exit={{ opacity: 0, y: 20 }}
              >
                <p className="text-gray-700 leading-relaxed text-base">
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
                    transition: { delay: 0.5, duration: 0.4 }
                  }}
                  exit={{ opacity: 0, y: 20 }}
                >
                  <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg">
                    <p className="text-gray-700 leading-relaxed text-base italic">
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
                  transition: { delay: 0.6, duration: 0.4 }
                }}
                exit={{ opacity: 0, y: 20 }}
              >
                <h2 className="text-xl font-medium mb-3 text-gray-700">Genre</h2>
                <div className="flex flex-wrap gap-2">
                  {project.genre.map((genre, index) => (
                    <motion.span 
                      key={index} 
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ 
                        opacity: 1, 
                        scale: 1,
                        transition: { delay: 0.6 + index * 0.1, duration: 0.3 }
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
                    transition: { delay: 0.7, duration: 0.4 }
                  }}
                  exit={{ opacity: 0, y: 20 }}
                >
                  <h2 className="text-xl font-medium mb-3 text-gray-700">Cast</h2>
                  <div className="flex flex-col gap-2">
                    {project.cast.map((member, index) => (
                      <motion.div 
                        key={index} 
                        className="flex flex-row items-center justify-between text-xl"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ 
                          opacity: 1, 
                          x: 0,
                          transition: { delay: 0.7 + index * 0.1, duration: 0.3 }
                        }}
                        exit={{ opacity: 0, x: -20 }}
                      >
                        <span className="text-gray-400 text-sm">{member.name}</span>
                        {member.character && (
                          <span className="text-gray-700 text-sm"> as {member.character}</span>
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
                    transition: { delay: 0.9, duration: 0.4 }
                  }}
                  exit={{ opacity: 0, y: 20 }}
                >
                  <h2 className="text-xl font-medium mb-3 text-gray-700">Crew</h2>
                  <div className="flex flex-col gap-2">
                    {project.crew.map((member, index) => (
                      <motion.div 
                        key={index} 
                        className="flex flex-row items-center justify-between text-xl"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ 
                          opacity: 1, 
                          x: 0,
                          transition: { delay: 0.9 + index * 0.1, duration: 0.3 }
                        }}
                        exit={{ opacity: 0, x: -20 }}
                      >
                        <span className="text-gray-400 text-sm">{member.name}</span>
                        <span className="text-gray-700 text-sm">  {member.role.join(", ")}</span>
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
                    transition: { delay: 1.0, duration: 0.4 }
                  }}
                  exit={{ opacity: 0, y: 20 }}
                >
                  <h2 className="text-xl font-medium mb-3 text-gray-700">Accolades</h2>
                  <div className="flex flex-wrap gap-2">
                    {project.accolades.map((accolade, index) => (
                      <motion.span 
                        key={index} 
                        className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ 
                          opacity: 1, 
                          scale: 1,
                          transition: { delay: 1.0 + index * 0.1, duration: 0.3 }
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
                    transition: { delay: 1.2, duration: 0.4 }
                  }}
                  exit={{ opacity: 0, y: 20 }}
                >

                  {/* change this to just have youtube, the others are supplementary */}
                  <h2 className="text-xl font-medium mb-3 text-gray-700">
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
                          transition: { delay: 1.3 + index * 0.1, duration: 0.3 }
                        }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Link
                          href={platform.link}
                          target="_blank"
                          className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors duration-200 ease-in-out"
                        >
                          {platform.name}
                        </Link>
                      </motion.div>
                    ))}
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
