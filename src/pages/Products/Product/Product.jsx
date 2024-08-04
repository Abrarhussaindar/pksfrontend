import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { MainLayout } from '../../../components/Layouts/MainLayout'
import axios from '../../../axios'
import ProductImage from '../../../components/Product/productPageComponents/productImageContainer/ProductImage'
import ProductNameDescription from "../../../components/Product/productPageComponents/productNameDescriptionContainer/ProductNameDescription"
import ProductRating from "../../../components/Product/productPageComponents/productRating/ProductRating"
import ProductPrice from "../../../components/Product/productPageComponents/productPriceContainer/ProductPrice"
import ProductStock from "../../../components/Product/productPageComponents/productStockContainer/ProductStock"
// import PinCode from "../../../components/Product/productPageComponents/"
import Buttons from "../../../components/Product/productPageComponents/buttons/Buttons"
// import Offers from "../../../components/Product/productPageComponents"
// import Services from "../../../components/Product/productPageComponents"
// import ProductColor from "../../../components/Product/productPageComponents"
// import ProductSize from "../../../components/Product/productPageComponents"
import ProductTable from "../../../components/Product/productPageComponents/productTableContainer/ProductTable"
import ProductAbout from "../../../components/Product/productPageComponents/productAboutContainer/ProductAbout"
import BrandSection from "../../../components/Product/productPageComponents/brandSection/BrandSection"
import SimilarProducts from "../../../components/Product/productPageComponents/similarProductsSection/SimilarProducts"
import ProductDetails from "../../../components/Product/productPageComponents/productDetailsSection/ProductDetails"
import ProductDescription from "../../../components/Product/productPageComponents/productDescripton/ProductDescription"
// import ProductManufacturer from "../../../components/Product/productPageComponents/"
import ProductReviewSection from "../../../components/Product/productPageComponents/productReviewSection/ProductReviewSection"




export const Product = () => {
    const location = useLocation().pathname
    const productId = location.split("/")[4]
    const [product, setProduct] = useState([])
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await axios.post("/product/product-by-id", { "productId": productId })
                setProduct(res.data)
            } catch (error) {
                throw error
            }
        }
        fetchProduct()
    }, [productId])

    return (
        <MainLayout>
            <main className='SingleProductPage'>
                <h1>single product page</h1>
                <div className="productContainer">
                    <div className="mainSection">
                        <div className="left">
                            <ProductImage image={product.image} />
                        </div>
                        <div className="right">
                            <ProductNameDescription des={product.description} name={product.title} />
                            <ProductRating rating={product.rating} />
                            <hr />
                            <ProductPrice price={product.price} />
                            <ProductStock />
                            {/* <PinCode /> */}
                            <Buttons product={product} />
                            <hr />
                            {/* <Offers /> */}
                            <hr />
                            {/* <Services /> */}
                            <hr />
                            <div className="aboutItemContainer">
                                <div className="productColor">
                                    {/* <ProductColor /> */}
                                </div>
                                <hr />
                                <div className="productSize">
                                    {/* <ProductSize /> */}
                                </div>
                                <hr />
                                <ProductTable />
                                <hr />
                                <ProductAbout />
                            </div>
                        </div>
                    </div>
                    <BrandSection />
                    <hr className="simiHr" />
                    <SimilarProducts />
                    <hr className="simiHr" />
                    <ProductDetails />
                    <hr className="simiHr" />
                    <ProductDescription />
                    <hr className="simiHr" />
                    {/* <ProductManufacturer /> */}
                    <p>pending</p>
                    <hr className="simiHr" />
                    <ProductReviewSection />
                </div>
            </main>
        </MainLayout>
    )
}
