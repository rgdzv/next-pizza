import type { BasketPizza } from 'entities/BasketPizzaCard'

export const getBasketPizzaKey = (pizza: BasketPizza) => {
    const normalizedIngredients = [...pizza.ingredients]
        .map((ingredient) => ingredient.toLowerCase())
        .sort()
        .join('|')

    return [pizza.id, pizza.size, pizza.type, normalizedIngredients].join('_')
}
