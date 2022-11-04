import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import Router from "./router/router"

// imports vue prime
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import Chip from 'primevue/chip';

// styles
import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //icons

// app
const app = createApp(App)
app.use(PrimeVue)
app.use(Router)

// components for prime vue
app.component('InputText', InputText)
app.component('Button', Button)
app.component('Chip', Chip)

app.mount('#app')