import React from 'react'
import { motion } from "framer-motion";

type Props = {

}
export default function Projects({}: Props) {
  const projects = [1,2,3,4,5]
  return (
    <motion.div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Projects</h3>
        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>  
            {projects.map((project, i) => (
                <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
                    <motion.img 
                        initial={{
                            y: -300,
                            opacity:0
                        }}
                        transition={{duration:1.2}}
                        whileInView={{opacity:1, y:0}}
                        viewport={{once:true}}
                        className='w-2/4 md:w-96'
                        src='https://cdn.domestika.org/c_limit,dpr_auto,f_auto,q_80,w_820/v1418944732/content-items/001/164/032/qdqexpress-original.png?1418944732'
                    />
                    <div className='space-y-5 px-0 max-w-5xl'>
                        <h4 className='text-4xl font-semibold text-center'>
                            <span className='underline decoration-[#f7ab0a]/50'>Case Study</span> {i + 1} of {projects.length}: UPS clons
                        </h4>
                        <p className='text-lg text-center md:text-left'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit libero veniam nostrum temporibus quod necessitatibus quidem pariatur in porro molestias, quasi provident consequatur quibusdam laudantium nisi minima voluptas est beatae.</p>
                    </div>
                </div>
            ))}
        </div>
        <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12'></div>
    </motion.div>
  )
}
