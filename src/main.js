import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import { createRouter, createWebHistory } from 'vue-router'

// imports vue prime
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'

// styles
import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //icons

// routes
import Login from "./components/Login";
import Services from "./components/Services";

const routes = [
  { path: '/', component: Login },
  { path: '/services', component: Services },
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

// app
const app = createApp(App)
app.use(PrimeVue)
app.use(router)

// components for prime vue
app.component('InputText', InputText)
app.component('Button', Button)

app.mount('#app')