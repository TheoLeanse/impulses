require('dotenv').config();
import * as request from 'request-promise';

const indexUrl = `${process.env.ES_CLUSTER_URL}/impulses`;

export const search = (query?: any) =>
	query
		? request.post(`${indexUrl}/_search`, {
				body: query
		  })
		: request.get(`${indexUrl}/_search`);

export const create = (content: string) =>
	request.put(`${indexUrl}/_doc`, {
		body: { content },
		json: true
	});
