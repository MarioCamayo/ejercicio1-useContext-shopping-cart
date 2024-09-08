import { createContext, useState } from 'react'
import { useEffect } from 'react'

export const ProductsContext =  createContext()

export const ProductsContextProvider = ({children}) => {
     const [products, setProducts] = useState([])

     useEffect(()=>{
         fetch('https://api.escuelajs.co/api/v1/products')
         .then(response => response.json())
         .then(data => setProducts(data))
         .catch(error => console.error(error))


        }, [])

  return (
    <ProductsContext.Provider value={products}>
       {children}
    </ProductsContext.Provider>
  )
}

/*https://fakeapi.platzi.com/ 
 https://api.escuelajs.co/api/v1/products*/

