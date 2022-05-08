import { defineStore } from 'pinia'

export type TodoType = {
  body: string
  done: boolean
}

export const useTodoState = defineStore('todo', {
  state: () => {
    return {
      list: [] as TodoType[]
    }
  },
  actions: {
    add(body: string) {
      this.list.push({ body, done: false })
    },
    done(index: number) {
      this.list[index].done = true
    }
  }
})
