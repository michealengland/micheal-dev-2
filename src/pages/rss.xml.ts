import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

const isProd = import.meta.env.PROD;

/**
 * View RSS feed by going to /rss.xml.
 *
 * Example: https://micheal.dev/rss.xml
 *
 * @param {*} context
 * @returns
 */
export async function GET(context) {
	const posts = [
		...(await getCollection('blog')),
	].filter(post => !isProd || !post.data.isDraft)
	 .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())

	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			link: `/${post.collection}/${post.slug}/`,
		})),
	});
}
