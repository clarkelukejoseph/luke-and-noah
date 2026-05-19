"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import WorkCard from "./WorkCard";

interface AnimatedWorkCardProps {
  image: string;
  title: string;
  onClick?: () => void;
  opacity?: number;
  comingSoon?: boolean;
  index: number;
}

export default function AnimatedWorkCard({
  image,
  title,
  onClick,
  opacity = 1,
  comingSoon = false,
  index,
}: AnimatedWorkCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "center center", "end start"],
  });

  const rawScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.94, 1, 0.94]);
  const rawOpacity = useTransform(scrollYProgress, [0, 0.45, 0.55, 1], [0.58, 1, 1, 0.58]);
  const scale = useSpring(rawScale, { stiffness: 120, damping: 26, mass: 0.35 });
  const scrollOpacity = useSpring(rawOpacity, { stiffness: 120, damping: 28, mass: 0.35 });
  const entranceDelay = Math.min(index * 0.035, 0.5);

  return (
    <motion.div
      ref={cardRef}
      initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.92 }}
      animate={prefersReducedMotion ? undefined : { opacity: 1, scale: 1 }}
      transition={{
        delay: entranceDelay,
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <motion.div
        style={prefersReducedMotion ? undefined : { opacity: scrollOpacity, scale }}
        className="will-change-transform"
      >
        <WorkCard
          image={image}
          title={title}
          onClick={onClick}
          opacity={opacity}
          comingSoon={comingSoon}
        />
      </motion.div>
    </motion.div>
  );
}
