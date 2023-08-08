import React from 'react'
import teacher from '../assets/teacher.jpeg'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4 '>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 '>
         <img className='w-[500px] mx-auto my-4 ' src={teacher} alt="/" />
         <div className='grid justify-center '>
           <p className='text-[#00df9a] font-bold '>DATA ANALYTICS DASHBOARD</p>
           <p className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</p>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nisi in vero magnam. Omnis id soluta maiores corporis ullam incidunt libero eaque delectus voluptatibus nesciunt vel, assumenda dolorem, adipisci repellendus.</p>
           <button className="bg-[#000300] w-[200px] rounded-md font-medium my-6 mx-auto  md:mx-0  sm:py-0 py-3 text-[#00df9a]">Get-started</button>
         </div>
        </div>
    </div>
  )
}

export default Analytics