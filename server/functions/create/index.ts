import { handle } from '../../lib';
import { APIGatewayEvent } from 'aws-lambda';
import { create as esCreate } from '../../clients/es';

export const create = (event: APIGatewayEvent) => esCreate(event.body);

export const handler = handle(create);
