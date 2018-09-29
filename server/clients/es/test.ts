import { search, create } from './index';
let spies: any;

jest.mock('request-promise', () => {
	const result = (spies = {
		get: jest.fn(),
		put: jest.fn(),
		post: jest.fn()
	});
	return result;
});

test('create', async () => {
	const res = await create('');
	expect(res).toBe('');
	expect(spies.put).toBeCalledWith();
});

test('search', async () => {
	const res = await search('');
	expect(res).toBe('');
	expect(spies.get).toBeCalledWith();
});
