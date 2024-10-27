<script setup lang="ts">

</script>

<template>
  <header class="app-header">
    <div class="app-header__container">
      <NuxtLink to="/">
        <h1 class="app-header__title">
          ikakprosto.ru
        </h1>
      </NuxtLink>
    </div>
  </header>
</template>

<style scoped lang="scss">
@import 'assets/styles/colors';

.app-header {
  padding: 16px 0 10px;
}

.app-header__container {
  height: 76px;
}

.app-header__title {
  width: fit-content;
  margin: 0 auto;
  text-decoration: none;
  color: $primary;
  font-size: 40px;
}
</style>