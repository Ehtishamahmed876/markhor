import React from 'react'
import Image from 'next/image'

const Main7 = () => {
  return (
    <div className='flex text-black justify-around mt-20 pb-10'>
        <div className="">
        <Image
     src="/main7img.png"
     alt="Picture of the author"
     width={500}
     height={400}
  /> 
        </div>
        <div className='w-96 mr-8'>
            <h1 className='text-3xl mt-16 font-sans font-bold '>Appointment Scheduling Made Easy</h1>
            <li className='mt-3 ml-3 list-item list-item-red'>Super-Fast Cloud based appointment scheduling tool.</li>
            <li className='mt-3 ml-3'>Send Reminders and follow-ups on Autopilot</li>
            <li className='mt-3 ml-3'>Connect to all your calendars.</li>
            <li className='mt-3 ml-3'>Simply share availability calendar through a link.</li>
            <li className='mt-3 ml-3'>Easy integrations with 20+ tools.</li>
            <li className='mt-3 ml-3'>Get paid at the time of booking.</li>

        </div>
    </div>
  )
}

export default Main7