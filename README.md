# Joshua Brower website

A React website built with Vite and published through GitHub Pages.

## Develop locally

```sh
npm ci
npm run dev
```

Run `npm run build` to create the production site in `dist/`, or `npm run preview` to view that build locally.

## Publish

In the GitHub repository, open **Settings → Pages** and set **Build and deployment → Source** to **GitHub Actions**. Set the custom domain to `joshuabrowerdev.com`. Push to `main` to run `.github/workflows/deploy.yml`.

The Vite `base` setting in `vite.config.js` is `/` for the custom domain. Update it if the hosting path changes.
