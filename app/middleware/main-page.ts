export default defineNuxtRouteMiddleware((to, from) => {
  console.log(from, to)

  if (to.path === "/") {
    return navigateTo({ path: "products" })
  }
})
