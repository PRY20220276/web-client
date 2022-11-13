import { createApp } from 'vue'
import App from './App.vue'
import Router from "./shared/router/router"
import PrimeVue from 'primevue/config'
import AttachPrimeVueApp from '@/configuration/PrimeVueComponents'

const app = createApp(App)
AttachPrimeVueApp(app)

app.use(PrimeVue)
app.use(Router)
app.mount('#app')