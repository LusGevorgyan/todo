import React from 'react'
import {Link} from 'react-router-dom'

const PageInput = () => {
  return (
    <div className='w-full h-[630px] pt-[240px] mx-auto'>
      <div className='text-center text-[72px] font-bold text-[#5E5E5E] leanding-[87px]'> TaskDo  </div>
      <div className='text-center text-[27px] font-bold leanding-[29px]'> Manage You Task Checklist Easily </div>
      <div className='flex justify-center w-full mt-[30px]'> 
        <Link to="new" className='focus:outline-none hover:no-underline'>
            <button className='flex items-center justify-center w-[144px] h-[45px] rounded-[15px] bg-[#B47AEA] text-[27px] font-bold leanding-[29px] text-white'> 
              Lets Start 
            </button>
        </Link>
      </div>
    </div>
  )
}

export default PageInput