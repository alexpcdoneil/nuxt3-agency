export default defineNuxtRouteMiddleware((to, from) => {
  const token = useCookie("access_token").value
  if (!token && to.path !== "/login") {
    return navigateTo("/login")
  }
})
