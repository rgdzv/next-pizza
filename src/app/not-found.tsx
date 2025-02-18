import { Empty } from 'shared/ui'
import type { FC } from 'react'

const NotFound: FC = () => {
    const name = 'Страница не найдена'
    const message =
        'Проверьте корректность введенного адреса или повторите попытку позже'

    return <Empty name={name} message={message} />
}

export default NotFound
