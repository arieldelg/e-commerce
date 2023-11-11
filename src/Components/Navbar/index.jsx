import React from "react";
import { BuildingOfficeIcon } from '@heroicons/react/24/outline';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { NavLink } from "react-router-dom";
import { dataContext } from "../Context";


const Navbar = () => {
    const activeStyle = 'underline underline-offset-4';
    const { add, setFilterProduct, useLocalStorage, info, logOut } = React.useContext(dataContext)
    return (
        <nav className=" w-full bg-white text-black h-10 px-3 flex fixed top-0 left-0 z-10">
            <div className="flex flex-col items-start w-6/12 h-full">
                <ul className="flex items-center h-full gap-2 text-sm">
                    <li>
                        <NavLink to={'/'}><BuildingOfficeIcon className="h-6 w-6 text-black cursor-pointer"/></NavLink>
                    </li>
                    <li>
                        <NavLink to={'/'} onClick={() => setFilterProduct('/')} className={({ isActive }) => isActive ? activeStyle : undefined }>All</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/clothes'} onClick={() => setFilterProduct('clothes')} className={({ isActive }) => isActive ? activeStyle : undefined }>Clothes</NavLink>
                    </li>
                    <NavLink to={'/electronics'} onClick={() => setFilterProduct('electronics')} className={({ isActive }) => isActive ? activeStyle : undefined }>Electronics</NavLink>
                    <NavLink to={'/forniture'} onClick={() => setFilterProduct('forniture')} className={({ isActive }) => isActive ? activeStyle : undefined }>Furnitures</NavLink>
                    <NavLink to={'/jewerly'} onClick={() => setFilterProduct('jewerly')} className={({ isActive }) => isActive ? activeStyle : undefined }>Jewerly</NavLink>
                    <NavLink to={'/others'} onClick={() => setFilterProduct('clothes')} className={({ isActive }) => isActive ? activeStyle : undefined }>Others</NavLink>
                </ul>
            </div>

            <div className="flex flex-col items-end w-6/12 h-full">
                <ul className="flex items-center h-full gap-3 text-sm">
                    {
                        info &&
                        <>
                        <p className='text-xs text-gray-500'>arieldelgrande@hotmail.com</p>
                        <NavLink to={'/my-orders'} className={({ isActive }) => isActive ? activeStyle : undefined }>My Orders</NavLink>
                        <NavLink to={'/my-account'} className={({ isActive }) => isActive ? activeStyle : undefined }>My Account</NavLink>
                        </>
                    }
                    {
                        info ? <NavLink to={'/sign-in'} className={({ isActive }) => isActive ? activeStyle : undefined } onClick={() => logOut(false)}>Sign Out</NavLink> : <NavLink to={'/sign-in'} className={({ isActive }) => isActive ? activeStyle : undefined } onClick={() => useLocalStorage()}>Sign In</NavLink>
                    }
                    {/* <NavLink to={'/sign-in'} className={({ isActive }) => isActive ? activeStyle : undefined } onClick={() => useLocalStorage()}>Sign In</NavLink> */}
                    <NavLink to={'/my-orders/last'} className={'flex'} >
                        <ShoppingCartIcon className="w-6 h-6"/>
                        <p>{ add }</p>
                    </NavLink>
                </ul>
            </div>
        </nav>
    )
}

export { Navbar }