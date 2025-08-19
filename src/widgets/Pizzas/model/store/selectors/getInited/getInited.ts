import type { PizzasStore } from '../../../../lib/types/store'

export const getInited = (state: PizzasStore) => {
    return state.inited
}
