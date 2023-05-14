import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/header.css'
import getConfigToken from '../../utils/getConfigToken'

const Header = () => {
    const [hasToken, setHasToken] = useState(!!localStorage.getItem('token'))

    const [nawBar, setNawBar] = useState(false)
    const [selectedItemIndex, setSelectedItemIndex] = useState(-1);


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

    const handleClickMenu = (index) => {
        setSelectedItemIndex(index);
        setNawBar(!nawBar)
    };


    return (
        <header className='header'>


            <div className='menuResponsives'>
                <div onClick={handleMenu} className="bx handleIconNavbar bxs-dashboard"></div>
            </div>

            <h1 className='header__tilte'>
                <Link to='/'><h3>e-commerce</h3></Link>
            </h1>
            <nav className='header__nav'>
                <ul className={`header-link ${nawBar ? 'actives' : ''}`}>
                    {hasToken ? (
                        <>
                            <li
                                onClick={() => handleClickMenu(0)}
                                className={`header-link_li ${selectedItemIndex === 0 ? 'selected' : ''
                                    }`}
                            >
                                <Link to='/purchases'>
                                    <span>Purchases</span>
                                </Link>
                            </li>
                            <li
                                onClick={() => handleClickMenu(1)}
                                className={`header-link_li ${selectedItemIndex === 1 ? 'selected' : ''
                                    }`}
                            >
                                <Link to='/cart'>
                                    <span>Cart</span>
                                </Link>
                            </li>
                            <li
                                onClick={() => handleClickMenu(2)}
                                className={`header-link_li ${selectedItemIndex === 2 ? 'selected' : ''
                                    }`}
                            >
                                <span onClick={handleLogout}>Logout</span>
                            </li>
                        </>
                    ) : (
                        <>
                            <li
                                onClick={() => handleClickMenu(0)}
                                className={`header-link_li ${selectedItemIndex === 0 ? 'selected' : ''
                                    }`}
                            >
                                <Link to='/login'>
                                    <span>Login</span>
                                </Link>
                            </li>
                            <li
                                onClick={() => handleClickMenu(1)}
                                className={`header-link_li ${selectedItemIndex === 1 ? 'selected' : ''
                                    }`}
                            >
                                <Link to='/register'>
                                    <span>Register</span>
                                </Link>
                            </li>
                            <li
                                onClick={() => handleClickMenu(2)}
                                className={`header-link_li ${selectedItemIndex === 2 ? 'selected' : ''
                                    }`}
                            >
                                <Link to='/purchases'>
                                    <span>Purchases</span>
                                </Link>
                            </li>
                            <li
                                onClick={() => handleClickMenu(3)}
                                className={`header-link_li ${selectedItemIndex === 3 ? 'selected' : ''
                                    }`}
                            >
                                <Link to='/cart'>
                                    <span>Cart</span>
                                </Link>
                            </li>
                        </>
                    )}
                </ul>
            </nav>
        </header>
    )
}

export default Header
