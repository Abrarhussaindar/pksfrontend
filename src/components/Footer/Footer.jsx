import React from 'react'
import { Link } from 'react-router-dom'
import twitter from "../../assets/images/socials/twitter.png"
import facebook from "../../assets/images/socials/facebook.png"
import youtube from "../../assets/images/socials/youtube.png"
import instagram from "../../assets/images/socials/instagram.png"

import phone from "../../assets/images/footer_imgs/phone.png"
import email from "../../assets/images/footer_imgs/email.png"
import globe from "../../assets/images/footer_imgs/global.png"
import pin from "../../assets/images/footer_imgs/pin.png"

export const Footer = () => {
    return (
        <footer>
            <div className="top">
                <div className="left">
                    <h1>Panun<span>Keshur</span> Store</h1>
                    <p>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>

                </div>
                <div className="center">
                    <h3>Important Links</h3>
                    <ul>
                        <Link to="/about-us">
                            <li>About Us</li>

                        </Link>
                        <Link to="/contact-us">

                            <li>Contact Us</li>
                        </Link>
                        <Link to="/services">
                            <li>Services</li>

                        </Link>
                        <Link to="/login">
                            <li>Login</li>


                        </Link>
                        <Link to="/register">
                            <li>Register</li>

                        </Link>
                    </ul>
                </div>
                <div className="center">
                    <h3>Other Links</h3>
                    <ul>
                        <Link to="/privacy-policy">

                            <li>Privacy Policy</li>
                        </Link>
                        <Link to="/disclaimer">
                            <li>Disclaimer</li>

                        </Link>
                        <Link to="/terms-conditions">
                            <li>Terms & Conditions</li>

                        </Link>
                        <Link to="/site-map">
                            <li>Index</li>

                        </Link>
                        <Link to="/return-refund">

                            <li>Return & Refund Policy</li>
                        </Link>
                    </ul>
                </div>
                <div className="right">
                    <div className="rightTop">
                        <h3>Follow Us</h3>
                        <div className="socialContainer">
                            <a href=".">
                                <img src={twitter} alt="" />

                            </a>
                            <a href=".">
                                <img src={facebook} alt="" />

                            </a>
                            <a href=".">
                                <img src={youtube} alt="" />

                            </a>
                            <a href=".">
                                <img src={instagram} alt="" />

                            </a>

                        </div>
                    </div>
                    <div className="rightBottom">
                        <h3>Contact Us</h3>
                        <ul>
                            <li><a href="tel:+91-8825066730"><span><img src={phone} alt="" /></span>+91-8825066730</a></li>
                            <li><a href="tel:+91-6006045264"><span><img src={phone} alt="" /></span>+91-6006045264</a></li>
                            <li><a href="."><span><img src={email} alt="" /></span>ali988651@gmail.com</a></li>
                            <li><a href="https://pkstesting.netlify.app/"><span><img src={globe} alt="" /></span>www.pkstesting.netlify.app</a></li>
                            <li><a href="."><span><img src={pin} alt="" /></span>Near Mir Shams-U-Din Araki Asstan, Zadibal, Srinagar, 190011</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr />
            <div className="bottom">
                <p>© 2024 <span>PanunKeshurStore</span>. All rights reserved.</p>
            </div>
        </footer>
    )
}
