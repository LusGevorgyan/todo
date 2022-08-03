import React from 'react'
import TextIcon from '../svg/TextIcon'
import logo from "./Ellipse.png"
import LogOut from './LogOut.js'

function refreshPage() {
  window.location.reload(false);
}

const MenuList = (props) => {
  return (
    <div className='flex justify-between mx-[10px] sm:mx-[35px] xl:mx-[50px] mb-[85px] pt-[27px] items-center'>
      <div onClick={refreshPage} className='cursor-pointer flex items-center'> 
        <div className='w-[35px] h-[35px] sm:w-[50px] sm:h-[50px] xl:w-[75px] xl:h-[75px] rounded-[50%] leading-[75px]'> 
          <img src={logo} className="cursor-pointer"/> 
        </div>
        <TextIcon todos={props.todos}/>
      </div>
      <div className='text-[22px] xl:text-[64px] font-bold text-[#5E5E5E] leanding-[29px]'> 
        TaskDo  
      </div>
      <div className='md:flex flex-wrap  justify-between items-center '>
       <LogOut />
     </div>
    </div>
  )
}

export default MenuList