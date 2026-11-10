import { isAxiosError } from 'axios'
import { fetchExtraIngredientsAPI } from '../../../api/fetchExtraIngredientsAPI'
import type { StateCreator } from 'zustand'
import type {
    ChosenPizzaStore,
    ChosenPizzaActions
} from '../../../lib/types/store'

export const fetchExtraIngredients: StateCreator<
    ChosenPizzaStore,
    [],
    [],
    Pick<ChosenPizzaActions, 'fetchExtraIngredients'>
> = (set, get) => ({
    fetchExtraIngredients: async () => {
        const { extraIngredients, isAddonsLoading } = get()

        if (extraIngredients !== undefined) return

        if (isAddonsLoading) return

        set({ isAddonsLoading: true }, false)

        try {
            const { data } = await fetchExtraIngredientsAPI()

            set(
                {
                    extraIngredients: data,
                    isAddonsLoading: false,
                    error: undefined
                },
                false
            )
        } catch (error) {
            let errorMessage = 'An unexpected error occurred!'

            if (isAxiosError(error)) {
                errorMessage = error.message
            }

            set(
                {
                    isAddonsLoading: false,
                    error: errorMessage
                },
                false
            )
        }
    }
})
