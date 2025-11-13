'use client'
import { Header } from 'widgets/Header'
import { Filters } from 'widgets/Filters'
import { Pizzas } from 'widgets/Pizzas'
import styles from './HomePage.module.scss'
import type { FC } from 'react'

const HomePage: FC = () => {
    return (
        <div className={styles.home}>
            <Header />
            <Filters />
            <Pizzas />
        </div>
    )
}

export default HomePage
