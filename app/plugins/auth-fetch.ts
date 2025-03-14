export default defineNuxtPlugin(() => {
  const apiFetch = $fetch.create({
    onRequest({ options }) {
      const token = useCookie("access_token").value
      if (token) {
        options.headers = {
          ...options.headers,
          Authorization: `Bearer ${token}`,
        }
      }
    },
    onResponseError: async ({ response }) => {
      if (response.status === 401) navigateTo("/login")
    },
  })

  return {
    provide: {
      apiFetch,
    },
  }
})
