import React from 'react'
import useCrudCart from '../../hooks/useCrudCart'
import '../../styles/card__productCard.css'




const ProductCard = ({ prodCart }) => {
    const {deleteProductFromCart} = useCrudCart()

    const handleDeleteCart = () => {
        deleteProductFromCart(prodCart.id,)
    }

  return (
    <article className='productCart__article'>
        <header className='productCart__contentImg'>
            <img className='productCart__content-img' src={prodCart.product.images[0].url} alt="" />
        </header>

        <section className='productCart__section'>
            <h3 className='productCart__section-title'>{prodCart.product.title}</h3>
        </section>
        <button className='prodcart__delete' onClick={handleDeleteCart}><i className='bx bx-trash'></i></button>
        <footer className='productCart__footer'>
            <span className='productCart__footer-quantity'>{prodCart.quantity}</span>
            <div className='productCart__subtotal'>
                <span className='productCart__footer-label'>Subtotal</span>
                <span className='productCart__footer-value'>{prodCart.product.price * prodCart.quantity}</span>
            </div>
        </footer>
    </article>
  )
}

export default ProductCard