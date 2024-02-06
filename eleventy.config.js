const { DateTime } = require("luxon");
const markdownItAnchor = require("markdown-it-anchor");

// const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginBundle = require("@11ty/eleventy-plugin-bundle");
const pluginNavigation = require("@11ty/eleventy-navigation");
const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");
const pascal = require("prismjs/components/prism-pascal");

const pluginImages = require("./eleventy.config.images.js");
const toc = require("./_data/toc.json");

module.exports = function (eleventyConfig) {
	// Copy the contents of the `public` folder to the output folder
	// For example, `./public/css/` ends up in `_site/css/`
	eleventyConfig.addPassthroughCopy({
		"./public/": "/",
	});

	// Run Eleventy when these files change:
	// https://www.11ty.dev/docs/watch-serve/#add-your-own-watch-targets

	// Watch content images for the image pipeline.
	eleventyConfig.addWatchTarget("content/**/*.{svg,webp,png,jpeg}");

	// App plugins\
	eleventyConfig.addPlugin(pluginImages);

	// Official plugins
	// eleventyConfig.addPlugin(pluginRss);
	eleventyConfig.addPlugin(pluginSyntaxHighlight, {
		preAttributes: { tabindex: 0 },
		init: function ({ Prism }) {
			Prism.languages.sb = Prism.languages.extend("pascal", {
				keyword: [
					{
						pattern:
							/(^|[^&])\b(?:terminate_this_custom_script|jump|set_time_scale|set_car_density_multiplier|set_time_of_day|print_help|load_sprite|is_key_pressed|print_string_now)\b/i,
						lookbehind: true,
					},
					{
						pattern:
							/(^|[^&])\b(?:IF|AND|CONST|DOWNTO|ELSE|END|FALSE|FOR|HEX|NOT|OR|REPEAT|THEN|TO|TRUE|UNKNOWN|VAR|UNTIL|WHILE|INTEGER|INT|FLOAT|SHORTSTRING|STRING|LONGSTRING|IMPORT|EXPORT|SWITCH|CASE|DEFAULT|FUNCTION)\b/i,
						lookbehind: true,
					},
				],
				comment: {
					pattern: /\/\*[\s\S]*?\*\/|\{[\s\S]*?\}|\/\/.*/,
					greedy: true,
				},
				string: [
					{
						pattern: /(?:'(?:''|[^'\r\n])*'(?!')|#[&$%]?[a-f\d]+)+|\^[a-z]/i,
						greedy: true,
					},
					{
						pattern: /(?:"(?:""|[^"\r\n])*"(?!")|#[&$%]?[a-f\d]+)+|\^[a-z]/i,
						greedy: true,
					},
				],
			});
		},
	});
	eleventyConfig.addPlugin(pluginNavigation);
	eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
	eleventyConfig.addPlugin(pluginBundle);

	eleventyConfig.addFilter("htmlDateString", (dateObj) => {
		// dateObj input: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
		return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("yyyy-LL-dd");
	});

	eleventyConfig.addFilter("nextPage", function (slug) {
		const sections = toc.sections;
		for (let j = 0; j < sections.length; j++) {
			for (let i = 0; i < sections[j].pages.length; i++) {
				if (slug === sections[j].pages[i].slug) {
					return sections[j].pages[i + 1] || sections[j + 1]?.pages[0] || null;
				}
			}
		}

		return null;
	});

	eleventyConfig.addFilter("prevPage", function (slug) {
		const sections = toc.sections;
		for (let j = 0; j < sections.length; j++) {
			for (let i = 0; i < sections[j].pages.length; i++) {
				if (slug === sections[j].pages[i].slug) {
					return (
						sections[j].pages[i - 1] || sections[j - 1]?.pages.at(-1) || null
					);
				}
			}
		}

		return null;
	});

	eleventyConfig.addFilter("pageTitle", function (slug) {
		const sections = toc.sections;
		for (let j = 0; j < sections.length; j++) {
			for (let i = 0; i < sections[j].pages.length; i++) {
				if (slug === sections[j].pages[i].slug) {
					return sections[j].pages[i].name || null;
				}
			}
		}

		return null;
	});

	// Customize Markdown library settings:
	eleventyConfig.amendLibrary("md", (mdLib) => {
		mdLib.use(markdownItAnchor, {
			permalink: markdownItAnchor.permalink.ariaHidden({
				placement: "after",
				class: "header-anchor",
				symbol: "#",
				ariaHidden: false,
			}),
			level: [2, 3, 4],
			slugify: eleventyConfig.getFilter("slugify"),
		});
	});

	// Features to make your build faster (when you need them)

	// If your passthrough copy gets heavy and cumbersome, add this line
	// to emulate the file copy on the dev server. Learn more:
	// https://www.11ty.dev/docs/copy/#emulate-passthrough-copy-during-serve

	// eleventyConfig.setServerPassthroughCopyBehavior("passthrough");

	return {
		// Control which files Eleventy will process
		// e.g.: *.md, *.njk, *.html, *.liquid
		templateFormats: ["md", "njk", "html", "liquid"],

		// Pre-process *.md files with: (default: `liquid`)
		markdownTemplateEngine: "njk",

		// Pre-process *.html files with: (default: `liquid`)
		htmlTemplateEngine: "njk",

		// These are all optional:
		dir: {
			input: "content", // default: "."
			includes: "../_includes", // default: "_includes"
			data: "../_data", // default: "_data"
			output: "_site",
		},

		// -----------------------------------------------------------------
		// Optional items:
		// -----------------------------------------------------------------

		// If your site deploys to a subdirectory, change `pathPrefix`.
		// Read more: https://www.11ty.dev/docs/config/#deploy-to-a-subdirectory-with-a-path-prefix

		// When paired with the HTML <base> plugin https://www.11ty.dev/docs/plugins/html-base/
		// it will transform any absolute URLs in your HTML to include this
		// folder name and does **not** affect where things go in the output folder.
		pathPrefix: "/",
	};
};
