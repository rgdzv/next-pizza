import type { ExtraIngredient, PizzaSize, PizzaType } from 'entities/PizzaCard'

export const getIngredientsPrice = (
    extraIngredients: ExtraIngredient[] | undefined,
    ingredients: string[],
    pizzaType: PizzaType,
    pizzaSize: PizzaSize
) => {
    return ingredients.reduce((sum, ingredientName) => {
        const foundIngredient = extraIngredients?.find(
            (item) => item.name === ingredientName
        )

        if (!foundIngredient) return sum

        const sizeTypeCombination = `${pizzaType}_${String(pizzaSize)}`

        const price = foundIngredient.prices[sizeTypeCombination] ?? 0

        return sum + price
    }, 0)
}
