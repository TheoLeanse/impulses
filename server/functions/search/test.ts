import { search, handler } from './index';
jest.mock('../../clients/es');

test('search function', async () => {
	const result = await search();
	expect(result).toEqual({});
});

test('handler', async () => {
	const callback = jest.fn();
	await handler({} as any, {} as any, callback);
	expect(callback).toBeCalledWith();
});
