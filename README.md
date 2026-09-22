# Greenhse — changes from 22 September

Three files. Each sits at the path it belongs at in the project — copy the
folders over the top and build. No packages, no config, no env vars.

```
site/lib/stripFinder.jsx
site/pages/categories/StripLightsPage.jsx
public/robots.txt                          (new file)
```

## What changed

**1. "Signage, curves or letters" removed from the strip light finder.**
The place question now has eight options. The three neon flex products are
still on the strip lights page and in the catalogue — the finder just no longer
leads to them. Every remaining answer path checked against the live feed:
all resolve to a real product.

**2. Specialised Display only shows display-grade strips.**
Magento category 137 has the 7.5W/m 4000K and 12W/m 2700K dotless COB assigned
to it, so they were showing under Specialised Display beside the 23W display
strip. The page now only lists display-grade and fresh-meat strips there.
Please also unassign those two products from category 137 in Magento so the
data is right at source.

**3. robots.txt.**
The one on greenhse.com points Google at
`https://demolights.greenhse.com/sitemap.xml`. This one points at
`https://greenhse.com/sitemap.xml`. The sitemap itself is generated at build
time from `SITE_URL` — make sure that is `https://greenhse.com` when building
for the live domain, or every entry in the sitemap says demolights.

Plus everything from the 21 September repo, which is still to go in:
https://github.com/LAZARZEC18/greenhse-changes-21sep
