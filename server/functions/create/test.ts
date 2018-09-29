import { handler } from '../../functions/create';
jest.mock('../../clients/es');

test('adding content', async () => {
	const callback = jest.fn();
	const result = await handler(
		{ body: 'A burr on my eyeball' } as any,
		{} as any,
		callback
	);
	expect(callback).toBeCalledWith();
	expect(result).toBe({});
});
