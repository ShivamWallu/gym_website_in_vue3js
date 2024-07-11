// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import HomeWorkout from '../views/HomeWorkout.vue'
import Advance from '../views/Advance.vue'
import Plans from '../views/Plans.vue'
import Photos from '../views/Photos.vue'
import Contact from '../views/Contact.vue'
import Profile from '../views/Profile.vue'
import DietPlan from '../views/DietPlan.vue'
import Login from '../views/login.vue'
const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/home-workout', name: 'HomeWorkout', component: HomeWorkout },
  { path: '/advance', name: 'Advance', component: Advance },
  { path: '/plans', name: 'Plans', component: Plans },
  { path: '/photos', name: 'Photos', component: Photos },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/profile', name: 'Profile', component: Profile },
  { path: '/dietplan', name: 'DietPlan', component: DietPlan },
  { path: '/login', name: 'Login', component: Login },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router
