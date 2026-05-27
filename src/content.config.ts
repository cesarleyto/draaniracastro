import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
    loader: glob({ base: './src/content/blog', pattern: '**/*.md' }),
    // Convertimos el schema en una función que recibe ({ image })
    schema: ({ image }) => z.object({
        title: z.string(),
        excerpt: z.string(),
        pubDate: z.coerce.date(),
        category: z.enum(['Síntomas', 'Diagnósticos', 'Testimonios', 'Vida Académica']).optional().default('Síntomas'),
        image: image().optional(), // ¡Este es el traductor mágico de Astro!
    }),
});

export const collections = { blog };
