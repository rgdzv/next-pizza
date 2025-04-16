'use client'
import { NoContent } from 'shared/ui'
import { NoImageIcon } from 'shared/assets'
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
                    imgClassName='notFound'
                    imgAlt='Not found'
                />
            </body>
        </html>
    )
}

export default GlobalError
