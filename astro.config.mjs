import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { rehypeHeadingIds } from '@astrojs/markdown-remark';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import locales from './locales.json';
import starlightLinksValidator from 'starlight-links-validator';
import starlightBlog from 'starlight-blog';

const authors = {
	nothingismagick: {
		name: 'Daniel Thompson-Yvetot',
		title: 'Tauri Co-Founder',
		picture: '/authors/nothingismagick.jpeg',
	},
	lucasfernog: {
		name: 'Lucas Nogueira',
		title: 'Tauri Co-Founder',
		picture: '/authors/lucasfernog.jpeg',
	},
	beanow: {
		name: 'Robin van Boven',
		title: 'Tauri Board Director',
		picture: '/authors/Beanow.png',
	},
	jbolda: {
		name: 'Jacob Bolda',
		title: 'Tauri Board Director',
		picture: '/authors/jbolda.jpeg',
	},
	lorenzolewis: {
		name: 'Lorenzo Lewis',
		title: 'Tauri Community Lead',
		picture: '/authors/lorenzolewis.png',
	},
	tweidinger: {
		name: 'Tillmann Weidinger',
		title: 'Tauri Security',
		picture: '/authors/tweidinger.png',
	},
	amrbashir: {
		name: 'Amr Bashir',
		title: 'Tauri Development',
		picture: '/authors/amrbashir.png',
	},
	wusyong: {
		name: 'Wu Yu Wei',
		title: 'Tauri Development Lead',
		picture: '/authors/wusyong.png',
	},
	chip: {
		name: 'Chip Reed',
		title: 'Tauri Security',
		picture: '/authors/chip.png',
	},
};

const site = 'https://beta.tauri.app';

