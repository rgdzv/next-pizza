import { axiosAPI } from 'shared/api'
import type { ExtraIngredient } from 'entities/PizzaCard'

export const fetchExtraIngredientsAPI = () => {
    const data = axiosAPI.get<ExtraIngredient[]>('/extraIngredients')

    return data
}
