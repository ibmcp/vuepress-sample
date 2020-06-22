let BASE_DIR = "/cloudaz";

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
				href: BASE_DIR+"/assets/favicons/apple-touch-icon.png"
			}
		],
		[
			"link",
			{
				rel: "icon",
				type: "image/png",
				sizes: "32x32",
				href: BASE_DIR+"/assets/favicons/favicon-32x32.png"
			}
		],
		[
			"link",
			{
				rel: "icon",
				type: "image/png",
				sizes: "16x16",
				href: BASE_DIR+"/assets/favicons/favicon-16x16.png"
			}
		],
		[
			"link",
			{
				rel: "manifest",
				href: BASE_DIR+"/assets/favicons/site.webmanifest"
			}
		]
	],
	themeConfig: {
		logo: BASE_DIR+"/assets/img/logo1/facebook_cover_photo_1.png",
		nav: [
			{ text: "Home", link: BASE_DIR+"/" },
			{ text: "Setup", link: BASE_DIR+"/setup/overview" },
			{ text: "Containerize", link: BASE_DIR+"/containerize/overview" },
			{ text: "Manage", link: BASE_DIR+"/manage/overview" },
		],
		sidebar: {
			BASE_DIR+"/setup/": [
				{
					title: "Cloud platform setup",
					//path: "/devops/", // optional, which should be a absolute path.
					// collapsable: false, // optional, defaults to true
					sidebarDepth: 2, // optional, defaults to 1
					children: [
						{
							title: "Overview",
							path: BASE_DIR+"/setup/overview"
						},
						// {
						// 	title: "Patterns",
						// 	path: BASE_DIR+"/setup/patterns",
						// 	children: [
						// 		{
						// 			title: "pattern1",
						// 			path: BASE_DIR+"/setup/patterns/pattern1"
						// 		},
						// 		{
						// 			title: "pattern2",
						// 			path: BASE_DIR+"/setup/patterns/pattern2"
						// 		}
						// 	]
						// }
					]
				}
			],
			BASE_DIR+"/containerize/": [
				{
					title: "Containerize applications",
					// path: "/devops/", // optional, which should be a absolute path.
					// collapsable: false, // optional, defaults to true
					sidebarDepth: 2, // optional, defaults to 1
					children: [
						{
							title: "Overview",
							path: BASE_DIR+"/containerize/overview"
						},
						// {
						// 	title: "Transformation patterns",
						// 	path: BASE_DIR+"/containerize/trans-patterns",
						// 	children: [
						// 		{
						// 			title: "pattern1",
						// 			path: BASE_DIR+"/containerize/trans-patterns/pattern1"
						// 		},
						// 		{
						// 			title: "pattern2",
						// 			path: BASE_DIR+"/containerize/trans-patterns/pattern2"
						// 		}
						// 	]
						// },
						// {
						// 	title: "MSA",
						// 	path: BASE_DIR+"/containerize/msa",
						// 	children: [
						// 		{
						// 			title: "overview",
						// 			path: BASE_DIR+"/containerize/msa/overview"
						// 		},
						// 		{
						// 			title: "pattern1",
						// 			path: BASE_DIR+"/containerize/msa/pattern1"
						// 		}
						// 	]
						// }
					]
				}
			],	

			BASE_DIR+"/manage/": [
				{
					title: "Manage cloud platform",
					sidebarDepth: 2, // optional, defaults to 1
					children: [
						{
							title: "Overview",
							path: BASE_DIR+"/manage/overview"
						},
						// {
						// 	title: "Monitoring",
						// 	path: BASE_DIR+"/manage/monitoring",
						// 	children: [
						// 		{
						// 			title: "logging",
						// 			path: BASE_DIR+"/manage/monitoring/logging"
						// 		},
						// 		{
						// 			title: "Metric",
						// 			path: BASE_DIR+"/manage/monitoring/logging"
						// 		}
						// 	]
						// },
						// {
						// 	title: "Best practices",
						// 	path: BASE_DIR+"/manage/bp",
						// 	children: [
						// 		{
						// 			title: "Best practice1",
						// 			path: BASE_DIR+"/manage/bp/bp1"
						// 		},
						// 		{
						// 			title: "Best practice2",
						// 			path: BASE_DIR+"/manage/bp/bp2"
						// 		}
						// 	]
						// }
					]	
				}
			]
		}
		
	}
};
