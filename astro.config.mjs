import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";

import react from "@astrojs/react";

import astroExpressiveCode from "astro-expressive-code";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [icon(), astroExpressiveCode({
    styleOverrides: {
      width: '100%',
      frames: {
        shadowColor: 'transparent',
      }
    },
    themeCssSelector: (theme) => (theme.type === 'dark' ? `[data-theme="dark"]` : `[data-theme="light"]`)
  }), mdx(), react()],
  experimental: {
    fonts: [{
      provider: fontProviders.google(),
      name: "Noto Sans",
      cssVariable: "--font-noto-sans",
      weights: "100 900",
    }]
  }
});