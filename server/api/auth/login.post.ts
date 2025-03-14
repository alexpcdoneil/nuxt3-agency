import { defineEventHandler, readBody, setCookie, createError } from "h3"
import jwt from "jsonwebtoken"

export default defineEventHandler(async event => {
  const { username, password } = await readBody(event)

  if (username !== process.env.AUTH_USERNAME || password !== process.env.AUTH_PASSWORD) {
    throw createError({ statusCode: 401, statusMessage: "Не верные учетные данные" })
  }

  const accessToken = jwt.sign({ userId: 1 }, process.env.JWT_ACCESS_SECRET, { expiresIn: "15m" })

  setCookie(event, "access_token", accessToken, {
    path: "/",
    httpOnly: false,
  })

  return { success: true }
})
