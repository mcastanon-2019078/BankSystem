import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { SiberBar } from '../../components/Sidebar/SiberBar';

export const AddClient = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    username: '',
    DPI: '',
    address: '',
    phone: '',
    email: '',
    password: '',
    workname: '',
    role: '',
    age: '',
    balance: '',
    typeAccount: ''

  });

  const registerHandleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const save = async (e) => {
    try {
      const token = localStorage.getItem('token')
      if (!token) {
        return Swal.fire({
          icon: 'error',
          title: 'You must be logged in to perform this action'
        })
      }
      const response = await axios.post('http://localhost:3000/createUser', form,
        {
          headers: {
            'token': token
          }
        })
      console.log(response);
      const { data } = response
      if (data && data.message) {
        Swal.fire({
          icon: 'success',
          title: data.message
        });
      }
      document.getElementById('formm').reset();
    } catch (e) {
      if (e.response && e.response.data && e.response.data.message) {
        Swal.fire({
          icon: 'error',
          title: e.response.data.message
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'An error occurred'
        });
      }
    }
  }

  return (
    <>
      <SiberBar />
      <div className='mother'>
        <div className='container1'>
          <div className='title'>
            <p>Registration</p>
          </div>
          <form id='formm'>
            <div className='user_details'>
              <div className='input_box'>
                <label htmlFor='inputName'>Full Name</label>
                <input type='text' id='inputName' placeholder='Enter your name' name='name' onChange={registerHandleChange} required />
              </div>
              <div className='input_box'>
                <label htmlFor='inputUsername'>Username</label>
                <input type='text' id='inputUsername' placeholder='Enter your username' name='username' onChange={registerHandleChange} required />
              </div>
              <div className='input_box'>
                <label htmlFor='inputEmail'>Email</label>
                <input type='email' id='inputEmail' placeholder='Enter your email' name='email' onChange={registerHandleChange} required />
              </div>
              <div className='input_box'>
                <label htmlFor='inputPhone'>Phone Number</label>
                <input type='number' id='inputPhone' placeholder='Enter your number' name='phone' onChange={registerHandleChange} required />
              </div>
              <div className='input_box'>
                <label htmlFor='inputBalance'>Salary</label>
                <input type='number' id='inputBalance' placeholder='Enter your No.Account' name='balance' onChange={registerHandleChange} required />
              </div>
              <div className='input_box'>
                <label htmlFor='inputDPI'>DPI</label>
                <input type='number' id='inputDPI' placeholder='Enter your DPI' name='DPI' onChange={registerHandleChange} required />
              </div>
              <div className='input_box'>
                <label htmlFor='inputWork'>Work</label>
                <input type='text' id='inputWork' placeholder='Enter your work' name='workname' onChange={registerHandleChange} required />
              </div>
              <div className='input_box'>
                <label htmlFor='inputPass'>Password</label>
                <input type='password' id='inputPass' placeholder='Enter your password' name='password' onChange={registerHandleChange} required />
              </div>
              <div className='input_box' style={{ width: '100%' }}>
                <label htmlFor='inputAddress'>Address</label>
                <input type='text' id='inputAddress' placeholder='Enter your Address' name='address' onChange={registerHandleChange} required />
              </div>
              <div className='input_box'>
                <label htmlFor='inputAge'>Age</label>
                <input type='number' id='inputAge' placeholder='Enter your Age' name='age' onChange={registerHandleChange} required />
              </div>
              <div className='input_box' style={{ width: '100%' }}>
                <label htmlFor='inputRole'>Type Account</label>
                <select className='select form-select' aria-label='Default select example' id='inputRole' placeholder='Select to role' name='role' onChange={registerHandleChange}>
                  <option value={form.role}>Select type account</option>
                  <option value='saving'>Saving</option>
                  <option value='current'>Current</option>
                </select>
              </div>
              <div className='input_box' style={{ width: '100%' }}>
                <label htmlFor='inputTypeAccount'>Role</label>
                <select className='select form-select' aria-label='Default select example' id='inputTypeAccount' placeholder='Select to role' name='typeAccount' onChange={registerHandleChange}>
                  <option value={form.role}>Select to role</option>
                  <option value='ADMIN'>Admin</option>
                  <option value='CLIENT'>Client</option>
                </select>
              </div>
            </div>
            <div className='reg_btn'>
              <button type='button' onClick={(e) => save(e)}>Register</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
