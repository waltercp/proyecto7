import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import { useDispatch } from 'react-redux'
import { getAllProductsThunk } from '../../store/slices/products.slices'
import '../../styles/home_filterCategory.css'

const FilterCategory = () => {

    const dispatch = useDispatch()

  


    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/categories'
    const [categories, getAllCategories] = useFetch(url)

    useEffect(() => {
        getAllCategories()
    }, [])

    const handleClickCategory = id =>{
        const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products?categoryId=${id}`
        dispatch(getAllProductsThunk(url))
    }
        const handleClickProducts = ( ) => {
           dispatch( getAllProductsThunk())
        }

    return (
        <article className='filterCategory_article'>
            <h3 className='filterCategory__title'>Category</h3>
            <ul className='filterCategory__category'>
                <li className='filterCategory__category-list' onClick={handleClickProducts}>All Products</li>
                {
                    categories?.map(category => (
                        <li className='filterCategory__category-list' onClick={() => handleClickCategory(category.id)} key={category.id}>{category.name}</li>
                    ))
                }
            </ul>
        </article>
    )
}

export default FilterCategory