<template>
    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Título</th>
            <th>Descripción</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="task in tasks" :key="task.id">
            <td>{{ task.id }}</td>
            <td>{{ task.title }}</td>
            <td>{{ task.description }}</td>
            <td>
              <button class="btn btn-danger btn-sm delete-button" @click="deleteTask(task.id)">Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>
      <div v-if="tasks.length === 0" class="alert alert-info mt-3">
        No hay tareas disponibles.
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "TaskList",
    props: {
      tasks: {
        type: Array,
        required: true
      }
    },
    methods: {
      deleteTask(id) {
        this.$emit('delete-task', id);
      }
    }
  };
  </script>
  
  <style scoped>
  .table {
    margin-top: 20px;
    width: 100%;
    border-collapse: collapse;
  }
  
  .table-striped tbody tr:nth-of-type(odd) {
    background-color: #f9f9f9;
  }
  
  .table th,
  .table td {
    padding: 10px;
    text-align: left;
    border: 1px solid #ddd;
  }
  
  .table th {
    background-color: #007bff;
    color: white;
    font-weight: bold;
  }
  
  .table td {
    vertical-align: middle;
  }
  
  .table .btn {
    padding: 5px 10px;
    font-size: 14px;
  }
  
  .delete-button {
    background-color: #dc3545; 
    border-color: #dc3545; 
  }
  
  .delete-button:hover {
    background-color: #c82333;
    border-color: #bd2130; 
  }
  
  .alert {
    margin-top: 15px;
    text-align: center;
  }
  </style>
  