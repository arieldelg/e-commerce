import React from "react";
import { PlusCircleIcon } from '@heroicons/react/24/solid';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { dataContext } from "../Context";



const ProductCard = ({ data }) => {
    const {  addToCart, openProductDetail, addProduct } = React.useContext(dataContext)
    const { title, images, description, price, category } = data
    const renderIcon = () => {
        const isTrue = addProduct.find(element => element.id === data.id)
       if (isTrue) {
            return <CheckCircleIcon onClick={(event) => addToCart(event, data)} className={`text-green-600 h-7 w-7 absolute top-1 right-1 cursor-pointer`} />
        } else {
            return <PlusCircleIcon onClick={(event) => addToCart(event, data)} className={`text-white h-7 w-7 absolute top-1 right-1 cursor-pointer hover:text-green-600`} />
        }  
    }
    return (
        <div className="h-72 w-full">
            <figure className="h-4/5 w-full flex flex-col relative" onClick={() => openProductDetail(data)}>
                <span>
                    {renderIcon()}
                </span>
                <img src={ images } alt={ title } className='object-cover h-full rounded-lg'/>
                <span className="absolute bottom-2 left-2 text-white bg-black px-3 py-1 text-xs rounded-full border-white border-2">{ category.name }</span>
            </figure>
            <div className="flex w-full justify-between gap-4 py-1">
                <span className='text-start text-sm'>{ title }</span>
                <span className="text-xl font-semibold">${ price }</span>
            </div>
        </div>
    )
}

export { ProductCard }