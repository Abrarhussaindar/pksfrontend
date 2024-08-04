import "./ratingStars.css"

export default function RatingStars() {
    return (
        <ul className="featureProductRating">
            <li>

                <img src="/assets/images/star.svg" alt="" />
                <img src="/assets/images/star.svg" alt="" />
                <img src="/assets/images/star.svg" alt="" />
                <img src="/assets/images/star.svg" alt="" />
                <img src="/assets/images/starOutline.png" alt="" />
                <span className="numStars">
                    3.8
                </span>
            </li>
        </ul>
    )
}
