import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import type { ScalarOptions } from "@scalar/docusaurus";
import configSwagger from "./static/config.json";

const config: Config = {
	title: "BDTechCenter",
	tagline: "Bosch Digital technology centralization platform",
	favicon: "img/logo.ico",

	// Set the production url of your site here
	url: "http://localhost:7777",
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: "/",

	onBrokenLinks: "warn",
	onBrokenMarkdownLinks: "warn",

	// Even if you don't use internationalization, you can use this field to set
	// useful metadata like html lang. For example, if your site is Chinese, you
	// may want to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: "en",
		locales: ["en"],
	},

	presets: [
		[
			"classic",
			{
				docs: {
					sidebarPath: "./sidebars.ts",
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl:
						"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
				},
				blog: {
					showReadingTime: true,
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl:
						"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
				},
				theme: {
					customCss: "./src/css/custom.css",
				},
			} satisfies Preset.Options,
		],
	],

	plugins: [
		[
			"@scalar/docusaurus",
			{
				id: "bdtc/api-reference",
				label: "API Reference",
				route: "/api-reference",
				configuration: {
					theme: "none",
					spec: {
						content: configSwagger,
					},
				},
			} as ScalarOptions,
		],
	],

	themeConfig: {
		// Replace with your project's social card
		image: "img/docusaurus-social-card.jpg",
		navbar: {
			title: "BDTechCenter",
			logo: {
				alt: "BDTechCenter Logo",
				src: "img/logo.png",
			},
			items: [
				{
					type: "docSidebar",
					sidebarId: "tutorialSidebar",
					position: "left",
					label: "Docs",
				},
				{ to: "/blog", label: "Blog", position: "left" },
				{
					href: "https://github.com/BDTechCenter",
					label: "GitHub",
					position: "right",
				},
			],
		},
		footer: {
			style: "dark",
			links: [
				{
					title: "Links",
					items: [
						{
							label: "Blog",
							to: "/blog",
						},
						{
							label: "GitHub",
							href: "https://github.com/BDTechCenter",
						},
						{
							label: "Bosch",
							href: "https://bzo.bosch.com/bzo/en/start_page.html",
						},
					],
				},
			],
			copyright: `Copyright © ${new Date().getFullYear()} BDTechCenter, Inc.`,
		},
		prism: {
			theme: prismThemes.github,
			darkTheme: prismThemes.dracula,
		},
	} satisfies Preset.ThemeConfig,
};

export default config;
