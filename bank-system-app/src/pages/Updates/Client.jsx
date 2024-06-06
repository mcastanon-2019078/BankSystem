import React, { useContext } from 'react'
import { useState, useEffect } from 'react'
import { SiberBar } from '../../components/Sidebar/SiberBar'
import { AuthContext } from '../../Index'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useParams } from 'react-router-dom'

export const UpdateClient = () => {

    const navigate = useNavigate();
    const { dataUser } = useContext(AuthContext)

    const [tableUserInfo, setTableUserInfo] = useState([{}])
    const { id } = useParams()

    const getClient = async () => {
        try {
            const { data } = await axios(`http://localhost:2880/user/getById/${id}`)
            setTableUserInfo(data.user)
        } catch (e) {
            console.log(e);
        }
    }

    const updateAccountClient = async () => {
        try {
            let updatedClient = {
                name: document.getElementById('inputName').value,
                username: document.getElementById('inputUsername').value,
                email: document.getElementById('inputEmail').value,
                phone: document.getElementById('inputPhone').value,
                salary: document.getElementById('inputSalary').value,
                work: document.getElementById('inputWork').value,
                adress: document.getAnimations('inputAddress').value
            }
            const { data } = await axios.put(`http://localhost:2880/user/update/${id}`, updatedClient)
            Swal.fire({
                icon: 'success',
                title: data.message
            })
            navigate('/clients')
        } catch (e) {
            Swal.fire({
                icon: 'error',
                title: e.response.data.message
            })
        }
    }

    useEffect(() => getClient, [])

    return (
        <>
            <SiberBar />
            <div className='mother'>
                <div className='container1'>
                    <div className='title'>
                        <p>Update Client</p>
                    </div>
                    <form action='#'>
                        <div className='user_details'>
                            <div className='input_box'>
                                <label htmlFor='inputName'>Full Name</label>
                                <input type='text' id='inputName' placeholder='Enter your name' defaultValue={tableUserInfo.name} name='name' required />
                            </div>
                            <div className='input_box'>
                                <label htmlFor='inputUsername'>Username</label>
                                <input type='text' id='inputUsername' placeholder='Enter your username' defaultValue={tableUserInfo.username} name='username' required />
                            </div>
                            <div className='input_box'>
                                <label htmlFor='inputEmail'>Email</label>
                                <input type='email' id='inputEmail' placeholder='Enter your email' defaultValue={tableUserInfo.email} name='email' required />
                            </div>
                            <div className='input_box'>
                                <label htmlFor='inputPhone'>Phone Number</label>
                                <input type='number' id='inputPhone' placeholder='Enter your number' defaultValue={tableUserInfo.phone} name='phone' required />
                            </div>
                            <div className='input_box'>
                                <label htmlFor='inputSalary'>Salary</label>
                                <input type='number' id='inputSalary' placeholder='Enter your No.Account' defaultValue={tableUserInfo.salary} name='salary' required />
                            </div>
                            <div className='input_box'>
                                <label htmlFor='inputDPI'>Work</label>
                                <input type='text' id='inputWork' placeholder='Enter your work' defaultValue={tableUserInfo.work} name='work' required />
                            </div>
                            <div className='input_box' style={{ width: '100%' }}>
                                <label htmlFor='inputAddress'>Address</label>
                                <input type='text' id='inputAddress' placeholder='Enter your Address' defaultValue={tableUserInfo.adress} name='adress' required />
                            </div>
                        </div>
                        <div className='reg_btn'>
                            <div className="row">
                                <div className="col">
                                    <button type='button' onClick={() => updateAccountClient()}>Update Client</button>
                                </div>
                                <div className="col reg_btnC">
                                    <button type='button' onClick={() => navigate('/clients')}>Cancel</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
