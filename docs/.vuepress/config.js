
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
		logo: "/assets/img/logo1/facebook_cover_photo_1.png",
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
					sidebarDepth: 2, // optional, defaults to 1
					children: [
						{
							title: "Overview",
							path: "/setup/overview"
						},
						// {
						// 	title: "Patterns",
						// 	path: "/setup/patterns",
						// 	children: [
						// 		{
						// 			title: "pattern1",
						// 			path: "/setup/patterns/pattern1"
						// 		},
						// 		{
						// 			title: "pattern2",
						// 			path: "/setup/patterns/pattern2"
						// 		}
						// 	]
						// }
					]
				}
			],
			"/containerize/": [
				{
					title: "Containerize applications",
					// path: "/devops/", // optional, which should be a absolute path.
					// collapsable: false, // optional, defaults to true
					sidebarDepth: 2, // optional, defaults to 1
					children: [
						{
							title: "Overview",
							path: "/containerize/overview"
						},
						// {
						// 	title: "Transformation patterns",
						// 	path: "/containerize/trans-patterns",
						// 	children: [
						// 		{
						// 			title: "pattern1",
						// 			path: "/containerize/trans-patterns/pattern1"
						// 		},
						// 		{
						// 			title: "pattern2",
						// 			path: "/containerize/trans-patterns/pattern2"
						// 		}
						// 	]
						// },
						// {
						// 	title: "MSA",
						// 	path: "/containerize/msa",
						// 	children: [
						// 		{
						// 			title: "overview",
						// 			path: "/containerize/msa/overview"
						// 		},
						// 		{
						// 			title: "pattern1",
						// 			path: "/containerize/msa/pattern1"
						// 		}
						// 	]
						// }
					]
				}
			],	

			"/manage/": [
				{
					title: "Manage cloud platform",
					sidebarDepth: 2, // optional, defaults to 1
					children: [
						{
							title: "Overview",
							path: "/manage/overview"
						},
						// {
						// 	title: "Monitoring",
						// 	path: "/manage/monitoring",
						// 	children: [
						// 		{
						// 			title: "logging",
						// 			path: "/manage/monitoring/logging"
						// 		},
						// 		{
						// 			title: "Metric",
						// 			path: "/manage/monitoring/logging"
						// 		}
						// 	]
						// },
						// {
						// 	title: "Best practices",
						// 	path: "/manage/bp",
						// 	children: [
						// 		{
						// 			title: "Best practice1",
						// 			path: "/manage/bp/bp1"
						// 		},
						// 		{
						// 			title: "Best practice2",
						// 			path: "/manage/bp/bp2"
						// 		}
						// 	]
						// }
					]	
				}
			]
		}
		
	}
};
