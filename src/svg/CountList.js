import React from 'react'

const CountList = ({todos}) => {
    const listLength = todos.filter((lis)=>!lis.completed).length
    // console.log(listLength);
    return (
    <div>
        <span className='text-[#EF6161] text-[12px] sm:text-[18px] xl:text-[24px] font-[500] leanding-[20px] sm:leanding-[25px] xl:leanding-[29px]'><span>{listLength}</span> tasks pending</span>
    </div>
  )
}

export default CountList