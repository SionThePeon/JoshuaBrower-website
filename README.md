# Joshua Brower website

A React website built with Vite and published through GitHub Pages.

## Develop locally

```sh
npm ci
npm run dev
```

Run `npm run build` to create the production site in `dist/`, or `npm run preview` to view that build locally.

## Publish

In the GitHub repository, open **Settings → Pages** and set **Build and deployment → Source** to **GitHub Actions**. Push to `main` to run `.github/workflows/deploy.yml`. The site should appear at `https://<username>.github.io/JoshuaBrower-website/`.

The Vite `base` setting in `vite.config.js` matches this repository name. Update it if the repository name or hosting path changes. Replace the placeholder About, Projects, and Contact copy in `src/App.jsx` before sharing the site.
