import { Greet } from '@core/greet';
import type { Handler } from 'aws-lambda';
import { Resource } from 'sst';

export const handler: Handler = async (event) => {
	return {
		statusCode: 200,
		body: JSON.stringify({
			message: `${Greet.sayHello()} linked to: ${Resource.Database.name}`,
		}),
	};
};
