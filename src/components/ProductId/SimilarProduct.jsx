import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import CardProduct from '../Home/CardProduct'
import '../../styles/productId_similarProduct.css'


const SimilarProduct = ({ product }) => {
    const url1 = `https://e-commerce-api-v2.academlo.tech/api/v1/products?categoryId=4`

    const [filterProducts, getProductsByCategory] = useFetch(url1)
 

    useEffect(() => {
        if (product) {
            getProductsByCategory()
        }

    }, [product])


    return (
        <section className='similarProduct'>
            <h2>Discover similar productss</h2>
            <div className='similarProduct-content'>
                {
                    filterProducts?.map(prod => {
                        if(prod.id !== product.id){
                            return (<CardProduct
                                key={prod.id}
                                product={prod}
                            />)
                        }
                    })
                }
            </div>
        </section>
    )
}

export default SimilarProduct