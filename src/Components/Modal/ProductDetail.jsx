import React from "react";
import { XCircleIcon } from '@heroicons/react/24/solid';
import { dataContext } from "../Context";


const ProductDetail = () => {
    const { setOpenPortal, toProductDetail } = React.useContext(dataContext)
    const {title, images, description, price} = toProductDetail
    return(
        <>
            <div className="flex w-full justify-between px-4 pt-3 items-center">
                <span className="text-black text-2xl font-medium">Detalles</span>
                <XCircleIcon className="text-black w-8 h-8 cursor-pointer hover:text-red-500" onClick={() => setOpenPortal(false)}/>
            </div>
            <div className="m-2 mt-8">
                <img src={images} alt={title} className="rounded-xl"/>
                <div className="mt-4 flex justify-between items-center mb-4">
                    <span className="text-black text-2xl">{title}</span>
                    <span className="text-black text-3xl font-bold">${price}</span>
                </div>
                <span className="text-black text-lg">{description}</span>
            </div>
        </>
    )
}

export { ProductDetail }