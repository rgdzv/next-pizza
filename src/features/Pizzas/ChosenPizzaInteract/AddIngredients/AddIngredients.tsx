import { IngredientCard } from 'entities/IngredientCard'
import styles from './AddIngredients.module.scss'

const ITEMS = [
    {
        img: 'https://cdn.dodostatic.net/static/Img/Ingredients/0199152f20c570859ff617c0a6ef03d3.png',
        name: 'Сырный бортик',
        price: '115'
    },
    {
        img: 'https://cdn.dodostatic.net/static/Img/Ingredients/01991530635b73ecb1a22658b49e1653.png',
        name: 'Пряная говядина',
        price: '115'
    },
    {
        img: 'https://cdn.dodostatic.net/static/Img/Ingredients/0199ae74f2fd783b8fb21bb0af7d09e6.png',
        name: 'Моцарелла',
        price: '115'
    }
    // {
    //     img: 'https://cdn.dodostatic.net/static/Img/Ingredients/0199ae74f2fd783b8fb21bb0af7d09e6.png',
    //     name: 'Моцарелла',
    //     price: '115'
    // },
    // {
    //     img: 'https://cdn.dodostatic.net/static/Img/Ingredients/0199ae74f2fd783b8fb21bb0af7d09e6.png',
    //     name: 'Моцарелла',
    //     price: '115'
    // },
    // {
    //     img: 'https://cdn.dodostatic.net/static/Img/Ingredients/0199ae74f2fd783b8fb21bb0af7d09e6.png',
    //     name: 'Моцарелла',
    //     price: '115'
    // },
    // {
    //     img: 'https://cdn.dodostatic.net/static/Img/Ingredients/0199ae74f2fd783b8fb21bb0af7d09e6.png',
    //     name: 'Моцарелла',
    //     price: '115'
    // },
    // {
    //     img: 'https://cdn.dodostatic.net/static/Img/Ingredients/0199ae74f2fd783b8fb21bb0af7d09e6.png',
    //     name: 'Моцарелла',
    //     price: '115'
    // }
]

export const AddIngredients = () => {
    const ingr = ITEMS.map((item) => (
        <IngredientCard key={item.name} item={item}></IngredientCard>
    ))
    return <div className={styles.addIngredients}>{ingr}</div>
}
