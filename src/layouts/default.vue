<template>
  <div>
    <div class="header">
      <ul class="header__menu">
        <li class="header__menu-item"><nuxt-link to="/">Home</nuxt-link></li>
        <li class="header__menu-item"><nuxt-link to="/count">Count</nuxt-link></li>
        <li class="header__menu-item"><nuxt-link to="/task">Task</nuxt-link></li>
      </ul>
    </div>
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.header {
  &__menu {
    display: flex;
    justify-content: flex-start;
  }
  &__menu-item {
    padding: 8px 16px;
    list-style: none;
  }
}
</style>
