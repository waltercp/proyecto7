import { useDispatch } from "react-redux"
import { getAllProductsCartThunk } from "../store/slices/cart.slice"
import getConfigToken from "../utils/getConfigToken"
import { useState } from "react"
import axios from "axios"


const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/purchases' 

const usePurchases =() => {

    const [purchases, setPurchases] = useState()
    const dispatch = useDispatch()

    const buyThisCart = () => {
        axios.post(url,{}, getConfigToken())
            .then(res => {
                console.log(res.data)
                dispatch(getAllProductsCartThunk())
            })
            .catch(err => console.log(err))
    }

    const getAllProductPurchased = () =>{
        axios.get(url, getConfigToken())
            .then(res =>  setPurchases(res.data))
            .catch(err => console.log(err))

    }

    return { purchases, getAllProductPurchased, buyThisCart}
}

export default usePurchases