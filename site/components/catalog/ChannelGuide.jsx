'use client';
import JSXStyle from 'styled-jsx/style';
import Link from 'next/link';

/* Strip light channel guide — taken from page 7 of the Strip Lighting
   Selection Guide brochure (22 Sep 2026). Lazar: "keep whatever the
   brochure says". Every profile, finish and dimension below is the
   brochure's; the links go to the matching Magento products ($30 / 3m). */
const MEDIA = 'https://greenhse.com/media/catalog/product';

export const CHANNELS = [
  {
    key: 'surface',
    name: '24V Surface',
    tag: 'General purpose',
    dims: '17.4 × 7.8 mm',
    finishes: [
      ['Silver with white cover', '24v-strip-surface-channel-s', '/s/i/silver_rectangle.png'],
      ['White with white cover', '24v-strip-surface-channel-w', '/s/u/surface_rectangle_white.png'],
      ['Black with white cover', '24v-strip-surface-channel-b', '/s/u/surface_channel_black_white_1.png'],
    ],
  },
  {
    key: 'wing',
    name: '24V Wing',
    tag: 'Flush / plaster installations',
    dims: '24.63 × 7.7 mm · 12.1 mm inner',
    finishes: [
      ['Silver with white cover', '24v-strip-wing-channel-s', '/r/e/recess_wing_silver.png'],
      ['White with white cover', '24v-strip-wing-channel-w', '/r/e/recess_wing_white_cover.png'],
      ['Black with white cover', '24v-strip-wing-channel-b', '/b/l/black_wing_white_cover.png'],
      ['Black with black cover', '24v-strip-wing-channel-bb', '/b/l/black_wing-black_cover.png'],
    ],
  },
  {
    key: 'mini',
    name: '24V Mini',
    tag: 'Compact installations',
    dims: '10 × 10 mm',
    finishes: [
      ['Silver with white cover', '24v-strip-thin-channel', '/m/i/mini_channel_silver.png'],
      ['Silver with black cover', '24v-strip-thin-channel-1', '/m/i/mini_silver_black_cover.png'],
    ],
  },
  {
    key: 'corner',
    name: '24V Corner',
    tag: '45° illumination',
    dims: '15 × 15 mm',
    finishes: [['Silver with white cover', '24v-strip-corner-channel-s-1', '/c/o/corner_90.png']],
  },
  {
    key: 'thin',
    name: '24V Thin',
    tag: 'Low-profile applications',
    dims: '17.69 × 5.3 mm',
    finishes: [['Silver with white cover', '24v-strip-thin-channel', '/t/h/thin_2.png']],
  },
  {
    key: 'minicorner',
    name: '24V Mini Corner',
    tag: 'Compact 45° corners',
    dims: '13 × 13 mm',
    finishes: [['Silver with white cover', '24v-strip-corner-channel-s-2', '/c/o/corner_90_2.png']],
  },
  {
    key: 'neon612',
    name: 'Neon Flex 6 × 12 mm',
    tag: 'Flexible architectural lighting',
    dims: '7 × 12 mm',
    finishes: [['Silver', '24v-strip-surface-channel-b-1', '/n/e/neonflex612_1.png']],
  },
  {
    key: 'neon1212',
    name: 'Neon Flex 12 × 12 mm',
    tag: 'Flexible architectural lighting',
    dims: '13 × 12 mm',
    finishes: [['Silver', '24v-strip-surface-channel-b-2', '/n/e/neon.png']],
  },
  {
    key: 'gyprock',
    name: 'Gyprock',
    tag: 'Speciality · plasters in flush',
    dims: '55.3 mm flange · 15 mm opening · 12.8 mm deep',
    finishes: [['Silver', '24v-strip-wing-channel-w-1', '/g/y/gyprock3.png']],
  },
  {
    key: 'gyprockcorner',
    name: 'Gyprock Corner',
    tag: 'Speciality · plasters in flush',
    dims: '30.4 mm flange · 13 mm opening · 12.8 mm deep',
    finishes: [['Silver', '24v-strip-wing-channel-w-2', '/g/y/gyprock_2.png']],
  },
];

