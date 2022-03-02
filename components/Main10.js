import React from 'react'
import Image from 'next/image'

const Main10 = () => {
  return (
    <div className='flex text-black justify-around mt-16 ml-10 bg-blue-50 pb-10 '>
        <div className="w-80">
            <h1 className='text-5xl font-sans font-extrabold'>Why Trinitio?</h1>
            <div className="mt-5">
             <h2 className='text-lg font-sans font-bold'>User friendly simple Ui interface</h2>
             <p>The entire set up process will take only 5 minutes. My grandma was able to set it up in 7 minutes 2 seconds.</p>
            </div>
            <div className="mt-3">
             <h2 className='text-lg font-sans font-bold'>Encrypted data security</h2>
             <p>We built this software with the utmost care for the date security. Your data are 200% secure and you only have access to them.</p>
            </div>
            <div className="mt-3">
             <h2 className='text-lg font-sans font-bold'>Saves time and money</h2>
             <p>You will get all three platforms in a single setup - appointment scheduling, email marketing, livechat+chatbot.</p>
            </div>
            <div className="mt-3">
             <h2 className='text-lg font-sans font-bold'>Dedicated 24/7 Support</h2>
             <p>We take your business seriously. Our support tenm resolve/answer most of the clients question within 2 hours</p>
            </div>
        </div>
        <div className="absolute right-20 mt-4 ">
        <Image
 src="/main10img.png"
 alt="Picture of the author"
 width={600}
 height={470}
/> 
        </div>
        <div className="bg-green-400 w-1/2  ml-16 mt-5">
         hello
      </div>

    </div>
  )
}

export default Main10