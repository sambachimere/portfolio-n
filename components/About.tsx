import React from 'react';
import { motion } from 'framer-motion';
import { PageInfo } from '../typings';
import { urlFor } from '../sanity';

interface Props {
  pageInfo: PageInfo;
}

export default function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-justify md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">About</h3>

      <motion.img
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        src={urlFor(pageInfo?.profilePic).url()}
        className="hidden -mb-20 md:mb-0 md:flex-shrink-0 w-56 h-56 object-cover md:w-64 md:h-95 xl:w-[500px] xl:h-[500px] rounded-full md:rounded-lg"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-2xl text-center md:text-left md:text-4xl font-semibold">
          Here is a <span className="underline decoration-[#E1AE00]/50">little</span> background
        </h4>
        <p className="text-xs md:text-base leading-relaxed	tracking-wider">
          {pageInfo?.backgroundInformation}
        </p>
      </div>
    </motion.div>
  );
}
