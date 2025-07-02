import type { Pizza } from 'entities/PizzaCard/lib/types/pizza'

export const PIZZAS: Pizza[] = [
    {
        id: '1',
        title: 'Охотничья',
        types: [0, 1],
        sizes: [0, 1, 2],
        category: 4,
        rating: 4,
        description:
            'Двойная порция классических колбасок, красный лук, томаты, соус барбекю, моцарелла, фирменный томатный соус',
        imgSrc: 'https://media.dodostatic.net/image/r:292x292/019635b27c727302835040e5d7c27caa.jpg',
        price: {
            '0': 669,
            '1': 969,
            '2': 1279
        },
        weight: {
            '0': {
                '0': 380,
                '1': 410,
                '2': 640
            },
            '1': {
                '0': 430,
                '1': 690,
                '2': 790
            }
        }
    },
    {
        id: '2',
        title: 'Креветка и песто',
        types: [0, 1],
        sizes: [0, 1, 2],
        category: 4,
        rating: 4,
        description:
            'Креветки, томаты, шампиньоны, соус песто, моцарелла, итальянские травы, фирменный томатный соус',
        imgSrc: 'https://media.dodostatic.net/image/r:292x292/019591b642d87304a62d322945990861.jpg',
        price: {
            '0': 749,
            '1': 1129,
            '2': 1319
        },
        weight: {
            '0': {
                '0': 380,
                '1': 410,
                '2': 640
            },
            '1': {
                '0': 430,
                '1': 690,
                '2': 790
            }
        }
    },
    {
        id: '3',
        title: 'Четыре сыра',
        types: [0, 1],
        sizes: [0, 1, 2],
        category: 4,
        rating: 4,
        description:
            'Сыр блю чиз, сыры чеддер и пармезан, моцарелла, фирменный соус альфредо',
        imgSrc: 'https://media.dodostatic.net/image/r:292x292/11ee7d612a1c13cbbfcc286c332d7762.jpg',
        price: {
            '0': 569,
            '1': 839,
            '2': 1029
        },
        weight: {
            '0': {
                '0': 380,
                '1': 410,
                '2': 640
            },
            '1': {
                '0': 430,
                '1': 690,
                '2': 790
            }
        }
    },
    {
        id: '4',
        title: 'Чилл Грилл',
        types: [0, 1],
        sizes: [0, 1, 2],
        category: 4,
        rating: 4,
        description:
            'Цыпленок, маринованные огурчики, красный лук, соус гриль, моцарелла, чеснок, фирменный соус альфредо',
        imgSrc: 'https://media.dodostatic.net/image/r:292x292/019591c69fac7921a27e4ecd8c99f9df.jpg',
        price: {
            '0': 549,
            '1': 829,
            '2': 979
        },
        weight: {
            '0': {
                '0': 380,
                '1': 410,
                '2': 640
            },
            '1': {
                '0': 430,
                '1': 690,
                '2': 790
            }
        }
    },
    {
        id: '5',
        title: 'Креветки блю чиз',
        types: [0, 1],
        sizes: [0, 1, 2],
        category: 4,
        rating: 4,
        description:
            'Креветки, сыр блю чиз, моцарелла, фирменный соус альфредо',
        imgSrc: 'https://media.dodostatic.net/image/r:292x292/0195ca1dcb2f7341b78534772343b047.jpg',
        price: {
            '0': 699,
            '1': 1009,
            '2': 1369
        },
        weight: {
            '0': {
                '0': 380,
                '1': 410,
                '2': 640
            },
            '1': {
                '0': 430,
                '1': 690,
                '2': 790
            }
        }
    },
    {
        id: '6',
        title: 'Сырная',
        types: [0, 1],
        sizes: [0, 1, 2],
        category: 4,
        rating: 4,
        description:
            'Моцарелла, сыры чеддер и пармезан, фирменный соус альфредо',
        imgSrc: 'https://media.dodostatic.net/image/r:292x292/11ee7d610d2925109ab2e1c92cc5383c.jpg',
        price: {
            '0': 339,
            '1': 619,
            '2': 779
        },
        weight: {
            '0': {
                '0': 380,
                '1': 410,
                '2': 640
            },
            '1': {
                '0': 430,
                '1': 690,
                '2': 790
            }
        }
    },
    {
        id: '7',
        title: 'Пепперони фреш',
        types: [0, 1],
        sizes: [0, 1, 2],
        category: 4,
        rating: 4,
        description:
            'Пикантная пепперони, увеличенная порция моцареллы, томаты, фирменный томатный соус',
        imgSrc: 'https://media.dodostatic.net/image/r:292x292/11ee7d612fc7b7fca5be822752bee1e5.jpg',
        price: {
            '0': 369,
            '1': 629,
            '2': 749
        },
        weight: {
            '0': {
                '0': 380,
                '1': 410,
                '2': 640
            },
            '1': {
                '0': 430,
                '1': 690,
                '2': 790
            }
        }
    },
    {
        id: '8',
        title: 'Чоризо фреш',
        types: [0, 1],
        sizes: [0, 1, 2],
        category: 4,
        rating: 4,
        description:
            'Острые колбаски чоризо, сладкий перец, моцарелла, фирменный томатный соус',
        imgSrc: 'https://media.dodostatic.net/image/r:292x292/11ee7d61706d472f9a5d71eb94149304.jpg',
        price: {
            '0': 339,
            '1': 619,
            '2': 779
        },
        weight: {
            '0': {
                '0': 380,
                '1': 410,
                '2': 640
            },
            '1': {
                '0': 430,
                '1': 690,
                '2': 790
            }
        }
    }
]
