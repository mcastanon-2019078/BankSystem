import React, { useEffect, useState } from 'react'
import { SiberBar } from '../../components/Sidebar/SiberBar'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import Swal from 'sweetalert2';


export const UpdateProduct = () => {
    const navigate = useNavigate();
    const [tableProduct, setTableProduct] = useState([{}]);
    const { id } = useParams();

    const getTableProduct = async () => {
        try {
            const { data } = await axios(`http://localhost:2880/product/getById/${id}`);
            setTableProduct(data.product);
        } catch (e) {
            console.log(e);
        }
    }

    const updateProduct = async () => {
        try {
            let updatedProduct = {
                name: document.getElementById('inputName').value,
                price: document.getElementById('inputPrice').value
            }
            const { data } = await axios.put(`http://localhost:2880/product/update/${id}`, updatedProduct)
            Swal.fire({
                icon: 'success',
                title: data.message
            })
            navigate('/products')
        } catch (e) {
            Swal.fire({
                icon: 'error',
                title: e.response.data.message
            })
        }
    }

    useEffect(() => getTableProduct, [])
    return (
        <>
            <SiberBar />
            <div className="mother">
                <div className="container1">
                    <div className="title">
                        <p>Update Product</p>
                    </div>
                    <form action="#">
                        <div className="user_details">
                            <div className="input_box">
                                <label htmlFor="inputName">Name</label>
                                <input defaultValue={tableProduct.name} type="text" id="inputName" placeholder="Enter the name" name='name' required />
                            </div>
                            <div className="input_box">
                                <label htmlFor="inputPrice">Price</label>
                                <input defaultValue={tableProduct.price} type="number" id="inputPrice" placeholder="Enter the price" name='price' required />
                            </div>
                        </div>
                        <div className="reg_btn">
                            <div className="row">
                                <div className="col">
                                    <button type='button' onClick={() => updateProduct()} >Update</button>
                                </div>
                                <div className="col reg_btnC">
                                    <button type='button' onClick={() => navigate('/products')} >Cancel</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
