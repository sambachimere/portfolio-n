import React from 'react';
import Link from 'next/link';
import Typewriter from 'typewriter-effect';
import { PageInfo } from '../typings';

import BackgroundCircles from './BackgroundCircles';
import { urlFor } from '../sanity';

type Props = {
  pageInfo: PageInfo;
};

export default function Hero({ pageInfo }: Props) {
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src={urlFor(pageInfo?.heroImage).url()}
        alt="samba's picture"
      />
      <div className="z-20 relative">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">{pageInfo?.role}</h2>
        <h1 className="text-2xl md:text-5xl lg:text-6xl font-semibold px-10">
          <Typewriter
            options={{
              strings: [
                `Hello, I'm ${pageInfo?.name}`,
                'I build mobile applications',
                'web applications',
                'and great websites !',
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>

        <div className="pt-5 space-x-2">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton mt-3 sm:mt-0">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
