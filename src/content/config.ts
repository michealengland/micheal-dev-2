import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		lastUpdated: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		heroAlt: z.string(),
		isDraft: z.boolean().optional()
	}),
});

export const collections = { blog };
