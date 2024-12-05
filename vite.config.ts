import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
		globals: true,
		include: ["**/*.spec.ts"],
		environment: "jsdom",
		setupFiles: ["@vitest/web-worker"]
	},
	worker: {
		format: "es"
	},
})
