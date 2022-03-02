import React from 'react'
import Image from 'next/image'

const Main5 = () => {
  return (
      <>
    <div className='flex text-black justify-center mt-24 mr-32  h-96'>
       <div className="bg-green-400 w-96   h-72 ">
        <h1 className='ml-24 mt-6'>hello</h1> 
      </div>
     <div className='w-80 ml-24 '>
         <h2 className='text-3xl font-sans font-extrabold mt-6'>Welcome to Trinitio’s Family!</h2>
         <p>
When we started our entrepreneurial journey about a decade ago back in Houston, Texas, we wanted to have an easy yet intuitive appointment scheduling platform, email marketing and live chat with chatbot platforms. We wanted all these to work together to maximize our marketing efforts Read More..
         </p>
     </div>
     <div className="absolute left-52 top-[2565px]">
    <Image
     src="/Main5img.png"
     alt="Picture of the author"
     width={400}
     height={300}
  /> 
    </div>
    </div>
  
    </>
  )
}

export default Main5