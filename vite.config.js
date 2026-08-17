import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { cpSync, rmSync } from "node:fs";
import { resolve } from "node:path";

export default defineConfig({
  base: "./",
  plugins: [
    tailwindcss(),
    {
      name: "copy-static-assets",
      writeBundle() {
        const target = resolve("dist/src/assets");
        rmSync(target, { recursive: true, force: true });
        cpSync(resolve("src/assets"), target, { recursive: true });
      },
    },
  ],
});
