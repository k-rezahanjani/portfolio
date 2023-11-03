import React from 'react'
import { motion } from "framer-motion";
import { Experience, Technology } from '@/typings';
import { urlFor } from '@/sanity';

type Props = {
    experience: Experience
}

export default function ExperienceCard({ experience }: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-3 flex-shrink-0 w-[550px] h-[670px] md:w-[600px] xl:w-[500px] snap-center bg-[#292929] p-2
    hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden mt-52'>
        <motion.img 
            initial={{y: -100, opacity: 0,}}
            transition={{duration: 1.2}}
            whileInView={{opacity: 1, y:0}}
            viewport={{once: true}}
            className='w-24 h-24 rounded-full xl:w-32 xl:h-32 object-cover object-top'
            src={urlFor(experience.companyImage).url()}
        />
        <div className='px-0 md:px-10'>
            <h4 className='text-2xl font-light'>{experience.company}</h4>
            <p className='font-bold text-1xl mt-1'>{experience.jobTitle}</p>
            <div className='flex space-x-2 my-2'>
                {experience.technologies &&
                    experience.technologies?.map(tech => (
                        <picture key={tech._id}>
                            <img
                                className='h-8 w-8 rounded-full'
                                src={urlFor(tech.image).url()}
                                alt={tech.title}
                            />
                        </picture>
                    ))
                }
            </div>
            <p className='uppercase py-5 text-gray-300'>
                {new Date(experience.dateStarted).toDateString()} - {""} {experience.isCurrentlyWorkingHere ? 'Present' : new Date(experience.dateEnded).toDateString()}
            </p>
            <ul className='list-disc space-y-4 ml-5 text-sm text-justify'>
                {
                    experience.points.map((point, i) => (
                        <li key={i}>{point}</li>
                    ))
                }
            </ul>
        </div>
    </article>
  )
}
