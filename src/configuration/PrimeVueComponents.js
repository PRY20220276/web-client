// styles
import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //icons

// components
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import Chip from 'primevue/chip';
import Steps from 'primevue/steps';
import Toast from 'primevue/toast';

const useComponents = (app) => {
  app.component('InputText', InputText)
  app.component('Button', Button)
  app.component('Chip', Chip)
  app.component('Steps', Steps)
  app.component('Toast', Toast);
}

export default useComponents
