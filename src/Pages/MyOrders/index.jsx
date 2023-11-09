import React from "react";
import { dataContext } from "../../Components/Context";
import { AllMyOrders } from "./AllMyOrders";

const MyOrders = () => {
    const { newOrder } = React.useContext(dataContext)
    return(
        <div>
            <h1 className="text-center text-4xl font-semibold py-4">My Orders</h1>
            <div className="w-96">
                {
                    newOrder.map(element => {
                        return <AllMyOrders data={element} key={element.key}/>
                    })
                }
            </div>
        </div>
    )
}

export { MyOrders }