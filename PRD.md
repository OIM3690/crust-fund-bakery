# Product Requirements Document

## Crust Fund Bakery — Website v1 (Static Site)

### 1. Summary

Crust Fund Bakery needs a simple, modern static website to drive foot traffic from nearby students and office workers and to set up the future addition of online ordering and catering requests. **V1 ships as static pages only** — no backend, database, payment processing, or order logic. Online ordering and catering are stubbed with a "Coming Soon" message so the pages and navigation exist ahead of the real integration.

### 2. Goals

* Give visitors the information they need (what the bakery is, what's on the menu, where/when to visit) in under a few seconds.
* Make next steps obvious via clear calls-to-action, even though "Order Online" and "Catering" aren't functional yet.
* Ship something real and deployable now; leave clean seams for backend/ordering work later.

### 3. Non-Goals (v1)

* No online payment or checkout.
* No catering request form submission/backend.
* No CMS or admin panel for menu updates — menu content is hand-edited in the HTML each week.
* No customer accounts, promotions, or dynamic content.

### 4. Target Audience

* **College students** — quick breakfast/coffee before or between classes.
* **Office workers** — convenient breakfast on the way to work.
* **Event customers** — interested in catering (informational only in v1).

### 5. Site Map & Page Requirements

| Page | v1 Behavior |
|---|---|
| **Home** | Intro to the bakery, hero section, prominent CTAs: "View Menu", "Order Online" (Coming Soon), "Visit Us". |
| **Menu** | Static, manually-updated weekly menu (see placeholder content below). No backend — edited directly in HTML/markup each week. |
| **Order Online** | "Coming Soon" message. No ordering or payment functionality. |
| **Catering** | Describes catering service; "Coming Soon" message in place of a request form/ordering flow. |
| **About** | Basic bakery background/story. |
| **Visit Us** | Address, hours, map/directions info. |
| **Instagram** | Link out to the bakery's Instagram (where current menu is also posted). |

### 6. Placeholder Menu Content (v1)

To be manually replaced with real weekly content; used as placeholder for now:

**This Week's Menu**

| Item | Price |
|---|---|
| Classic Butter Croissant | $3.50 |
| Cinnamon Roll | $4.00 |
| Sourdough Loaf | $7.00 |
| Blueberry Muffin | $3.25 |
| Everything Bagel w/ Cream Cheese | $4.50 |
| Drip Coffee | $2.50 |
| Cold Brew | $3.75 |

### 7. Design Direction

* Modern, welcoming, uncluttered — easy to scan on mobile.
* Must look good with limited/placeholder imagery (no professional photography yet).
* Use existing logo; leave room to swap in a higher-quality version later.
* Mobile-first, since students/workers will primarily check the site on their phones.

### 8. Technical Constraints (v1)

* Static HTML/CSS (+ minimal JS if needed for nav/interactions only).
* No backend server, database, or third-party payment/ordering integration in this phase.
* Menu updates are a manual content edit, not a dynamic/CMS-driven process.

### 9. Success Criteria

* All pages listed in the site map exist, are linked from consistent navigation, and are mobile-responsive.
* A first-time visitor can find the menu, hours/location, and Instagram link within one click from Home.
* "Order Online" and "Catering" clearly communicate they're coming soon rather than appearing broken.

### 10. Future Considerations (out of scope for v1)

* Real online ordering + payment processing (e.g., Square, Stripe, Toast).
* Catering request form with backend handling (email/CRM integration).
* CMS or admin tool for non-technical weekly menu updates.
* Customer accounts, promotions, loyalty features.
