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
- `public/sitemap.xml` (expanded from 1 bare URL to 10 rich URLs with Google image metadata)
- `src/App.tsx` (added pathname route synchronization and dynamic canonicals for services)

## [2026-10-15 Update] - Rich Sitemap Expansion & Deep Link Synchronization
- Expanded sitemap from single root URL to 10 full URLs covering all 9 ambulance service categories with `<image:image>` metadata for Google Search and Google Images indexation.
- Updated `src/App.tsx` with initial pathname route listener supporting `/services/:slug` and `/service/:id`, dynamic canonical URL updates, and targeted crawler safety (only assigning `noindex` on truly unrecognized 404 paths).

