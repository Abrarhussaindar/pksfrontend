import ProductSeller from "../productSeller/ProductSeller"
import "./productStock.scss"

export default function ProductStock() {
    return (
        <div className="stockContainer">
            <h4>In Stock</h4>
            <p>Quantity: <span className="quantityCount">1</span></p>
            <ProductSeller />
        </div>
    )
}
