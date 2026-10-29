import { getPizzaVariant, PIZZA_SIZES } from 'entities/PizzaCard'
import { CustomImage } from 'shared/ui'
import { LargeTemplate, MiddleTemplate } from 'shared/assets'
import { useSizeType } from '../../../lib/hooks/useSizeType'
import { useChosenPizza } from '../../../lib/hooks/useChosenPizza'
import styles from './ShowPizzaImage.module.scss'

export const ShowPizzaImage = () => {
    const { chosenPizza } = useChosenPizza()
    const { pizzaType, pizzaSize } = useSizeType()

    const selectedVariant = getPizzaVariant(chosenPizza, pizzaType, pizzaSize)
    const pizzaModalImage = selectedVariant?.img ?? chosenPizza?.imgSrc ?? ''

    const pizzaModalImageClassName =
        pizzaSize === PIZZA_SIZES.EXTRA_SMALL
            ? 'pizzaModalExtraSmall'
            : pizzaSize === PIZZA_SIZES.SMALL
              ? 'pizzaModalSmall'
              : pizzaSize === PIZZA_SIZES.MIDDLE
                ? 'pizzaModalMiddle'
                : 'pizzaModalLarge'

    const middleTemplateShowCondition = pizzaSize ===
        PIZZA_SIZES.EXTRA_SMALL && (
        <div className={styles.pizzaImageMiddleTemplate}>
            <MiddleTemplate />
        </div>
    )

    const smallTemplateShowCondition = (pizzaSize === PIZZA_SIZES.EXTRA_SMALL ||
        pizzaSize === PIZZA_SIZES.SMALL) && (
        <div className={styles.pizzaImageLargeTemplate}>
            <LargeTemplate />
        </div>
    )
    return (
        <div className={styles.pizzaImage} data-testid='show-pizza-image'>
            <CustomImage
                variant={pizzaModalImageClassName}
                src={pizzaModalImage}
                alt={chosenPizza?.title ?? 'Пицца'}
            />
            {middleTemplateShowCondition}
            {smallTemplateShowCondition}
        </div>
    )
}
