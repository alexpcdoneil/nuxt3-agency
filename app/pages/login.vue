<template>
  <div class="auth-wrapper">
    <div class="auth">
      <form class="auth__form">
        <v-text-field type="text" placeholder="Введите логин" />
        <v-text-field type="password" placeholder="Введите пароль" />
        <v-btn type="submit" class="auth_sign-in" @click.prevent="signIn">Войти</v-btn>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
const router = useRouter()

const signIn = () => {
  router.push({ name: "products" })
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
