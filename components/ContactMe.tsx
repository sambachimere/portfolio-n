import React from 'react';
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid';

import ContactForm from './ContactForm';

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
type Props = {};

export default function ContactMe({}: Props) {
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Projects</h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          {/* Prêts à vous lancer ?<span className="decoration-[#E1AE00]/50 underline"> Discutons-en.</span> */}
          Ready to get started?
          <span className="decoration-[#E1AE00]/50 underline"> Let&apos;s talk about it.</span>
        </h4>

        <div className="space-y-10">
          <div className="flex items-center space-x-5">
            <PhoneIcon className="text-[#E1AE00] h-7 w-7 animate-pulse" />
            <p className="text-2xl">+33 7 88 33 69 92</p>
          </div>

          <div className="flex items-center space-x-5">
            <EnvelopeIcon className="text-[#E1AE00] h-7 w-7 animate-pulse" />
            <a target="_blank" rel="noreferrer" href="mailto:sambachimerediaw@gmail.com">
              <p className="text-2xl">sambachimerediaw@gmail.com</p>
            </a>
          </div>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}
