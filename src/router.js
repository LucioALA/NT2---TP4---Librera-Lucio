import Vue from 'vue'
import VueRouter from 'vue-router'


import Formulario from './componentes/Formulario/index.vue'
import FormularioAv from './componentes/FormularioAv/index.vue'



Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes : [
        { path: '/', redirect: '/formulario' },
        
        { path: '/formulario', component: Formulario },
        { path: '/formulario-av', component: FormularioAv },
        
    ]
})

