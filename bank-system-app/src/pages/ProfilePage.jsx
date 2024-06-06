import React from 'react'
import { SiberBar } from '../components/Sidebar/SiberBar'
import { AuthContext } from '../Index'
import { useState, useContext, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import queryString from 'query-string'


export const ProfilePage = () => {

    const navigate = useNavigate();
    const { dataUser } = useContext(AuthContext)

    const location = useLocation()
    const queryParams = queryString.parse(location.search)

    return (
        <>
            {
                dataUser.role == 'ADMIN' ? (
                    <SiberBar />
                ) : <></>
            }
            <div className="mother">
                <div className="container1">
                    <div className="title">
                        <p>Profile</p>
                    </div>
                    <form action="#">
                        <div className="user_details">
                            <div className="input_box">
                                <label htmlFor="inputName">Full Name</label>
                                <input type="text" id="inputName" placeholder="Enter your name" defaultValue={dataUser.name} name='name' readOnly />
                            </div>
                            <div className="input_box">
                                <label htmlFor="inputUsername">Username</label>
                                <input type="text" id="inputUsername" placeholder="Enter your username" defaultValue={queryParams.username || dataUser.username} name='username' readOnly />
                            </div>
                            <div className="input_box">
                                <label htmlFor="inputEmail">Email</label>
                                <input type="email" id="inputEmail" placeholder="Enter your email" defaultValue={queryParams.email || dataUser.email} name='email' readOnly />
                            </div>
                            <div className="input_box">
                                <label htmlFor="inputPhone">Phone Number</label>
                                <input type="text" id="inputPhone" placeholder="Enter your number" defaultValue={queryParams.phone || dataUser.phone} name='phone' readOnly />
                            </div>
                            <div className="input_box">
                                <label htmlFor="inputSalary">Salary</label>
                                <input type="number" id="inputSalary" placeholder="Enter your No.Account" defaultValue={dataUser.salary} name='salary' readOnly />
                            </div>
                            <div className="input_box">
                                <label htmlFor="inputDPI">DPI</label>
                                <input type="text" id="inputDPI" placeholder="Enter your DPI" defaultValue={dataUser.DPI} name='DPI' readOnly />
                            </div>
                            <div className="input_box">
                                <label htmlFor="inputWork">Name work</label>
                                <input type="text" id="inputWork" placeholder="Enter your work" defaultValue={dataUser.work} name='work' readOnly />
                            </div>
                            <div className="input_box" style={{ width: '100%' }}>
                                <label htmlFor="inputAddress">Address</label>
                                <input type="text" id="inputAddress" placeholder='Enter your Address' defaultValue={dataUser.adress} name="adress" readOnly />
                            </div>
                        </div>
                        {
                            dataUser.role == 'CLIENT' ?
                            <>
                            <div className='reg_btn'>
                                <button type='button' onClick={() => navigate(`/updateProfile/${dataUser.id}`)}>Update</button>
                            </div>
                            </> :
                            <></>
                        }
                    </form>
                </div>
            </div>
        </>
    )
}

