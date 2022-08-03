import React from 'react'
import { Link } from 'react-router-dom'

const LogOut = () => {
  return (
    <div className='text-[12px] sm:text-[18px] xl:text-[24px] cursor-pointer font-bold text-[#B47AEA]'>
    <Link to='/'>
      <p> Logout </p>
    </Link>
    </div>
  )
}

export default LogOut