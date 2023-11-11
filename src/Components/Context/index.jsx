import React from "react";
import { useEffect } from "react";
import { useLocalStorage } from "./useLocaleStorage";

const dataContext = React.createContext()

const DataProvider = ({ children }) => {
    // localeStorage
    const {itemAccount: info, saveAccount, itemInfo, logOut, setItemAccount, logIn} = useLocalStorage('LOG_IN', false)
   //modificar la pantalla de mi account, osea que podamos editar nuestra cuenta //////////////////////////////////////////////////////////////////
    // PathName
    const pathname = window.location.pathname
    const searchTerm = '/'
    const makeSubstring = pathname.lastIndexOf(searchTerm) + 1
    const path = pathname.substring(makeSubstring)
    // feth
    const [item, setitem] = React.useState([])
    useEffect(() => {
        fetch('http://localhost:3000/data')
            .then(response => response.json())
            .then(data => setitem(data))
    },[])
    // Product Card / add to cart // array con objetos
    const [add, setAdd] = React.useState(0)
    const [addProduct, setAddProduct] = React.useState([])
    const addToCart = (event, data) => {
        event.stopPropagation()
        setOpenPortal(false)
        const isTrue = addProduct.find(element => element.id === data.id)
        if (!isTrue) {
            setAddProduct([...addProduct, data])
            setAdd(add + 1)
            setOpenCheckout(true)
        }
    }
    //Portal // Product Detail
    const [openPortal, setOpenPortal] = React.useState(false)
    const [toProductDetail, setToProductDetail] = React.useState({})
    const openProductDetail = (data) => {
        setToProductDetail(data)
        setOpenCheckout(false)
        setOpenPortal(true)
    }
    // Portal // Checkout Menu
    const [openCheckout, setOpenCheckout] = React.useState(false)
    // delete Product Checkout 
    const deleteProductCheckout = (id) => {
        const newProducts = [...addProduct]
        const index = newProducts.findIndex(element => element.id === id)
        newProducts.splice(index, 1)
        setAddProduct(newProducts)
        setAdd(add - 1)
        if (newProducts.length === 0) {
            setOpenCheckout(false)
        }
    }
    // All my Orders / My last order
    const [newOrder, setNewOrder] = React.useState([])

    const myLastOrder = (data, total) => {
        const order = {
            'date': '11/08/2023',
            'products': data,
            'totalProducts': addProduct.length,
            'totalPrice': total,
            'key': newOrder.length
        } 
        setNewOrder([...newOrder, order])
        setAddProduct([])
        setOpenCheckout(false )
        
    }
    // setting de key for render 
    const [newKey, setNewKey] = React.useState(null)
    // searching value
    const [searchValue, setSearchValue] = React.useState('')
    //filter Values
    const [filterProduct, setFilterProduct] = React.useState(null)
    // const [newProductsfiltered, setnewProductsfiltered] = React.useState(null)
    
    let search;
    if(path.length > 0 ) {
        if(filterProduct === null) {
            setFilterProduct(path)
            const products = [...item]
            const newProducts = products?.filter(element => element?.category.name?.toLowerCase().includes(filterProduct?.toLocaleLowerCase()))
            search = newProducts?.filter(element => element?.title?.toLowerCase().includes(searchValue?.toLocaleLowerCase()))
        } else {
            const products = [...item]
            const newProducts = products?.filter(element => element?.category.name?.toLowerCase().includes(filterProduct?.toLocaleLowerCase()))
            search = newProducts?.filter(element => element?.title?.toLowerCase().includes(searchValue?.toLocaleLowerCase()))
        }  
    } else {
        search = item?.filter(element => element?.title.toLowerCase().includes(searchValue?.toLocaleLowerCase()))
    }
    const [newAccount, setNewAccount] = React.useState(false)
    return (
        <dataContext.Provider value={{
            item,
            setAdd,
            add,
            addToCart,
            openPortal,
            openProductDetail,
            setOpenPortal,
            toProductDetail,
            openCheckout,
            setOpenCheckout,
            addProduct,
            deleteProductCheckout,
            myLastOrder,
            newOrder,
            setNewKey,
            newKey,
            setSearchValue,
            searchValue,
            search,
            filterProduct,
            setFilterProduct,
            useLocalStorage,
            info,
            saveAccount,
            setNewAccount,
            newAccount,
            logOut,
            itemInfo,
            setItemAccount,
            logIn
        }}>
            { children }
        </dataContext.Provider>
    )
}

export { dataContext, DataProvider }