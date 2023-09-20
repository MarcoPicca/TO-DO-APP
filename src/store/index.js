import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [],
    completedTasks: [],
  },
  getters: {},
  mutations: {
    archiveTask(state, task) {
      state.completedTasks.push(task);
    },
    updateTasks(state, tasks) {
      state.tasks = tasks;
    },
  },
  actions: {},
  modules: {},
});
