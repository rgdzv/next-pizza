import { NoImageIcon } from 'shared/assets'
import { NoContent } from 'widgets/NoContent'
import type { FC } from 'react'

const NotFound: FC = () => {
    return (
        <NoContent
            name='Страница не найдена'
            message='Проверьте корректность введенного адреса или повторите попытку позже'
            imgSrc={NoImageIcon}
        />
    )
}

export default NotFound
