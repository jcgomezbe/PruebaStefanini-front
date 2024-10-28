<template>
  <div class="container mt-5">
    <div v-if="!isLoggedIn">
      <login-form @login-success="handleLogin" />
    </div>
    <div v-else>
      <task-form @task-added="addTask" />
      <task-list :tasks="tasks" @delete-task="deleteTask" />
      <cierre-sesion @logout="handleLogout" /> 
    </div>
  </div>
</template>

<script>
import LoginForm from './components/LoginForm.vue';
import TaskForm from './components/TaskForm.vue';
import TaskList from './components/TaskList.vue';
import CierreSesion from './components/CierreSession.vue'; 

export default {
  components: {
    LoginForm,
    TaskForm,
    TaskList,
    CierreSesion,
  },
  data() {
    return {
      isLoggedIn: false, 
      tasks: [],
    };
  },
  mounted() {
    this.isLoggedIn = !!localStorage.getItem('token');
  },
  methods: {
    handleLogin() {
      this.isLoggedIn = true; 
      localStorage.setItem('token', 'your_token_here'); 
      
    },
    handleLogout() {
      this.isLoggedIn = false; 
      localStorage.removeItem('token'); 
    },
    addTask(newTask) {
      this.tasks.push(newTask); 
    },
    deleteTask(id) {
      this.tasks = this.tasks.filter(task => task.id !== id);
    },
  },
};
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  max-width: 600px;
  margin: auto;
}

.container {
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>
