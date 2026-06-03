import { PizzaSize } from 'entities/PizzaCard'
import { CustomImage } from 'shared/ui'
import { LargeTemplate, MiddleTemplate } from 'shared/assets'
import { useSizeType } from '../../../lib/hooks/useSizeType'
import { useChosenPizza } from '../../../lib/hooks/useChosenPizza'
import styles from './ShowPizzaImage.module.scss'

export const ShowPizzaImage = () => {
    const { chosenPizza } = useChosenPizza()
    const { pizzaType, pizzaSize } = useSizeType()

    const pizzaModalImage = chosenPizza?.details[pizzaType][pizzaSize]
        .img as string

    const pizzaModalImageClassName =
        pizzaSize === PizzaSize.EXTRA_SMALL
            ? 'pizzaModalExtraSmall'
            : pizzaSize === PizzaSize.SMALL
              ? 'pizzaModalSmall'
              : pizzaSize === PizzaSize.MIDDLE
                ? 'pizzaModalMiddle'
                : 'pizzaModalLarge'

    const middleTemplateShowCondition = pizzaSize === PizzaSize.EXTRA_SMALL && (
        <div className={styles.pizzaImageMiddleTemplate}>
            <MiddleTemplate />
        </div>
    )

    const smallTemplateShowCondition = (pizzaSize === PizzaSize.EXTRA_SMALL ||
        pizzaSize === PizzaSize.SMALL) && (
        <div className={styles.pizzaImageLargeTemplate}>
            <LargeTemplate />
        </div>
    )
    return (
        <div className={styles.pizzaImage}>
            <CustomImage
                className={pizzaModalImageClassName}
                src={pizzaModalImage}
                alt={pizzaModalImage}
            />
            {middleTemplateShowCondition}
            {smallTemplateShowCondition}
        </div>
    )
}