const GUIDE = [
  ['Surface', 'General purpose'],
  ['Wing', 'Flush / plaster installations'],
  ['Mini', 'Compact installations'],
  ['Corner', '45° illumination'],
  ['Thin', 'Low-profile applications'],
  ['Neon', 'Flexible architectural lighting'],
];

export default function ChannelGuide() {
  return (
    <section id="channels" className="jsx-ch4nn3lgu1de chg">
      <div className="jsx-ch4nn3lgu1de container">
        <div className="jsx-ch4nn3lgu1de chg__head">
          <div className="jsx-ch4nn3lgu1de">
            <span className="jsx-ch4nn3lgu1de eyebrow">Strip light channels</span>
            <h2 className="jsx-ch4nn3lgu1de chg__title">Professional profiles. Cleaner installs. Premium finish.</h2>
            <p className="jsx-ch4nn3lgu1de chg__sub">
              Our range of 24V strip light channels is designed to deliver a sleek, professional finish for every
              application. Aluminium channels help dissipate heat to protect your LED strip and extend its lifespan —
              backed by an extended 5-year warranty when correctly installed by a licensed electrician.
            </p>
          </div>
          <ul className="jsx-ch4nn3lgu1de chg__quick" aria-label="Quick channel guide">
            {GUIDE.map(([n, t]) => (
              <li key={n} className="jsx-ch4nn3lgu1de">
                <strong className="jsx-ch4nn3lgu1de">{n}</strong>
                <span className="jsx-ch4nn3lgu1de">{t}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="jsx-ch4nn3lgu1de chg__grid">
          {CHANNELS.map((c) => (
            <article key={c.key} className="jsx-ch4nn3lgu1de chg__card">
              <Link href={`/product/${c.finishes[0][1]}`} className="jsx-ch4nn3lgu1de chg__img">
                <img
                  src={`${MEDIA}${c.finishes[0][2]}`}
                  alt={`${c.name} strip light channel`}
                  loading="lazy"
                  decoding="async"
                  width={300}
                  height={300}
                  className="jsx-ch4nn3lgu1de"
                />
              </Link>
              <div className="jsx-ch4nn3lgu1de chg__body">
                <span className="jsx-ch4nn3lgu1de chg__tag">{c.tag}</span>
                <h3 className="jsx-ch4nn3lgu1de">{c.name}</h3>
                <dl className="jsx-ch4nn3lgu1de chg__specs">
                  <div className="jsx-ch4nn3lgu1de">
                    <dt className="jsx-ch4nn3lgu1de">Length</dt>
                    <dd className="jsx-ch4nn3lgu1de">3 m</dd>
                  </div>
                  <div className="jsx-ch4nn3lgu1de">
                    <dt className="jsx-ch4nn3lgu1de">Dimensions</dt>
                    <dd className="jsx-ch4nn3lgu1de">{c.dims}</dd>
                  </div>
                </dl>
                <p className="jsx-ch4nn3lgu1de chg__fin-label">Available finishes</p>
                <ul className="jsx-ch4nn3lgu1de chg__fins">
                  {c.finishes.map(([label, slug]) => (
                    <li key={slug + label} className="jsx-ch4nn3lgu1de">
                      <Link href={`/product/${slug}`} className="jsx-ch4nn3lgu1de">
                        {label}
                        <span aria-hidden="true" className="jsx-ch4nn3lgu1de">
                          {' →'}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
        <p className="jsx-ch4nn3lgu1de chg__help">
          Need help? Our team is here to help you select the right profile for your project — call{' '}
          <a href="tel:0892972969" className="jsx-ch4nn3lgu1de">
            (08) 9297 2969
          </a>
          .
        </p>
      </div>
      <JSXStyle id="ch4nn3lgu1de">
        {
          '.chg.jsx-ch4nn3lgu1de{border-top:1px solid var(--line);padding:64px 0 80px}.chg__head.jsx-ch4nn3lgu1de{grid-template-columns:1.2fr 1fr;gap:40px;margin-bottom:34px;display:grid}.chg__title.jsx-ch4nn3lgu1de{letter-spacing:-.02em;margin:10px 0 12px;font-size:max(24px,min(3vw,34px));font-weight:600;line-height:1.16}.chg__sub.jsx-ch4nn3lgu1de{color:var(--ink-soft);max-width:52ch;margin:0;font-size:15px;line-height:1.65}.chg__quick.jsx-ch4nn3lgu1de{grid-template-columns:repeat(3,1fr);gap:10px;margin:0;padding:0;list-style:none;display:grid;align-self:end}.chg__quick.jsx-ch4nn3lgu1de li.jsx-ch4nn3lgu1de{background:var(--bg-card);border:1px solid var(--line);border-radius:var(--radius-sm);flex-direction:column;gap:3px;padding:12px 14px;display:flex}.chg__quick.jsx-ch4nn3lgu1de strong.jsx-ch4nn3lgu1de{font-size:13.5px;font-weight:600}.chg__quick.jsx-ch4nn3lgu1de span.jsx-ch4nn3lgu1de{color:var(--ink-muted);font-size:11.5px;line-height:1.4}.chg__grid.jsx-ch4nn3lgu1de{grid-template-columns:repeat(5,1fr);gap:20px;display:grid}.chg__card.jsx-ch4nn3lgu1de{background:var(--bg-card);border:1px solid var(--line);border-radius:var(--radius-sm);flex-direction:column;display:flex;overflow:hidden}.chg__img.jsx-ch4nn3lgu1de{background:#fff;display:block}.chg__img.jsx-ch4nn3lgu1de img.jsx-ch4nn3lgu1de{object-fit:contain;aspect-ratio:1;width:100%;height:auto;padding:14px;display:block}.chg__body.jsx-ch4nn3lgu1de{border-top:1px solid var(--line);flex:1;padding:14px 16px 16px}.chg__tag.jsx-ch4nn3lgu1de{font-family:var(--font-mono);letter-spacing:.14em;text-transform:uppercase;color:var(--green);font-size:10px;display:block}.chg__body.jsx-ch4nn3lgu1de h3.jsx-ch4nn3lgu1de{letter-spacing:-.01em;margin:6px 0 10px;font-size:16px;font-weight:600}.chg__specs.jsx-ch4nn3lgu1de{margin:0 0 12px;font-size:12.5px}.chg__specs.jsx-ch4nn3lgu1de div.jsx-ch4nn3lgu1de{justify-content:space-between;gap:10px;padding:5px 0;border-top:1px solid var(--line);display:flex}.chg__specs.jsx-ch4nn3lgu1de dt.jsx-ch4nn3lgu1de{color:var(--ink-muted);flex:none}.chg__specs.jsx-ch4nn3lgu1de dd.jsx-ch4nn3lgu1de{text-align:right;margin:0;font-weight:500}.chg__fin-label.jsx-ch4nn3lgu1de{font-family:var(--font-mono);letter-spacing:.12em;text-transform:uppercase;color:var(--ink-muted);margin:0 0 6px;font-size:10px}.chg__fins.jsx-ch4nn3lgu1de{flex-direction:column;gap:4px;margin:0;padding:0;list-style:none;display:flex}.chg__fins.jsx-ch4nn3lgu1de a.jsx-ch4nn3lgu1de{color:var(--ink);font-size:13px;text-decoration:none}.chg__fins.jsx-ch4nn3lgu1de a.jsx-ch4nn3lgu1de:hover{color:var(--green)}.chg__help.jsx-ch4nn3lgu1de{color:var(--ink-soft);margin:28px 0 0;font-size:14px}.chg__help.jsx-ch4nn3lgu1de a.jsx-ch4nn3lgu1de{color:var(--ink);font-weight:600}@media (width<=1180px){.chg__grid.jsx-ch4nn3lgu1de{grid-template-columns:repeat(3,1fr)}}@media (width<=860px){.chg__head.jsx-ch4nn3lgu1de{grid-template-columns:1fr;gap:24px}.chg__quick.jsx-ch4nn3lgu1de{grid-template-columns:repeat(2,1fr)}.chg__grid.jsx-ch4nn3lgu1de{grid-template-columns:repeat(2,1fr)}}@media (width<=560px){.chg__grid.jsx-ch4nn3lgu1de{grid-template-columns:1fr}.chg__quick.jsx-ch4nn3lgu1de{grid-template-columns:1fr 1fr}}'
        }
      </JSXStyle>
    </section>
  );
}
