import React, { useEffect, useState } from 'react';
import {motion} from 'framer-motion';
import { SocialIcon } from 'react-social-icons';
import { Social } from '@/typings';
import { getData } from '@/components/getData';
import Link from 'next/link';

export default function Header() {
  const [socials, setSocials] = useState<Social[] | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getData();
        setSocials(data.socials);
      } catch (error) {
        console.error('Error fetching socials:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
      <motion.div initial={{x: -500, opacity: 0, scale: 1}} animate={{x: 0, opacity: 1, scale: 1}} transition={{duration: 1.5}}>
        {socials &&
          socials.map((social) => (
            <SocialIcon
              key={social._id}
              url={social.url}
              fgColor="gray"
              bgColor="transparent"
            />
          ))}
      </motion.div>
      <motion.div initial={{x: 500, opacity: 0.5, scale: 1}} animate={{x: 0, opacity: 1, scale: 1}} transition={{duration: 1.5}} className='flex flex-row items-center text-gray-400 cursor-pointer'>
        <SocialIcon
          className='cursor-pointer'
          network='email'
          fgColor='gray'
          bgColor='transparent'
        />
        <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>
          Get In Touch
        </p>
      </motion.div>
    </header>
  );
}
