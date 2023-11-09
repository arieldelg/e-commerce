import React from "react"
import { dataContext } from "../../Components/Context"
import { ProductCard } from "../../Components/ProductCard"
import { Modal } from '../../Components/Modal';
import { ProductDetail } from '../../Components/Modal/ProductDetail';

const Home = () => {
    const { openPortal, setSearchValue, searchValue, search } = React.useContext(dataContext)
    
    
    return(
        <>
            <h1 className="py-4 text-4xl">Exclusives Items</h1>
            <input type="text" placeholder="Busca Aqui" className="mb-4 mt-2 w-96 h-10 placeholder:text-center px-2 rounded-xl" onChange={(event) => setSearchValue(event.target.value)} value={searchValue}/>
            <div className='h-full grid grid-cols-4 auto-rows-auto px-10 gap-x-4 gap-y-5'>
                {
                    search?.map(element => {
                        return <ProductCard key={ element.id } data={ element }/>
                    })
                } 
            </div>
            {
            openPortal && 
                <Modal>
                    <ProductDetail />
                </Modal> 
            }
            
        </>
    )
}

export { Home }