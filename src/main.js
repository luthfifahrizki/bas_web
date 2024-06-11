import './assets/main.css'

import { createApp, provide } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import myAxios from '@/plugin/axios'
import VueAxios from 'vue-axios'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'


const app = createApp(App)

const vuetify = createVuetify({
    components,
    directives,
  })

app.use(VueAxios, myAxios)
app.provide('myAxios', app.config.globalProperties.axios)

const pinia = createPinia ()
pinia.use(piniaPluginPersistedstate)

app.use(vuetify)
app.use(pinia)
app.use(router)

app.mount('#app')
