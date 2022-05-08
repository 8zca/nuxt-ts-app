<template>
  <div>
    <div class="header">
      <ul class="menu">
        <li class="item"><nuxt-link to="/">Home</nuxt-link></li>
        <li class="item"><nuxt-link to="/count">Count</nuxt-link></li>
        <li class="item"><nuxt-link to="/task">Task</nuxt-link></li>
      </ul>
    </div>
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.header {
  .menu {
    display: flex;
    justify-content: flex-start;
  }
  .item {
    padding: 8px 16px;
    list-style: none;
  }
}
</style>
