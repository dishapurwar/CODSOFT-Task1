// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// // https://vitejs.dev/config/
// export default defineConfig({
// 	plugins: [react()],
// 	server: {
// 		port: 3000,
// 		proxy: {
// 			"/api": {
// 				target: "http://localhost:5000",
// 			},
// 		},
// 	},
// });

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000', // Your backend server URL
        changeOrigin: true,
        secure: true, // If your backend server is running on HTTPS, set this to true
        ws: true,
      },
    },
  },
});

