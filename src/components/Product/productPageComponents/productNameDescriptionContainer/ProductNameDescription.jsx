import "./productNameDescription.css"

export default function ProductNameDescription({des, name}) {
    return (
        <div className="productNameDescriptionContainer">
            <span>{name} </span>{des}
            {/* Dennis Lingo Men's Solid Slim Fit Cotton Casual Shirt with Spread Collar & Full Sleeves (Also Available in Plus Size) */}
        </div>
    )
}
