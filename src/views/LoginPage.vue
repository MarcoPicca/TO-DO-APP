<template>
    <div>
      <h1>Benvenuto!</h1>
      <p>Inserisci il tuo nome:</p>
      <input v-model="username" @keyup.enter="login" />
      <v-btn @click="login">Login</v-btn>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
      };
    },
    methods: {
      login() {
        if (this.username.trim() !== '') {
          localStorage.setItem('username', this.username);
          this.$router.push('/');
        }
      },
    },
  };
  </script>
  
  <style scoped>
  h1 {
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  input {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
  }
  </style>