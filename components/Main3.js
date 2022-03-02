import React from 'react'
import Image from 'next/image'

const Main3 = () => {
  return (
    <div className='bg-blue-50 '>
        <div className=" text-black text-center text-3xl font-serif font-extrabold mt-10">
         <h1 className='pt-10'> Recongnize By</h1> 
        </div>
        <div className="flex justify-center mt-10  ">
        <div className="">
     <Image
     src="/awimg1.svg"
     alt="Picture of the author"
     width={100}
     height={100}
  /> 
  
     </div>  
     <div className="ml-8">
     <Image
     src="/awimg2.svg"
     alt="Picture of the author"
     width={100}
     height={100}
  /> 
  
     </div>      
     <div className=" ml-8">
     <Image
     src="/awimg3.svg"
     alt="Picture of the author"
     width={100}
     height={100}
  /> 
  
     </div>    
       <div className="ml-8">
     <Image
     src="/awimg4.png"
     alt="Picture of the author"
     width={100}
     height={100}
  /> 
  
     </div>      
     <div className="ml-8">
     <Image
     src="/awimg5.svg"
     alt="Picture of the author"
     width={100}
     height={100}
  /> 
  
     </div> 
     </div>
     </div>
  )
}

export default Main3