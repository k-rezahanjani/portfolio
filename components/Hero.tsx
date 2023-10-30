"use client"
import React from 'react'
import { Cursor ,useTypewriter } from 'react-simple-typewriter'
import BackgroundCircle from './BackgroundCircle';
import Link from 'next/link';


export default function Hero() {
    const [text, count] = useTypewriter({
        words: [
            "Hi, I'm Kaveh RHanjani",
            "Guy-who-loves-coding.jsx",
            "<ButLovesToCodeMore />"
        ],
        loop: true,
        delaySpeed: 2000,
    });

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircle />
        <img 
            className='relative rounded-full h-32 w-32 mx-auto object-cover'
            src="https://cdn-icons-png.flaticon.com/256/147/147144.png"
            alt="me"
        />
        <div className='z-20'>
            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>Software Engineer</h2>
            <h1>
                <span className='text-3xl lg:text-6xl font-semibold px-10'>{text}</span>
                <Cursor cursorColor='orange'/>
            </h1>
            <div className='pt-5'>
                <Link href="#about">
                    <button className='heroButton'>About</button>
                </Link>
                <Link href="#experience">
                    <button className='heroButton'>Experience</button>
                </Link>
                <Link href="#skills">
                    <button className='heroButton'>Skills</button>
                </Link>
                <Link href="#projects">
                    <button className='heroButton'>Projects</button>
                </Link>
            </div>
        </div>
    </div>
  )
}