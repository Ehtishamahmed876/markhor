import React from 'react'
import Image from 'next/image'

function Footer2() {
  return (
      <>
      <div  className='absolute left-3/4 mt-6 '>
      <Image
 src="/Group 437.png"
 alt="Picture of the author"
 width={200}
 height={40}
/>
</div>
    <div className="flex mt-4 bg-blue-50">
          <div className="text-black ml-10">
          <h3 className='font-bold text-xl'>Enter the fold</h3>
          <p className='font-mono'>Subscribe to our newsletter</p>
        </div>
      <div className="ml-8">
          <input className="p-2 bg-gray-300"type="email" name="email" id="email" placeholder="Enter your email " />
          <button className="bg-green-700  text-white  p-2  mt-2 ">Subscribe</button>
      </div>
  
    </div>
    <div className="flex mt-2 bg-blue-50">
        <p className='text-blue-700 pl-10'>Terms of Use</p>
        <p className='text-blue-700 pl-10'>Privacy Policy</p>
        <p className='text-blue-700 pl-10'>Cockie Policy</p>
        <p className='text-blue-700 pl-10'>@ReachHealthNetwork 2022</p>
    </div>
    </>
  )
}

export default Footer2