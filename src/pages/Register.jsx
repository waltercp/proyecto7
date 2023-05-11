import React from 'react'
import { useForm } from 'react-hook-form'
import useAutentication from '../hooks/useAuthentication'
import defaulRegisterValues from '../utils/defaultRegiterValues'
import '../styles/register.css'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const navigate = useNavigate();

    const { register, handleSubmit, reset } = useForm()

    const { CreateNewUser, create, createError } = useAutentication()

    const submit = data => {
        CreateNewUser(data)
        reset(defaulRegisterValues)
    }


    return (
        <div>
            <form className="registration-form" onSubmit={handleSubmit(submit)}>
                <h2 className="registration-form__title">Create a new User</h2>
                <div className="registration-form__input-group">
                    <label className="registration-form__label" htmlFor="firstName">First Name</label>
                    <input className="registration-form__input" {...register('firstName')} type="text" id="firstName" />
                </div>

                <div className="registration-form__input-group">
                    <label className="registration-form__label" htmlFor="lastName">Last Name</label>
                    <input className="registration-form__input" {...register('lastName')} type="text" id="lastName" />
                </div>

                <div className="registration-form__input-group">
                    <label className="registration-form__label" htmlFor="email">Email</label>
                    <input className="registration-form__input" {...register('email')} type="email" id="email" />
                </div>

                <div className="registration-form__input-group">
                    <label className="registration-form__label" htmlFor="password">Password</label>
                    <input className="registration-form__input" {...register('password')} type="password" id="password" />
                </div>

                <div className="registration-form__input-group">
                    <label className="registration-form__label" htmlFor="phone">Phone</label>
                    <input className="registration-form__input" {...register('phone')} type="tel" id="phone" />
                </div>

                <button className="registration-form__button">Register</button>
            </form>

            <div className={`formAlertContainer ${createError ? 'alertCorrect' : ''}`}>
                <div className='formAlert'>
                    <img src="/iconError.png" alt="" />
                    <h3>Error al crear Session</h3>
                </div>
            </div>

            <div className={`formAlertContainer ${create ? 'alertCorrect' : ''}`}>
                <div className='formAlert'>
                    <img src="/iconCheck.png" alt="" />
                    <h3>Tu Usuario se  creo Correctamente</h3>
                </div>
            </div>
        </div>
    )
}

export default Register