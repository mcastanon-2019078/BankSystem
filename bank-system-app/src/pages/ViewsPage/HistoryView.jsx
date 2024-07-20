import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AuthContext } from '../../Index'
import { SiberBar } from '../../components/Sidebar/SiberBar'

export const HistoryView = () => {
  const [data, setData] = useState([{}]);
  const [showDeposit, setShowDeposit] = useState(false);
  const [showTransfer, setTransfer] = useState(false);
  const [showProducts, setShowProducts] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [title, setTitle] = useState('History');
  const params = useParams();
  const id = params.id
  const [ idSearch, setIdSearch ] = useState(id);

  const { dataUser } = useContext(AuthContext);

  const changeSearch = ()=> {
    if(id === undefined){
      setIdSearch(dataUser.id);
    }else{
      setIdSearch(id);
    }
  }

  const getDeposit = async (activate2) => {
    try {
      setTitle('History Deposit');
      handleButtonClick(activate2);
      //const { data } = await axios(`http://localhost:3000/historyDeposit/get/${idSearch}`);
      const token = localStorage.getItem('token');
      const { data } = await axios(`https://deploy-bank.vercel.app/depositH/get/${idSearch}`,
        {
          headers: {
            token
          }
        }
      );
      setData(data.history)
      console.log(showDeposit);
    } catch (e) {
      console.log(e);
    }
  }

  const getTransfer = async (activate2) => {
    try {
      if(!id || id === undefined){
        setIdSearch(dataUser.id);
      }else{
        setIdSearch(id);
      }
      setTitle('History Transfer');
      handleButtonClick(activate2);
      const token = localStorage.getItem('token');
      const { data } = await axios(`https://deploy-bank.vercel.app/transferH/get/${idSearch}`,
        {
          headers: {
            token
          }
        }
      );
      setData(data.history)
    } catch (e) {
      console.log(e);
    }
  }

  const getProducts = async (activate2) => {
    try {
      if(!id || id === undefined){
        setIdSearch(dataUser.id);
      }else{
        setIdSearch(id);
      }
      setTitle('History purchased products');
      handleButtonClick(activate2);
      const token = localStorage.getItem('token');
      const { data } = await axios(`https://deploy-bank.vercel.app/productsH/get/${idSearch}`,
        {
          headers: {
            token
          }
        }
      );
      setData(data.history);
    } catch (e) {
      console.log(e);
    }
  }

  const getServices = async (activate2) => {
    try {
      if(!id || id === undefined){
        setIdSearch(dataUser.id);
      }else{
        setIdSearch(id);
      }
      setTitle('History purchased services');
      handleButtonClick(activate2);
      const token = localStorage.getItem('token');
      const { data } = await axios(`https://deploy-bank.vercel.app/serviceH/get/${idSearch}`,
        {
          headers: {
            token
          }
        }
      );
      setData(data.history);
    } catch (e) {
      console.log(e);
    }
  }

  function handleButtonClick(activate) {
    const newState = {
      showDeposit: false,
      showProducts: false,
      showTransfer: false,
      showServices: false

    }

    switch (activate) {
      case 'showDeposit':
        newState.showDeposit = true;
        break;
      case 'showTransfer':
        newState.showTransfer = true;
        break;
      case 'showProducts':
        newState.showProducts = true;
        break;
      case 'showService':
        newState.showServices = true;
        break;
      default:
        break;
    }

    setShowDeposit(newState.showDeposit);
    setTransfer(newState.showTransfer);
    setShowServices(newState.showServices);
    setShowProducts(newState.showProducts);

  }

  useEffect(()=> {changeSearch()}, []);

  return (
    <>
      {
        dataUser.role == 'ADMIN' ?
        <>
        <SiberBar></SiberBar>
        </> :
        <></>
      }
      <nav className='navbar navbar-expand-lg navbar-light' style={{ marginTop: '6rem' }}>
        <div className='container-fluid'>
          <div className='collapse navbar-collapse justify-content-center' id='navbarCenteredExample' >
            <h1 className='text-black' style={{ fontSize: '2.5rem' }}>{title}</h1>
          </div>
        </div>
      </nav>

      <div className="container t">
        <div className="row d-flex justify-content-center ">
          <div className="col-md-2 col-lg-4">
            <div className="row">
              <div className="col1" style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <button onClick={() => getDeposit('showDeposit', this)} className='btn btn-primary'>DEPOSITS</button>
                &ensp;
                <button onClick={() => getTransfer('showTransfer', this)} className='btn btn-primary'>TRANSFERS</button>
                &ensp;
                <button onClick={() => getProducts('showProducts', this)} className='btn btn-primary'>PRODUCTS</button>
                &ensp;
                <button onClick={() => getServices('showService', this)} className='btn btn-primary'>SERVICES</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className='intro' style={{ marginTop: '3rem' }}>
        <div className='bg-image h-100' style={{ backgroundColor: '#f5f7fa', marginTop: '1.5rem' }}>
          <div className='mask d-flex align-items-center h-100'>
            <div className='container'>
              <div className='row justify-content-center'>
                <div className='col-10' >
                  <div className='card box-shadow'>
                    <div className='card-body p-0'>
                      <div className='table-responsive table-scroll' data-mdb-perfect-scrollbar='true' style={{ position: 'relative', height: '700px' }}>
                        <table className='table table-striped'>
                          <thead style={{ backgroundColor: '#8c7c62' }}>
                            <tr>
                              {
                                showDeposit ?
                                  <>
                                    <th scope='col' className='text-white' style={{ backgroundColor: '#15297c' }} >ID</th>
                                    <th scope='col' className='text-white' style={{ backgroundColor: '#15297c' }} >AMOUNT</th>
                                    <th scope='col' className='text-white' style={{ backgroundColor: '#15297c' }} >DATE</th>
                                    <th scope='col' className='text-white' style={{ backgroundColor: '#15297c' }} >HOUR</th>
                                  </>
                                  :
                                  showTransfer ?
                                    <>
                                      <th scope='col' className='text-white' style={{ backgroundColor: '#15297c' }} >ACCOUNT SENDER</th>
                                      <th scope='col' className='text-white' style={{ backgroundColor: '#15297c' }} >ACCOUNT REQ</th>
                                      <th scope='col' className='text-white' style={{ backgroundColor: '#15297c' }} >AMOUNT</th>
                                      <th scope='col' className='text-white' style={{ backgroundColor: '#15297c' }} >DATE</th>
                                      <th scope='col' className='text-white' style={{ backgroundColor: '#15297c' }} >HOUR</th>
                                      <th scope='col' className='text-white' style={{ backgroundColor: '#15297c' }} >DESCRIPTION</th>
                                    </>
                                    : showProducts ?
                                      <>
                                        <th scope='col' className='text-white' style={{ backgroundColor: '#15297c' }} >PRODUCT</th>
                                        <th scope='col' className='text-white' style={{ backgroundColor: '#15297c' }} >QUANTITY</th>
                                        <th scope='col' className='text-white' style={{ backgroundColor: '#15297c' }} >PRICE</th>
                                        <th scope='col' className='text-white' style={{ backgroundColor: '#15297c' }} >TOTAL</th>
                                        <th scope='col' className='text-white' style={{ backgroundColor: '#15297c' }} >PAYMENT ACCOUNT</th>
                                      </>
                                      : showServices ?
                                        <>
                                          <th scope='col' className='text-white' style={{ backgroundColor: '#15297c' }} >Service</th>
                                          <th scope='col' className='text-white' style={{ backgroundColor: '#15297c' }} >PRICE</th>
                                          <th scope='col' className='text-white' style={{ backgroundColor: '#15297c' }} >PAYMENT ACCOUNT</th>
                                        </>
                                        :
                                        <>
                                        </>
                              }
                            </tr>
                          </thead>
                          <tbody>
                            {
                              showDeposit ?
                                data.map(({ _id, deposit }, i) => {
                                  return (
                                    <tr key={i}>
                                      <td>{deposit?._id}</td>
                                      <td>{'Q' + deposit?.amount}</td>
                                      <td>{deposit?.date}</td>
                                      <td>{deposit?.hour}</td>
                                    </tr>
                                  )
                                })
                                : showTransfer ?
                                  data.map(({ _id, transfer }, i) => {
                                    return (
                                      <tr key={i}>
                                        <td>{transfer?.accountSender}</td>
                                        <td>{transfer?.accountReq}</td>
                                        <td>{'Q' + transfer?.amount}</td>
                                        <td>{transfer?.date}</td>
                                        <td>{transfer?.hour}</td>
                                        <td>{transfer?.description}</td>
                                      </tr>
                                    )
                                  })
                                  : showProducts ?
                                    data.map(({ product }, i) => {
                                      return (
                                        <tr key={i}>
                                          <td>{product?.product?.name}</td>
                                          <td>{product?.quantity}</td>
                                          <td>{'Q' + product?.product?.price}</td>
                                          <td>{'Q' + (product?.product?.price) * (product?.quantity)}</td>
                                          <td>{product?.account}</td>
                                        </tr>
                                      )
                                    })
                                    : showServices ?
                                      data.map(({ service }, i) => {
                                        return (
                                          <tr key={i}>
                                            <td>{service?.service.name}</td>
                                            <td>{'Q' + service?.service.price}</td>
                                            <td>{service?.account}</td>
                                          </tr>
                                        )
                                      })
                                      :
                                      <></>

                            }
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >
      <br />
    </>
  )
}
