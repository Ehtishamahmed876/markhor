import React from 'react'
import Image from 'next/image'


const Navbar = () => {
  return (
    <div className='flex bg-white text-black justify-evenly p-2'>
      <div className="mt-2">
      <Image
    
      src="/Logo.png"
      alt="Picture of the author"
      width={150}
      height={50}
    />
      </div>
      <div className="flex list-none mt-5 text-base  ">
        <li className='pr-8  hover:text-green-400 cursor-pointer'>Features</li>
        <li className='pr-8  hover:text-green-400 cursor-pointer'>Pricing</li>
        <li className='pr-8  hover:text-green-400 cursor-pointer'>Blog</li>
        <li className='pr-8  hover:text-green-400 cursor-pointer'>Help Center</li>
        <li className='pr-8  hover:text-green-400 cursor-pointer'>About</li>
      </div>
      <div className="mt-3">
        <button className='mr-4'>Login</button>
        <button className='bg-white border-2 border-green-400 p-3 rounded text-green-400 text-sm mb-3
        hover:text-white hover:bg-green-400
        '>Signup for free</button>

      </div>
    </div>
  )
}

export default Navbar