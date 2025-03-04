'use client'
import { useEffect, type FC } from 'react'

const App: FC = () => {
    useEffect(() => {
        throw new Error('Error!')
    }, [])
    return (
        <div className="app">
            <header></header>
            <main></main>
            <footer></footer>
        </div>
    )
}

export default App
