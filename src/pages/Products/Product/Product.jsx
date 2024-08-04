import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { MainLayout } from '../../../components/Layouts/MainLayout'

export const Product = () => {
    const location = useLocation().pathname
    const productId = location.split("/")[4]
    console.log("pro id; ", productId)
    const [product, setProduct] = useState([])

    return (
        // <div className="productContainer">
        //     <div className="mainSection">
        //         <div className="left">
        //             <ProductImage image={product.image} />
        //         </div>
        //         <div className="right">
        //             <ProductNameDescription des={product.description} name={product.title} />
        //             <ProductRating rating={product.rating} />
        //             <hr />
        //             <ProductPrice price={product.price} />
        //             <ProductStock />
        //             <PinCode />
        //             <Buttons product={product} />
        //             <hr />
        //             <Offers />
        //             <hr />
        //             <Services />
        //             <hr />
        //             <div className="aboutItemContainer">
        //                 <div className="productColor">
        //                     <ProductColor />
        //                 </div>
        //                 <hr />
        //                 <div className="productSize">
        //                     <ProductSize />
        //                 </div>
        //                 <hr />
        //                 <ProductTable />
        //                 <hr />
        //                 <ProductAbout />
        //             </div>
        //         </div>
        //     </div>
        //     <BrandSection />
        //     <hr className="simiHr" />
        //     <SimilarProducts />
        //     <hr className="simiHr" />
        //     <ProductDetails />
        //     <hr className="simiHr" />
        //     <ProductDescription />
        //     <hr className="simiHr" />
        //     {/* <ProductManufacturer /> */}
        //     <p>pending</p>
        //     <hr className="simiHr" />
        //     <ProductReviewSection />
        // </div>

        <MainLayout>
            <main>
                <h1>single product page</h1>
            </main>
        </MainLayout>
    )
}
