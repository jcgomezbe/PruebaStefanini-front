// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import LoginForm from './components/LoginForm.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: LoginForm,
  },
  {
    path: '/tasks',
    name: 'Tasks',
    component: App,
    beforeEnter: (to, from, next) => {
      // Verifica si el token está presente
      if (localStorage.getItem('token')) {
        next(); // Permitir el acceso
      } else {
        next('/'); // Redirigir al login
      }
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
