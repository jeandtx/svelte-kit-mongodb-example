import { tutorials } from "$db/tutorials";
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async function () {
	const data = await tutorials.find({}, {
		limit: 50
	}).toArray();
	const ndata = [];
	for (const element of data) {
		ndata.push({
			name: element.name
		});
	}
	return {
		tutorials: ndata
	}
}