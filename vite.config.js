/*jshint esversion: 11 */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: "jsx",
    include: [
      // Business as usual for .jsx and .tsx files
      "/**/*.jsx",
      "/**/*.tsx",
      "node_modules/**/*.jsx",
      "node_modules/**/*.tsx",

      // Add the specific files you want to allow JSX syntax in
      // "App.js",

      // --- OR ---

      // Add these lines to allow all .js files to contain JSX
      "**/*.js",
      "src/**/*.js",
      "node_modules/**/*.js",

      // Add these lines to allow all .ts files to contain JSX
      "src/**/*.ts",
      "node_modules/**/*.ts",
    ],
    exclude: [],
  }
});

// export default defineConfig({
//   esbuild: {
//         loader: "jsx",
//   },
//   plugins: [
//     react({ include: /\.(mdx|js|jsx|ts|tsx)$/ }),
//   ]
// });