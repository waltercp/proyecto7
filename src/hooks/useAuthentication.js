import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom";

const useAutentication = () => {
    const navigate = useNavigate();
    const [loginError, setLoginError] = useState(false)

    const [create, setCreate] = useState(false)
    const [createError, setCreateError] = useState(false)
    

    const CreateNewUser = data => {
        const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/users'
        axios.post(url, data)
            .then(res => {
                console.log(res.data)
                setCreate(true)
                setTimeout(() => {
                    setCreate(false)
                }, 1800)
            })
            .catch(err => {
                console.log(err)
                setCreateError(true)
                setTimeout(() => {
                    setCreateError(false)
                }, 1800)
                
            })
    }


    const loginUser = data => {

        const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/users/login'
        axios.post(url, data)
            .then(res => {
                localStorage.setItem('token', res.data.token)
                console.log(res.data)
                navigate('/')
                window.location.reload()
            })
            .catch(err => {
                console.log(err)
                localStorage.removeItem('token')
                setLoginError(true)
                setTimeout(() => {
                    setLoginError(false)
                }, 1800)
                
            })
    }

    return { CreateNewUser, loginUser, loginError,create,createError }

}

export default useAutentication