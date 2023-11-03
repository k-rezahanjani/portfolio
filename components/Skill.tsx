import React from 'react';
import { motion } from 'framer-motion';
import { urlFor } from '@/sanity';
import { Image } from 'sanity';
import { Skill } from '@/typings';

type SkillProps = {
  skill: Skill
};

export default function Skill({ skill }: SkillProps) {
  return (
    <div className='group relative flex cursor-pointer'>
      <motion.img
        initial={{
          x: 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={urlFor(skill?.image).url()} // Replace with the correct property for the image
        alt={skill.title} // Replace with the correct property for the title
        className='rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'
      />
    </div>
  );
}
