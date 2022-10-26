import React from 'react'

import { FaTimes } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';
const Modal = ({modal,setModal}) => {
  
  return (
    <div className="modal">
      <FaTimes className="close" onClick={() => setModal(!modal)} />
      <h1>meltem</h1>
    </div>
  );
}

export default Modal
