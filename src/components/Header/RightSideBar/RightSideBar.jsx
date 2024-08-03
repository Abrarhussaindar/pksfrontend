import React from 'react'
import { Link } from 'react-router-dom'
import close from "../../../assets/images/close.png"
import user from "../../../assets/images/me.jpg"

import userOutline from "../../../assets/images/user-outline.png"
import orders from "../../../assets/images/orders-outline.png"
import love from "../../../assets/images/love-outline.png"
import help from "../../../assets/images/help-outline.png"
import support from "../../../assets/images/support-outline.png"


export const RightSideBar = ({ isOpen, setIsOpen }) => {
    return (
        <div className={`${isOpen ? 'open' : 'close'} rightSideBar`}>
            <div className="rightSideBarHeading" >
                <img src={close} className="closePng" onClick={() => setIsOpen(!isOpen)} alt="" />
                <img src={user} className="userPic" alt="" />
            </div>
            <hr className="rsHr" />
            <div className="Container">
                <div className="linksContainer">
                    <ul>

                        <Link to="/profile">
                            <li><img className="icon userProfileIcon" src={userOutline} alt="" /><span>Profile</span></li>
                        </Link>
                        <Link to="/orders">
                            <li><img className="icon userOrdersIcon" src={orders} alt="" /><span>Orders</span></li>
                        </Link>

                        <Link to="/wishlist">
                            <li><img className="icon userWishlistIcon" src={love} alt="" /><span>Wishlist</span></li>
                        </Link>

                        <Link to="/help">
                            <li><img className="icon userHelpIcon" src={help} alt="" /><span>Help</span></li>
                        </Link>

                        <Link to="/customer-service">
                            <li><img className="icon customerServicesIcon" src={support} alt="" /><span>Customer Services</span></li>
                        </Link>

                    </ul>
                </div>
                <div className="btnsContainer">
                    <button className="logoutBtn">Logout</button>
                </div>
            </div>
        </div>
    )
}
