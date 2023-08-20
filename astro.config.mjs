import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			customCss: [
				// Relative path to your custom CSS file
				'./src/styles/custom.css',
			],
			title: 'Universitetets karateklubb',
			sidebar: [
				{
					label: 'Trening',
					autogenerate: { directory: 'trening' },
					// items: [
					// 	// Each item here is one entry in the navigation menu.
					// 	{ label: 'Example Guide', link: '/guides/example/' },
					// 	{ label: 'Example Guide', link: '/guides/example/' },
					// 	{ label: 'Example Guide', link: '/guides/example/' },
					// ],

				},
				{
					label: 'Klubben',
					autogenerate: { directory: 'klubben' },
				},
				{
					label: 'Chito ryu',
					autogenerate: { directory: 'chito-ryu' },
				},
			],
		}),
	],

	// Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
	image: { service: { entrypoint: 'astro/assets/services/sharp' } },
});
