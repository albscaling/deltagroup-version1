# deltagroup-version1

## Deployment notes

This project is built with TanStack Start and is configured to run as a server-rendered app (Cloudflare Workers / Wrangler) in development and for SSR builds. The project includes `wrangler.jsonc` and a Cloudflare-compatible server entrypoint (`src/server.ts`).

If you deployed the repository to Vercel and see a 404 for all routes, that's expected when Vercel is serving the site as a static host without SSR support for the Cloudflare server entry. There are two ways to fix it depending on your goal:

- Static site on Vercel (quick): build the app as a static SPA and let Vercel serve `index.html` for all routes. This repo includes a `vercel.json` rewrite that routes everything to `/index.html`.

	1. In the Vercel project settings, set the build command to:

		 npm run build

	2. Set the output directory to `dist` (Vite default).

	3. Ensure `vercel.json` is present in the repository (already added) so Vercel rewrites all routes to the SPA entry and avoids 404s.

- Cloudflare Workers / SSR (recommended for full SSR features): deploy with Wrangler / Cloudflare Workers. This project is already scaffolded for that (see `wrangler.jsonc` and `vite` config). Follow Cloudflare/Wrangler docs to publish.

Note: If you need true server-side rendering on Vercel you will need to adapt the app to Vercel Serverless Functions (or an Edge Function) and change the build/server entry. That is a non-trivial change and not covered here.
