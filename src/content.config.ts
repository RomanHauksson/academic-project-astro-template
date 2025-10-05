import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const papers = defineCollection({
  loader: glob({
    pattern: "**/*.mdx",
    base: "./src/papers",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    favicon: z.string().optional(),
    thumbnail: z.string().optional(),
    authors: z.array(
      z.object({
        name: z.string(),
        url: z.string().optional(),
        institution: z.string().optional(),
        notes: z.array(z.string()).optional(),
      })
    ),
    conference: z.string().optional(),
    notes: z
      .array(
        z.object({
          symbol: z.string(),
          text: z.string(),
        })
      )
      .optional(),
    links: z.array(
      z.object({
        name: z.string(),
        url: z.string(),
        icon: z.string().optional(),
      })
    ),
  }),
});

export const collections = { papers };
