import React, { createContext } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import { HomePage } from './pages/HomePage'
import { NotFoundPage } from './pages/NotFoundPage'
import { LoginPage } from './pages/LoginPage'
import { AdminPage } from './pages/AdminPage'
import { AddClient } from './pages/CreatePages/AddClient'
import { ClienteView } from './pages/ViewsPage/ClienteView'
import { useState } from 'react'
import { useEffect } from 'react'
import { ProfilePage } from './pages/ProfilePage'
import { UpdateProfile } from './pages/Updates/Profile'
import { UpdateClient } from './pages/Updates/Client'
import { TypeAccountsView } from './pages/ViewsPage/TypeAccountsView'
import { ProductsView } from './pages/ViewsPage/ProductsView'
import { ServicesView } from './pages/ViewsPage/ServicesView'
import { UpdateServices } from './pages/Updates/Services'
import { UpdateProduct } from './pages/Updates/Product'
import { TransferView } from './pages/ViewsPage/TransferView'
import { DepositView } from './pages/ViewsPage/DepositView'
import { ProfileAccountsPage } from './pages/ProfileAccountsPage'
import { AccountView } from './pages/ViewsPage/AccountView'
import { FavoritPage } from './pages/FavoritPage'
import { HistoryView } from './pages/ViewsPage/HistoryView'
import { BuyServicePage } from './pages/BuyServicePage'
import { BuyProductPage } from './pages/BuyProductPage'
import { ChangePage } from './pages/ChangePage'

export const AuthContext = createContext();

export const Index = () => {

    const [loggedIn, setLoggedIn] = useState(false)
    const [contextData, setContextData] = useState(null)

    const [dataUser, setDataUser] = useState({
        id: '',
        name: '',
        username: '',
        DPI: '',
        adress: '',
        phone: '',
        email: '',
        work: '',
        salary: '',
        role: ''
    })

    useEffect(() => {
        let token = localStorage.getItem('token')
        if (token) setLoggedIn(true)
    }, []);

    const handleLogout = () => {
        setLoggedIn(false);
        setDataUser({
            id: '',
            name: '',
            username: '',
            DPI: '',
            adress: '',
            phone: '',
            email: '',
            work: '',
            salary: '',
            role: ''
        });
    };

    const routes = createBrowserRouter([
        {
            path: '/',
            element: <App />,
            errorElement: <NotFoundPage />,
            children: [
                {
                    path: '/',
                    element: <LoginPage />
                },
                {
                    path: '/home',
                    element: <AdminPage />
                },
                {
                    path: '/create',
                    element: <AddClient />
                },
                {
                    path: '/clients',
                    element: <ClienteView />
                },
                {
                    path: '/profile',
                    element: <ProfilePage />
                },
                {
                    path: '/updateProfile/:id',
                    element: <UpdateProfile />
                },
                {
                    path: '/updateClient/:id',
                    element: <UpdateClient />
                },
                {
                    path: '/typeAccount',
                    element: <TypeAccountsView />
                },
                {
                    path: '/products',
                    element: <ProductsView />
                },
                {
                    path: '/services',
                    element: <ServicesView />
                },
                {
                    path: '/updateService/:id',
                    element: <UpdateServices />
                },
                {
                    path: '/account',
                    element: <AccountView />
                },
                {
                    path: '/updateProduct/:id',
                    element: <UpdateProduct />
                },
                {
                    path: '/tranfers',
                    element: <TransferView />
                },
                {
                    path: '/deposits',
                    element: <DepositView />
                },
                {
                    path: '/ProfileAccountUser',
                    element: <ProfileAccountsPage />
                },
                {
                    path: '/favorite',
                    element: <FavoritPage />
                },
                {
                    path: '/history/:id?',
                    element: <HistoryView/>
                },
                {
                    path: '/shopService',
                    element: <BuyServicePage></BuyServicePage>
                },
                {
                    path: '/buyProducts',
                    element: <BuyProductPage />
                },
                {
                    path: '/change',
                    element: <ChangePage/>
                }
            ]
        }
    ])
    return (
        <>
            <AuthContext.Provider value={{ loggedIn, setLoggedIn, dataUser, setDataUser, handleLogout }}>
                <RouterProvider router={routes} />
            </AuthContext.Provider>
        </>
    )
}
