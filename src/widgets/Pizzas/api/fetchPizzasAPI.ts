import { axiosAPI } from 'shared/api'
import type { fetchPizzasParams } from '../lib/types/api'
import type { Pizza } from 'entities/PizzaCard'

export const fetchPizzasAPI = (params: fetchPizzasParams) => {
    const { page, limit, categoryID, sortBy, order } = params

    const data = axiosAPI.get<Pizza[]>('/pizzas', {
        params: {
            page,
            limit,
            category: categoryID > 0 ? categoryID : null,
            sortBy,
            order
        }
    })

    return data
}
