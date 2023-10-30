import React from 'react'
import { motion } from "framer-motion";

type Props = {
    directionalLeft?: boolean,
}

export default function Skill({ directionalLeft }: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.img 
            initial={{
                x: directionalLeft ? -200 : 200,
                opacity: 0,
            }}
            transition={{duration: 1}}
            whileInView={{opacity:1, x:0}}
            src='https://miro.medium.com/v2/resize:fit:256/1*ZauBzuY6L72Qm_jjyFUB8A.png'
            className='rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 
            filter group-hover:grayscale transition duration-300 ease-in-out'
        />
    </div>
  )
}
