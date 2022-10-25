import React from 'react'

import { FaTimes } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';
const Modal = () => {
  const navigate = useNavigate()
  return (
    <div className='modal'>
      <h1>meltem</h1>
      <FaTimes onClick={()=> navigate("/")} />
    </div>
  );
}

export default Modal
