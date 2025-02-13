import Link from 'next/link'
import styles from './styles/NotFound.module.scss'
import type { FC } from 'react'

const NotFound: FC = () => {
    return (
        <div className={styles.notFound}>
            <h2>Не найдено</h2>
            <p>Страница не найдена</p>
            <Link href="/">Вернуться на главную</Link>
        </div>
    )
}

export default NotFound
