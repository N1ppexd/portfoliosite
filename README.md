# Portfolio starter

A React portfolio starter built with Vite. Edit `src/App.jsx` and
`src/index.css` to make it your own, and change the title in `index.html`.

## Local development

Install Node.js 22 or newer, then run:

```sh
npm install
npm run dev
```

Open the local URL printed by Vite. Use `npm run lint` to check the code,
`npm run build` to create the production site in `dist`, and
`npm run preview` to preview that build locally.

## Deploy to GitHub Pages

1. Push this project to your GitHub repository's `main` branch.
2. In the repository's **Settings → Pages**, set the source to **GitHub Actions**.
3. The included workflow builds and deploys the site on every push to `main`.
   It can also be started manually from the Actions tab.

The site will be available at `https://<username>.github.io/<repository>/`,
or at `https://<username>.github.io/` for a repository named
`<username>.github.io`. Vite uses relative asset paths so the same build
works at either location. For assets placed in `public`, prefix their URLs
with `import.meta.env.BASE_URL` rather than using root-relative paths.