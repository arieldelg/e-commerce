import React from "react";
import { Link } from "react-router-dom";
import { dataContext } from "../../Components/Context";
import { MyOrdersCard } from "./MyOrderCard";
import { ChevronLeftIcon } from "@heroicons/react/24/outline"; 

const MyOrder = () => {
    const { newOrder, newKey } = React.useContext(dataContext)
    const pathName = window.location.pathname
    const searchTerm = '/'
    const makeSubstring = pathName.lastIndexOf(searchTerm) + 1
    const path = pathName.substring(makeSubstring)
    let index;
    let islast;
    if (path === 'last') {
        index = newOrder.length - 1
        islast = "Last Order"
    } else {
        index = newKey
        islast = 'Order'
    }
    return(
        <div>
            <div className="flex items-center justify-center w-full relative h-20">
                <Link to={'/my-orders'} className="flex items-center">
                    <ChevronLeftIcon className={'text-white w-10 absolute left-0 cursor-pointer'}/>
                </Link>
                <h1 className='text-center text-4xl my-4 font-bold'>My {islast}</h1>
            </div>
            <div className="w-full flex flex-col items-center gap-3">
               {
                newOrder[index]?.products.map(element => {
                    return <MyOrdersCard data={element} key={element.id}/>
                })
               }
            </div>
        </div>
    )
}

export { MyOrder }