'use client'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { DarkThemeIcon, LightThemeIcon } from 'shared/assets'
import { CustomButton, Skeleton } from 'shared/ui'

export const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    const handleClick = () => {
        setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
    }

    const iconCondition =
        theme === 'dark' ? (
            <DarkThemeIcon title='Темная тема' />
        ) : (
            <LightThemeIcon title='Светлая тема' />
        )

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return <Skeleton className='themeSwitcherSkeleton' />
    }

    return (
        <>
            <CustomButton className='theme' onClick={handleClick}>
                {iconCondition}
            </CustomButton>
        </>
    )
}
