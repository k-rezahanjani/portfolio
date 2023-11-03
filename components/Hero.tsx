"use client"
import React, { useEffect, useState } from 'react'
import { Cursor ,useTypewriter } from 'react-simple-typewriter'
import BackgroundCircle from './BackgroundCircle';
import Link from 'next/link';
import { PageInfo } from '@/typings';
import { getData } from '@/components/getData';
import { urlFor } from '@/sanity';


export default function Hero() {
    const [pageInfo, setPageInfo] = useState<PageInfo | null>(null);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        async function fetchData() {
          try {
            const data = await getData();
    
            if (data.pageInfo) {
              setPageInfo(data.pageInfo);
            }
    
            setLoading(false);
          } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
          }
        }
    
        fetchData();
      }, []);


    const [text, count] = useTypewriter({
        words: [
            pageInfo ? `Hi, I'm ${pageInfo?.name}` : "Loading...",
            "Guy-who-loves-coding.jsx",
            "<ButLovesToCodeMore />"
        ],
        loop: true,
        delaySpeed: 2000,
    });

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircle />
        {
          pageInfo?.heroImage &&
          <picture>
            <img 
                className='relative rounded-full h-32 w-32 mx-auto object-cover'
                src={urlFor(pageInfo.heroImage).url()}
                alt="me"
            />
          </picture>
        }
        <div className='z-20'>
            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>{pageInfo?.role}</h2>
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