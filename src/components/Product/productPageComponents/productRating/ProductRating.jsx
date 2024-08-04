import "./productRating.css"

export default function ProductRating() {
    return (
        <ul className="productRating">
            <li>
                <img className="starFill" src="/assets/images/star-fill.png" alt="" />
                <img className="starFill" src="/assets/images/star-fill.png" alt="" />
                <img className="starFill" src="/assets/images/star-fill.png" alt="" />
                <img className="starFill" src="/assets/images/star-fill.png" alt="" />
                <img src="/assets/images/star-outline.png" alt="" />
                <span>

                    - 2000 Ratings
                </span>
            </li>
        </ul>
    )
}
