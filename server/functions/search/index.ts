import { handle } from '../../lib';
import { search as esSearch } from '../../clients/es';

export const search = () => esSearch();

export const handler = handle(search);
