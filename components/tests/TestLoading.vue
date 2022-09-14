<script>
/*
  Project Name: vite-vue-supabase
  License: MIT
  Created by: Lightnet
*/

  import { store } from "../store";
  import { onMounted, ref } from 'vue'

  export default {
    setup(){

      return {
        
      }
    },
    methods: {
      setLoading(_boo){
        console.log("BOOL", _boo)
        store.isLoading=_boo;
      }
    }
    
  }
</script>

<template>
  <button v-on:click="()=>setLoading(true)"> True </button>
  <button v-on:click="()=>setLoading(false)"> False </button>
</template>
