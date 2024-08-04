import "./productReviewSection.css"

import SearchReview from "../productReviewComponents/SearchReviewContainer/SearchReview"
import ReviewStars from "../productReviewComponents/reviewStars/ReviewStars"
import RatingProgressBar from "../productReviewComponents/ratingProgressBar/RatingProgressBar"
import FeatureReviews from "../productReviewComponents/featureReivews/FeatureReviews"
import WriteReviews from "../productReviewComponents/writeReviews/WriteReviews"
import ReviewImages from "../productReviewComponents/reviewImagesContainer/ReviewImages"
import ReviewTags from "../productReviewComponents/reviewTags/ReviewTags"
import CustomerReviewCard from "../productReviewComponents/customerReviewCard/CustomerReviewCard"
// import RatingStars from "../productReviewComponents/featureReivews/ratingStars/RatingStars"

export default function ProductReviewSection() {
    return (
        <div className="productReviewsSection">
        <div className="top">
            <div className="heading">
                <h3>Looking for specific info?</h3>
            </div>
            <SearchReview />
        </div>
        <hr className="simiHr" />
        <div className="bottom">
            <div className="left">
                <div className="customerReviwes">
                    <div className="heading">
                        <h4>Customer reviews</h4>
                    </div>

                    <ReviewStars />
                    <RatingProgressBar />
                    
                </div>
                <hr className="revHr" />
                <div className="byFeature">
                    <div className="heading">
                        <h4>By feature</h4>
                    </div>
                    <div className="container">
                        <FeatureReviews />
                    </div>
                </div>
                <hr className="revHr" />
                <div className="reviewThisProduct">
                    <div className="heading">
                        <h4>Review this product</h4>
                    </div>
                    <WriteReviews />
                </div>
                <hr className="revHr" />
            </div>
            <div className="right">
                <div className="rigthTop">
                    <div className="heading">
                        <h4>
                            Reviews with images
                        </h4>
                    </div>
                    
                    <ReviewImages />
                </div>
                <hr className="rigHr" />
                <div className="rightCenter">
                    <div className="heading">
                        <h4>
                            Read reviews that mention
                        </h4>
                    </div>
                    <div className="container">
                        <ReviewTags />
                    </div>
                </div>
                <hr className="rigHr" />
                <div className="rightBottom">
                    <div className="heading">
                        <h4>
                            Top reviews from India
                        </h4>
                    </div>
                    <div className="container">
                        <CustomerReviewCard />
                        <CustomerReviewCard />
                        <CustomerReviewCard />
                        <CustomerReviewCard />
                    </div>
                </div>
                <hr className="hrBtm"/>
            </div>
        </div>
    </div>
    )
}
