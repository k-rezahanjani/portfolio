import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Skill from './Skill';
import { Skill as SkillType } from '@/typings';

export default function Skills() {
  const [skills, setSkills] = useState<SkillType[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://www.kavehrh.site/api/getSkill`)
    .then((res) => res.json())
    .then((data) => {
      if(data.skills) {
        setSkills(data.skills);
      }
    })
    
  }, [skills]);

  return (
    <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className='flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'
      >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Skills</h3>
      <div className='grid grid-cols-4 gap-5'>
        {skills && skills?.map(skill => (
          <Skill key={skill._id} skill={skill} />
        ))}
      </div>
    </motion.div>
  );
}
