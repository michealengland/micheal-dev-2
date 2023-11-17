import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

const isProd = import.meta.env.PROD;

export async function GET(context) {
	// Filter out posts that are marked as drafts from being published on production.
	const filterDraftPosts = (posts=[{data: {isDraft: false}}], isProd) => (
		! isProd ? posts :
		posts.filter((post) => post.data.isDraft !== true)
	)

	// const posts = await getCollection('blog');
	const posts = filterDraftPosts((await getCollection('blog')), isProd)

	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			link: `/blog/${post.slug}/`,
		})),
	});
}
