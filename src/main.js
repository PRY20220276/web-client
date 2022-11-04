import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import InputText from 'primevue/inputtext';
import Steps from 'primevue/steps';
import Button from 'primevue/button';
import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //icons


const app = createApp(App);
app.use(PrimeVue);

// components for prime vue
app.component('InputText', InputText);
app.component('Button', Button);
app.component('Steps', Steps);


app.mount('#app')