import "./featureReviews.css"
import RatingStars from './ratingStars/RatingStars'

export default function FeatureReviews() {
    return (
        <>
        
            <div className="featureInner">
                <div className="innerLeft">
                    <p>Comfort</p>
                </div>
                <RatingStars />
            </div>
    
        </>
    )
}
