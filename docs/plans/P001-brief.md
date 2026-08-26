# Personal site for Alex — single-page engineer landing

A one-page site at `/` in the "Modular technical grid" direction: light Cloud White palette (#fafbfc background, #e8ecf1 borders, soft blue #3b82f6 accent), Inter for text, JetBrains Mono for small uppercase labels, thin borders, generous whitespace, restrained fade-up motion.

## Page sections (in order)

1. **Sticky nav** — monospace wordmark plus anchor links to Summary, Projects, Career, Writing.
2. **Hero** — 7/5 split: status label, one-line headline, and an icon row linking to GitHub, LinkedIn, Hashnode, Bluesky, Stack Overflow; portrait image on the right in a 4:5 rounded frame.
3. **01. Summary** — labelled left margin, bio and professional summary on the right.
4. **02. Projects** — 4 project cards (NotaFresca, Worrybook, Deskcal, MedClerk by default) with category label, name, one-line description, and repo/demo links.
5. **03. Experience** — 4 rows: The Access Group (Senior Software Engineer), Mattioli Woods, Isaac Newton Institute, University of Cambridge.
6. **04. Recent Posts** — 3 cards pulled live from your Hashnode blog: title, date, excerpt, linking to the post.
7. **Footer** — quiet row with contact/social links and a copyright line.

## Content

I'll seed all copy from your current site (cognophile.webflow.io) — bio tone, the four career entries, and the project list — as editable defaults in one content file so you can tweak names, descriptions, and links in a single place. Social links point at your real profiles (github.com/cognophile, linkedin.com/in/alexboggis, cognophile.bsky.social, Stack Overflow, cognophile.hashnode.dev).

## Blog posts

The 3 most recent posts come from Hashnode's public API for `cognophile.hashnode.dev`, fetched server-side and cached, so no API key is needed and the section stays current without redeploys. If the fetch fails, the section shows a quiet "read on Hashnode" fallback rather than an error.

## Portrait

I'll start with the cut-out portrait already on your Webflow site as a placeholder so the layout is real; you can drop in a replacement photo any time.

## Technical notes

- Route: rewrite `src/routes/index.tsx` as the single page; sections split into components under `src/components/`.
- Design tokens (colors, fonts, radius) added to `src/styles.css` as oklch equivalents of the chosen palette; no hardcoded colour utilities in components.
- Hashnode fetched via a `createServerFn` GraphQL call to `https://gql.hashnode.com` (publication `cognophile.hashnode.dev`, first 3 posts), loaded through the route loader with TanStack Query.
- Inter + JetBrains Mono loaded via `<link>` in `src/routes/__root.tsx`.
- SEO: page-specific title, description, og/twitter tags, single H1, alt text on the portrait, and Person JSON-LD.
- Fully responsive; the 4-up project grid collapses to 2-up then 1-up.
