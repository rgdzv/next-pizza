import Link from 'next/link'
import type { FC } from 'react'

const NotFound: FC = () => {
    return (
        <div className="not-found">
            <h2>Не найдено</h2>
            <p>Страница не найдена</p>
            <Link href="/">Вернуться на главную</Link>
        </div>
    )
}

export default NotFound
