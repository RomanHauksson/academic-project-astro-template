import { defineCollection, z } from "astro:content";

import { glob } from "astro/loaders";

const papers = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/papers" }),
  schema: z.object({
    title: z.string(),
    authors: z.array(
      z.object({
        name: z.string(),
        url: z.string().url().optional(),
        institution: z.string().optional(),
        notes: z.array(z.string()).optional(),
      }),
    ),
    conference: z.string().optional(),
    notes: z
      .array(
        z.object({
          symbol: z.string(),
          text: z.string(),
        }),
      )
      .optional(),
    links: z.array(
      z.object({
        name: z.string(),
        url: z.string().url(),
        icon: z.string().optional(),
      }),
    ),
    description: z.string().optional(),
    favicon: z.string().optional(),
    thumbnail: z.string().optional(),
    theme: z.enum(["device", "light", "dark"]).default("device"),
  }),
});

export const collections = { papers };
