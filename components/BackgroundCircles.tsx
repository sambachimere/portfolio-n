import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

export default function BackgroundCircles({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ scale: [1, 2, 2, 3, 1], opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0] }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center md:pt-10"
    >
      <div className="absolute border border-[#333333] rounded-full h-[200px] w-[200px] mt-52 animate-ping" />
      <div className="hidden md:absolute border border-[#333333] rounded-full h-[300px] w-[300px] mt-52" />
      <div className="hidden md:absolute border border-[#333333] rounded-full h-[500px] w-[500px] mt-52" />
      <div className="hidden md:absolute rounded-full border border-[#E1AE00] opacity-20 animate-pulse h-[650px] w-[650px] mt-52" />
      {/* <div className="absolute border border-[#333333] rounded-full h-[800px] w-[800px] mt-52" /> */}
    </motion.div>
  );
}
