import React from 'react'

const CompletedText = ({todos}) => {
  const customSize = todos.filter((lis)=>lis.completed).length;
  // console.log(customSize);
  return (
    <div>
        <div>
            {customSize ? <span className='text-[#EF6161] text-[12px] sm:text-[18px] xl:text-[24px] font-[500] leanding-[20px] sm:leanding-[25px] xl:leanding-[29px]'><span>{customSize}</span> tasks completed</span> : ""}
        </div>
    </div>
  )
}

export default CompletedText