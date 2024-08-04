import "./customerProductDetails.css"

export default function CustomerProductDetails() {
    return (
        <div className="productDetails">
            <div className="size">
                Size: <span className="proSpan">L</span>
            </div>
            <div className="color">
                Colour: <span className="proSpan">Black</span>
            </div>
            <div className="verified">
                <span className="proSpan">Verified Purchase</span>
            </div>
        </div>
    )
}
