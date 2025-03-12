export const formatCurrency = (value: number, locale: string = "ru-RU") => {
  return value.toLocaleString(locale) + " ₽"
}
