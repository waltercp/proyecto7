import axios from "axios"
import { getAllProductsCartThunk } from "../store/slices/cart.slice"
import { useDispatch } from "react-redux"
import getConfigToken from "../utils/getConfigToken";


const useCrudCart = () => {
    const dispatch = useDispatch();



    const addProductToCart = data => {


        const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/cart'
        console.log(getConfigToken())
        axios.post(url, data, getConfigToken())
            .then(res => {
                console.log(res.data)
                dispatch(getAllProductsCartThunk())
            }

            )
            .catch(err => {
                console.log(err)
                if (err?.response?.data?.error === 'Product already added to cart') {
                    //Ejecutarel update
                }
            })


    }


    const deleteProductFromCart = id => {
        const url = `https://e-commerce-api-v2.academlo.tech/api/v1/cart/${id}`
        axios.delete(url, getConfigToken())
            .then(res => {
                console.log(res.data)
                dispatch(getAllProductsCartThunk())
            })
            .catch(err => console.log(err))
    }

    const updateProductInCart = (id, data) => {
        const url = `https://e-commerce-api-v2.academlo.tech/api/v1/cart/${id}`
        axios.put(url, data, getConfigToken())
            .then(res => {
                console.log(res.data)
                dispatch(getAllProductsCartThunk())
            })
            .catch(err => console.log(err))
    }


    return { addProductToCart, deleteProductFromCart, updateProductInCart }
}




export default useCrudCart