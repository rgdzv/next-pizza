'use client'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { DarkThemeIcon, LightThemeIcon } from 'shared/assets'
import { CustomButton } from 'shared/ui'
import { getSkeleton } from 'shared/lib'

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
        const skeleton = getSkeleton('themeSwitcherSkeleton', 1)
        return <>{skeleton}</>
    }

    return (
        <>
            <CustomButton variant='theme' onClick={handleClick}>
                {iconCondition}
            </CustomButton>
        </>
    )
}
