import React from 'react'
import Image from 'next/image'

const Main13 = () => {
  return (
    <div className='flex justify-around stify bg-[#001E48] mt-24 p-16'>
        <div className='ml-10'>
        <Image
 src="/rocket.png"
 alt="Picture of the author"
 width={100}
 height={250}
/>  
        </div>
        <div className="p-3 mt-10">
            <h1 className='text-3xl font-bold font-sans'>Never allow your customer leave without contacting you first</h1>
            <p className='mt-7'>Join 10000+ clients who already achieved the PageSpeed of 95+</p>
        </div>
        <div className='mt-12'>
            <button className='bg-green-400 rounded-md p-3 w-72'>Start for free</button>
            <p className='mt-5'>No credit card required. Get startedin seconds.</p>
        </div>

    </div>
  )
}

export default Main13