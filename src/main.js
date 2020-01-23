import addDuComponent from './components/CreateComponent_Due.vue'
import DuIndex from './components/IndexComponent_Du.vue'
import HomeComponent from './components/HomeComponent.vue'
import CreateComponent from './components/CreateComponent.vue'
import EditComponent from './components/EditComponent.vue'
import IndexComponent from './components/IndexComponent.vue'
import HelloWorld from './components/HelloWorld.vue'
import todo_cardCreateComponent from './components/todo_card/CreateComponent_toDoCard.vue'
import todo_cardComponent from './components/todo_card/IndexComponent_toDoCards.vue'

import Vue from 'vue'
import App from './App.vue'
// Vue material
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
Vue.use(VueMaterial)
//
import 'bootstrap/dist/css/bootstrap.css'
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';

Vue.use(VueAxios, axios);

Vue.config.productionTip = false

const routes = [{
    name: "home",
    path: "/",
    children: [{
      path: '/a',
      component: HelloWorld
    }, {
      name: "a/create",
      path: "/a/create",
      component: CreateComponent
    }],
    component: HomeComponent
  },
  {
    name: "create",
    path: "/create",
    component: CreateComponent
  },
  {
    name: "edit",
    path: "/edit:id",
    component: EditComponent
  },
  {
    name: "index",
    path: "/index",
    component: IndexComponent
  },
  {
    name: "createDu",
    path: "/duinfo/create",
    component: addDuComponent
  },
  {
    name: "Duinfo",
    path: "/duinfo",
    component: DuIndex
  },
  {
    name: "todo_card_create",
    path: "/todo_cardRoute/create",
    component: todo_cardCreateComponent
  },
  {
    name: "todo_card",
    path: "/todo_cardRoute",
    component: todo_cardComponent
  }
]

const router = new VueRouter({
  mode: 'history',
  routes: routes
});

new Vue(Vue.util.extend({
  router
}, App)).$mount('#app');