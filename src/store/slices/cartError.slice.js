import { createSlice } from "@reduxjs/toolkit";

const cartError = createSlice({
    name: 'errorName',
    initialState: '',
    reducers: {
        
        //Todas las opciones que nos permiten cambiar el estado, por ejemplo el SETSTATE

        setErrorName : (state, action) =>action.payload  //Lo que me pasa el usuario como parametro
    }
})



export const {setErrorName } = cartError.actions

//Representante del estado global
export default cartError.reducer

