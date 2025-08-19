"use client"

import { motion } from "framer-motion"
import { twMerge } from "tailwind-merge"

type Props = {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  direction?: "up" | "down" | "left" | "right" | "none"
}

export function FadeInWrapper({ 
  children, 
  className, 
  delay = 0.2, 
  duration = 0.6,
  direction = "up"
}: Props) {
  const getDirectionalVariants = () => {
    switch (direction) {
      case "up":
        return { y: 30, opacity: 0 }
      case "down":
        return { y: -30, opacity: 0 }
      case "left":
        return { x: 30, opacity: 0 }
      case "right":
        return { x: -30, opacity: 0 }
      case "none":
        return { opacity: 0 }
      default:
        return { y: 30, opacity: 0 }
    }
  }

  const getDirectionalAnimate = () => {
    switch (direction) {
      case "up":
        return { y: 0, opacity: 1 }
      case "down":
        return { y: 0, opacity: 1 }
      case "left":
        return { x: 0, opacity: 1 }
      case "right":
        return { x: 0, opacity: 1 }
      case "none":
        return { opacity: 1 }
      default:
        return { y: 0, opacity: 1 }
    }
  }

  return (
    <motion.div
      className={twMerge("w-full", className)}
      initial={getDirectionalVariants()}
      animate={getDirectionalAnimate()}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 100,
        damping: 20
      }}
    >
      {children}
    </motion.div>
  )
}