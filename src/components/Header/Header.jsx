import React, { useEffect, useState } from 'react'
import cart from "../../assets/images/header/cart-white.png"
import userPlaceHolder from "../../assets/images/header/user.png"
import finder from "../../assets/images/header/search.png"
import "./Header.scss"
import { Link } from 'react-router-dom'
import { RightSideBar } from './RightSideBar/RightSideBar'

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


    const [isOpen, setIsOpen] = useState(false)


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
                <div className='cart'>
                    <Link to="/cart">
                        <img src={cart} alt='cart' />
                        <span className='cartCount'>0</span>
                    </Link>
                </div>
                <img src={userPlaceHolder} alt='user' onClick={() => setIsOpen(!isOpen)} />
            </div>

            <RightSideBar isOpen={isOpen} setIsOpen={setIsOpen} />
        </header>
    )
}
