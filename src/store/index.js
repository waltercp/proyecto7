import { configureStore } from "@reduxjs/toolkit";
import productsGlobal from './slices/products.slices'
import cartGlobal from './slices/cart.slice'
import categoryGlobal from './slices/category.slice'
import productAaddGlobal from './slices/productAdd.Slice'
import cartErrorGlobal from './slices/cartError.slice'

const store = configureStore({
    reducer:{
        productsGlobal,
        cartGlobal,
        categoryGlobal,
        productAaddGlobal,
        cartErrorGlobal
        
    }
})

export default store