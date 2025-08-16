import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        "@": path.resolve("src"),
      },
    },
    test: {
      globals: true,
      setupFiles: "./src/tests/configuration/setupTests.ts",
      include: ["src/**/*.{test,spec}.?(*.)?(c|m)[jt]s?(x)"],
      env: loadEnv("test", process.cwd(), ""),
      environment: "./src/tests/configuration/environment.ts",
    },
  };
});
