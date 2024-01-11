import React from "react";
import { useRoutes, BrowserRouter } from "react-router-dom";
import { ModalCheckout } from "./Components/ModalCheckout";
import { CheckoutMenu } from "./Components/ModalCheckout/CheckoutMenu";
import { Navbar } from './Components/Navbar';
import { Layout } from './Components/Layout'
import { Home } from "./Pages/Home";
import { SignIn } from './Pages/SignIn';
import { MyOrder } from './Pages/MyOrder'
import { MyOrders } from './Pages/MyOrders'
import { MyAccount } from './Pages/MyAccount';
import { NotFound } from './Pages/NotFound';
import { dataContext } from "./Components/Context";
import { ModalRegister } from "./Components/ModalRegister";
import { NewAccount } from "./Components/ModalRegister/NewAccount";

const AppRoutes = () => {
    const routes = useRoutes([
        {path: '/e-commerce' , element: <Home/>},
        {path: '/e-commerce/clothes' , element: <Home/>},
        {path: '/e-commerce/electronics' , element: <Home/>},
        {path: '/e-commerce/forniture' , element: <Home/>},
        {path: '/e-commerce/jewerly' , element: <Home/>},
        {path: '/e-commerce/sign-in' , element: <SignIn/>},
        {path: '/e-commerce/my-order' , element: <MyOrder/>},
        {path: '/e-commerce/my-orders' , element: <MyOrders/>},
        {path: '/e-commerce/my-orders/last' , element: <MyOrder/>},
        {path: '/e-commerce/my-orders/:id' , element: <MyOrder/>},
        {path: '/e-commerce/my-account' , element: <MyAccount/>},
        {path: '/e-commerce/*' , element: <NotFound/>},
    ])
    return routes
  }

const AppUI = () => {
    const { openCheckout, newAccount} = React.useContext(dataContext)

    return(
        <>
            <Layout>
            <BrowserRouter>
            <Navbar/>
            <AppRoutes/>
            {openCheckout &&
                <ModalCheckout>
                    <CheckoutMenu/>
                </ModalCheckout>
            }
            {
                newAccount &&
                <ModalRegister>
                    <NewAccount/> 
                </ModalRegister>
            }
            </BrowserRouter>
            </Layout>
        </>
    )
}

export { AppUI }