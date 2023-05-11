import React, { useEffect } from 'react'
import usePurchases from '../hooks/usePurchases'
import ProductPurchases from '../components/Purchases/ProductPurchases'
import '../styles/purchases.css'

const Purchases = () => {

  const {purchases, getAllProductPurchased} = usePurchases()

  useEffect(() => {
    getAllProductPurchased()
  },[]) 

  return (
    <div className='purchases'>
      <h2 className="purchases__title">Purchases</h2>
      <div className='purchases__products'>
        {
          purchases?.map(prodPurchases => (
                <ProductPurchases
                  key={prodPurchases.id}
                  prodPurchases={prodPurchases}
                />
          ))
        }
      </div>
    </div>

  )
}

export default Purchases