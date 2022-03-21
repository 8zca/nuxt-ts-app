<template>
  <div class="todo">
    <ul class="todo__list">
      <li v-for="(item, index) in list" :key="index" class="todo__item">
        <div :class="{ 'todo__item--done': item.done }">{{ item.body }}</div>
        <div v-if="!item.done" @click="done(index)" class="todo__complete">Complete</div>
      </li>
    </ul>
    <input type="text" v-model="task" class="todo__text" />
    <button @click="add" class="todo__btn">ADD</button>
  </div>
</template>

<script setup lang="ts">
type Task = {
  body: string
  done: boolean
}

const list = ref<Task[]>([])
const task = ref<string>()

const add = () => {
  list.value.push({ body: task.value, done: false })
  task.value = ''
}
const done = (index: number) => {
  list.value[index].done = true
}
</script>

<style lang="scss" scoped>
.todo {
  &__item {
    display: flex;
    width: 400px;
    justify-content: space-between;

    &--done {
      text-decoration: line-through;
    }
  }
  &__complete {
    cursor: pointer;
    color: #999;
  }
  &__text {
    padding: 4px;
  }
  &__btn {
    padding: 4px;
    width: 80px;
  }
}
</style>
