<template>
  <div>
    <h1>TO-DO APP</h1> 
    <h2><button><router-link to="/completati">Completati</router-link></button></h2>
    <input v-model="newTask" @keyup.enter="addTask" placeholder="Aggiungi un task..." />
    <ul>
     
      <li class="elencoLista" v-for="(task, index) in tasks" :key="index">
        <div class="lista">
          
           <span class="textLista">{{ task.text }}</span>
           <span class="buttonsContainer">
            <span>
             <v-btn extra small color="blue" @click="renameTask(index)">Modifica</v-btn>
             <v-btn extra small color="blue" @click="deleteTask(index)">Cancella</v-btn>
            </span>
            <span>
             <v-btn extra small color="blue" @click="toggleCompletion(index)" >{{ task.completed ? 'Annulla' : 'Conferma' }}</v-btn>
             <v-btn extra small color="blue" @click="archiveTask(index)" v-if="task.completed">Archivia</v-btn>
            </span>
          </span>
        </div>
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
  beforeCreate: {
    setTasks() {
      this.tasks = this.$store.tasks
    }
  },
  methods: {
    addTask() {
      if (this.newTask.trim() !== '') {
        this.tasks.push({ text: this.newTask, completed: false });
        this.newTask = '';
        this.$store.commit('updateTasks', this.tasks)
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
      this.$store.commit('updateTasks', this.tasks)
    },
    toggleCompletion(index) {
      this.tasks[index].completed = !this.tasks[index].completed;
    },
    archiveTask(index) {
      this.$store.commit('archiveTask', this.tasks[index]);
      this.$router.push({ name: 'CompletedTasks' }); 
    },
  },
};
</script>

<style scoped>
h1 {
  font-size: 27px;
  font-family: serif, sans-serif;
  margin-bottom: 20px;
  margin-top: -20px;
}

h2 {
  border-radius: 20px;
  font-family: serif, sans-serif;
}

input {
  padding: 10px;
  margin-bottom: 10px;
  margin-top: 30px;
  border: 1px solid #4c7da8;
  border-radius: 4px;
  font-size: 16px;
}

.elencoLista {
  display: flex;
  margin-bottom: 10px;
  justify-content: center;
}

.lista { 
  width: 60%;
  justify-content: center;
}

.textLista {
  flex-grow: 1;
  font-size: 22px;
  align-items: center;
  width: 100%;
}

.buttonsContainer {
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
}

</style>