import { Handler, APIGatewayEvent, Context, Callback } from 'aws-lambda';

export const handle: (fn: (event: APIGatewayEvent) => any) => Handler = fn => {
	return async (
		event: APIGatewayEvent,
		context: Context,
		callback: Callback
	) => {
		try {
			const result = await fn(event);
			callback(null, result);
		} catch (err) {
			callback(err);
		}
	};
};
