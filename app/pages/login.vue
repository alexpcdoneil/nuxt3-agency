<template>
  <div class="auth-wrapper">
    <div class="auth">
      <form class="auth__form">
        <v-text-field v-model="credentials.username" type="text" placeholder="Введите логин" />
        <v-text-field v-model="credentials.password" type="password" placeholder="Введите пароль" />
        <v-btn type="submit" class="auth_sign-in" @click.prevent="signIn">Войти</v-btn>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
const router = useRouter()

const credentials = reactive({
  username: "admin",
  password: "secret",
})

const signIn = async () => {
  try {
    const accessT = useCookie("access_token")
    const refreshT = useCookie("refresh_token")

    const data = await $fetch("/api/auth/login", { method: "POST", body: credentials })
    // accessT.value = accessToken
    // refreshT.value = refreshToken
    router.push({ name: "products" })
  } catch (err) {
    console.error(err)
  }
}
</script>

<style lang="css">
.auth-wrapper {
  height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;

  .auth__form {
    width: 18rem;
  }

  .auth_sign-in {
    display: block;
    margin-left: auto;
  }
}
</style>
