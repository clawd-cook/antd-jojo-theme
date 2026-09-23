import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

// Docs: https://rsbuild.rs/config/
// GitHub Pages project site serves under /<repo>/; set BASE_PATH in CI.
const base = (process.env.BASE_PATH ?? "/").replace(/\/$/, "") || "/";

export default defineConfig({
  plugins: [pluginReact()],
  server: {
    base,
  },
  output: {
    assetPrefix: base === "/" ? "/" : `${base}/`,
  },
});
