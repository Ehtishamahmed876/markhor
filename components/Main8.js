import React from 'react'
import Image from 'next/image'

const Main8 = () => {
  return (
    <div className='flex text-black justify-around mt-32 pb-10'>
        <div className='w-96 ml-10'>
        <h1 className='text-3xl mt-6 font-sans font-bold '>Send Emails to Your Contects in Bulk Whenever You Want.</h1>
        <li className='mt-3 ml-3'>Send personalised emails to multiple prospects on the go and get engagement analytics of recipients.</li>
        <li className='mt-3 ml-3'>Automate follow ups to email campaigns and increase email open and reply rate by 10x.</li>
        <li className='mt-3 ml-3'>Schedule emails to be sent at a time when they are most likely to be read.</li>
        <li className='mt-3 ml-3'>Get to know if your emails have been opened through our latest tracking tool</li>
       </div>
    <div className="">
    <Image
 src="/main8img.png"
 alt="Picture of the author"
 width={500}
 height={400}
/> 
    </div>
    
</div>
  )
}

export default Main8