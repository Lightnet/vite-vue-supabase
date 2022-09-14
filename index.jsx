/*
  Project Name: vite-vue-supabase
  License: MIT
  Created by: Lightnet
*/

// https://vuejs.org/guide/quick-start.html
// https://stackblitz.com/edit/vitejs-vite-t87h3t?file=src%2Fmain.js&terminal=dev
// https://router.vuejs.org/guide/advanced/lazy-loading.html
// https://stackabuse.com/lazy-loading-routes-with-vue-router/
// https://stackoverflow.com/questions/44886812/how-to-display-a-loading-animation-while-a-lazy-loaded-route-component-is-bein

import "./styles.css";
import { createRouter, createWebHashHistory } from 'vue-router';
import { createApp } from 'vue'
import { supabase } from './libs/supabaseclient';
import { store } from './components/store'
import App from './components/App.vue';
import Access from "./components/Access.vue"

//import ThemeProvider from "./components/theme/ThemeProvider";

store.user = supabase.auth.user()

const routes = [
  {
    path: '/',
    name:'Home',
    component: () => import('./pages/index.vue'),
  },
  {
    path: '/about',
    name:'About',
    component: () => import('./pages/about.vue'),
  },
  { //this is just a test
    path: '/:access', //supabase url parse??
    name:'access',
    component: Access,
    props: route => {
      console.log(route)
      return ({ query: route.query.q })
    }
  },
  /*
  {
    path: '/todolist',
    name:'To Do List',
    component: () => import('./pages/todolist'),
  },
  */
];

const router = createRouter({
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})

router.beforeResolve((to, from, next) => {
  //console.log(to)
  if(to.name){
    //console.log("loading...")
    store.isLoading=true;
  }
  next()
})
//need to make sure move to page url?
router.afterEach((to, from) => {
  // Complete the animation of the route progress bar.
  //console.log("done?")
  //setTimeout(()=>{store.isLoading=false;},2000)
  store.isLoading=false;
})

const app = createApp(App);
app.use(router)
app.mount('#app')

if (import.meta.hot) { //< module.hot
  //console.log(import.meta.hot)
  import.meta.hot.accept() //< module.hot.accept()
  import.meta.hot.dispose(()=>{
    app.unmount()
  }) //< module.hot.dispose(dispose)
  //console.log("Hot Reload...")
}
/*

*/