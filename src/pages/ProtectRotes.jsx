import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'

const ProtectRotes = () => {

 
    if(localStorage.getItem('token') === null){
        return <Outlet/>
    }
    else{
        return <Navigate to = '/'/>
    }
    
        
}

export default ProtectRotes