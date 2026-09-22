# Agent Guidelines

## Project

Static marketing website for Crust Fund Bakery. See [PROPOSAL.md](PROPOSAL.md) for
the original brief and [PRD.md](PRD.md) for the current v1 scope and site map —
read `PRD.md` before making page-level changes; it defines what each page should
(and should not) do.

## Architecture

* Plain static HTML/CSS (+ minimal JS if needed). No build step, no bundler, no
  package.json — don't introduce one without asking.
* No backend, database, or payment/ordering integration in v1. "Order Online"
  and "Catering" pages must show a "Coming Soon" message, not real forms or
  checkout flows (see PRD §6/§9).
* Menu content on the **Menu** page is manually edited HTML, updated weekly —
  not CMS- or data-driven. Don't build a menu data pipeline for this.

## Conventions

* Keep pages mobile-first and lightweight — no professional photography yet,
  so layouts must hold up with placeholder/limited imagery.
* Every page shares consistent navigation across the site map in PRD §5
  (Home, Menu, Order Online, Catering, About, Visit Us, Instagram link).

## Build and Test

No build or test tooling exists yet. Open `index.html` directly in a browser to
preview changes.