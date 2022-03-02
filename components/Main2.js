import React from 'react'
import Image from 'next/image'

const Main2 = () => {
  return (
    <div className='bg-white '>
        <div className=" text-black text-center text-xl font-sans font-bold mt-3">
         <h1>  Trusted by the worlds leading brand</h1> 
        </div>
        <div className="flex justify-center mt-3  ">
        <div className="mt-7">
     <Image
     src="/facebook.svg"
     alt="Picture of the author"
     width={50}
     height={50}
  /> 
  
     </div>  
     <div className="ml-5">
     <Image
     src="/microsoft.svg"
     alt="Picture of the author"
     width={100}
     height={100}
  /> 
  
     </div>      
     <div className="mt-7 ml-5">
     <Image
     src="/linkedin.svg"
     alt="Picture of the author"
     width={50}
     height={50}
  /> 
  
     </div>    
       <div className="ml-5">
     <Image
     src="/google.svg"
     alt="Picture of the author"
     width={100}
     height={100}
  /> 
  
     </div>      
     <div className="ml-5">
     <Image
     src="/adobe.svg"
     alt="Picture of the author"
     width={100}
     height={100}
  /> 
  
     </div> 
          <div className="ml-5">
     <Image
     src="/paypal.svg"
     alt="Picture of the author"
     width={100}
     height={100}
  /> 
  
     </div> 
        </div>
    </div>
  )
}

export default Main2