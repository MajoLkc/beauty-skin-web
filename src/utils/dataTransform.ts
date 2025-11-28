export const editPhoneNumber = (phoneNumber: string) => {
  const numberWithoutEmptySpaces = phoneNumber.replace(/\s/g, "")
  const numberWithoutZero = numberWithoutEmptySpaces.slice(1)
  return "+421" + numberWithoutZero
}

export const editPrice = (price: number | string) => {
  if (typeof price === "number") {
    const priceWithDecimal = price.toFixed(2)
    const priceWithCorrectSeparator = priceWithDecimal.replace(".", ",")
    return priceWithCorrectSeparator + "€"
  }
  return `${price}€`
}

export const transformDate = (slovakDate: string) => {
  const [day, month, year] = slovakDate.split(".").map(Number)
  return new Date(year, month - 1, day) // month is 0-indexed
}
