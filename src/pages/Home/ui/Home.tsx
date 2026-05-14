'use client'
import { Filters } from 'widgets/Filters'
import { Pizzas } from 'widgets/Pizzas'
import { HeaderContainer } from 'widgets/Containers'
import styles from './Home.module.scss'
import type { FC } from 'react'

const Home: FC = () => {
    return (
        <div className={styles.home}>
            <HeaderContainer />
            <Filters />
            <Pizzas />
        </div>
    )
}

export default Home
