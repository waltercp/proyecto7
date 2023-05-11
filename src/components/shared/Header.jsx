import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/header.css'
import getConfigToken from '../../utils/getConfigToken'

const Header = () => {
    const [hasToken, setHasToken] = useState(!!localStorage.getItem('token'))

    const [nawBar, setNawBar] = useState(false)


    useEffect(() => {
        const token = localStorage.getItem('token')
        setHasToken(!!token)
    }, [])

    const handleLogout = () => {
        localStorage.removeItem('token')
        setHasToken(false)
        window.location.reload()
    }

    const handleMenu = () => {
        setNawBar(!nawBar)
    }


    return (
        <header className='header'>


            <div className='menuResponsives'>
                <div onClick={handleMenu} class="bx handleIconNavbar bxs-dashboard"></div>
            </div>

            <h1 className='header__tilte'>
                <Link to='/'><h3>e-commerce</h3></Link>
            </h1>
            <nav className='header__nav'>
                <ul className={`header-link ${nawBar ? 'actives' : ''} `} >
                    {hasToken
                        ? <>
                            <li onClick={handleMenu} className='header-link_li'>
                                <Link to='/purchases'><span>Purchases</span></Link>
                            </li>
                            <li onClick={handleMenu} className='header-link_li'>
                                <Link to='/cart'><span>Cart</span></Link>
                            </li>
                            <li  onClick={handleMenu} className='header-link_li'>
                                <span onClick={handleLogout}>Logout</span>
                            </li>
                        </>
                        : <>
                            <li onClick={handleMenu}  className='header-link_li'>
                                <Link to='/login'><span>Login</span></Link>
                            </li>
                            <li  onClick={handleMenu} className='header-link_li'>
                                <Link to='/register'><span>Register</span></Link>
                            </li>
                            <li onClick={handleMenu}  className='header-link_li'>
                                <Link to='/purchases'><span>Purchases</span></Link>
                            </li>
                            <li onClick={handleMenu}  className='header-link_li'>
                                <Link to='/cart'><span>Cart</span></Link>
                            </li>
                        </>
                    }
                </ul>
            </nav>
        </header>
    )
}

export default Header
