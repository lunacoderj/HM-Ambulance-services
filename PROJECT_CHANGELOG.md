# Project Changelog - HM Ambulance Service

## [2026-10-15] - Technical SEO & Google Search Console Alignment Overhaul

### Changes Made & Updates
- **Domain Canonicalization & Alignment**:
  - Aligned custom production domain to approved live URL `https://www.hmambulance.in` (matching Vercel production redirect).
  - Added missing primary canonical `<link rel="canonical" href="https://www.hmambulance.in/" />` in `index.html`.
  - Updated OpenGraph URL, Twitter URL, OpenGraph image, Twitter image, and Schema.org structured data to `https://www.hmambulance.in/`.
  - Created `src/siteSeo.ts` defining canonical domain and path constants.
- **Sitemap & Robots Fixes**:
  - Fixed `public/robots.txt` to point to `https://www.hmambulance.in/sitemap.xml`.
  - Overhauled `public/sitemap.xml`: removed invalid `#` hash fragment anchor URLs (`#services`, `#fleet`, `#coverage`, `#contact`) which violate Google XML sitemap protocol; updated loc to canonical root `https://www.hmambulance.in/`.
- **Soft-404 Crawler Protection**:
  - Added programmatic safeguard in `src/App.tsx` applying `noindex, nofollow` if the single-page application is requested with non-existent subpaths.

### Files Created
- `src/siteSeo.ts`
- `PROJECT_CHANGELOG.md`

### Files Modified
- `index.html`
- `public/robots.txt`
- `public/sitemap.xml`
- `src/App.tsx`
