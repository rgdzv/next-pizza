import { NoContent } from 'widgets/NoContent'
import { NoImageIcon } from 'shared/assets'
import type { FC } from 'react'

export const NotFound: FC = () => {
    return (
        <NoContent
            name='Страница не найдена'
            message='Проверьте корректность введенного адреса или повторите попытку позже'
            imgSrc={NoImageIcon}
        />
    )
}
