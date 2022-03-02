import React from 'react'
import Image from 'next/image'

const Main4 = () => {
  return (
    <div className=''>
        <div className='flex mt-32 ml-24'>
      <div className="text-black w-96">
          <h2 className='text-4xl font-bold'>Grow Your Sales With Trinitio</h2>
          <div className="ml-8 mt-10 bg-blue-100 p-5 ">
              <h3 className='text-xl font-bold'>Get 3-in-1</h3>
              <p className='mt-2 pt-2'>Get intuitive appointment scheduling, email marketing, livechat and chatbot in one platform.</p>
          </div>
          <div className="ml-8 mt-20 bg-blue-100 p-5 ">
              <h3 className='text-xl font-bold'>Made by Smartest Minds</h3>
              <p className='mt-2 pt-2'>This software platform is carefully crafted by some of the smartest software people on Earth.</p>
          </div>
      </div>
      <div className="bg-green-400 w-1/2  ml-24">
         hello
      </div>
      </div>
      <div className="absolute left-96 ml-40   top-[1300px]">
        <img className='h-[525px] w-[600px]' src="main4.png" alt="hello"  />
      {/* <Image
     src="/img1.svg"
     alt="Picture of t"
     width={300}
     height={200}
  />  */}
      </div>
      <div className="flex text-black justify-evenly mt-10 ml-32 ">
          <div className="bg-blue-100 p-5">
              <h3 className='text-xl font-bold'>Meeting Scheduling Tools</h3>
              <p className='mt-2 pt-2'>Autopilot, sending everything from reminder emails to thank you notes.</p>
          </div>
          <div className="bg-blue-100 p-5 ml-5">
              <h3 className='text-xl font-bold'>Email Campaigns</h3>
              <p className='mt-2 pt-2'>Send emails to your contacts whenever you want and automate the process.</p>
          </div> 
            <div className="bg-blue-100 p-5 ml-5 mr-10">
              <h3 className='text-xl font-bold'>Live Chat Support + Round- the-Chock Chatbot</h3>
              <p className='mt-2 pt-2'>Chat with your visitors with our modern live chat tool and automate it by our 2 nd gen bot.</p>
          </div>
      </div>
    </div>
  )
}

export default Main4