import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faMagnifyingGlass,faBox } from '@fortawesome/free-solid-svg-icons'
import { faUser,faHeart } from '@fortawesome/free-regular-svg-icons'

/* add icons to the library */
library.add(faMagnifyingGlass, faUser,faHeart,faBox)

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')
