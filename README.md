# Greenhse — changes from 22 September

Five files. Each sits at the path it belongs at in the project — copy the
folders over the top and build. No packages, no config, no env vars.

```
site/lib/stripFinder.jsx
site/pages/categories/StripLightsPage.jsx
site/components/catalog/ChannelGuide.jsx   (new file)
public/robots.txt                          (new file)
docs/Understanding_strip_lighting-22sep.pdf (new — the brochure, for reference)
```

## What changed

**1. Strip light finder brought in line with the new Strip Lighting Selection
Guide brochure** (`docs/Understanding_strip_lighting-22sep.pdf`). The brochure
is the source of truth for the range from now on.
- 240V strip: smart control is an optional extra — "add the RGB Gateway (colour)
  or Smart Dimming module (white)". The finder no longer refuses the smart
  path on 240V; it recommends the strip and notes the optional module.
- Display strip (23W/m High Colour SMD): IP20 or IP65, 165 lm/W, 4000K or 5000K.
- 7.5W/m Long Run COB: connectors carry up to 4m (was 3m).
- Crash course colour line: 2700K / 3000K / 4000K / 5500–5700K; CCT 2700–6000K.

**2. New "Strip light channels" section on the strip lights page** — the
brochure's page 7 as a section: 10 profiles (Surface, Wing, Mini, Corner, Thin,
Mini Corner, Neon Flex 6×12, Neon Flex 12×12, Gyprock, Gyprock Corner), their
finishes, dimensions, 3m length, and the 5-year-warranty-when-installed-by-a-
licensed-electrician line. Each finish links to its Magento product. Images
come from the Magento media folder, so nothing to upload.
Note: "24V Strip Mini Channel Silver/White" (SKU `24v-strip-Mini-channel`) has
the same URL key as the Thin channel in Magento (`24v-strip-thin-channel`), so
its link lands on the thin channel page. Giving it its own URL key in Magento
fixes that.

**3. "Signage, curves or letters" removed from the strip light finder.**
The place question now has eight options. The three neon flex products are
still on the strip lights page and in the catalogue — the finder just no longer
leads to them. Every remaining answer path checked against the live feed:
all resolve to a real product.

**4. Specialised Display only shows display-grade strips.**
Magento category 137 has the 7.5W/m 4000K and 12W/m 2700K dotless COB assigned
to it, so they were showing under Specialised Display beside the 23W display
strip. The page now only lists display-grade and fresh-meat strips there.
Please also unassign those two products from category 137 in Magento so the
data is right at source.

**5. robots.txt.**
The one on greenhse.com points Google at
`https://demolights.greenhse.com/sitemap.xml`. This one points at
`https://greenhse.com/sitemap.xml`. The sitemap itself is generated at build
time from `SITE_URL` — make sure that is `https://greenhse.com` when building
for the live domain, or every entry in the sitemap says demolights.

Plus everything from the 21 September repo, which is still to go in:
https://github.com/LAZARZEC18/greenhse-changes-21sep
