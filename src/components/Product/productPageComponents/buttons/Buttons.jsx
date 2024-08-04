import { Link } from "react-router-dom"
import "./buttons.css"
import axios from "../../../api/axios"

export default function Buttons({ product }) {
    console.log("butn: ", product._id)
    const buyPath = `/buy/${product._id}`
    // const userId = "650db1f17d52aa044bfb1abe"
    const addToCart = async () => {
        let isMounted = true
        const controller = new AbortController();
        let data = {
            "userId": "650db1f17d52aa044bfb1abe",
            "price": product.price
        }
        try {
            const res = await axios.post(`/cart/${product._id}`, data)
            isMounted && console.log(res)
            alert("Item has been added...")
            window.location.reload()
        } catch (err) {
            console.log(err)
        }
        return () => {
            isMounted = false;
            controller.abort();
        }
    }
    return (
        <div className="btnsContainer">
            <button className="addToCart" onClick={addToCart}>Add to Cart</button>

            <Link className="buyNow" to={buyPath}>
                Buy Now
            </Link>
        </div>
    )
}
