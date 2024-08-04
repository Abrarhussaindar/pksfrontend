import ProductCard from "../productCard/ProductCard"
import "./similarProducts.css"


export default function SimilarProducts() {
    return (
        <div className="similarProductsSection">
            <div className="heading">
                <h4>Similar Products</h4>
            </div>
            <div className="container">

                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    )
}
