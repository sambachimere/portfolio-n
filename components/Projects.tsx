import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../typings';
import { urlFor } from '../sanity';

type Props = {
  projects: Project[];
};

export default function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Projects</h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#E1AE00]/80">
        {projects?.map((project, i) => (
          <div
            key={project?._id}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-10 md:p-44 h-screen"
          >
            <a
              href={project?.linkToBuild}
              target="_blank"
              rel="noreferrer"
              className="w-full flex items-center justify-center"
            >
              <motion.img
                className="md:w-1/2"
                initial={{ y: -300, opacity: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                src={urlFor(project?.image).url()}
                alt=""
              />
            </a>

            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-2xl md:text-4xl font-semibold text-center">
                <span className="underline decoration-[#E1AE00]/50">
                  Case Study {i + 1} of {projects?.length}:
                </span>{' '}
                {project?.title}
              </h4>

              <div className="flex items-center space-x-2 justify-center">
                {project?.technologies.map((technology) => (
                  <img
                    className="h-10 w-15"
                    key={technology._id}
                    src={urlFor(technology.image).url()}
                    alt=""
                  />
                ))}
              </div>

              <p className="md:text-lg text-justify  md:text-left">{project?.summary}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#E1AE00]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}
