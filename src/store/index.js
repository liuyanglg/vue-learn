import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex)

const state = {
  count: 1,
  userInfo: {phone: 15988124357}
}

const mutations = {
  add(state) {
    state.count += 1;
  },
  reduce(state) {
    state.count -= 1;
  }
}

const actions = {}

export default new Vuex.Store({
  state,
  actions,
  mutations
})
