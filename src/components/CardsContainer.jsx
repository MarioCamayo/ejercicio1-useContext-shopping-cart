import { useContext } from "react"
import { ProductsContext } from "../context/ProductsContextProvider"
import {TotalPriceContext} from '../context/TotalContextProvider'



export const CardsContainer = () => {
  const products =  useContext(ProductsContext)
  const [totalPrice, setTotalPrice] = useContext(TotalPriceContext)
  console.log(products);


  return (
    <div className="card-container">
        {products.map(product=>(
          <div key={product.id} className="card">
              <img className="card-img" src= {product.images} alt="imagen" />
              <p className="product-name">{product.title} </p>
              <div className="price-container">
                   <p className="price"> ${product.price} </p>
                   <button onClick={()=>setTotalPrice(totalPrice + product.price)}>Add to Card</button>
              </div>
         </div>
           
        ))}
    </div>
  )
}
