import React from 'react';
import { motion } from 'framer-motion';
import { Experience } from '../typings';
import { urlFor } from '../sanity';

type Props = {
  experience: Experience;
};

export default function ExperienceCard({ experience }: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[300px] md:w-[600px] snap-center bg-[#292929] p-7 md:p-10 opacity-100 border border-[#292929] hover:border-white cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-20 h-20 md:w-32 md:h-32 rounded-full xl:w-[150px] xl:h-[150px] object-cover object-center"
        src={urlFor(experience.companyImage).url()}
        alt=""
      />

      <div className="px-0 md:px-10">
        <h4 className="text-2xl md:text-4xl font-light">{experience?.jobTitle}</h4>
        <p className="font-bold text-xl md:text-2xl mt-1">{experience?.company}</p>
        <div className="flex space-x-2 my-2">
          {experience.technologies.map((technology) => (
            <img
              key={technology._id}
              className="h-10 w-10 rounded-full"
              src={urlFor(technology.image).url()}
              alt=""
            />
          ))}
        </div>
        <p className="uppercase py-5 text-gray-300 text-sm">
          {new Date(experience.dateStarted).toDateString()} -{' '}
          {experience.isCurrentlyWorkingHere ? 'Present' : new Date(experience.dateEnded).toDateString()}
        </p>

        <ul className="list-disc space-y-4 ml-5 md:text-lg">
          {/* <ul className="list-disc space-y-4 ml-5 text-lg overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-[#E1AE00]/80"> */}
          {experience.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
