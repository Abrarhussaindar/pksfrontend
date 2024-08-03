import React from 'react'
import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'

export const MainLayout = ({children}) => {
    return (
        <>
            <Header/>
            {children}
            <Footer/>
        </>
    )
}
