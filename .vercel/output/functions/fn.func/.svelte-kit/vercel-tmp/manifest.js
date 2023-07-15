export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.6e36fbc2.js","app":"_app/immutable/entry/app.45770f8d.js","imports":["_app/immutable/entry/start.6e36fbc2.js","_app/immutable/chunks/index.6e2e1d93.js","_app/immutable/chunks/singletons.beceb609.js","_app/immutable/chunks/paths.38067e25.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/entry/app.45770f8d.js","_app/immutable/chunks/preload-helper.41c905a7.js","_app/immutable/chunks/index.6e2e1d93.js"],"stylesheets":[],"fonts":[]},
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
			() => import('../output/server/nodes/14.js')
		],
		routes: [
			{
				id: "/(main)",
				pattern: /^\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 7 },
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
				id: "/(admin)/approve-users",
				pattern: /^\/approve-users\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/(main)/edit-profile/[user]",
				pattern: /^\/edit-profile\/([^/]+?)\/?$/,
				params: [{"name":"user","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,3,], errors: [1,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/(main)/email-verification",
				pattern: /^\/email-verification\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/(main)/email-verification/[token]",
				pattern: /^\/email-verification\/([^/]+?)\/?$/,
				params: [{"name":"token","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: () => import('../output/server/entries/endpoints/(main)/email-verification/_token_/_server.ts.js')
			},
			{
				id: "/(email)/email",
				pattern: /^\/email\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/(email)/email/[email_id]",
				pattern: /^\/email\/([^/]+?)\/?$/,
				params: [{"name":"email_id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/(main)/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/(main)/password-reset",
				pattern: /^\/password-reset\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/(main)/password-reset/[token]",
				pattern: /^\/password-reset\/([^/]+?)\/?$/,
				params: [{"name":"token","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,3,], errors: [1,,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/(main)/signup",
				pattern: /^\/signup\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/(main)/user-profile/[user]",
				pattern: /^\/user-profile\/([^/]+?)\/?$/,
				params: [{"name":"user","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,3,], errors: [1,,], leaf: 14 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
