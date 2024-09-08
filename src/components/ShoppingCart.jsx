
import {TotalPriceContext} from '../context/TotalContextProvider'
import {useContext} from 'react'

export const ShoppingCart = () => {
  const [totalPrice, setTotalPrice] = useContext(TotalPriceContext)
  return (
    <div className="cart">
      <div className="price-details">
        <p>Total: $ {totalPrice} </p>
        <button onClick={()=>setTotalPrice(0)}>Borrar</button>
      </div>
    </div>
  )
}

