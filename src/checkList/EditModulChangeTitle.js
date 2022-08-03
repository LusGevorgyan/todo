import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import NewListEditModul from '../newList/NewListEditModul';

const EditModulChangeTitle = ({list, todos, setTodos}) => {
  const [modalShow, setModalShow] = useState(false);
  const [editValue, setEditValue] = useState(list.title)

  const saveChanges = (value, id) => { 
    setTodos(
      todos.map(val => (
        val.id === id ? {...val, title: value} : val
      ))
    )
  }
  const handleClose = () => setModalShow(false);
  const handleOpen = () => setModalShow(true);

  return (
    <>
      <Button bsPrefix="super-btn" className=' focus:outline-none' onClick = {handleOpen}>
        <NewListEditModul/>
      </Button>

      <Modal 
        show = {modalShow} 
        onHide = {handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title> Change Text </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input 
            type="text" 
            className='p-2 w-full focus:outline-none'
            value = {editValue}
            onChange = {(e)=> setEditValue(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button  
            onClick = {handleClose}
            className='bg-red-400'
          >
            Close
          </Button>
          <Button 
            className='bg-green-400' 
            onClick = {() => {
                saveChanges(editValue, list.id);
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default EditModulChangeTitle
