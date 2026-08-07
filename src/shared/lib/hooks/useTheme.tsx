'use client'
import { useEffect, useState } from 'react'

export const useTheme = (initialTheme: 'dark' | 'light' = 'dark') => {
    const [theme, setTheme] = useState<'dark' | 'light'>(initialTheme)

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme')
        if (savedTheme === 'light' || savedTheme === 'dark') {
            setTheme(savedTheme)
        }
    }, [])

    const toggleTheme = () => {
        setTheme((prevTheme) => {
            const newTheme = prevTheme === 'dark' ? 'light' : 'dark'
            localStorage.setItem('theme', newTheme)
            return newTheme
        })
    }

    return { theme, toggleTheme }
}
