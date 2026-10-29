import type { Pizza, PizzaType, PizzaSize } from '../types/pizza'

export const getPizzaVariant = (
    pizza: Pizza | undefined,
    dough: PizzaType,
    size: PizzaSize
) => {
    return pizza?.variants.find(
        (variant) => variant.dough === dough && variant.size === size
    )
}
