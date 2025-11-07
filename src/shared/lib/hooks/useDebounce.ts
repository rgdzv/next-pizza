'use client'

import { useCallback, useRef } from 'react'

type CallBack = (...args: unknown[]) => void

export function useDebounce(func: CallBack, delay: number): CallBack {
    const timer = useRef<NodeJS.Timeout>(null)

    return useCallback(
        (...args: unknown[]) => {
            if (timer.current !== null) {
                clearTimeout(timer.current)
            }
            timer.current = setTimeout(() => {
                func(...args)
            }, delay)
        },
        [func, delay]
    )
}
