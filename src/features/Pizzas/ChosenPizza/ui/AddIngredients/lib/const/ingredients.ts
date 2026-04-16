import type {
    AdditionalIngredients,
    AdditionalIngredientsPrice
} from '../types/addIngredients'

export const DEFAULT_PRICE = '0'

export const ADDITIONAL_INGREDIENTS: AdditionalIngredients[] = [
    {
        id: 'spicy_beef',
        src: 'https://cdn.dodostatic.net/static/Img/Ingredients/01991530635b73ecb1a22658b49e1653.png',
        name: 'Пряная говядина'
    },
    {
        id: 'mozarella',
        src: 'https://cdn.dodostatic.net/static/Img/Ingredients/0199ae74f2fd783b8fb21bb0af7d09e6.png',
        name: 'Моцарелла'
    },
    {
        id: 'cheese_cheddar_parmezan',
        src: 'https://cdn.dodostatic.net/static/Img/Ingredients/0199152f32e47035aefbe8c971c54502.png',
        name: 'Сыры чеддер и пармезан'
    },
    {
        id: 'cheese_blu',
        src: 'https://cdn.dodostatic.net/static/Img/Ingredients/0199153050ea707cbed48b92097e095f.png',
        name: 'Сыр блю чиз'
    },
    {
        id: 'pepper_jalapeno',
        src: 'https://cdn.dodostatic.net/static/Img/Ingredients/0199152c7eb27553a08f57c8c9861ac3.png',
        name: 'Острый перец халапеньо'
    },
    {
        id: 'chiken_tender',
        src: 'https://cdn.dodostatic.net/static/Img/Ingredients/0199152e59157089adb89948280ebb10.png',
        name: 'Нежный цыпленок'
    },
    {
        id: 'mushrooms_champignons',
        src: 'https://cdn.dodostatic.net/static/Img/Ingredients/0199152bfda5723f8bbecc43a35f83f1.png',
        name: 'Шампиньоны'
    },
    {
        id: 'bacon',
        src: 'https://cdn.dodostatic.net/static/Img/Ingredients/019c570e36ff78f4ba36a75d85000d7e.png',
        name: 'Бекон'
    },
    {
        id: 'ham',
        src: 'https://cdn.dodostatic.net/static/Img/Ingredients/0199152d7fd075a9b11d17f8acaf1670.png',
        name: 'Ветчина'
    },
    {
        id: 'spicy_pepperoni',
        src: 'https://cdn.dodostatic.net/static/Img/Ingredients/0199152b6e6978a188ec97d9bd52e7d2.png',
        name: 'Пикантная пепперони'
    },
    {
        id: 'spicy_chorizo',
        src: 'https://cdn.dodostatic.net/static/Img/Ingredients/0199ae74b6d6761f972e9a60b63044bc.png',
        name: 'Острая чоризо'
    },
    {
        id: 'pickled_cucumbers',
        src: 'https://cdn.dodostatic.net/static/Img/Ingredients/0199152e33ee7722ac038fa5bc26e630.png',
        name: 'Соленые огурчики'
    },
    {
        id: 'fresh_tomatoes',
        src: 'https://cdn.dodostatic.net/static/Img/Ingredients/0199152a8428737d9f6b19c1b2329749.png',
        name: 'Свежие томаты'
    },
    {
        id: 'red_onion',
        src: 'https://cdn.dodostatic.net/static/Img/Ingredients/0199ae747c85710abcf2950497834b01.png',
        name: 'Красный лук'
    },
    {
        id: 'pineapple',
        src: 'https://cdn.dodostatic.net/static/Img/Ingredients/0199152b81587495b19ba8008c567f5d.png',
        name: 'Сочные ананасы'
    },
    {
        id: 'italian_herbs',
        src: 'https://cdn.dodostatic.net/static/Img/Ingredients/0199152ced7677fcb0e49edd0ebf6c90.png',
        name: 'Итальянские травы'
    },
    {
        id: 'sweet_pepper',
        src: 'https://cdn.dodostatic.net/static/Img/Ingredients/0199152da27677a7a24a41b4eddfcedd.png',
        name: 'Сладкий перец'
    },
    {
        id: 'bavarian_sausages',
        src: 'https://cdn.dodostatic.net/static/Img/Ingredients/019915307407729e970fee55536f6dca.png',
        name: 'Баварские колбаски'
    },
    {
        id: 'shrimps',
        src: 'https://cdn.dodostatic.net/static/Img/Ingredients/019c570e238d751dbe68f7d540857d16.png',
        name: 'Креветки'
    },
    {
        id: 'pork_neck',
        src: 'https://cdn.dodostatic.net/static/Img/Ingredients/0199e7d1cd977499a410e7a4f0495221.png',
        name: 'Свиная шейка'
    }
]

