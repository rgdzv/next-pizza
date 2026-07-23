import { render, screen } from '@testing-library/react'
import { PizzasStoreProvider } from 'features/Pizzas/AllPizzas'
import { ChosenPizzaStoreProvider } from 'features/Pizzas/ChosenPizza'
import { Pizzas } from './Pizzas'
import type { Pizza } from 'entities/PizzaCard'

const pizzasMock = [
    {
        id: '1',
        title: 'Терияки',
        category: 5,
        rating: 10,
        description:
            'Цыпленок, красный лук, сладкий перец, соус терияки, сыр моцарелла, фирменный соус альфредо',
        imgSrc: 'https://media.dodostatic.net/image/r:584x584/019a10a0c9ab792190a97768688bc6e9.jpg',
        details: {
            thin: {
                '20': {
                    nutrition: {
                        calories: '254.9',
                        prot: '11',
                        fat: '9.7',
                        carbo: '231',
                        weight: '430'
                    },
                    price: '799',
                    img: 'https://media.dodostatic.net/image/r:584x584/019a10a0d04478e2888f2049f683286e.jpg'
                },
                '25': {
                    nutrition: {
                        calories: '244',
                        prot: '10.3',
                        fat: '8.9',
                        carbo: '30.7',
                        weight: '630'
                    },
                    price: '979',
                    img: 'https://media.dodostatic.net/image/r:584x584/019a10a0ead476fa8b2a69b9af466c31.jpg'
                },
                '30': {
                    nutrition: {
                        calories: '254.9',
                        prot: '11',
                        fat: '9.7',
                        carbo: '231',
                        weight: '430'
                    },
                    price: '799',
                    img: 'https://media.dodostatic.net/image/r:584x584/019a10a0d04478e2888f2049f683286e.jpg'
                },
                '35': {
                    nutrition: {
                        calories: '244',
                        prot: '10.3',
                        fat: '8.9',
                        carbo: '30.7',
                        weight: '630'
                    },
                    price: '979',
                    img: 'https://media.dodostatic.net/image/r:584x584/019a10a0ead476fa8b2a69b9af466c31.jpg'
                }
            },
            traditional: {
                '20': {
                    nutrition: {
                        calories: '262',
                        prot: '11',
                        fat: '9.1',
                        carbo: '34',
                        weight: '230'
                    },
                    price: '379',
                    img: 'https://media.dodostatic.net/image/r:584x584/019a10a0ba967817ab2dad8bef60807e.jpg'
                },
                '25': {
                    nutrition: {
                        calories: '259.8',
                        prot: '10.2',
                        fat: '8.5',
                        carbo: '35.7',
                        weight: '350'
                    },
                    price: '519',
                    img: 'https://media.dodostatic.net/image/r:584x584/019a10a0c04379429f3a07a9df0478ed.jpg'
                },
                '30': {
                    nutrition: {
                        calories: '258.4',
                        prot: '10.2',
                        fat: '8.6',
                        carbo: '35.1',
                        weight: '530'
                    },
                    price: '799',
                    img: 'https://media.dodostatic.net/image/r:584x584/019a10a0c9ab792190a97768688bc6e9.jpg'
                },
                '35': {
                    nutrition: {
                        calories: '249.8',
                        prot: '9.9',
                        fat: '8.2',
                        carbo: '34',
                        weight: '730'
                    },
                    price: '979',
                    img: 'https://media.dodostatic.net/image/r:584x584/019a10a0e54870b0ae63dca748223369.jpg'
                }
            }
        },
        ingredients: [
            {
                name: 'Цыпленок',
                removable: true
            },
            { name: 'сладкий перец', removable: true },
            { name: 'красный лук', removable: true },
            { name: 'моцарелла', removable: false },
            { name: 'соус терияки', removable: false },
            { name: 'фирменный соус альфредо', removable: false }
        ]
    }
]

interface MockStateType {
    data: Pizza[] | null
    isLoading: boolean
    error: string | null
    hasMore: boolean
}

let mockState: MockStateType = {
    data: [],
    isLoading: false,
    error: null,
    hasMore: false
}

jest.mock('../../../features/Pizzas/AllPizzas/lib/hooks/usePizzas', () => ({
    usePizzas: () => mockState
}))

describe('Pizzas', () => {
    beforeEach(() => {
        jest.clearAllMocks()
        mockState = {
            data: [],
            isLoading: false,
            error: null,
            hasMore: false
        }
    })

    test('render when isLoading true', () => {
        mockState.isLoading = true
        const handleOpen = jest.fn()

        render(
            <PizzasStoreProvider>
                <ChosenPizzaStoreProvider>
                    <Pizzas openDialog={handleOpen} />
                </ChosenPizzaStoreProvider>
            </PizzasStoreProvider>
        )

        const pizzas = screen.getByTestId('pizzas-loading')
        expect(pizzas).toBeInTheDocument()
    })

    test('render pizzas when error', () => {
        mockState.error = 'Error!'
        const handleOpen = jest.fn()

        render(
            <PizzasStoreProvider>
                <ChosenPizzaStoreProvider>
                    <Pizzas openDialog={handleOpen} />
                </ChosenPizzaStoreProvider>
            </PizzasStoreProvider>
        )

        const pizzas = screen.getByTestId('pizzas-error')
        expect(pizzas).toBeInTheDocument()
    })

    test('render empty array', () => {
        mockState.data = []
        const handleOpen = jest.fn()

        render(
            <PizzasStoreProvider>
                <ChosenPizzaStoreProvider>
                    <Pizzas openDialog={handleOpen} />
                </ChosenPizzaStoreProvider>
            </PizzasStoreProvider>
        )

        const pizzas = screen.getByTestId('no-pizzas')
        expect(pizzas).toBeInTheDocument()
    })

    test('render pizzas', () => {
        mockState.data = pizzasMock
        const handleOpen = jest.fn()

        render(
            <PizzasStoreProvider>
                <ChosenPizzaStoreProvider>
                    <Pizzas openDialog={handleOpen} />
                </ChosenPizzaStoreProvider>
            </PizzasStoreProvider>
        )

        const pizzas = screen.getByTestId('pizzas')
        expect(pizzas).toBeInTheDocument()
    })

    test('render button with special title', () => {
        mockState.data = pizzasMock
        mockState.hasMore = true
        const handleOpen = jest.fn()

        render(
            <PizzasStoreProvider>
                <ChosenPizzaStoreProvider>
                    <Pizzas openDialog={handleOpen} />
                </ChosenPizzaStoreProvider>
            </PizzasStoreProvider>
        )

        const pizzas = screen.getByTestId('pizzas')
        const button = screen.getByRole('button', { name: 'Показать больше' })
        expect(pizzas).toBeInTheDocument()
        expect(pizzas).toContainElement(button)
    })
})
