<template>
    <div class="task-form">
      <h2>Agregar Tarea</h2>
      <form @submit.prevent="addTask">
        <div class="form-group">
          <label for="taskTitle">Título de la Tarea:</label>
          <input
            type="text"
            v-model="task.title"
            id="taskTitle"
            class="form-control"
            required
          />
        </div>
        <div class="form-group">
          <label for="taskDescription">Descripción:</label>
          <textarea
            v-model="task.description"
            id="taskDescription"
            class="form-control"
            required
          ></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Agregar Tarea</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        task: {
          title: '',
          description: ''
        },
      };
    },
    methods: {
      addTask() {
        if (this.task.title && this.task.description) {
          const newTask = {
            ...this.task,
            id: Date.now(),
          };
          this.$emit('task-added', newTask); 
          this.task.title = '';
          this.task.description = '';
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .task-form {
    margin: 20px;
    padding: 15px;
    border: 1px solid #ddd;
    border-radius: 5px;
    background-color: #f9f9f9;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  
  h2 {
    margin-bottom: 15px;
    color: #333;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  .form-group label {
    font-weight: bold;
    display: block;
    margin-bottom: 5px;
  }
  
  .form-control {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    transition: border-color 0.2s;
  }
  
  .form-control:focus {
    border-color: #007bff;
    outline: none;
  }
  
  .btn {
    background-color: #007bff;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s;
  }
  
  .btn:hover {
    background-color: #0056b3;
  }
  </style>
  