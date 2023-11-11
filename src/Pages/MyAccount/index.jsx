import React from "react";
import { dataContext } from "../../Components/Context";

const MyAccount = () => {
    const { itemInfo, setNewAccount } = React.useContext(dataContext)
    const { email, password } = itemInfo
    return(
        <div className="w-96">
            <h1 className="text-center text-3xl py-3">My Account</h1>
            <span className="text-xl flex items-center gap-2">User:
                <p className={'text-green-300 text-2xl'}>{email}</p>
            </span>
            <span className="text-xl flex items-center gap-2">Password: 
                <p className={'text-green-300 text-2xl'}>{password}</p>
            </span>
            <button className="bg-white text-black w-full my-4 h-10 rounded-md text-xl font-semibold" onClick={() => setNewAccount(true)}>Edit</button>
        </div>
    )
}

export { MyAccount }