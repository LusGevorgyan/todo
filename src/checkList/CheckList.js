import React from 'react'
import DeleteIcon from '../svg/DeleteIcon'
import EditModulChangeTitle from './EditModulChangeTitle'

const CheckList = ({list, todos, setTodos}) => {
  const onChange =(newId) => {
    setTodos(
      todos.map((todo)=> {
        if(todo.id === newId.id){
          return newId
      }
          return todo
      })
    )
  }

  const onDelete=(id) => {
    setTodos(
      todos.filter((todo)=>
        todo.id !== id
      )
    )
  } 

  return (
    <div className='grid ml-[15px] sm:[120px]  mt-[22px]'> 
      <div className='flex flex-start items-center'>
        <div className='flex justify-between items-center'>
          <div 
              className=' cursor-pointer'  
              onClick={()=> 
                onDelete(list.id)
              }>
                <DeleteIcon/>
          </div>
                <EditModulChangeTitle
                  list={list}
                  todos={todos}
                  setTodos={setTodos}
                />
          <div className='mr-[21px] '>
              <input 
                type="checkbox" 
                style={
                  { backgroundColor: list.completed ? '#1E9CEA': 'none' }
                }
                checked={list.completed}
                className="bg-[#FFFFFF] focus:ring-0  cursor-pointer w-[25px] h-[25px] border-[2px] border-[#1E9CEA] rounded-[5px] ml-[10px] checked:bg-[#1E9CEA]"  
                onChange={(e)=> {
                  onChange({
                    ...list,
                    completed: e.target.checked
                  })
                }}  
              />
          </div>
        </div>
        <div
          key={list.id}
          className="cursor-pointer text-[24px] font-[500] leanding-[29px]"
          style={
            { textDecoration: list.completed ? 'line-through': 'none' }
          }
        > 
          {list.title}
        </div>
      </div>
    </div>
  )
}

export default CheckList