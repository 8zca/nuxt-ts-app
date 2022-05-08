<template>
  <div class="todo">
    <ul class="list">
      <li v-for="(item, index) in list" :key="index" class="item">
        <div :class="{ 'done': item.done }">{{ item.body }}</div>
        <div v-if="!item.done" @click="done(index)" class="complete">Complete</div>
      </li>
    </ul>
    <input type="text" v-model="task" class="text" />
    <button @click="add" class="btn">ADD</button>
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
