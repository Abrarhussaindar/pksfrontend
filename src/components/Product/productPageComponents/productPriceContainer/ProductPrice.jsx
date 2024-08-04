import "./productPrice.css"

export default function ProductPrice({price}) {
    return (
        <div className="priceContainer">
            <div className="discounts">-75% off</div>
            <div className="prices">
                <span>&#x20B9;</span>
                {price}
            </div>
            <p>M.R.P: <span>&#x20B9;1000</span> </p>
        </div>
    )
}
