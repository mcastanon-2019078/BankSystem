import React, { useContext, useState } from 'react'
import { SiberBar } from '../../components/Sidebar/SiberBar'
import { AuthContext } from '../../Index'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useEffect } from 'react'

export const UpdateProfile = () => {

    const navigate = useNavigate();
    const { dataUser } = useContext(AuthContext)

    const [tableUserInfo, setTbleUserInfo] = useState([{}])
    const { id } = useParams();

    const getAccount = async () => {
        try {
            const { data } = await axios(`http://localhost:2880/user/getById/${id}`)
            setTbleUserInfo(data.user)
        } catch (e) {
            console.log(e);
        }
    }

    const updateAccountUser = async () => {
        try {
            let updatedAccountUser = {
                username: document.getElementById('inputUsername').value,
                email: document.getElementById('inputEmail').value,
                phone: document.getElementById('inputPhone').value
            }
            const { data } = await axios.put(`http://localhost:2880/user/update/${id}`, updatedAccountUser)
            Swal.fire({
                icon: 'success',
                title: data.message
            })
            if(data.message == 'Updated User') {
                navigate(`/profile?username=${updatedAccountUser.username}&email=${updatedAccountUser.email}&phone=${updatedAccountUser.phone}`)
            }
        } catch (e) {
            Swal.fire({
                icon: 'error',
                title: e.response.data.message
            })
        }
    }

    useEffect(() => getAccount, [])

    return (
        <>
            <SiberBar />
            <div className="mother">
                <div className="container1">
                    <div className="title">
                        <p>Update</p>
                    </div>
                    <form action="#">
                        <div className="user_details">
                            <div className="input_box">
                                <label htmlFor="inputUsername">Username</label>
                                <input type="text" id="inputUsername" placeholder="Enter your username" defaultValue={tableUserInfo.username} name='username' />
                            </div>
                            <div className="input_box">
                                <label htmlFor="inputEmail">Email</label>
                                <input type="email" id="inputEmail" placeholder="Enter your email" defaultValue={tableUserInfo.email} name='email' />
                            </div>
                            <div className="input_box">
                                <label htmlFor="inputPhone">Phone Number</label>
                                <input type="number" id="inputPhone" placeholder="Enter your number" defaultValue={tableUserInfo.phone} name='phone' />
                            </div>
                        </div>
                        <div className='reg_btn'>
                            <div className="row">
                                <div className="col">
                                    <button type='button' onClick={() => updateAccountUser()}>Confirm</button>
                                </div>
                                <div className="col reg_btnC" >
                                    <button type='button'onClick={() => navigate('/profile')} >Cancel</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
