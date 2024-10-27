<template>
  <NuxtLayout class="relative">
    <AppHeader/>
    <main class="app-main">
      <NuxtPage/>
    </main>
  </NuxtLayout>
</template>

<style lang="scss">
.app-main {
  max-width: 676px;
  margin: 0 auto;
}
</style>