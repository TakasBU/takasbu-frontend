/* eslint-disable no-unused-vars */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import * as bootstrap from 'bootstrap'
import './assets/main.css'

const app = createApp(App)

app.use(router)

app.mount('#app')

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faMagnifyingGlass,faBox } from '@fortawesome/free-solid-svg-icons'
import { faUser,faHeart } from '@fortawesome/free-regular-svg-icons'
library.add(faMagnifyingGlass, faUser,faHeart,faBox)

app.component('font-awesome-icon', FontAwesomeIcon)
