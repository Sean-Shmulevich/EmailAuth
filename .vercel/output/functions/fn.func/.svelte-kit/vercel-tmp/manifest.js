export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.62647b4a.js","app":"_app/immutable/entry/app.795d598a.js","imports":["_app/immutable/entry/start.62647b4a.js","_app/immutable/chunks/index.69d1f051.js","_app/immutable/chunks/singletons.9e9d9c63.js","_app/immutable/chunks/paths.b4d18d31.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/entry/app.795d598a.js","_app/immutable/chunks/preload-helper.41c905a7.js","_app/immutable/chunks/index.69d1f051.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js'),
			() => import('../output/server/nodes/3.js'),
			() => import('../output/server/nodes/4.js'),
			() => import('../output/server/nodes/5.js'),
			() => import('../output/server/nodes/6.js'),
			() => import('../output/server/nodes/7.js'),
			() => import('../output/server/nodes/8.js'),
			() => import('../output/server/nodes/9.js'),
			() => import('../output/server/nodes/10.js'),
			() => import('../output/server/nodes/11.js'),
			() => import('../output/server/nodes/12.js'),
			() => import('../output/server/nodes/13.js'),
			() => import('../output/server/nodes/14.js'),
			() => import('../output/server/nodes/15.js'),
			() => import('../output/server/nodes/16.js')
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
				id: "/api/presign",
				pattern: /^\/api\/presign\/?$/,
				params: [],
				page: null,
				endpoint: () => import('../output/server/entries/endpoints/api/presign/_server.js')
			},
			{
				id: "/api/s3object/[id]",
				pattern: /^\/api\/s3object\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: () => import('../output/server/entries/endpoints/api/s3object/_id_/_server.js')
			},
			{
				id: "/(admin)/approve-brands",
				pattern: /^\/approve-brands\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/(admin)/approve-users",
				pattern: /^\/approve-users\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/(make-brand)/brand-login",
				pattern: /^\/brand-login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/(make-brand)/brand-signup",
				pattern: /^\/brand-signup\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/(user-pages)/edit-profile/[user]",
				pattern: /^\/edit-profile\/([^/]+?)\/?$/,
				params: [{"name":"user","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/(make-user)/email-verification",
				pattern: /^\/email-verification\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/(make-user)/email-verification/[token]",
				pattern: /^\/email-verification\/([^/]+?)\/?$/,
				params: [{"name":"token","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: () => import('../output/server/entries/endpoints/(make-user)/email-verification/_token_/_server.ts.js')
			},
			{
				id: "/(email)/email",
				pattern: /^\/email\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/(email)/email/[email_id]",
				pattern: /^\/email\/([^/]+?)\/?$/,
				params: [{"name":"email_id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/(make-user)/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/(make-user)/password-reset",
				pattern: /^\/password-reset\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/(make-user)/password-reset/[token]",
				pattern: /^\/password-reset\/([^/]+?)\/?$/,
				params: [{"name":"token","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/(make-user)/signup",
				pattern: /^\/signup\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/(user-pages)/user-profile/[user]",
				pattern: /^\/user-profile\/([^/]+?)\/?$/,
				params: [{"name":"user","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 16 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
