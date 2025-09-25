"use client"

import { useEffect } from "react"
import { motion, stagger, useAnimate } from "motion/react"

import Floating, {
  FloatingElement,
} from "@/components/fancy/image/parallax-floating"
import Link from "next/link"

const ParallaxFloat = () => {
  const [scope, animate] = useAnimate()

  useEffect(() => {
    animate("img", { opacity: [0, 1] }, { duration: 0.5, delay: stagger(0.15) })
  }, [])

  return (
    <div
      className="flex w-dvw h-dvh justify-center items-center bg-black overflow-hidden"
      ref={scope}
    >
      <motion.div
        className="z-50 text-center space-y-4 items-center flex flex-col px-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.88, delay: 1.5 }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl z-50 text-white font-xanh-mono italic">
          Luke & Noah Clarke
        </h1>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <p className="text-sm z-50 hover:scale-110 transition-transform bg-white text-black rounded-full py-2 px-4 cursor-pointer">
            <Link href="/work">View Work</Link>
          </p>
        <p className="text-sm z-50 hover:scale-110 transition-transform bg-transparent text-white border border-white rounded-full py-2 px-4 cursor-pointer">
          <Link href="/about">About the Duo</Link>
        </p>
        </div>
      </motion.div>

      <Floating sensitivity={-1} className="overflow-hidden">
        <FloatingElement depth={0.5} className="top-[15%] left-[5%] md:top-[8%] md:left-[11%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={"/images/moviePosters/chetLarson.jpeg"}
            className="w-16 h-20 md:w-18 md:h-24 object-cover hover:scale-105 duration-70 cursor-pointer transition-transform"
          />
        </FloatingElement>
        <FloatingElement depth={1} className="top-[8%] left-[35%] md:top-[10%] md:left-[32%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={"/images/chetLarson/screenshot.jpeg"}
            className="w-20 h-20 md:w-22 md:h-22 object-cover hover:scale-105 duration-70 cursor-pointer transition-transform"
          />
        </FloatingElement>
        <FloatingElement depth={2} className="top-[2%] left-[65%] md:top-[2%] md:left-[53%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={"/images/moviePosters/convenience.jpg"}
            className="w-24 h-32 md:w-28 md:h-40 object-cover hover:scale-105 duration-70 cursor-pointer transition-transform"
          />
        </FloatingElement>
        <FloatingElement depth={1} className="top-[20%] left-[85%] md:top-[0%] md:left-[83%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={"/images/victorianBoy/screenshot.png"}
            className="w-28 h-40 md:w-32 md:h-48 object-cover hover:scale-105 duration-70 cursor-pointer transition-transform"
          />
        </FloatingElement>

        <FloatingElement depth={1} className="top-[45%] left-[2%] md:top-[40%] md:left-[2%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={"/images/carryMyPain/screenshot.jpg"}
            className="w-24 h-24 md:w-28 md:h-28 object-cover hover:scale-105 duration-70 cursor-pointer transition-transform"
          />
        </FloatingElement>
        <FloatingElement depth={2} className="top-[75%] left-[75%] md:top-[70%] md:left-[77%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={"/images/atomBomb/screenshot.JPEG"}
            className="w-24 h-24 md:w-28 md:h-28 object-cover hover:scale-105 duration-70 cursor-pointer transition-transform"
          />
        </FloatingElement>

        <FloatingElement depth={4} className="top-[78%] left-[10%] md:top-[73%] md:left-[15%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={"/images/hairlessDog/screenshot.jpg"}
            className="w-32 h-40 md:w-40 md:h-52 object-cover hover:scale-105 duration-70 cursor-pointer transition-transform"
          />
        </FloatingElement>
        <FloatingElement depth={3} className="top-[85%] left-[45%] md:top-[80%] md:left-[40%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={"/images/theFearsWeCantEscape/screenshot.jpg"}
            className="w-20 h-20 md:w-24 md:h-24 object-cover hover:scale-105 duration-70 cursor-pointer transition-transform"
          />
        </FloatingElement>
      </Floating>
    </div>
  )
}

export default ParallaxFloat
