import type { PizzasStore } from '../../types/store'

export const getPizzas = (state: PizzasStore) => {
    return state.pizzas
}
