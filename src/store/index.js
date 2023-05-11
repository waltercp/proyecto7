import { configureStore } from "@reduxjs/toolkit";
import productsGlobal from './slices/products.slices'
import cartGlobal from './slices/cart.slice'

const store = configureStore({
    reducer:{
        productsGlobal,
        cartGlobal
        
    }
})

export default store