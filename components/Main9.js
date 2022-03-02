import React from 'react'
import Image from 'next/image'

const Main9 = () => {
  return (
    <div className='flex text-black justify-around mt-20 pb-10'>
    <div className="">
    <Image
 src="/main9img1.png"
 alt="Picture of the author"
 width={400}
 height={600}
/> 
    </div>
    <div className='absolute left-80 mt-32'>
    <Image
 src="/main9img2.png"
 alt="Picture of the author"
 width={300}
 height={300}
/> 
    </div>
    <div className='w-96 mr-16 mt-16
    '>
        <h1 className='text-3xl mt-16 font-sans font-bold '>Get in Touch With Your Visitors Faster Then Ever</h1>
        <li className='mt-3 ml-3'>Let your visitors schedule an appointment with you right from the chat window.</li>
        <li className='mt-3 ml-3'>Respond to your customers queries in seconds via live chat.</li>
        <li className='mt-3 ml-3'>Our chat bot will work 24/7 for you tirelessly.</li>
  

    </div>
</div>
  )
}

export default Main9