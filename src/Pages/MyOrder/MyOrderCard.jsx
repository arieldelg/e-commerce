import React from "react";

const MyOrdersCard = ({ data }) => {
    const { images, title, price } = data
    return (
        <div className="w-96 h-20 flex items-center justify-between bg-white rounded-2xl">
            <div className="flex items-center gap-2">
                <img src={images} alt={title} className="w-20 h-20 rounded-2xl"/>
                <span className="text-black text-xl">{title}</span>
            </div>
            <div>
                <span className="text-black text-xl font-bold pr-2">${price}</span>
            </div>
        </div>
    )
}

export { MyOrdersCard }