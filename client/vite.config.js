
// vite.config.js
import reactRefresh from '@vitejs/plugin-react';

export default {
  plugins: [reactRefresh()],
};




//! ESTE ES EL ORIGINAL
/* import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
}) */


//! SI QUIERO CAMBIAR DE PUERTO SE HACE ASI
/* 
  export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001, // Puedes cambiar este número al puerto que desees
  },
});
*/