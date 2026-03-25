import type { PizzasStore } from '../../../../lib/types/store'

export const getPizzas = (state: PizzasStore) => {
    return state.pizzas
}
