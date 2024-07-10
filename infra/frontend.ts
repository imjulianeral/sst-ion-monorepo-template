import { api } from '@infra/api';

export const web = new sst.aws.StaticSite('StaticSite', {
	path: 'packages/frontend',
	build: {
		command: 'pnpm run build',
		output: 'dist',
	},
	environment: {
		VITE_API_URL: api.url,
	},
});
