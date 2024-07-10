/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
	app(input) {
		return {
			name: 'sst-ion-monorepo-template',
			removal: input?.stage === 'production' ? 'retain' : 'remove',
			home: 'aws',
		};
	},
	async run() {
		const infra = await import('@infra/stacks');

		return {
			api: infra.api.url,
		};
	},
});
