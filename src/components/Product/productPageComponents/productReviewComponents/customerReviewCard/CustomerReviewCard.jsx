import Buttons from "./buttons/Buttons"
import CustomerDetails from "./customerDetails/CustomerDetails"
import CustomerProductDetails from "./customerProductDetails/CustomerProductDetails"
import CustomerRating from "./customerRating/CustomerRating"
import CustomerReview from "./customerReview/CustomerReview"
import "./customerReviewCard.css"

export default function CustomerReviewCard() {
    return (
        <div className="cardInner">
            <div className="head">
                <div className="customer">
                    <CustomerDetails />
                </div>
                <CustomerRating />
            </div>
            <hr className="ratHr" />
            <CustomerProductDetails />
            <CustomerReview />
            <Buttons />
        </div>
    )
}
