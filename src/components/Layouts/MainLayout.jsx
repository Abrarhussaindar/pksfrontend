import React from 'react'
import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'
import { SecondaryHeader } from '../SecondaryHeader/SecondaryHeader'

export const MainLayout = ({children}) => {
    return (
        <>
            <Header/>
            <SecondaryHeader />
            {children}
            <Footer/>
        </>
    )
}
