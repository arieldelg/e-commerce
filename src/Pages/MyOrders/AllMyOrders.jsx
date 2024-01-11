import React from "react";
import { ChevronRightIcon } from "@heroicons/react/24/outline"; 
import { Link } from "react-router-dom";
import { dataContext } from "../../Components/Context";


const AllMyOrders = ({ data }) => {
    const  { date, totalPrice, totalProducts, key} = data
    const { setNewKey } = React.useContext(dataContext)
    return (
        <div className="flex w-full justify-between items-center bg-white my-2 h-16 rounded-xl">
            <div className="flex flex-col px-3">
                <span className="text-black">{date}</span>
                <span className="text-black">{totalProducts} Items</span>
            </div>
            <div className="flex items-center gap-4">
                <span className="text-black text-2xl font-semibold">${totalPrice}</span>
                <Link to={`/e-commerce/my-orders/${key}`}>
                    <ChevronRightIcon className="text-black w-10 h-10" onClick={() => setNewKey(key)}/>
                </Link>
            </div>
        </div>
    )
}

export { AllMyOrders }