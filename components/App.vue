<script>
/*
  Project Name: vite-vue-supabase
  License: MIT
  Created by: Lightnet
*/

  import {RouterView, RouterLink} from "vue-router"
  import LoadingVue from "./Loading.vue";
  import TestLoadingVue from "./tests/TestLoading.vue";
  import { store } from "./store";
  import { onMounted, ref, watchEffect } from 'vue'
  import { supabase } from '../libs/supabaseclient';
  import Auth from './auth/Auth.vue';
  import Profile  from './auth/Profile.vue';

  export default {
    components:{
      LoadingVue,
      TestLoadingVue,
      Auth,
      Profile
    },
    setup() {
      const isLoading = ref(store.isLoading)
      //isLoading.value=false
      watchEffect(() => {
        //console.log(store.isLoading)
        isLoading.value = store.isLoading;
      })

      store.user = supabase.auth.user()
      supabase.auth.onAuthStateChange((_, session) => {
        if(session){
          store.user = session.user
        }else{//clear out storage to render login ui
          store.user=null
        }
      })

      return {
        isLoading,
        store
      }
    }
  }

// <TestLoadingVue/>
</script>
<template>
  <LoadingVue v-show="isLoading"/>
  <template v-if="store.user">
    <RouterView />
  </template>
  <template v-else>
    <Auth />
  </template>
  
</template>
