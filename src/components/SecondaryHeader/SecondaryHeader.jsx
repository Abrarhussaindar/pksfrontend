import React from 'react'
import { Link } from 'react-router-dom';

import mens from "../../assets/images/cate_imgs/man.png"
import women from "../../assets/images/cate_imgs/man.png"
import kids from "../../assets/images/cate_imgs/man.png"
import mobiles from "../../assets/images/cate_imgs/man.png"
import electronics from "../../assets/images/cate_imgs/man.png"
import sports from "../../assets/images/cate_imgs/man.png"
import toys from "../../assets/images/cate_imgs/man.png"
import grocery from "../../assets/images/cate_imgs/man.png"
import beauty from "../../assets/images/cate_imgs/man.png"

export const SecondaryHeader = () => {
    return (
        <div className="secondaryNavbarContainer">
            <div className="container">

                <Link to="/products/mens">
                    <img src={mens} alt="" />
                    <span className="cate">Men's</span>
                </Link>
            </div>
            <div className="container">
                <Link to="/products/womens">
                    <img src={women} alt="" />
                    <span className="cate">Women's</span>
                </Link>

            </div>
            <div className="container">
                <Link to="/products/kids">
                    <img src={kids} alt="" />
                    <span className="cate">Kids</span>
                </Link>

            </div>
            <div className="container">

                <Link to="/products/mobiles">
                    <img src={mobiles} alt="" />
                    <span className="cate">Mobiles</span>
                </Link>
            </div>
            <div className="container">

                <Link to="/products/electronics">
                    <img src={electronics} alt="" />
                    <span className="cate">Electronics</span>
                </Link>
            </div>
            <div className="container">
                <Link to="/products/sports">
                    <img src={sports} alt="" />
                    <span className="cate">Sports</span>
                </Link>

            </div>
            <div className="container">

                <Link to="/products/toys">
                    <img src={toys} alt="" />
                    <span className="cate">Toys</span>
                </Link>
            </div>
            <div className="container">

                <Link to="/products/grocery">
                    <img src={grocery} alt="" />
                    <span className="cate">Grocery</span>
                </Link>
            </div>
            <div className="container">

                <Link to="/products/beauty">
                    <img src={beauty} alt="" />
                    <span className="cate">Beauty</span>
                </Link>
            </div>
        </div>
    );
}
