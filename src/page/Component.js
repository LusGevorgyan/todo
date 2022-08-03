import React from 'react'
import AddTaskModul from '../checkList/AddTaskModul'
import List from '../checkList/List'
import MenuList from '../navbar/MenuList'

const Component = ({todos, setTodos}) => {
  return (
    <div >
      <MenuList 
        todos={todos}
        setTodos={setTodos}
      />

      <AddTaskModul
        todos={todos} 
        setTodos={setTodos}
      /> 

      <List 
        todos={todos} 
        setTodos={setTodos}
      />
    </div>
  )
}

export default Component