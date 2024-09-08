import { createContext, useState } from 'react'
// import { useEffect } from 'react'

export const TotalPriceContext =  createContext()

export const TotalContextProvider = ({children} ) => {
  const [totalPrice, setTotalPrice] = useState(0)
  return (
    <TotalPriceContext.Provider value={[totalPrice, setTotalPrice]}>
       {children}
    </TotalPriceContext.Provider>
  )
}
