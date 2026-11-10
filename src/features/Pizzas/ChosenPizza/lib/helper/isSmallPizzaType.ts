import { PIZZA_SIZES } from 'entities/PizzaCard'
import type { PizzaSize } from 'entities/PizzaCard'

export const isSmallPizzaSize = (size: PizzaSize) => {
    return size === PIZZA_SIZES.EXTRA_SMALL || size === PIZZA_SIZES.SMALL
}
