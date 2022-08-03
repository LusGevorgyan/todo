import React from 'react'
import NewListIcon from '../svg/NewListIcon'

const NewListInputModul = () => {
  return (
    <div className='flex flex-start ml-[20px] items-center mb-[23px]'>
        <div className=''> 
            <NewListIcon/>
        </div>
        <div className='text-[12px] sm:text-[18px] xl:text-[24px] font-bold ml-[15px] text-[#B47AEA]'> Add New Task </div>
    </div>
  )
}

export default NewListInputModul