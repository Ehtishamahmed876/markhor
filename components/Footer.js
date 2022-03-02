import React from 'react'
import Image from 'next/image'

function Footer() {
  return (
      <>

    <div  className='absolute  left-32 mt-12 w-48'>
    <Image
 src="/Logo.png"
 alt="Picture of the author"
 width={130}
 height={60}
/>
<h2 className='text-black text-2xl '>
     Schedule meeting, email marketing, live chat - all work together
 </h2>  
</div>

    <div className="flex justify-end mt-10 mr-10 bg-blue-50 list-none text-black">
    <div className="about pr-24 pt-4 ">
      <h3 className='text-2xl text-blue-500'>About</h3>
      <li className='pt-4'>Contact Sales</li>
      <li className='pt-4'>Careers</li>
      <li className='pt-4'>Security</li>
      <li className='pt-4'>Privacy</li>
      <li className='pt-4'>Terms</li>
    </div>
    <div className="support pr-24 pt-4">
      <h3 className='text-2xl text-blue-500'>Support</h3>
      <li className='pt-4'>Help Center</li>
      <li className='pt-4'>Video Tutorials</li>
      <li className='pt-4'>cookie Setting</li>
    </div>
    <div className="solutions pr-24 pt-4">
      <h3 className='text-2xl text-blue-500'>Solutions</h3>
      <li className='pt-4'>Recruting</li>
      <li className='pt-4'>Education</li>
      <li className='pt-4'>Individuals</li>
      
    </div>
    <div className="features pr-24 pt-4">
      <h3  className='text-2xl text-blue-500'>Popular features</h3>
      <li className='pt-4'>Notification</li>
      <li className='pt-4'>Mobile App</li>
      <li className='pt-4'>Availability</li>
      <li className='pt-4'>Education</li>
      <li className='pt-4'>Indviduals</li>
      
    </div>
</div>
</>
  )
}

export default Footer