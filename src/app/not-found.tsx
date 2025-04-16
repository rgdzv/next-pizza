import { NoContent } from 'shared/ui'
import { NoImageIcon } from 'shared/assets'
import type { FC } from 'react'

const NotFound: FC = () => {
    return (
        <NoContent
            name='Страница не найдена'
            message='Проверьте корректность введенного адреса или повторите попытку позже'
            imgSrc={NoImageIcon}
            imgClassName='notFound'
            imgAlt='Not found'
        />
    )
}

export default NotFound
