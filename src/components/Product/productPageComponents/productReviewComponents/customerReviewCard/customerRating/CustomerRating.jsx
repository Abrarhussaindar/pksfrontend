import "./customerRating.css"

export default function CustomerRating() {
    return (
        <div className="rating">
            <ul className="customerProductRating">
                <li>
                    <img src="/assets/images/star.svg" alt="" />
                    <img src="/assets/images/star.svg" alt="" />
                    <img src="/assets/images/star.svg" alt="" />
                    <img src="/assets/images/star.svg" alt="" />
                    <img src="/assets/images/starOutline.png" alt="" />
                    <span className="numStars"> - Worth Buying</span>
                </li>
            </ul>
            <div className="ratingDate">
                <p>Reviewed in India on <span className="dateSpan">6 September 2023</span> </p>
            </div>
        </div>
    )
}
