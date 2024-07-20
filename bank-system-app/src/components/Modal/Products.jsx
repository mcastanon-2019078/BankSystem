import axios from 'axios'
import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'



export const ModalProduct = ({ isOpen, onClose, update }) => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    price: ''
  })

  const createHandleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const create = async () => {
    try {
      const token = localStorage.getItem('token')
      const { data } = await axios.post('https://deploy-bank.vercel.app/product/add', form,
        {
          headers: {
            token
          }
        }
      )
      Swal.fire({
        icon: 'success',
        title: data.message
      })
      update();
      onClose();
    } catch (e) {
      Swal.fire({
        icon: 'error',
        title: data.message
      })
    }
  }
  return (
    <>
      <Modal show={isOpen}>
        <Modal.Header>
          <Modal.Title className='text-dark'>Create Product</Modal.Title>
          <button onClick={onClose} type="button" className="btn" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </Modal.Header>
        <Modal.Body>
          <form action="#">
            <div className="user_details">
              <div className="input_box">
                <label htmlFor="inputName">Name</label>
                <input type="text" id="inputName" placeholder="Enter the name" name='name' onChange={createHandleChange} required />
              </div>
              <div className="input_box">
                <label htmlFor="inputUsername">Price</label>
                <input type="number" id="inputPrice" placeholder="Enter the price" name='price' onChange={createHandleChange} required />
              </div>
            </div>
            <div className="reg_btn">
              <button type='button' onClick={(e) => create(e)}>Create</button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  )
}
