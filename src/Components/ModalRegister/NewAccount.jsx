import React from "react";
import { dataContext } from "../Context";
import { Link } from "react-router-dom";

const NewAccount = () => {
    const { saveAccount, setNewAccount } = React.useContext(dataContext)
    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const createAccount = () => {
        const newAccount = {
            name: name,
            email: email,
            password: password
        }
        saveAccount(newAccount)
        setNewAccount(false)
    }
    return (
        <div className="text-black flex flex-col items-center mt-10">
            <h1 className="text-5xl font-bold my-4">Crea Cuenta</h1>
            <div className="flex flex-col my-2">
                <label htmlFor="name" className="text-sm mb-1">Your name:</label>
                <input type="text" id="name"  placeholder="Your name here:" className="w-80 h-10 px-3 rounded-md text-white" onChange={(event) => setName(event.target.value)} value={name}/>   
            </div>
            <div className="flex flex-col my-2">
                <label htmlFor="email" className="text-sm mb-1">Your email:</label>
                <input type="email" id="email"  placeholder="Your email here:" className="w-80 h-10 px-3 rounded-md text-white" onChange={(event) => setEmail(event.target.value)} value={email}/>   
            </div>
            <div className="flex flex-col my-2">
                <label htmlFor="password" className="text-sm mb-1">Your password:</label>
                <input type="text" id="password"  placeholder="Your password here:" className="w-80 h-10 px-3 rounded-md text-white" onChange={(event) => setPassword(event.target.value)} value={password}/>   
            </div>
            <Link to={'/e-commerce'}>
                <button className="bg-black text-white w-80 h-10 mt-4 rounded-md text-2xl font-semibold hover:bg-white hover:text-black" onClick={() => createAccount()}>Create</button>
            </Link>
        </div>
    )
}

export { NewAccount }