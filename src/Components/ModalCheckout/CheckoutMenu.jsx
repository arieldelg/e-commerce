import React from "react";
import { XCircleIcon } from '@heroicons/react/24/solid';
import { dataContext } from "../Context";
import { CardCheckout } from "./CardCheckout";
import { totalPrice } from "../../utils";
import { Link } from "react-router-dom";

const CheckoutMenu = () => {
    const { setOpenCheckout, addProduct, myLastOrder  } = React.useContext(dataContext)
    return (
        <>
            <div className="flex w-full justify-between px-4 py-3 items-center">
                <span className="text-black text-2xl font-medium">My Order</span>
                <XCircleIcon className="text-black w-8 h-8 cursor-pointer hover:text-red-500" onClick={() => setOpenCheckout(false)}/>
            </div>
            <div className='overflow-scroll overflow-checkout'>
                {
                    addProduct.map(element => {
                        return <CardCheckout data={element} key={element.id}/>
                    })
                }
            </div>
            <div className="w-full flex justify-between px-2 py-4">
                <span className="text-black text-2xl">Total</span>
                <span className="text-black text-2xl font-bold">${totalPrice(addProduct)}</span>
            </div>
            <div className="w-full flex items-center h-16">
                <Link to={'/my-orders/last'} className="w-full h-full mx-2">
                    <button className="text-white w-full h-full bg-black rounded-lg text-2xl" onClick={() => myLastOrder(addProduct, totalPrice(addProduct))}>Checkout</button>
                </Link>
            </div>
        </>
    )
}

export { CheckoutMenu }