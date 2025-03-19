'use client'
import { NoContent } from 'shared/ui'
import { NoImageIcon } from 'shared/assets'
import type { FC } from 'react'

interface GlobalErrorProps {
    error: Error & { digest?: string }
}

const GlobalError: FC<GlobalErrorProps> = ({ error }) => {
    const name = 'Что-то пошло не так...'
    const imgClassName = 'notFound'
    const imgAlt = 'Not found'

    return (
        <html lang='ru'>
            <body>
                <NoContent
                    name={name}
                    message={error.message}
                    imgSrc={NoImageIcon}
                    imgClassName={imgClassName}
                    imgAlt={imgAlt}
                />
            </body>
        </html>
    )
}

export default GlobalError
