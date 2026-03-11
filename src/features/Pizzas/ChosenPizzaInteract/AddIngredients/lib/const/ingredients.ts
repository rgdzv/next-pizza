import type {
    AdditionalIngredients,
    AdditionalIngredientsPrice
} from '../types/addIngredients'

export const ADDITIONAL_INGREDIENTS: AdditionalIngredients[] = [
    {
        id: 'cheese_border',
        src: 'https://cdn.dodostatic.net/static/Img/Ingredients/0199152f20c570859ff617c0a6ef03d3.png',
        name: 'Сырный бортик'
    },
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
        src: 'https://cdn.dodostatic.net/static/Img/Ingredients/0199153050ea707cbed48b92097e095f.png',
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
        name: 'Маринованный огурчики'
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
    cheese_border: {
        традиционное_30: '205',
        традиционное_35: '229'
    },
    spicy_beef: {
        тонкое_30: '119',
        тонкое_35: '155',
        традиционное_20: '59',
        традиционное_25: '99',
        традиционное_30: '119',
        традиционное_35: '155'
    },
    mozarella: {
        тонкое_30: '105',
        тонкое_35: '135',
        традиционное_20: '65',
        традиционное_25: '79',
        традиционное_30: '105',
        традиционное_35: '135'
    },
    cheese_cheddar_parmezan: {
        тонкое_30: '79',
        тонкое_35: '99',
        традиционное_20: '49',
        традиционное_25: '69',
        традиционное_30: '79',
        традиционное_35: '99'
    },
    cheese_blu: {
        тонкое_30: '149',
        тонкое_35: '199',
        традиционное_20: '59',
        традиционное_25: '99',
        традиционное_30: '149',
        традиционное_35: '199'
    },
    pepper_jalapeno: {
        тонкое_30: '59',
        тонкое_35: '79',
        традиционное_20: '39',
        традиционное_25: '49',
        традиционное_30: '59',
        традиционное_35: '79'
    },
    chiken_tender: {
        тонкое_30: '79',
        тонкое_35: '99',
        традиционное_20: '49',
        традиционное_25: '69',
        традиционное_30: '79',
        традиционное_35: '99'
    },
    mushrooms_champignons: {
        тонкое_30: '59',
        тонкое_35: '79',
        традиционное_20: '39',
        традиционное_25: '49',
        традиционное_30: '59',
        традиционное_35: '79'
    },
    bacon: {
        тонкое_30: '79',
        тонкое_35: '105',
        традиционное_20: '49',
        традиционное_25: '69',
        традиционное_30: '79',
        традиционное_35: '105'
    },
    ham: {
        тонкое_30: '79',
        тонкое_35: '99',
        традиционное_20: '49',
        традиционное_25: '69',
        традиционное_30: '79',
        традиционное_35: '99'
    },
    spicy_pepperoni: {
        тонкое_30: '79',
        тонкое_35: '99',
        традиционное_20: '49',
        традиционное_25: '69',
        традиционное_30: '79',
        традиционное_35: '99'
    },
    spicy_chorizo: {
        тонкое_30: '79',
        тонкое_35: '99',
        традиционное_20: '49',
        традиционное_25: '69',
        традиционное_30: '79',
        традиционное_35: '99'
    },
    pickled_cucumbers: {
        тонкое_30: '59',
        тонкое_35: '79',
        традиционное_20: '39',
        традиционное_25: '49',
        традиционное_30: '59',
        традиционное_35: '79'
    },
    fresh_tomatoes: {
        тонкое_30: '59',
        тонкое_35: '79',
        традиционное_20: '39',
        традиционное_25: '49',
        традиционное_30: '59',
        традиционное_35: '79'
    },
    red_onion: {
        тонкое_30: '59',
        тонкое_35: '79',
        традиционное_20: '39',
        традиционное_25: '49',
        традиционное_30: '59',
        традиционное_35: '79'
    },
    pineapple: {
        тонкое_30: '59',
        тонкое_35: '79',
        традиционное_20: '39',
        традиционное_25: '49',
        традиционное_30: '59',
        традиционное_35: '79'
    },
    italian_herbs: {
        тонкое_30: '39',
        тонкое_35: '59',
        традиционное_20: '19',
        традиционное_25: '29',
        традиционное_30: '39',
        традиционное_35: '59'
    },
    sweet_pepper: {
        тонкое_30: '59',
        тонкое_35: '79',
        традиционное_20: '39',
        традиционное_25: '49',
        традиционное_30: '59',
        традиционное_35: '79'
    },
    bavarian_sausages: {
        тонкое_30: '129',
        тонкое_35: '159',
        традиционное_20: '59',
        традиционное_25: '119',
        традиционное_30: '129',
        традиционное_35: '159'
    },
    shrimps: {
        тонкое_30: '239',
        тонкое_35: '275',
        традиционное_20: '115',
        традиционное_25: '205',
        традиционное_30: '239',
        традиционное_35: '275'
    },
    pork_neck: {
        тонкое_30: '229',
        тонкое_35: '250',
        традиционное_20: '115',
        традиционное_25: '205',
        традиционное_30: '229',
        традиционное_35: '250'
    }
}
