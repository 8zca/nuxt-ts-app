<template>
  <div class="counter">
    <button class="counter__btn" @click="decrement">-1</button>
    <div class="counter__output">{{ count }}</div>
    <button class="counter__btn" @click="increment">+1</button>
  </div>
</template>

<script setup lang="ts">
const count = ref(0)
const increment = () => count.value++
const decrement = () => count.value--
</script>

<style lang="scss" scoped>
.counter {
  width: 200px;
  display: flex;
  justify-content: space-between;
  &__btn {
    width: 60px;
  }
  &__output {
    width: 60px;
    text-align: center;
  }
}
</style>
