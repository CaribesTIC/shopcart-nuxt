import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faShoppingCart, faWindowClose, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

library.add(faShoppingCart, faWindowClose, faTrashAlt)

export default defineNuxtPlugin(nuxtApp => {  
  nuxtApp.vueApp.component('fa', FontAwesomeIcon)    
})





