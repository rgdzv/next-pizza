import { axiosAPI } from 'shared/api'
import type { fetchPizzasParams } from '../lib/types/api'
import type { Pizza } from 'entities/PizzaCard'

export const fetchPizzasAPI = (params: fetchPizzasParams) => {
    const data = axiosAPI.get<Pizza[]>('/pizzas', {
        params: {
            page: params.page,
            limit: params.limit,
            category: params.categoryID > 0 ? params.categoryID : null
        }
    })

    return data
}
