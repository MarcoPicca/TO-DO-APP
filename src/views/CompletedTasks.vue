<template>
  <div>
    <h1>Tasks Completati</h1>
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
h1 {
  font-size: 24px;
  margin-bottom: 20px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  font-size: 18px;
  margin-bottom: 10px;
}
</style>
