import { Handler, APIGatewayEvent, Context, Callback } from 'aws-lambda';

export const handle = (fn: (event: APIGatewayEvent) => any) => {
	const handler: Handler = async (
		event: APIGatewayEvent,
		_: any,
		callback: Callback
	) => {
		try {
			const result = await fn(event);
			callback(null, result);
		} catch (err) {
			callback(err);
		}
	};

	return handler;
};
