import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import NewListInputModul from '../newList/NewListInputModul';

const AddTaskModul = ({todos, setTodos}) => {
  
  const [modalShow, setModalShow] = useState(false)
  const [inputValue, setInputValue] = useState('')
  
  const changeInput = (el) => {
    setInputValue(el.target.value)
  }

  const addText = () => {
    if(!!inputValue) {
      setTodos([ 
        ...todos,
        {
          userId: Math.random(),
          id: Math.random(),
          title: inputValue,
          completed: false
        }
      ])
    setInputValue("")
    } 
    else {
      setTodos([ ...todos])
    }
    setInputValue("")
    setModalShow(false)
  }

const handleClose = () => setModalShow(false);
const handleOpen = () => setModalShow(true);

  return (
    <>
      <Button 
        bsPrefix="super-btn" 
        className='focus:outline-none flex justify-center items-center mb-[23px]' 
        onClick = {handleOpen}
        >
        <NewListInputModul/>
      </Button>
 
      <Modal 
        show = {modalShow} 
        onHide = {handleClose} 
      >
        <Modal.Header closeButton>
          <Modal.Title> New Task </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input 
            type="text" 
            value={inputValue}
            placeholder='Enter new task'
            className='p-2 w-full focus:outline-none'
            onChange = {changeInput}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button 
            bsPrefix="super-btn" 
            className='text-white bg-[#B47AEA] w-[60px] h-[30px] rounded-[15px]'  
            onClick = {addText}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddTaskModul
