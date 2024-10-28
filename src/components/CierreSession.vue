<template>
    <div class="logout-container">
      <button @click="logout" class="btn-logout">Cerrar Sesión</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      logout() {
        this.$emit('logout'); 
        this.$router.push('/'); 
      },
    },
  };
  </script>
  
  <style scoped>
  .logout-container {
    text-align: center; 
    margin: 30px 0; 
  }
  
  .btn-logout {
    background-color: #ff4d4d; 
    color: white; 
    border: none; 
    border-radius: 4px; 
    padding: 10px 20px; 
    cursor: pointer; 
    transition: background-color 0.3s ease; 
  }
  
  .btn-logout:hover {
    background-color: #e60000; 
  }
  </style>
  