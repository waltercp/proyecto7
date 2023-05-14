import React, { useState } from 'react'
import useCrudCart from '../../hooks/useCrudCart'
import '../../styles/productId_productInfo.css'




const ProductInfo = ({ product }) => {

    const [quantity, setQuantity] = useState(1)
    const { addProductToCart } = useCrudCart()

    const handlePlus = () => {
        setQuantity(quantity + 1)
    }

    const handleMinus = () => {
        if (quantity - 1 >= 1) {
            setQuantity(quantity - 1)
        }
    }

    const handleAddToCard = () => {

        const data = {
            quantity,
            productId: product.id
        }
        addProductToCart(data)

    }


    return (
        <section className='product-info'>
            <h3 className='product-info__brand'>{product?.brand}</h3>
            <h2 className='product-info__title'>{product?.title}</h2>
            <div className='product-info-container'>
                <p className='product-info__description'>{product?.description}</p>

                <footer className='product-info__footer'>
                    <div className='product-info__price'>
                        <span>Price</span>
                        <span>{product?.price}</span>
                    </div>
                    <div className='product-info__quantity'>
                        <span>Quantity</span>
                        <div>
                            <button onClick={handleMinus}>-</button>
                            <div><p>{quantity}</p></div>
                            <button onClick={handlePlus}>+</button>
                        </div>
                    </div>

                    <button className='product-info__add-to-cart' onClick={handleAddToCard}>Add to cart <i className='bx bxs-cart' ></i></button>

                </footer>

            </div>


        </section>
    )
}

export default ProductInfo



// <i className='bsx bx.cart'></i>