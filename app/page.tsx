"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import About from '@/components/About';
import Contact from '@/components/Contact';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import WorkExperience from '@/components/WorkExperience';


export default function Home() {
  
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
      <Header />
      <section id="hero" className='snap-start'>
        <Hero />
      </section>

      <section id='about' className='snap-center'>
        <About />
      </section>

      <section id='experience' className='snap-center'>
        <WorkExperience />
      </section>

      <section id='skills' className='snap-start'>
        <Skills />
      </section>

      <section id='projects' className='snap-start'>
        <Projects />
      </section>

      <section id='contact' className='snap-start'>
        <Contact />
      </section>
      <Link href="#hero">
        <footer className='sticky bottom-24 w-full cursor-pointer'>
          <div className='flex items-center justify-end me-10'>
            <picture>
              <img
                className='w-10 h-10 rounded-full filter grayscale hover:grayscale-0'
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5Kb6giEARrYkyZZdH8p_X_x0Pl0mAjJcPDw&usqp=CAU"
                alt="up"
              />
            </picture>
          </div>
        </footer>
      </Link>
    </div>
  );
}
