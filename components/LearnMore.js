import Image from 'next/image';
import React from 'react'
import placeholder from '../public/placeholder.svg'

const LearnMore = () => {
  return (
    <div className='grid p-5 pt-1 pb-1 grid-cols-3 pl-40 mt-10 bg-[#6C708D] gap-20'>
        <div>
            <Image src={placeholder} className='w-full h-full' width={400} />
        </div>
        <div className='pt-20'>
            <h5 className='text-white font-bold text-2xl pb-3'>Want to learn more?</h5>
            <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat atque ab molestias quo at ducimus provident ex expedita modi quidem.</p>
            <a
              href="#"
              className="mt-5 whitespace-nowrap inline-flex items-center justify-center px-4 py-2  rounded-md  text-base font-medium text-[#206cff] bg-white " 
            >
              Request Demo
            </a>
        </div>
    </div>
  )
}

export default LearnMore