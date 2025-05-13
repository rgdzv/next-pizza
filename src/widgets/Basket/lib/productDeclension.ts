export const productDeclension = (number: number) => {
    const absNumber = Math.abs(number)
    const lastTwoDigits = absNumber % 100
    const lastDigit = absNumber % 10
    const turnedToString = absNumber.toString()

    const forms = ['товар', 'товара', 'товаров']

    const formIndex =
        lastTwoDigits >= 11 && lastTwoDigits <= 14
            ? 2
            : lastDigit === 1
              ? 0
              : lastDigit >= 2 && lastDigit <= 4
                ? 1
                : 2

    return `${turnedToString} ${forms[formIndex]}`
}
