import React from 'react'

const Table = () => {
  return (
    <div className=" mt-24 ml-32 mr-24">
  <table className="table w-full text-black">
    <thead >
      <tr >
        <th className='bg-green-200 text-2xl font-serif'></th>
        <th className='bg-green-200 text-2xl font-serif'>Features</th>
        <th className='bg-green-200 text-2xl font-serif'>Other tools</th>
        <th className='bg-green-200 text-2xl font-serif'>Trinitio</th>
      </tr>
    </thead>
    <tbody>
    
      <tr>
        <th  className='flex'>
        <img  src="timg1.png" alt="helfi" style={{height:'20px'}}/>
        <img className='pl-5' src="timg2.png" alt="helfi" style={{height:'20px'}}/>
        </th>
        <td>Booking&Appointments</td>
        <td>$29/monthly</td>
        <td>
            <img src="tick.svg" alt="helfi" style={{height:'20px'}}/>
        </td>
      </tr>
      
      <tr>
      <th  className='flex'>
        <img  src="timg3.png" alt="helfi" style={{height:'20px'}}/>
        <img className='pl-5' src="timg4.png" alt="helfi" style={{height:'20px'}}/>
        </th>
        <td>Email Marketing</td>
        <td>$99/monthly</td>
        <td>
        <img src="tick.svg" alt="helfi" style={{height:'20px'}}/>

        </td>
      </tr>
    
      <tr>
      <th  className='flex'>
        <img  src="timg5.png" alt="helfi" style={{height:'20px'}}/>
        <img className='pl-5' src="timg6.png" alt="helfi" style={{height:'20px'}}/>
        </th>
        <td>Live Chat + chat Bot</td>
        <td>$29/monthly</td>
        <td>
        <img src="tick.svg" alt="helfi" style={{height:'20px'}}/>

        </td>
      </tr>
    </tbody>
    <thead >
      <tr >
        <th className='bg-green-200 text-2xl font-serif'></th>
        <th className='bg-green-200 text-2xl font-serif'>Overall Price</th>
        <th className='bg-green-200 text-2xl font-serif'>$180+ per month</th>
        <th className='bg-green-200 text-2xl font-serif'>$29 per month</th>
      </tr>
    </thead>
  </table>
</div>
  )
}

export default Table