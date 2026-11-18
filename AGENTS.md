# Agent Guidelines

## Project

Static marketing website for Crust Fund Bakery. See [PROPOSAL.md](PROPOSAL.md) for
the original brief and [PRD.md](PRD.md) for the current v1 scope and site map —
read `PRD.md` before making page-level changes; it defines what each page should
(and should not) do.

## Architecture

* Plain static HTML/CSS/JS: pages in the root folder, styles in `css/`, scripts
  in `js/`. No build step, no bundler, no package.json — don't
  introduce one without asking.
* v2 adds pre-orders (PRD §11): Supabase for accounts and the `bakery_preorders`
  table, called from the browser in `js/order.js` through `js/supabase.js`, with the publishable key; Row Level
  Security decides who sees which rows. Never put a secret key in a page.
* The one server-side piece is `api/suggest.js`, a Vercel function that calls the
  model. Its key comes from Vercel's environment variables, never from the repo.
* "Catering" still shows "Coming Soon". No payments.
* Menu content on the **Menu** page is manually edited HTML, updated weekly. The
  same items are listed in `order-online.html` and `api/suggest.js`; change all
  three together.

## Conventions

* Keep pages mobile-first and lightweight — no professional photography yet,
  so layouts must hold up with placeholder/limited imagery.
* Every page shares consistent navigation across the site map in PRD §5
  (Home, Menu, Order Online, Catering, About, Visit Us, Instagram link).

## Build and Test

No build tooling. Static pages preview in a browser, but sign-in and Help me
choose need the deployed site: test on the vercel.app link, with two accounts, and
check that each sees only its own pre-orders.