import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";

import react from "@astrojs/react";

import astroExpressiveCode from "astro-expressive-code";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon(), astroExpressiveCode({
    styleOverrides: {
      width: '100%',
      frames: {
        shadowColor: 'transparent',
      }
    },
  }), mdx(), react()],

});