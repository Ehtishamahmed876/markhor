import React from 'react'
import Image from 'next/image'

const Main1 = () => {
  return (
    <div className='bg-slate-50 text-black h-[700px] '>
        <div className="ml-36 w-96">
            <div className="pt-10 text-4xl text-dark-900 font-extrabold">
                Could-Based Intuitive Platform Engineered to Simply Boost Your Sales
            </div>
            <div className="">
                <p className='text-lg font-bold mt-4'>Join 1000000+ website using Trinitio. </p>
                <li className='ml-4      font-normal '>Let your prospects book appointment with you  in the easiest way possible</li>
                <li className='ml-4 mt-2 font-normal '>Bulk email them anytime you want,</li>
                <li className='ml-4 mt-2 font-normal '>Boost their engagement via live chat and watch your sales go 
                         through the root.
                     </li>
            </div>
            <div className="flex mt-4">
                <button className='bg-green-500 rounded p-2 text-white'>Start Now</button>
                <p className='p-2 ml-4'>(no credit card required)</p>
            </div>
            <div className="flex mt-4">
                <div className='flex'>
                    <h2 className='text-blue-600 mt-1 '>+2070</h2>
                    <p  className='text-xs w-28 ml-3'>trails started in the last 7 days</p>
                </div>
                <div className="mt-1 ml-2">|</div> 
                <div className='flex'>
                    <h2 className='text-blue-600 mt-1 ml-3'>+1920</h2>
                    <p className='text-xs w-48 ml-3'>people referred trinitio to their friends inn the last 7 days</p>
                </div>
            </div>
     </div>
     <div className="absolute  right-72 bottom-9 ">
     <Image
     src="/img1.png"
     alt="Picture of the author"
     width={500}
     height={350}
  /> 
     </div>
     <div className="absolute right-40 -bottom-28">
     <Image
     src="/img2.png"
     alt="Picture of the author"
     width={500}
     height={350}
  /> 
     </div>
     <div className="absolute right-72 bottom-11">
     <Image
     src="/img3.png"
     alt="Picture of the author"
     width={200}
     height={350}
  /> 
     </div>
    </div>
  )
}

export default Main1