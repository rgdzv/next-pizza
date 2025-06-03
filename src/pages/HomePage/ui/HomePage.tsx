'use client'
import { Header } from 'widgets/Header'
import { Filters } from 'widgets/Filters'
import { Pizzas } from 'widgets/Pizzas'
import { Footer } from 'widgets/Footer'
import type { FC } from 'react'

const HomePage: FC = () => {
    return (
        <div className='container'>
            <Header />
            <Filters />
            <Pizzas />
            <Footer />
        </div>
    )
}

export default HomePage
