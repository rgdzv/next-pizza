import type { Pizza } from '../types/pizza'

export const pizzaMock: Pizza = {
    id: '5',
    slug: 'burger-pizza',
    title: 'Бургер-пицца',
    category: { id: 1, slug: 'meat', name: 'Мясные' },
    rating: 5,
    description:
        'Ветчина, маринованные огурчики, томаты, красный лук, чеснок, соус бургер, моцарелла, фирменный томатный соус',
    imgSrc: 'https://media.dodostatic.net/image/r:584x584/0199b77856ec79a986a2d582c2678fff.png',
    minPrice: 399,
    isAvailable: true,
    ingredients: [
        { id: 'ham', name: 'Ветчина', removable: true },
        {
            id: 'pickles',
            name: 'маринованные огурчики',
            removable: true
        },
        { id: 'tomatoes', name: 'томаты', removable: true },
        { id: 'red-onion', name: 'красный лук', removable: true },
        { id: 'garlic', name: 'чеснок', removable: true },
        {
            id: 'burger-sauce',
            name: 'соус бургер',
            removable: false
        },
        { id: 'mozzarella', name: 'моцарелла', removable: false },
        {
            id: 'tomato-sauce',
            name: 'фирменный томатный соус',
            removable: false
        }
    ],
    variants: [
        {
            id: '5-thin-30',
            dough: 'thin',
            size: 30,
            price: 829,
            img: 'https://media.dodostatic.net/image/r:584x584/0198bf3fb33973f78f8af9892f86df62.png',
            weight: 540,
            nutrition: {
                calories: 206.1,
                protein: 8.4,
                fat: 7.8,
                carbs: 24.1
            }
        }
    ]
}
