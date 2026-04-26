import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faExpand,
  faHeart,
  faArrowRight,
  faTimes,
  faChevronLeft,
  faChevronRight,
  faPlay,
  faStar,
  faMapMarkerAlt,
  faAngleRight,
} from '@fortawesome/free-solid-svg-icons'
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons'

library.add(
  faExpand,
  faHeart,
  faArrowRight,
  faTimes,
  faChevronLeft,
  faChevronRight,
  faPlay,
  faStar,
  faMapMarkerAlt,
  faHeartRegular,
  faAngleRight,
)

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
