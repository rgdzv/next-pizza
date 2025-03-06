'use client'
import { Header } from 'widgets/Header'
import type { FC } from 'react'

const App: FC = () => {
    return (
        <div className="app">
            <Header />
            <main></main>
            <footer></footer>
        </div>
    )
}

export default App
