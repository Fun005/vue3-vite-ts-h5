import { defineStore } from "pinia"

const defineDefaultStore = defineStore("default", {
  state: () => ({ name: "tct", count: 222 }),
  getters: {
    doubleCount(state) {
      return state.count * 2
    }
  },
  actions: {
    addCount(num: number) {
      this.count += num
    }
  }
})

export default defineDefaultStore
