export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["dapuplogo.png","favicon.png","favicon_package_dark/android-chrome-192x192.png","favicon_package_dark/android-chrome-512x512.png","favicon_package_dark/apple-touch-icon.png","favicon_package_dark/browserconfig.xml","favicon_package_dark/favicon-16x16.png","favicon_package_dark/favicon-32x32.png","favicon_package_dark/favicon.ico","favicon_package_dark/mstile-144x144.png","favicon_package_dark/mstile-150x150.png","favicon_package_dark/mstile-310x150.png","favicon_package_dark/mstile-310x310.png","favicon_package_dark/mstile-70x70.png","favicon_package_dark/safari-pinned-tab.svg","favicon_package_dark/site.webmanifest","favicon_package_light/android-chrome-192x192.png","favicon_package_light/android-chrome-512x512.png","favicon_package_light/apple-touch-icon.png","favicon_package_light/browserconfig.xml","favicon_package_light/favicon-16x16.png","favicon_package_light/favicon-32x32.png","favicon_package_light/favicon.ico","favicon_package_light/mstile-144x144.png","favicon_package_light/mstile-150x150.png","favicon_package_light/mstile-310x150.png","favicon_package_light/mstile-310x310.png","favicon_package_light/mstile-70x70.png","favicon_package_light/safari-pinned-tab.svg","favicon_package_light/site.webmanifest"]),
	mimeTypes: {".png":"image/png",".xml":"application/xml",".svg":"image/svg+xml",".webmanifest":"application/manifest+json"},
	_: {
		client: {"start":"_app/immutable/entry/start.2a6b9bc4.js","app":"_app/immutable/entry/app.e3dff43a.js","imports":["_app/immutable/entry/start.2a6b9bc4.js","_app/immutable/chunks/index.0a5d0d14.js","_app/immutable/chunks/singletons.9dccc093.js","_app/immutable/chunks/paths.768dd842.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/entry/app.e3dff43a.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/index.0a5d0d14.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js')),
			__memo(() => import('../output/server/nodes/4.js')),
			__memo(() => import('../output/server/nodes/5.js')),
			__memo(() => import('../output/server/nodes/6.js')),
			__memo(() => import('../output/server/nodes/7.js')),
			__memo(() => import('../output/server/nodes/8.js')),
			__memo(() => import('../output/server/nodes/9.js')),
			__memo(() => import('../output/server/nodes/10.js')),
			__memo(() => import('../output/server/nodes/11.js')),
			__memo(() => import('../output/server/nodes/12.js')),
			__memo(() => import('../output/server/nodes/13.js')),
			__memo(() => import('../output/server/nodes/14.js')),
			__memo(() => import('../output/server/nodes/15.js')),
			__memo(() => import('../output/server/nodes/16.js')),
			__memo(() => import('../output/server/nodes/17.js')),
			__memo(() => import('../output/server/nodes/18.js')),
			__memo(() => import('../output/server/nodes/19.js')),
			__memo(() => import('../output/server/nodes/20.js')),
			__memo(() => import('../output/server/nodes/21.js')),
			__memo(() => import('../output/server/nodes/22.js')),
			__memo(() => import('../output/server/nodes/23.js')),
			__memo(() => import('../output/server/nodes/24.js')),
			__memo(() => import('../output/server/nodes/25.js')),
			__memo(() => import('../output/server/nodes/26.js')),
			__memo(() => import('../output/server/nodes/27.js')),
			__memo(() => import('../output/server/nodes/28.js')),
			__memo(() => import('../output/server/nodes/29.js')),
			__memo(() => import('../output/server/nodes/30.js')),
			__memo(() => import('../output/server/nodes/31.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/admin",
				pattern: /^\/admin\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 25 },
				endpoint: null
			},
			{
				id: "/admin/approve-brands",
				pattern: /^\/admin\/approve-brands\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 28 },
				endpoint: null
			},
			{
				id: "/admin/approve-users",
				pattern: /^\/admin\/approve-users\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 29 },
				endpoint: null
			},
			{
				id: "/admin/deal-contracts",
				pattern: /^\/admin\/deal-contracts\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 30 },
				endpoint: null
			},
			{
				id: "/admin/(email)/email",
				pattern: /^\/admin\/email\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 26 },
				endpoint: null
			},
			{
				id: "/admin/(email)/email/[email_id]",
				pattern: /^\/admin\/email\/([^/]+?)\/?$/,
				params: [{"name":"email_id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 27 },
				endpoint: null
			},
			{
				id: "/api/presign",
				pattern: /^\/api\/presign\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/presign/_server.js'))
			},
			{
				id: "/api/s3object/[id]",
				pattern: /^\/api\/s3object\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/s3object/_id_/_server.js'))
			},
			{
				id: "/(brand-pages)/brand-edit-profile/[user]",
				pattern: /^\/brand-edit-profile\/([^/]+?)\/?$/,
				params: [{"name":"user","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/(make-brand)/brand-login",
				pattern: /^\/brand-login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/(brand-pages)/brand-profile/[user]",
				pattern: /^\/brand-profile\/([^/]+?)\/?$/,
				params: [{"name":"user","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/(make-brand)/brand-signup",
				pattern: /^\/brand-signup\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 17 },
				endpoint: null
			},
			{
				id: "/coming-soon",
				pattern: /^\/coming-soon\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 31 },
				endpoint: null
			},
			{
				id: "/(brand-pages)/creation-center-clone",
				pattern: /^\/creation-center-clone\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/(brand-pages)/creation-center-clone/brand-create-offer",
				pattern: /^\/creation-center-clone\/brand-create-offer\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/(brand-pages)/creation-center",
				pattern: /^\/creation-center\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/(brand-pages)/creation-center/brand-create-offer",
				pattern: /^\/creation-center\/brand-create-offer\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/(brand-pages)/creation-center/deal/[deal]",
				pattern: /^\/creation-center\/deal\/([^/]+?)\/?$/,
				params: [{"name":"deal","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/(brand-pages)/creation-center/view-contract",
				pattern: /^\/creation-center\/view-contract\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/(user-pages)/deals",
				pattern: /^\/deals\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 20 },
				endpoint: __memo(() => import('../output/server/entries/endpoints/(user-pages)/deals/_server.js'))
			},
			{
				id: "/(user-pages)/deals/view-contract",
				pattern: /^\/deals\/view-contract\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 21 },
				endpoint: null
			},
			{
				id: "/(user-pages)/edit-profile/[user]",
				pattern: /^\/edit-profile\/([^/]+?)\/?$/,
				params: [{"name":"user","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 22 },
				endpoint: null
			},
			{
				id: "/(account-utils)/email-verification",
				pattern: /^\/email-verification\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/(account-utils)/email-verification/[token]",
				pattern: /^\/email-verification\/([^/]+?)\/?$/,
				params: [{"name":"token","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/(account-utils)/email-verification/_token_/_server.ts.js'))
			},
			{
				id: "/(make-user)/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 18 },
				endpoint: null
			},
			{
				id: "/(user-pages)/matches",
				pattern: /^\/matches\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 23 },
				endpoint: null
			},
			{
				id: "/(account-utils)/password-reset",
				pattern: /^\/password-reset\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/(account-utils)/password-reset/[token]",
				pattern: /^\/password-reset\/([^/]+?)\/?$/,
				params: [{"name":"token","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/(make-user)/signup",
				pattern: /^\/signup\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 19 },
				endpoint: null
			},
			{
				id: "/(brand-pages)/suggest/[deal]",
				pattern: /^\/suggest\/([^/]+?)\/?$/,
				params: [{"name":"deal","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/(user-pages)/user-profile/[user]",
				pattern: /^\/user-profile\/([^/]+?)\/?$/,
				params: [{"name":"user","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 24 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
