import React from "react";
import { XCircleIcon } from '@heroicons/react/24/solid';
import { dataContext } from "../Context";


const CardCheckout = ({ data }) => {
    const { deleteProductCheckout } = React.useContext(dataContext)
    const { images, price, title, id} = data 
    return (
        <div className="w-full h-20 flex justify-between gap-4 px-2 mt-4 mb-2">
                <div className="flex items-center gap-2">
                    <img src={images} alt={title} className='object-cover w-20 rounded-lg h-20'/>
                    <span className="text-black text-start">{title}</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-black text-xl font-medium">${price}</span>
                    <XCircleIcon className="text-black w-8 h-8 cursor-pointer hover:text-red-500" onClick={() => deleteProductCheckout(id)}/>
                </div>
        </div>
    )
}

export { CardCheckout }