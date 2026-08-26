import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(({ mode }) => ({
  base: process.env["VITE_BASE_PATH"] ?? "/",
  plugins: [
    ...(mode === "pages" ? [] : [tanstackStart()]),
    tsconfigPaths(),
    viteReact(),
    tailwindcss(),
  ],
}));
