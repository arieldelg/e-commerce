import React from "react";
import { dataContext } from "../../Components/Context";


const SignIn = () => {
    const { info, setNewAccount, itemInfo, logIn } = React.useContext(dataContext)
    // hay que hacer un condicional de que si estamos logeados afuera y tenemos historial de datos nos los muestre, aparte de desactivar un el de registrarse
    const { email, password } = itemInfo


    return(
        <div className="w-96 flex flex-col"> 
            <h1 className="text-center text-4xl font-semibold py-3">Sign In</h1>
            <div className="flex flex-col my-4">
                {
                (itemInfo.name !== false && !info) &&
                <>
                    <span className="text-xl flex items-center gap-2">User:
                        <p className={'text-green-300 text-2xl'}>{email}</p>
                    </span>
                    <span className="text-xl flex items-center gap-2">Password: 
                    <p className={'text-green-300 text-2xl'}>{password}</p>
                    </span>
                </> 
                }
                {
                (itemInfo.name === false) &&
                <>
                    <span className="text-xl">User:</span>
                    <span className="text-xl">Password:</span>
                </> 
                }
                {
                (itemInfo.name !== false && info) &&
                <>
                    <span className="text-xl flex items-center gap-2">User:
                        <p className={'text-green-300 text-2xl'}>{email}</p>
                    </span>
                    <span className="text-xl flex items-center gap-2">Password: 
                    <p className={'text-green-300 text-2xl'}>{password}</p>
                    </span>
                </> 
                }
            </div>
            <div></div>
            {
                (itemInfo.name !== false && !info) &&
                <button className={`${(!info && itemInfo.name !== false) ? 'bg-white' : 'bg-gray-500'} w-full h-12 text-black text-2xl font-semibold rounded-md mb-4`} onClick ={() => logIn()}>Log In</button>
            }
            {
                (itemInfo.name !== false && info) &&
                <button className={`${(!info && itemInfo.name !== false) ? 'bg-white' : 'bg-gray-500'} w-full h-12 text-black text-2xl font-semibold rounded-md mb-4`} disabled={true}>Log In</button>
            }
            {
                (itemInfo.name === false && !info) &&
                <button className={`${(!info && itemInfo.name !== false) ? 'bg-white' : 'bg-gray-500'} w-full h-12 text-black text-2xl font-semibold rounded-md mb-4`} disabled={true}>Log In</button>
            }
            <span className="text-center w-full text-sm pb-5">Forgot Password?</span>
            {
                (itemInfo.name !== false && !info) &&
                <button disabled={true} className={`${(!info && itemInfo.name === false) ? 'bg-white' : 'bg-gray-500'} w-full h-12 text-black text-2xl font-semibold rounded-md mt-4 border border-black`} onClick={() => setNewAccount(true)}>Register</button>  
            }
            {
                (itemInfo.name === false && !info) &&
                <button className={`${(!info && itemInfo.name === false) ? 'bg-white' : 'bg-gray-500'} w-full h-12 text-black text-2xl font-semibold rounded-md mt-4 border border-black`} onClick={() => setNewAccount(true)} >Register</button>
            }
            {
                (itemInfo.name !== false && info) &&
                <button className={`${(!info && itemInfo.name !== false) ? 'bg-white' : 'bg-gray-500'} w-full h-12 text-black text-2xl font-semibold rounded-md mt-4 border border-black`} onClick={() => setNewAccount(true)} disabled={true}>Register</button>
            }
            
        </div>
    )
}

export { SignIn }