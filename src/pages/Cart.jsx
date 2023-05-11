import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProductsCartThunk } from '../store/slices/cart.slice'
import ProductCard from '../components/card/ProductCard'
import usePurchases from '../hooks/usePurchases'
import '../styles/card.css'

const Cart = () => {

  const dispath = useDispatch()
  const { buyThisCart } = usePurchases()

  useEffect(() => {
    dispath(getAllProductsCartThunk())
  }, [])

  const { cartGlobal } = useSelector(state => state)

  const totalPriceCart = cartGlobal?.reduce((acc, cv) => acc + cv.quantity * cv.product.price, 0)


  const handlePurchase = () => {
    buyThisCart()
  }

  return (
    <div className="cart">
      <h2 className="cart__title">Cart</h2>
      <div className="cart__products">
        {
          cartGlobal?.map(prodCart => (
            <ProductCard
              key={prodCart.id}
              prodCart={prodCart}
            />
          ))
        }
      </div>

      <footer className="cart__footer">
        <span className="cart__total">Total:</span>
        <h3 className="cart__total-price">{totalPriceCart}</h3>
        <button className="cart__button-buy" onClick={handlePurchase}>Buy now <i className='bx bxs-cart' ></i></button>
      </footer>
    </div>
  )
}

export default Cart