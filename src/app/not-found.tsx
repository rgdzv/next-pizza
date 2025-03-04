import { NoContent } from 'shared/ui'
import { NoImage } from 'shared/assets'
import type { FC } from 'react'

const NotFound: FC = () => {
    const name = 'Страница не найдена'
    const message =
        'Проверьте корректность введенного адреса или повторите попытку позже'
    const imgClassName = 'not__found'
    const imgAlt = 'Not found'

    return (
        <NoContent
            name={name}
            message={message}
            imgSrc={NoImage}
            imgClassName={imgClassName}
            imgAlt={imgAlt}
        />
    )
}

export default NotFound
