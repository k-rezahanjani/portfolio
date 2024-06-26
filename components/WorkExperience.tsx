import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";
import ExperienceCard from './ExperienceCard';
import { Experience } from '@/typings';

export default function WorkExperience() {
  const [experiences, setExperiences] = useState<Experience[] | null>(null)

  useEffect(() => {
    fetch(`https://www.kavehrh.site/api/getExperience`)
      .then(res => res.json())
      .then(data => {
        if(data.experiences) {
          setExperiences(data.experiences);
        }
      })
  }, [])

  return (
    <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity:1 }}
        transition={{ duration: 1.5 }}
        className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'
      >
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Experience</h3>
        <div className='w-full flex space-x-5 overflow-x-scroll snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 overflow-y-hidden '>
            {
              experiences && experiences?.map(experience => (
                <ExperienceCard key={experience._id} experience={experience}/>
              ))
            }
        </div>
    </motion.div>
  )
}
