
module.exports = {
	base: "/",
	title: "Cloud A to Z",
	description: "ABOUT Cloud platform setup, containerize, manage",
	// dest: "./docs",
	plugins: ["@vuepress/back-to-top"],
	
	markdown: {},
	head: [
		[
			"link",
			{
				rel: "apple-touch-icon",
				sizes: "180x180",
				href: "/assets/favicons/apple-touch-icon.png"
			}
		],
		[
			"link",
			{
				rel: "icon",
				type: "image/png",
				sizes: "32x32",
				href: "/assets/favicons/favicon-32x32.png"
			}
		],
		[
			"link",
			{
				rel: "icon",
				type: "image/png",
				sizes: "16x16",
				href: "/assets/favicons/favicon-16x16.png"
			}
		],
		[
			"link",
			{
				rel: "manifest",
				href: "/assets/favicons/site.webmanifest"
			}
		]
	],
	themeConfig: {
		logo: "/assets/img/logo_transparent.png",
		nav: [
			{ text: "Home", link: "/" },
			{ text: "Setup", link: "/setup/overview" },
			{ text: "Containerize", link: "/containerize/overview" },
			{ text: "Manage", link: "/manage/overview" },
		],
		sidebar: {
			"/setup/": [
				{
					title: "Cloud platform setup",
					//path: "/devops/", // optional, which should be a absolute path.
					// collapsable: false, // optional, defaults to true
					sidebarDepth: 1, // optional, defaults to 1
					children: [
						{
							title: "Overview",
							path: "/setup/overview"
						}
					]
				}
			],
			"/containerize/": [
				{
					title: "Containerize applications",
					// path: "/devops/", // optional, which should be a absolute path.
					// collapsable: false, // optional, defaults to true
					sidebarDepth: 1, // optional, defaults to 1
					children: [
						{
							title: "Overview",
							path: "/containerize/overview"
						}
					]
				}
			],	

			"/manage/": [
				{
					title: "Manage cloud platform",
					sidebarDepth: 1, // optional, defaults to 1
					children: [
						{
							title: "Overview",
							path: "/manage/overview"
						}
					]	
				}
			]
		}
		
	}
};
