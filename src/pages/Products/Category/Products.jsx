import React, { useEffect, useState } from 'react'
import { MainLayout } from '../../../components/Layouts/MainLayout'
import { useLocation } from 'react-router-dom';
import { ProductCard } from '../../../components/Product/ProductCard/ProductCard';
import axios from '../../../axios';


export const Products = () => {
    const location = useLocation();
    const category = location.pathname.split("/")[2]
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchCategoryProducts = async () => {
            const res = await axios.post("/product/category-wise", { "category": category })
            setProducts(res.data)
        }
        fetchCategoryProducts()
    }, [category])

    return (
        <MainLayout>
            <main>
                <h1>{category}</h1>
                {
                    products.map((eachProduct) => (
                        <ProductCard key={eachProduct._id} product={eachProduct}/>
                    ))
                }
            </main>
        </MainLayout>
    )
} 