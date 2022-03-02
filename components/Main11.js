import React from 'react'
import Image from 'next/image'

const Main11 = () => {
  return (
    <div className='text-black mt-24 ml-9'>
     <h1 className='text-3xl font-sans font-bold ml-8'>Stories From Trintio Customers</h1>  
     <div className='flex justify-evenly p-4 mt-5 '>
         <div className="flex flex-col items-center w-96 pt-6 pb-6 hover:bg-green-500 hover:text-white">
         <Image
 src="/main11img3.png"
 alt="Picture of the author"
 width={100}
 height={100}
/> 
      <h2 className='text-2xl mt-3 '>Avocado Green Mattress</h2>
      <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat soluta praesentium repellat cumque fuga obcaecati doloremque doloribus exercitationem...</p>
      <button className='btn bg-green-500 border-none mt-3 hover:text-green-500  '>Read Story</button>
         </div>
         <div className="flex flex-col items-center w-96 pt-6 pb-6 hover:bg-green-500 hover:text-white ml-3">
         <Image
 src="/main11img2.png"
 alt="Picture of the author"
 width={100}
 height={100}
/>
     <h2 className='text-2xl mt-3'>Lyft</h2> 
    <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, excepturi. Minus doloribus ipsa repellat sed at, voluptatem impedit, unde ea magnam...
    </p> 
    <button className='btn bg-green-500 border-none mt-3'>Read Story</button>
             </div>
             <div className="flex flex-col items-center w-96 pt-6 pb-6 hover:bg-green-500 hover:text-white ml-3">
             <Image
 src="/main11img3.png"
 alt="Picture of the author"
 width={100}
 height={100}
/>
<h2 className='text-2xl mt-3'>Avocado Green Mattress</h2>
      <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat soluta praesentium repellat cumque fuga obcaecati doloremque doloribus exercitationem...</p>
      <button className='btn bg-green-500 border-none mt-3'>Read Story</button>
     
             </div>
    </div> 

    </div>
  )
}

export default Main11