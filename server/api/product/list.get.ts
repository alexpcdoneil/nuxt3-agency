import { defineEventHandler, getHeader, createError } from "h3"
import jwt from "jsonwebtoken"

export default defineEventHandler(async event => {
  const authHeader = getHeader(event, "authorization")
  if (!authHeader) {
    throw createError({ statusCode: 401, statusMessage: "Пользователь не авторизован" })
  }

  const token = authHeader.replace(/^Bearer\s/, "")

  try {
    jwt.verify(token, process.env.JWT_ACCESS_SECRET)
  } catch (error) {
    throw createError({ statusCode: 401, statusMessage: "Не верный токен" })
  }

  try {
    const { products } = await $fetch("https://dummyjson.com/products?limit=20")
    return products
  } catch (e) {
    createError({ statusCode: 500, statusMessage: "Ошибка получения данных" })
  }
})
