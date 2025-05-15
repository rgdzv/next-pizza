'use client'
import { NoImageIcon } from 'shared/assets'
import { NoContent } from 'widgets/NoContent'
import type { FC } from 'react'

interface GlobalErrorProps {
    error: Error & { digest?: string }
}

const GlobalError: FC<GlobalErrorProps> = ({ error }) => {
    return (
        <html lang='ru'>
            <body>
                <NoContent
                    name='Что-то пошло не так...'
                    message={error.message}
                    imgSrc={NoImageIcon}
                />
            </body>
        </html>
    )
}

export default GlobalError
