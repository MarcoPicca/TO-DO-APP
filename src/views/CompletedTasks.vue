<template>
  <div>
    <h1>Tasks Completati</h1>
    <h2><button><router-link to="/todolist">To-do List</router-link></button></h2>
    <ul>
      <li v-for="(task, index) in completedTasks" :key="index">
        <span>{{ task.text }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      completedTasks: [], 
    };
  },
  beforeCreate: {
    startCompletedTasksList() {
      this.completedTasks = this.$store.state.completedTasks;
    },
  },
  computed: {
    completedTasksList() {
      return this.$store.state.completedTasks;
    },
  },
  watch: {
   
    completedTasksList: {
      handler(newCompletedTasks) {
        this.completedTasks = newCompletedTasks;
      },
      immediate: true,
    },
  },
};
</script>

<style scoped>

.completed-tasks {
  margin-top: 30px;
  background-color: #7daaf1; 
  padding: 20px;
  border-radius: 10px;
}

h1 {
  font-size: 24px;
  font-family: serif, sans-serif;
  margin-bottom: 20px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-top: 30px;
  font-size: 18px;
  margin-bottom: 10px;
}
</style>
