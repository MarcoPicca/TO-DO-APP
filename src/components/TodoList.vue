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
            <span class="buttonsContainerChild">
             <button class="button" @click="renameTask(index)">Modifica</button>
             <button class="button" @click="deleteTask(index)">Cancella</button>
            </span>
            <span class="buttonsContainerChild">
             <button class="button" @click="toggleCompletion(index)" >{{ task.completed ? 'Annulla' : 'Conferma' }}</button>
             <button class="button" @click="archiveTask(index)" v-if="task.completed">Archivia</button>
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

  },
  methods: {
    addTask() {
      if (this.newTask.trim() !== '') {
        this.tasks.push({ text: this.newTask, completed: false });
        this.newTask = '';
        this.$store.commit('udateTasks', this.tasks)
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
  margin-bottom: 20px;
  margin-top: -20px;
}

h2 {
  border-radius: 20px;
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
  font-size: 18px;
  align-items: center;
  width: 100%;
}

.buttonsContainer {
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
}

.buttonsContainerChild {
  display: flex;
  justify-content: space-between;
  width: 30%;
  align-items: center;
}

.button {
  border-radius: 20px;
  font-size: 12px;
  width: 30px;
  height: 17px;
  margin: 5px;
  border: 1px black;
}

</style>