import React, { useState } from 'react'
import { MainLayout } from '../../../components/Layouts/MainLayout'
import { useLocation } from 'react-router-dom';
import { ProductCard } from '../../../components/Product/ProductCard/ProductCard';

export const Products = () => {
    const location = useLocation();
    const category = location.pathname.split("/")[2]
    const [products, setProducts] = useState([
        {
            _id: "1",
            title: "t-shirt",
            price: 3000
        }
    ])

    return (
        <MainLayout>
            <main>
                <h1>{category}</h1>
                {
                    products.map((eachProduct)=>(
                        <ProductCard product={eachProduct} subcate={category}/>
                    ))
                }
            </main>
        </MainLayout>
    )
} 