export const ADDITIONAL_INGREDIENTS_PRICES: AdditionalIngredientsPrice = {
    spicy_beef: {
        thin_30: '119',
        thin_35: '155',
        traditional_20: '59',
        traditional_25: '99',
        traditional_30: '119',
        traditional_35: '155'
    },
    mozarella: {
        thin_30: '105',
        thin_35: '135',
        traditional_20: '65',
        traditional_25: '79',
        traditional_30: '105',
        traditional_35: '135'
    },
    cheese_cheddar_parmezan: {
        thin_30: '79',
        thin_35: '99',
        traditional_20: '49',
        traditional_25: '69',
        traditional_30: '79',
        traditional_35: '99'
    },
    cheese_blu: {
        thin_30: '149',
        thin_35: '199',
        traditional_20: '59',
        traditional_25: '99',
        traditional_30: '149',
        traditional_35: '199'
    },
    pepper_jalapeno: {
        thin_30: '59',
        thin_35: '79',
        traditional_20: '39',
        traditional_25: '49',
        traditional_30: '59',
        traditional_35: '79'
    },
    chiken_tender: {
        thin_30: '79',
        thin_35: '99',
        traditional_20: '49',
        traditional_25: '69',
        traditional_30: '79',
        traditional_35: '99'
    },
    mushrooms_champignons: {
        thin_30: '59',
        thin_35: '79',
        traditional_20: '39',
        traditional_25: '49',
        traditional_30: '59',
        traditional_35: '79'
    },
    bacon: {
        thin_30: '79',
        thin_35: '105',
        traditional_20: '49',
        traditional_25: '69',
        traditional_30: '79',
        traditional_35: '105'
    },
    ham: {
        thin_30: '79',
        thin_35: '99',
        traditional_20: '49',
        traditional_25: '69',
        traditional_30: '79',
        traditional_35: '99'
    },
    spicy_pepperoni: {
        thin_30: '79',
        thin_35: '99',
        traditional_20: '49',
        traditional_25: '69',
        traditional_30: '79',
        traditional_35: '99'
    },
    spicy_chorizo: {
        thin_30: '79',
        thin_35: '99',
        traditional_20: '49',
        traditional_25: '69',
        traditional_30: '79',
        traditional_35: '99'
    },
    pickled_cucumbers: {
        thin_30: '59',
        thin_35: '79',
        traditional_20: '39',
        traditional_25: '49',
        traditional_30: '59',
        traditional_35: '79'
    },
    fresh_tomatoes: {
        thin_30: '59',
        thin_35: '79',
        traditional_20: '39',
        traditional_25: '49',
        traditional_30: '59',
        traditional_35: '79'
    },
    red_onion: {
        thin_30: '59',
        thin_35: '79',
        traditional_20: '39',
        traditional_25: '49',
        traditional_30: '59',
        traditional_35: '79'
    },
    pineapple: {
        thin_30: '59',
        thin_35: '79',
        traditional_20: '39',
        traditional_25: '49',
        traditional_30: '59',
        traditional_35: '79'
    },
    italian_herbs: {
        thin_30: '39',
        thin_35: '59',
        traditional_20: '19',
        traditional_25: '29',
        traditional_30: '39',
        traditional_35: '59'
    },
    sweet_pepper: {
        thin_30: '59',
        thin_35: '79',
        traditional_20: '39',
        traditional_25: '49',
        traditional_30: '59',
        traditional_35: '79'
    },
    bavarian_sausages: {
        thin_30: '129',
        thin_35: '159',
        traditional_20: '59',
        traditional_25: '119',
        traditional_30: '129',
        traditional_35: '159'
    },
    shrimps: {
        thin_30: '239',
        thin_35: '275',
        traditional_20: '115',
        traditional_25: '205',
        traditional_30: '239',
        traditional_35: '275'
    },
    pork_neck: {
        thin_30: '229',
        thin_35: '250',
        traditional_20: '115',
        traditional_25: '205',
        traditional_30: '229',
        traditional_35: '250'
    }
}
