<template>
    <div class="login-form">
      <h2>Iniciar Sesión</h2>
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="username">Usuario:</label>
          <input type="text" v-model="credentials.username" id="username" class="form-control" required />
        </div>
        <div class="form-group">
          <label for="password">Contraseña:</label>
          <input type="password" v-model="credentials.password" id="password" class="form-control" required />
        </div>
        <button type="submit" class="btn btn-primary">Iniciar Sesión</button>
      </form>
      <p v-if="errorMessage" class="text-danger">{{ errorMessage }}</p>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    data() {
      return {
        credentials: {
          username: "",
          password: "",
        },
        errorMessage: "",
      };
    },
    methods: {
      async login() {
        try {
            const response = await axios.post("http://localhost:8080/api/auth/login", this.credentials);
          localStorage.setItem("token", response.data.token);
          this.$emit('login-success'); 
        } catch (error) {
          this.errorMessage = error.response.data.message || 'Error al iniciar sesión'; 
        }
      },
    },
  };
  </script>
  
  <style>
  
<style scoped>
.login-container {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
}

.login-title {
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}

.login-form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 15px;
}

label {
  margin-bottom: 5px;
  font-weight: bold;
}

.form-input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
}

.btn {
  padding: 10px;
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
}

.btn-primary {
  background-color: #007bff;
  transition: background-color 0.3s ease;
}

.btn-primary:hover {
  background-color: #0056b3;
}

.error-message {
  margin-top: 10px;
  color: red;
  text-align: center;
}
  </style>
  