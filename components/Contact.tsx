import { PhoneIcon } from '@heroicons/react/20/solid'
import { MapIcon } from '@heroicons/react/24/outline'
import { EnvelopeIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export default function Contact() {
    const { register, handleSubmit} = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:kaveh.rhanjani@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message}
        (${formData.email});`
    }

  return (
    <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Contact
        </h3>
        
        <div className='flex flex-col space-y-10'>
            {/* <h4 className='text-center text-4xl font-semibold'>
                I have got just what you need.{" "}
                <span className='decoration-[#f7AB0A]/50 underline'>Let's Talk</span>
            </h4> */}
            <div className='space-y-10 mt-24'>
                <div className='flex items-center space-x-5 justify-center'>
                    <PhoneIcon className='text-[#f7ab0a] w-7 h-7 animate-pulse'/>
                    <p className='text-2xl'>+46-736568273</p>
                </div>
                <div className='flex items-center space-x-5 justify-center'>
                    <EnvelopeIcon className='text-[#f7ab0a] w-7 h-7 animate-pulse'/>
                    <p className='text-2xl'>kaveh.rhanjani@gmail.com</p>
                </div>
                <div className='flex items-center space-x-5 justify-center'>
                    <MapIcon className='text-[#f7ab0a] w-7 h-7 animate-pulse'/>
                    <p className='text-2xl'>123 Developer lane</p>
                </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto max-sm:w-[436px]'>
                <div className='flex space-x-2 max-sm:flex-col max-sm:space-x-0 max-sm:space-y-2'>
                    <input {...register('name')} placeholder='Name' className='contactInput' type="text" />
                    <input {...register('email')} placeholder='Email' className='contactInput' type="email" />
                </div>
                <input {...register('subject')} placeholder='Subject' className='contactInput' type="text" name="" id="" />
                <textarea {...register('message')} placeholder='Message...' className='contactInput'/>
                <button type="submit" className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg'>Submit</button>
            </form>
        </div>
    </div>
  )
}
