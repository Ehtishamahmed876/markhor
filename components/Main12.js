import React from 'react'
import Image from 'next/image'

const Main12 = () => {
  return (
    <div className='text-black '>
        <p className='text-green-400 text-center mt-5'>TESTIMONIALS</p>
        <h1 className='text-3xl font-sans font-bold text-center mt-4'>See our user feedback</h1>
        <div className='flex flex-col items-center mx-auto mt-10 bg-blue-100 w-1/2 p-16'>
        <Image
 src="/main12img.png"
 alt="Picture of the author"
 width={100}
 height={100}
/> 
     <h2 className='text-xl font-bold mt-5'>Willium Esther</h2>
     <p>Senior Project Manager</p>
     <h5 className='font-mono mt-3'>What I appreciate must about Semrush is that it convers all areas of search with its tools, so i can 
         have a 360-degree view of my projects
     </h5>
        </div>

    </div>
  )
}

export default Main12