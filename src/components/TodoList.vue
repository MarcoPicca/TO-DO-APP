<template>
  <div>
    <h1>TO-DO APP</h1>
    <router-link to="/completati">Completati</router-link>
    <input v-model="newTask" @keyup.enter="addTask" placeholder="Aggiungi un task..." />
    <ul>
      <li v-for="(task, index) in tasks" :key="index" :class="{ completed: task.completed }">
        <span>{{ task.text }}</span>
        <v-btn @click="renameTask(index)">Rinomina</v-btn>
        <v-btn @click="deleteTask(index)">Cancella</v-btn>
        <v-btn @click="toggleCompletion(index)">{{ task.completed ? 'Annulla' : 'Conferma' }}</v-btn>
        <v-btn @click="archiveTask(index)" v-if="task.completed">Archivia</v-btn>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTask: '',
      tasks: [],
    };
  },
  methods: {
    addTask() {
      if (this.newTask.trim() !== '') {
        this.tasks.push({ text: this.newTask, completed: false });
        this.newTask = '';
      }
    },
    renameTask(index) {
      const newName = prompt('Rinomina il task:', this.tasks[index].text);
      if (newName !== null && newName.trim() !== '') {
        this.tasks[index].text = newName;
      }
    },
    deleteTask(index) {
      this.tasks.splice(index, 1);
    },
    toggleCompletion(index) {
      this.tasks[index].completed = !this.tasks[index].completed;
    },
    archiveTask(index) {
      this.$store.commit('archiveTask', index);
      this.$router.push({ name: 'CompletedTasks' }); 
    },
  },
};
</script>

<style scoped>
h1 {
  font-size: 27px;
  margin-bottom: 20px;
  margin-top: -20px;
}

input {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  margin-top: 30px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

li span {
  flex-grow: 1;
  font-size: 18px;
}

v-btn {
  margin-left: 10px;
}
li.completed {
  color: #4582c0;
}

li.completed span {
  flex-grow: 1;
  font-size: 18px;
  color: #999;
}

</style>