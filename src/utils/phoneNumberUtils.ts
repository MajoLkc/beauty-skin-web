export const editPhoneNumber = (phoneNumber: string) => {
  const numberWithoutEmptySpaces = phoneNumber.replace(/\s/g, '')
  const numberWithoutZero = numberWithoutEmptySpaces.slice(1)
  return "+421" + numberWithoutZero
}
