import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
// Config updated for Tailwind v4
export default defineConfig({
  plugins: [react(), tailwindcss()],
})




// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'

// // https://vite.dev/config/
// // Config updated for Tailwind v4
// export default defineConfig({
//   plugins: [react(), tailwindcss()],
  
//   // ⭐ Add this part (do NOT remove anything)
//   server: {
//     host: true,
//     port: 5173, // default port
//   }
// })
