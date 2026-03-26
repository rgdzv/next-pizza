import { PizzaSize } from 'entities/PizzaCard'
import { CustomImage } from 'shared/ui'
import { LargeTemplate, MiddleTemplate } from 'shared/assets'
import styles from './ShowPizzaImage.module.scss'
import type { PizzaSizeKeys } from 'entities/PizzaCard'
import type { FC } from 'react'

interface ShowPizzaImagePropsInterface {
    pizzaSize: PizzaSizeKeys
    pizzaModalImage: string
}

export const ShowPizzaImage: FC<ShowPizzaImagePropsInterface> = ({
    pizzaSize,
    pizzaModalImage
}) => {
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
