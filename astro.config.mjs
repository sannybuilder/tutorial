import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load custom Sanny Builder language grammar
const sbGrammar = JSON.parse(
	readFileSync(join(__dirname, 'sb.tmLanguage.json'), 'utf-8')
);

// https://astro.build/config
export default defineConfig({
	site: 'https://tutorial.sannybuilder.com',
	integrations: [
		starlight({
			title: 'Sanny Builder 4 Tutorial',
			description: 'Introduction to scripting for Grand Theft Auto: San Andreas using Sanny Builder 4',
			logo: {
				src: './public/img/sanny.png',
			},
			favicon: '/img/sanny.png',
			social: {
				github: 'https://github.com/sannybuilder/tutorial',
                discord: 'https://sannybuilder.com/discord',
			},
			tableOfContents: false,
			expressiveCode: {
				themes: ['dracula', 'solarized-light'],
				shiki: {
					langs: [
						{
							// Language identifier
							id: 'sb',
							// Scope name from the grammar
							scopeName: 'source.sb',
							// The TextMate grammar
							...sbGrammar,
							// Language aliases for code blocks
							aliases: ['sanny', 'sannybuilder'],
						}
					],
				},
			},
			customCss: [
				'./src/styles/custom.css',
			],
			sidebar: [
				{
					label: 'Welcome',
					link: '/',
				},
				{
					label: 'Chapter 0: Prerequisites',
					items: [
						{ label: 'Setting up the environment', slug: 'setup' },
						{ label: 'CLEO Library', slug: 'cleo-library' },
						{ label: 'Compiling scripts with Sanny Builder', slug: 'sanny-builder' },
						{ label: 'Stripped main.scm', slug: 'stripped-scm' },
					],
				},
				{
					label: 'Chapter I: Hello, World!',
					items: [
						{ label: 'Instructions', slug: 'instructions' },
						{ label: 'Parameters', slug: 'parameters' },
						{ label: 'Numbers', slug: 'numbers' },
						{ label: 'Strings', slug: 'strings' },
						{ label: 'Comments', slug: 'comments' },
						{ label: '$CLEO Directive', slug: 'cleo-directive' },
						{ label: 'Hands-on: Showing a Message', slug: 'script-show-message' },
					],
				},
				{
					label: 'Chapter II: Loops',
					items: [
						{ label: 'Variables', slug: 'variables' },
						{ label: 'WAIT command', slug: 'wait' },
						{ label: 'WHILE Loop', slug: 'while' },
						{ label: 'WHILE TRUE', slug: 'while-true' },
						{ label: 'Hands-on: Spawning a Vehicle', slug: 'script-spawn-vehicle' },
					],
				},
				{
					label: 'Chapter III: To Be Or Not To Be',
					items: [
						{ label: 'Conditions', slug: 'conditions' },
						{ label: 'IF..ELSE', slug: 'else' },
						{ label: 'Negating Conditions', slug: 'negating-conditions' },
						{ label: 'Multiple Conditions', slug: 'multiple-conditions' },
					],
				},
				{
					label: "Chapter IV: Working with Text",
					items: [
						{label: 'Text Types', slug: 'text-types'},
						{label: 'Basic Messages', slug: 'basic-messages'},
						{label: 'Formatted Messages', slug: 'formatted-messages'},
						{label: 'Text Draws', slug: 'text-draws'},
						{label: 'Debug Messages', slug: 'debug-messages'},
						
					]
				}
			],
		}),
	],
});
