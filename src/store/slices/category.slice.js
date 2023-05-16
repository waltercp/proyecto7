import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
    name: 'categoyName',
    initialState: null,
    reducers: {
        
        //Todas las opciones que nos permiten cambiar el estado, por ejemplo el SETSTATE

        setCategoyName : (state, action) =>action.payload  //Lo que me pasa el usuario como parametro
    }
})



export const {setCategoyName } = categorySlice.actions

//Representante del estado global
export default categorySlice.reducer

