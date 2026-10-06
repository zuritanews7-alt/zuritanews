import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const noticias = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/noticias' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    categoria: z.string(),
    autor: z.string().default('Redacción ZURITANEWS'),
    imagen: z.string().optional(),
    resumen: z.string(),
  }),
});

export const collections = { noticias };