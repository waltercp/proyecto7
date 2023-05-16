import React, { useState } from 'react'
import useAutentication from '../hooks/useAuthentication'
import '../styles/login.css'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const { loginUser, loginError } = useAutentication()

    const handleLogin = e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        const data = { email, password }
        loginUser(data)
    }


    return (
        <form className="login-form" onSubmit={handleLogin}>
            <h2 className="login-form__title">Login</h2>
            <div className="login-form__input-group">
                <label className="login-form__label" htmlFor="email">Email</label>
                <input className="login-form__input" type="email" id="email" />
            </div>

            <div className="login-form__input-group">
                <label className="login-form__label" htmlFor="password">Password</label>
                <input className="login-form__input" type="password" id="password" />
            </div>

            <button className="login-form__button">Sign in</button>

            <div className={`formAlertContainer ${loginError ? 'alertCorrect' : ''}`}>
                <div className='formAlert'>
                    <img src="/iconError.png" alt="" />
                    <h3>Error al iniciar Session</h3>
                </div>
            </div>


            <div className='usuarioLogin'>
                <p>Email: <span> usuarioPrueba@gmail.com</span></p>
                <p>Password: <span>usuario1234</span> </p>
            </div>
        </form>
    )
}

export default Login