import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (({ params }) => {
	console.log(params);
	return { param: params.slug };

	throw error(404, 'Not found');
}) satisfies PageLoad;
