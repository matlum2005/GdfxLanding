# TODO - Responsive & Premium UI Upgrade (Next.js 15 + TS + Tailwind)

## Step 1 — Audit + plan confirmation
- [x] Read key files (layout, globals, navbar, hero, about, services, why choose, contact, footer, home page, contact page)
- [x] Identify fixed px/min-h/hard sizing risks and typography inconsistency
- [x] Confirm edit plan with user

## Step 2 — Implement typography upgrades
- [ ] Update `src/app/globals.css` (font defaults, readable typography scale helpers if needed)
- [ ] Ensure all affected components use responsive `text-*` with heading/body hierarchy


## Step 3 — Responsiveness fixes (no feature/routing changes)
- [ ] Navbar: improve mobile dropdown panel sizing/overflow + accessibility attributes
- [ ] Hero: remove problematic fixed min-heights and tighten responsive spacing
- [ ] About/Services/WhyChooseUs/ContactSection/Footer: replace fixed heights & pixel sizes; ensure grids/cards don’t overflow
- [ ] Contact page: adjust heading + form spacing to avoid small-screen overflow

## Step 4 — Cards & forms consistency
- [ ] Ensure card padding/typography scales responsively
- [ ] Improve form focus/labels/aria where missing; remove fixed input heights

## Step 5 — Performance + CLS safety
- [ ] Background containers stability; ensure no layout shifts from fixed sizes
- [ ] Review next/image usage where present (keep existing assets/routes)

## Step 6 — Validate build
- [ ] Run `npm run build` and fix any TS/ESLint hydration issues

