import React from "react";
import { useEffect } from "react";

const useLocalStorage = (initialName, initialValue) => {
    const [itemAccount, setItemAccount] = React.useState(initialValue)
    const [itemInfo, setItemInfo] = React.useState({})
    // useEffect para sabes si estamos logeados

    useEffect(() => {
        const loginLocalStorage = localStorage.getItem(initialName)
        let getItemAccount 
        if(!loginLocalStorage) {

            localStorage.setItem(initialName, JSON.stringify(initialValue))
        } else {

            getItemAccount = JSON.parse(loginLocalStorage)

            setItemAccount(getItemAccount)
        }
    }, [])
    // useEffect para sabes si tenemos nuestras llaves
    useEffect(() => {
        const accountLocalStorage = localStorage.getItem('USER')
        const keyUser = {
            name: false,
            email: false,
            password: false
        }
        const getUserInfo = localStorage.getItem('USER')
        let parsedUserInfo;
        if(!accountLocalStorage) {
            localStorage.setItem('USER', JSON.stringify(keyUser))
            setItemInfo(keyUser)
        } else {
            parsedUserInfo = JSON.parse(getUserInfo)
        }
        setItemInfo(parsedUserInfo)
    }, [])
    
    const saveAccount = (array) => {
        const { name, email, password} = array
        const keyUser = {
            name: name,
            email: email,
            password: password
        }
        localStorage.setItem('USER', JSON.stringify(keyUser))
        localStorage.setItem(initialName, JSON.stringify(true))
        setItemInfo(keyUser)
        setItemAccount(true)
    }
    const logOut = () => {
        localStorage.setItem(initialName, JSON.stringify(false))
        setItemAccount(false)
    }
    const logIn = () => {
        localStorage.setItem(initialName, JSON.stringify(true))
        setItemAccount(true)
    }
    
    return {itemAccount, logOut, saveAccount, itemInfo , setItemAccount, logIn}
}

export { useLocalStorage }