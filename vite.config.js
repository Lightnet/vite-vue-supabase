/*
  Project Name: vite-vue-supabase
  License: MIT
  Created by: Lightnet
*/

// vite.config.ts
import { defineConfig } from 'vite';
import vuePlugin from '@vitejs/plugin-vue';

export default defineConfig({
  //server: {
    //port:3000,
    //proxy: {  
    //}
  //},
  plugins: [
    vuePlugin()
  ],
});