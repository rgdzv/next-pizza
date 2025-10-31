import { axiosAPI } from 'shared/api'
import type { fetchPizzasParams } from '../lib/types/api'
import type { Pizza } from 'entities/PizzaCard'

interface AxiosResponse {
    items: number
    data: Pizza[]
}

export const fetchPizzasAPI = (params: fetchPizzasParams) => {
    const { page, perPage, search, categoryID, sort, order } = params

    const data = axiosAPI.get<AxiosResponse>('/pizzas', {
        params: {
            _page: page,
            _per_page: perPage,
            q: search,
            category: categoryID > 0 ? categoryID : null,
            _sort: order === 'desc' ? `-${sort}` : sort
        }
    })

    return data
}
