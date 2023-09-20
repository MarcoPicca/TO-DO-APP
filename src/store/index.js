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
    archiveTask(state, index) {
      // archivia e rimuove dalla lista principale
      const archivedTask = state.tasks[index];
      state.completedTasks.push(archivedTask);
      state.tasks.splice(index, 1);
    },
  },
  actions: {},
  modules: {},
});
