'use client'
import { Filters } from 'widgets/Filters'
import { HeaderContainer, PizzasContainer } from 'widgets/Containers'
import styles from './Home.module.scss'
import type { FC } from 'react'

const Home: FC = () => {
    return (
        <div className={styles.home}>
            <HeaderContainer />
            <Filters />
            <PizzasContainer />
        </div>
    )
}

export default Home
