import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import star_fill from "../../../assets/images/star-fill.png"
import start_outline from "../../../assets/images/star-outline.png"
import shirt from "../../../assets/images/products/shirt.jpg"

export const ProductCard = ({product, subcate}) => {
    const [path, setPath] = useState("")
    useEffect(()=>{

        try{
            const link = `/products/${subcate}/${subcate}/${product._id}`
            setPath(link)
        }catch(err){    
            console.log(err)
        }
    },[product, subcate])

    return (
        <div className="productCard">
            <div className="productImgContainer">
                <Link to={path}>
                    <img src={shirt} alt="" />
                </Link>

                {/* <ul className="shirtColors">
                    <li className="blue active"></li>
                    <li className="green"></li>
                    <li className="yellow"></li>
                    <li className="white"></li>
                </ul> */}
            </div>
            <hr className="productCardHr"/>
            <div className="productDetailsContainer">
                <h4>{product ? product.title : ""}</h4>
                {/* <p>Men's Solid Slim Fit Cotton Casual Shirt with Spread Collar & Full Sleeve</p> */}
            
                <ul className="productCardRating">
                    <li>
                        <img className="starFill" src="" alt="" />
                        <img className="starFill" src={star_fill} alt="" />
                        <img className="starFill" src={star_fill} alt="" />
                        <img className="starFill" src={star_fill} alt="" />
                        <img src={start_outline} alt="" />
                        <span>

                            - 2000
                        </span>
                    </li>
                </ul>
                <div className="productPrice">
                    <div className="prices">
                        <span>&#x20B9;</span>
                        <h4>{product ? product.price : ""}</h4>
                    </div>
                    <p>M.R.P: <span>&#x20B9;1000</span><span className="discounts">(75% off)</span> </p>
                    
                </div>
                {/* <div className="deliveryOptions">
                    <p>FREE Delivery over &#x20B9;499</p>
                </div> */}
            </div>
        </div>
    )
}
