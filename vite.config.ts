import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// base './' makes every asset path relative, so the site works at
// https://USER.github.io/ AND https://USER.github.io/repo-name/ with no edits.
export default defineConfig({ base: './', plugins: [react()] })
