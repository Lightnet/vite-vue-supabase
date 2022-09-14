<script>
/*
  Project Name: vite-vue-supabase
  License: MIT
  Created by: Lightnet
*/
  import { store } from '../components/store';
  import NavMenu from '../components/NavMenu.vue';
  import Profile from "../components/auth/Profile.vue"
  
  export default {
    components:{
      NavMenu,
      Profile,
    },
    setup() {
      //console.log(store)
    }
  }
</script>

<template>
  <NavMenu/>
  <label>Home</label>
  <Profile/>
</template>