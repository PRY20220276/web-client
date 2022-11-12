import { createApp } from 'vue'
import App from './App.vue'
import Router from "./shared/router/router"
import PrimeVue from 'primevue/config'

// imports vue prime
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import Chip from 'primevue/chip';
import Steps from 'primevue/steps';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';

// styles
import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //icons

// app
const app = createApp(App)
app.use(PrimeVue)
app.use(Router)
app.use(ToastService);

// components for prime vue
app.component('InputText', InputText)
app.component('Button', Button)
app.component('Chip', Chip)
app.component('Steps', Steps)
app.component('Toast', Toast);

app.mount('#app')