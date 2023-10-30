import React from 'react'
import { motion } from "framer-motion";


export default function ExperienceCard() {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-3 flex-shrink-0 w-[550px] h-[660px] md:w-[600px] xl:w-[500px] snap-center bg-[#292929] p-5
    hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden mt-52'>
        <motion.img 
            initial={{y: -100, opacity: 0,}}
            transition={{duration: 1.2}}
            whileInView={{opacity: 1, y:0}}
            viewport={{once: true}}
            className='w-24 h-24 rounded-full xl:w-32 xl:h-32 object-cover object-top'
            src='https://cdn3d.iconscout.com/3d/premium/thumb/boy-avatar-6299533-5187865.png?f=webp'
        />
        <div className='px-0 md:px-10'>
            <h4 className='text-3xl font-light'>CEO of XLXL</h4>
            <p className='font-bold text-2xl mt-1'>CLCLC</p>
            <div className='flex space-x-2 my-2'>
                <img 
                    className='h-8 w-8 rounded-full'
                    src='https://e7.pngegg.com/pngimages/602/440/png-clipart-javascript-open-logo-number-js-angle-text-thumbnail.png'
                />
                <img 
                    className='h-8 w-8 rounded-full'
                    src='https://e7.pngegg.com/pngimages/602/440/png-clipart-javascript-open-logo-number-js-angle-text-thumbnail.png'
                />
                <img 
                    className='h-8 w-8 rounded-full'
                    src='https://e7.pngegg.com/pngimages/602/440/png-clipart-javascript-open-logo-number-js-angle-text-thumbnail.png'
                />
            </div>
            <p className='uppercase py-5 text-gray-300'>Started work... - Ended ...</p>
            <ul className='list-disc space-y-4 ml-5 text-lg'>
                <li>Summary points</li>
                <li>Summary points</li>
                <li>Summary points</li>
                <li>Summary points</li>
                <li>Summary points</li>
            </ul>
        </div>
    </article>
  )
}
