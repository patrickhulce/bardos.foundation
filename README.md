# Bardos Foundation

Website for the [Bardos Foundation](https://bardosfoundation.org), a nonprofit that supports refugees and first-generation immigrants through educational grants and assistance.

## Development

This is a static [Astro](https://astro.build) site deployed with Vercel.

```sh
npm install
npm run dev
```

The local development server runs at `http://localhost:4321`.

## Validation

Run the production build and domain-migration checks before deploying:

```sh
npm run verify
```

The verification checks generated HTML, `robots.txt`, and the sitemap for canonical `bardosfoundation.org` URLs and rejects references to the retired `bardos.foundation` domain.

## Domain migration

The canonical site is `https://bardosfoundation.org`. Hosting configuration must permanently redirect requests while preserving paths and query strings:

```text
https://bardos.foundation/*       -> https://bardosfoundation.org/*
https://www.bardos.foundation/*   -> https://bardosfoundation.org/*
https://www.bardosfoundation.org/* -> https://bardosfoundation.org/*
```

DNS, certificates, host-based redirects, and email aliases are managed outside this repository in Cloudflare, Vercel, and Google Workspace.

## Repository

[github.com/patrickhulce/bardos.foundation](https://github.com/patrickhulce/bardos.foundation)

After the GitHub repository is renamed to `bardosfoundation.org`, update existing local clones:

```sh
git remote set-url origin git@github.com:patrickhulce/bardosfoundation.org.git
```
