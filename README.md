<!-- unlv-museum-banner-start -->
<a href="https://unlv-museum.infinite-syndicate.com/rest-rant-ssr" target="_blank" rel="noopener">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://unlv-museum.infinite-syndicate.com/github-banners/rest-rant-ssr?theme=dark&v=b4907b0d88">
    <img src="https://unlv-museum.infinite-syndicate.com/github-banners/rest-rant-ssr?theme=light&v=b4907b0d88" alt="Restaurant rating SSR app from Feb 2024 — original used Express + express-react-views + MongoDB, server-rendering JSX views. The museum preserves the JSX views and SSR character verbatim while reimplementing the data layer as Next.js Server Components + Drizzle/Neon." width="100%">
  </picture>
</a>

> This `museum-ready/original` branch is the host-compatible build of the [`original` branch](https://github.com/moefingers/UNLV-rest-rant/tree/original) — [audit the diff](https://github.com/moefingers/UNLV-rest-rant/compare/original...museum-ready%2Foriginal): hosting fixes only (dead URLs, Node LTS floor, pnpm), behavior byte-for-byte. [Open in museum →](https://unlv-museum.infinite-syndicate.com/rest-rant-ssr)
<!-- unlv-museum-banner-end -->

# Project REST-Rant

REST-Rant is an app where users can review restaurants!

## App Routes

| Method    | Path                      | Purpose 
| - | - | -
| `GET`     | `/`                       | Home
| `GET`     | `/places`                 | Index page listing all places
| `GET`     | `/places/new`             | New form for a place
| `POST`    | `/places`                 | Create a new place
| `GET`     | `/places/:id`             | Show one place in detail (Associated rants, new rant form, delete rant button)
| `GET`     | `/places/:id/edit`        | Edit form for a place
| `PUT`     | `/places/:id`             | Make changes to existing place
| `DELETE`  | `/places/:id`             | Delete a place
| `POST`    | `/places/:id/rant`        | Add rant to a place
| `DELETE`  | `/places/:id/rant/:rantId`| Delete a rant