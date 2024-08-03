import React, { useEffect, useState } from 'react'
import cart from "../../assets/images/header/cart-white.png"
import userPlaceHolder from "../../assets/images/header/user.png"
import finder from "../../assets/images/header/search.png"
import "./Header.scss"
import { Link } from 'react-router-dom'

export const Header = () => {
    const [hasScrolled, setHasScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setHasScrolled(true);
            } else {
                setHasScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <header className={hasScrolled ? 'scrolled' : ''}>
            <div className='headerLeftSide'>
                <Link to="/">
                    {/* <img src='' alt='logo' /> */}
                    <h3>Panun<span>Keshur</span> Store</h3>
                </Link>
            </div>
            <div className='searchBar'>
                <img src={finder} alt='finder' />
                <input placeholder='search any thing...' />
            </div>

            <div className='headerRightSide'>
                <img src={cart} alt='cart' />
                <img src={userPlaceHolder} alt='user' />
            </div>
        </header>
    )
}
