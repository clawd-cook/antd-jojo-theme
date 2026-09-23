import { defineConfig } from "vite-plus";

export default defineConfig({
  pack: {
    deps: { resolveDepSubpath: true },
    dts: {
      generator: "tsgo",
    },
    exports: {
      // Keep optional JOJO chrome CSS reachable after `vp pack` rewrites exports.
      customExports: {
        "./styles.css": "./styles.css",
      },
    },
  },
});
