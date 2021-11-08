import { createStore } from "vuex"

const defaultState = {
  count: 0
}

// 创建一个新的store实例
export default createStore({
  state() {
    return defaultState
  },

  mutations: {
    increment(state: typeof defaultState) {
      state.count += 1
    }
  },

  actions: {
    increment(context) {
      context.commit("increment")
    }
  },

  getters: {
    double(state: typeof defaultState) {
      return 2 * state.count
    }
  }
})
