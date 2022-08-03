import React, {useState} from 'react'
import CheckList from './CheckList'

const List = (props) => {
  const [list, setList] = useState('');
  return (
    <div>
      <input 
        type="search" 
        placeholder='Search' 
        className='absolute top-[45px] right-[135px] md:top-[65px] md:right-[150px] md:p-[10px] py-[6px] focus:ring-0 cursor-pointer placeholder-[#B47AEA] placeholder-bold w-[120px] h-[10px] md:w-[180px] h-[20px] bg-[#FFFFFF] border-[2px] border-[#1E9CEA] rounded-[5px]'
        onChange={event => setList(event.target.value)}
      />
      <div>
        {props.todos
          .filter((val)=>{
            if( val.title.toLowerCase().includes(list) || val.title.includes(list)) {
              return val
            } 
          })
          .map((list, index)=> {
          return (
            <CheckList 
              {...props}
              key={index}
              list={list}
            />
          )
          })
        }
      </div>
    </div>
  )
}

export default List