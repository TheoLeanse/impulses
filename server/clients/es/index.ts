import * as request from 'request-promise';

const baseUrl = process.env.PRODUCTION ? '' : 'http://localhost:9200';
const index = 'impulses';

export const search = (query?: any) =>
	query
		? request.post(`${baseUrl}/${index}/_search`, {
				body: query
		  })
		: request.get(`${baseUrl}/${index}/_search`);

export const create = (content: string) =>
	request.put(`${baseUrl}/${index}/_doc`, {
		body: { content },
		json: true
	});
