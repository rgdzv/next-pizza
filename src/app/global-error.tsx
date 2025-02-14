'use client'
import type { FC } from 'react'

interface GlobalErrorProps {
    error: Error & { digest?: string }
}

const GlobalError: FC<GlobalErrorProps> = ({ error }) => {
    const handleReset = () => {
        window.location.reload()
    }

    return (
        <html lang="ru">
            <body>
                <div className="global-error">
                    <p className="name">Что-то пошло не так!</p>
                    <p className="msg">{error.message}</p>
                    <button onClick={handleReset}>Обновить</button>
                </div>
            </body>
        </html>
    )
}

export default GlobalError
