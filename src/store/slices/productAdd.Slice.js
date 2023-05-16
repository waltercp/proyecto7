import { createSlice } from "@reduxjs/toolkit";

const productAddSlice = createSlice({
    name: 'productAdd',
    initialState: '',
    reducers: {
        
        //Todas las opciones que nos permiten cambiar el estado, por ejemplo el SETSTATE

        setproductAdd : (state, action) =>action.payload  //Lo que me pasa el usuario como parametro
    }
})



export const {setproductAdd} = productAddSlice.actions

//Representante del estado global
export default productAddSlice.reducer

