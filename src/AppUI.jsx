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


const AppRoutes = () => {
    const routes = useRoutes([
        {path: '/' , element: <Home/>},
        {path: '/clothes' , element: <Home/>},
        {path: '/electronics' , element: <Home/>},
        {path: '/forniture' , element: <Home/>},
        {path: '/jewerly' , element: <Home/>},
        {path: '/sign-in' , element: <SignIn/>},
        {path: '/my-order' , element: <MyOrder/>},
        {path: '/my-orders' , element: <MyOrders/>},
        {path: '/my-orders/last' , element: <MyOrder/>},
        {path: '/my-orders/:id' , element: <MyOrder/>},
        {path: '/my-account' , element: <MyAccount/>},
        {path: '/*' , element: <NotFound/>},
    ])
    return routes
  }

const AppUI = () => {
    const { openCheckout} = React.useContext(dataContext)

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
            </BrowserRouter>
            </Layout>
        </>
    )
}

export { AppUI }