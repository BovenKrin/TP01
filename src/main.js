import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')



// src/main.js
import Vue from 'vue';
import App from './App.vue';
 // <-- Duplicate import causing the error

// Your other imports and code


new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');

