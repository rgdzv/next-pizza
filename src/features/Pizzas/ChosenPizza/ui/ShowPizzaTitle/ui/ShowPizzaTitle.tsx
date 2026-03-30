import styles from './ShowPizzaTitle.module.scss'
import type {
    Nutrition,
    Pizza,
    PizzaSizeKeys,
    PizzaTypeKeys
} from 'entities/PizzaCard'
import type { FC } from 'react'

interface ShowPizzaTitlePropsInterface {
    pizzaSize: PizzaSizeKeys
    pizzaType: PizzaTypeKeys
    chosenPizza: Pizza | undefined
}

export const ShowPizzaTitle: FC<ShowPizzaTitlePropsInterface> = ({
    pizzaSize,
    pizzaType,
    chosenPizza
}) => {
    const nutritionValue = chosenPizza?.details[pizzaType][pizzaSize]
        .nutrition as Nutrition

    return (
        <>
            <h1 className={styles.pizzaInfoTitle}>{chosenPizza?.title}</h1>
            <span className={styles.pizzaInfoSubtitle}>
                {pizzaSize} см, {pizzaType} тесто,&nbsp;
                {nutritionValue.weight} г
            </span>
        </>
    )
}
