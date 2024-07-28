import { getMetadata } from '$lib/utils/get-metadata';

import { json } from '@sveltejs/kit';

import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
	const { url } = await request.json();

	console.log({ url });
	const metadata = await getMetadata(url);
	console.log('Fetched metadata', {
		...metadata,
		contentHtml: metadata.contentHtml.slice(0, 100),
		contentText: metadata.contentText.slice(0, 100)
	});

	return json(
		{ metadata },
		{
			status: 200
		}
	);
};
