import React from 'react'
import CompletedText from './CompletedText'
import CountList from './CountList'

const TextIcon = ({todos}) => {
  return (
    <div className='grid'>
      <span className='text-[#5E5E5E] text-[12px] sm:text-[18px] xl:text-[24px] font-bold  leanding-[20px] sm:leanding-[25px] xl:leanding-[29px]'>Hi Shobhit 👋🏽</span>
      <CountList todos={todos}/>
      <CompletedText todos={todos}/>
    </div>
  )
}

export default TextIcon