// https://astro.build/config
export default defineConfig({
	site,
	integrations: [
		starlight({
			plugins: [
				starlightBlog({ authors }),
				starlightLinksValidator({ errorOnRelativeLinks: false }),
			],
			title: 'Tauri',
			description: 'The cross-platform app building toolkit',
			logo: {
				dark: './src/assets/logo.svg',
				light: './src/assets/logo_light.svg',
				replacesTitle: true,
			},
			social: {
				github: 'https://github.com/tauri-apps/tauri',
				discord: 'https://discord.com/invite/tauri',
				twitter: 'https://twitter.com/TauriApps',
				mastodon: 'https://fosstodon.org/@TauriApps',
			},
			components: {
				SiteTitle: 'src/components/overrides/SiteTitle.astro',
				Footer: 'src/components/overrides/Footer.astro',
				Header: 'src/components/overrides/Header.astro',
				ThemeSelect: 'src/components/overrides/ThemeSelect.astro',
			},
			head: [
				{
					tag: 'meta',
					attrs: { property: 'og:image', content: site + '/og.png?v=1' },
				},
				{
					tag: 'meta',
					attrs: { property: 'twitter:image', content: site + '/og.png?v=1' },
				},
			],
			// TODO: Be sure this is updated when the branch is switched
			editLink: {
				baseUrl: 'https://github.com/tauri-apps/tauri-docs/edit/next',
			},
			customCss: ['./src/styles/custom.css'],
			sidebar: [
				{
					label: 'Quick Start',
					translations: {
						'zh-CN': '快速开始',
					},
					collapsed: true,
					items: [
						{
							label: 'What is Tauri?',
							translations: {
								'zh-CN': '什么是 Tauri?',
							},
							link: 'guides',
						},
						{
							label: 'Prerequisites',
							translations: {
								es: 'Prerrequisitos',
								'zh-CN': '前置条件',
							},
							link: 'guides/prerequisites',
						},
						{
							label: 'Create a Project',
							translations: {
								'zh-CN': '创建项目',
							},
							link: 'guides/create',
						},
						{
							label: 'Frontend Configuration',
							translations: {
								es: 'Configuración del Frontend',
								'zh-CN': '前端配置',
							},
							link: 'guides/frontend',
						},
						{
							label: 'Upgrade & Migrate',
							translations: {
								'zh-CN': '升级和迁移',
							},
							link: 'guides/upgrade-migrate',
						},
						{
							label: 'Core Concepts',
							translations: {
								'zh-CN': '核心概念',
							},
							link: 'concepts',
						},
						{
							label: 'Troubleshooting',
							translations: {
								'zh-CN': '故障排除',
							},
							link: 'guides/troubleshoot',
						},
					],
				},
				{
					label: 'Guides',
					translations: {
						'zh-CN': '指引',
					},
					collapsed: true,
					items: [
						{
							label: 'Develop',
							translations: {
								'zh-CN': '开发',
							},
							link: 'guides/develop/',
						},
						{
							label: 'Debug',
							translations: {
								'zh-CN': '调试',
							},
							link: 'guides/debug/',
						},
						{
							label: 'Test',
							translations: {
								'zh-CN': '测试',
							},
							link: 'guides/test',
						},
						{
							label: 'Build',
							translations: {
								'zh-CN': '构建',
							},
							link: 'guides/build',
						},
						{
							label: 'Distribute',
							translations: {
								'zh-CN': '分发',
							},
							link: 'guides/distribute',
						},
						{
							label: 'Plugin Development',
							translations: {
								'zh-CN': '插件开发',
							},
							link: 'guides/plugins',
						},
					],
				},
				{
					label: 'References',
					translations: {
						'zh-CN': '参考',
					},
					collapsed: true,
					items: [
						{
							label: 'List of References',
							translations: {
								'zh-CN': '参考列表',
							},
							link: '/references',
						},
						{
							label: 'Tauri Configuration',
							translations: {
								'zh-CN': 'Tauri 配置',
							},
							link: '/references/v2/config',
						},
						{
							label: 'Access Control List',
							translations: {
								'zh-CN': '访问控制列表（ACL）',
							},
							link: '/references/v2/acl',
						},
						{
							label: 'Command Line Interface (CLI)',
							translations: {
								'zh-CN': '命令行接口（CLI）',
							},
							link: '/references/v2/cli',
						},
						{
							label: 'JavaScript API',
							translations: {
								'zh-CN': 'JavaScript 接口',
							},
							link: '/references/v2/js',
						},
						{
							label: 'Rust API (via Docs.rs)',
							translations: {
								'zh-CN': 'Rust 接口',
							},
							// TODO: Is there a way to link this to the latest pre-released version?
							link: 'https://docs.rs/tauri/~2.0.0-beta',
						},
					],
				},
				{
					label: 'Features & Recipes',
					translations: {
						'zh-CN': '功能和秘诀',
					},
					collapsed: true,
					autogenerate: { directory: 'features' },
				},
			],
			locales,
			lastUpdated: true,
		}),
	],
	markdown: {
		shikiConfig: {
			langs: ['powershell', 'ts', 'rust', 'bash', 'json', 'toml', 'html', 'js'],
		},
		rehypePlugins: [
			rehypeHeadingIds,
			[
				rehypeAutolinkHeadings,
				{
					behavior: 'wrap',
					properties: { ariaHidden: true, tabIndex: -1, class: 'heading-link' },
				},
			],
		],
	},
	redirects: {
		// Old blog url schema redirects
		'/blog/2022/06/19/tauri-1-0': '/blog/tauri-1-0',
		'/blog/tauri_1_0': '/blog/tauri-1-0',
		'/blog/2022/07/12/tauri-programme-turns-1-and-board-elections':
			'/blog/tauri-programme-turns-1-and-board-elections',
		'/blog/2022/09/15/tauri-1-1': '/blog/tauri-1-1',
		'/blog/2022/09/19/tauri-egui-0-1': '/blog/tauri-egui-0-1',
		'/blog/2022/11/18/tauri-1-2': '/blog/tauri-1-2',
		'/blog/2022/12/09/tauri-mobile-alpha': '/blog/tauri-mobile-alpha',
		'/blog/2023/02/03/tauri-2-0-0-alpha-3': '/blog/tauri-2-0-0-alpha-3',
		'/blog/2023/02/09/tauri-community-growth-and-feedback':
			'/blog/tauri-community-growth-and-feedback',
		'/blog/2023/03/01/create-tauri-app-version-3-released':
			'/blog/create-tauri-app-version-3-released',
		'/blog/2023/03/20/tauri-2-0-0-alpha-4': '/blog/tauri-2-0-0-alpha-4',
		'/blog/2023/05/03/tauri-1-3': '/blog/tauri-1-3',
		'/blog/2023/06/14/tauri-1-4': '/blog/tauri-1-4',
		'/blog/2023/06/15/tauri-board-elections-and-governance-updates':
			'/blog/tauri-board-elections-and-governance-updates',
		'about/intro': 'about/philosophy',
		// v1 /guides/debugging -> /guides/debug
		...i18nRedirect('/v1/guides/debugging/application', '/guides/debug/application'),
		...i18nRedirect('/v1/guides/debugging/vs-code', '/guides/debug/vs-code'),
		...i18nRedirect('/v1/guides/debugging/clion', '/guides/debug/clion'),
		// v1 /guides/development -> /guides/develop
		...i18nRedirect(
			'/v1/guides/development/development-cycle',
			'/guides/develop/development-cycle'
		),
		...i18nRedirect(
			'/v1/guides/development/updating-dependencies',
			'/guides/develop/updating-dependencies'
		),
		// v1 /guides/testing -> /guides/test
		...i18nRedirect('/v1/guides/testing/mocking', '/guides/test/mocking'),
		...i18nRedirect('/v1/guides/testing/webdriver/ci', '/guides/test/webdriver/ci'),
		...i18nRedirect('/v1/guides/testing/webdriver/introduction', '/guides/test/webdriver/'),
		...i18nRedirect(
			'/v1/guides/testing/webdriver/example/setup',
			'/guides/test/webdriver/example/setup'
		),
		...i18nRedirect(
			'/v1/guides/testing/webdriver/example/selenium',
			'/guides/test/webdriver/example/selenium'
		),
		...i18nRedirect(
			'/v1/guides/testing/webdriver/example/webdriverio',
			'/guides/test/webdriver/example/webdriverio'
		),

		// v1 /references
		...i18nRedirect('/v1/references', '/concepts'),
		...i18nRedirect('/v1/references/architecture', '/concepts/architecture'),
		...i18nRedirect('/v1/references/architecture/process-model', '/concepts/process-model'),
		...i18nRedirect('/v1/references/architecture/security', '/concepts/tauri-security'),
		...i18nRedirect(
			'/v1/references/architecture/inter-process-communication',
			'/concepts/inter-process-communication'
		),
		...i18nRedirect(
			'/v1/references/architecture/inter-process-communication/brownfield',
			'/concepts/inter-process-communication/brownfield'
		),
		...i18nRedirect(
			'/v1/references/architecture/inter-process-communication/isolation',
			'/concepts/inter-process-communication/isolation'
		),
		...i18nRedirect('/v1/references/security', '/concepts/development-security'),
		...i18nRedirect('/v1/references/configuration-files', '/references/configuration-files'),
		...i18nRedirect('/v1/references/webview-versions', '/references/webview-versions'),

		// Decommissioned locales -> refer to /public/_redirects file
		// '/ko/[...slug]': '/[...slug]',
		// '/it/[...slug]': '/[...slug]',
	},
	//
});

// Generates a redirect for each locale.
function i18nRedirect(from, to) {
	const routes = {};
	Object.keys(locales).map((locale) =>
		locale === 'root'
			? (routes[from] = to)
			: (routes[`/${locale}/${from.replaceAll(/^\/*/g, '')}`] = `/${locale}/${to.replaceAll(
					/^\/*/g,
					''
				)}`)
	);
	return routes;
}
