<template>
  <div class="todo">
    <ul class="list">
      <li v-for="(item, index) in todo.list" :key="index" class="item">
        <div :class="{ 'done': item.done }">{{ item.body }}</div>
        <div v-if="!item.done" @click="todo.done(index)" class="complete">Complete</div>
      </li>
    </ul>
    <input type="text" v-model="task" class="text" />
    <button @click="add" class="btn">ADD</button>
  </div>
</template>

<script setup lang="ts">
import { useTodoState } from '@/stores/todo'

const todo = useTodoState()
const task = ref<string>()
const add = () => {
  todo.add(task.value)
  task.value = ''
}
</script>

<style lang="scss" scoped>
.todo {
  .item {
    display: flex;
    width: 400px;
    justify-content: space-between;

    .done {
      text-decoration: line-through;
    }
  }
  .complete {
    cursor: pointer;
    color: #999;
  }
  .text {
    padding: 4px;
  }
  .btn {
    padding: 4px;
    width: 80px;
  }
}
</style>
