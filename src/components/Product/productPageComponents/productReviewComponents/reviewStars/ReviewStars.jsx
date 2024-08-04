import "./reviewStars.css"

export default function ReviewStars() {
    return (
        <>
        
            <ul className="reviewProductRating">
                <li>

                    <img src="/assets/images/star.svg" alt="" />
                    <img src="/assets/images/star.svg" alt="" />
                    <img src="/assets/images/star.svg" alt="" />
                    <img src="/assets/images/star.svg" alt="" />
                    <img src="/assets/images/starOutline.png" alt="" />
                    <span className="numStars">
                        3.8 out of 5
                    </span>
                </li>
            </ul>
            <span className="numRatings">30,000 ratings</span>
        </>
    )
}
