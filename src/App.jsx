import { CardsContainer } from "./components/CardsContainer"
import { ShoppingCart } from "./components/ShoppingCart"
import { ProductsContextProvider } from "./context/ProductsContextProvider"
import { TotalContextProvider } from "./context/TotalContextProvider"

const App = () => {
  return (
    <ProductsContextProvider>
      <TotalContextProvider>
          <div className="cart-container">
            <CardsContainer />
            <ShoppingCart />
          </div>
      </TotalContextProvider>
    </ProductsContextProvider>
  )
}



export default App