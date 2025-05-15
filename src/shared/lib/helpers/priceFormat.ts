const formattedPrice = new Intl.NumberFormat(['ru-RU'], {
    style: 'currency',
    currency: 'RUB',
    minimumFractionDigits: 0
})

export const priceFormat = (price: number) => {
    return formattedPrice.format(price)
}
