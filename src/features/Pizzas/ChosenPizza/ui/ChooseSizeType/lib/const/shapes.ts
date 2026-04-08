interface PizzaTypeInterface {
    id: 'traditional' | 'thin'
    name: 'традиционное' | 'тонкое'
}

export const SIZES: ['20', '25', '30', '35'] = ['20', '25', '30', '35']
export const TYPES: PizzaTypeInterface[] = [
    { id: 'traditional', name: 'традиционное' },
    { id: 'thin', name: 'тонкое' }
]
