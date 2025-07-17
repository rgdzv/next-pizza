'use client'
import { Header } from 'widgets/Header'
import { Filters } from 'widgets/Filters'
import { Pizzas } from 'widgets/Pizzas'
import type { FC } from 'react'

const HomePage: FC = () => {
    return (
        <div className='container'>
            <Header />
            <Filters />
            <Pizzas />
        </div>
    )
}

export default HomePage
