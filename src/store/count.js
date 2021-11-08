import { defineStore } from "pinia"

const defineCountStore = defineStore("count", {
  state: () => ({ count: 0, demoName: "zhangsan" }),
  getters: {
    doubleCount(state) {
      return state.count * 2
    }
  },
  actions: {
    addCount(num) {
      this.count += num
    }
  }
})

export default defineCountStore
