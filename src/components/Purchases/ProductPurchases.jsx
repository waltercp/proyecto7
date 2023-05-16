import React from 'react'

import '../../styles/purchases_productPurchases.css'

const ProductPurchases = ({prodPurchases}) => {

  
  return (
    <article className='productPurchases_article' >
        <img className='purchases__img' src={prodPurchases.product.images[0].url} alt="" />
        <span>{prodPurchases.quantity}</span>
        <h3 className='productPurchases_title'>{prodPurchases.product.title}</h3> 
        <span className='productPurchases-value'>{prodPurchases.quantity * prodPurchases.product.price}</span>
    </article>
  )
}

export default ProductPurchases