import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
    loader: glob({ base: './src/content/blog', pattern: '**/*.md' }),
    schema: z.object({
        title: z.string(),
        excerpt: z.string(),
        pubDate: z.coerce.date(),
        category: z.enum(['Síntomas', 'Diagnósticos', 'Testimonios', 'Vida Académica']).optional().default('Síntomas'),
        image: z.string().optional(), // ¡NUEVO: Dejamos pasar la imagen!
    }),
});

export const collections = { blog };
