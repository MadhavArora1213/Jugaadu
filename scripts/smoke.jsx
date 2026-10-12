/* ── Route smoke test ───────────────────────────────────────────────────────
   Renders every route through react-dom/server so a broken import, an
   undefined component, a bad prop or invalid markup throws before it reaches
   a browser.

     npx vite build --ssr scripts/smoke.jsx --outDir dist-ssr --emptyOutDir
     node dist-ssr/smoke.js
   ─────────────────────────────────────────────────────────────────────── */
import { renderToString } from 'react-dom/server'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import App from '../src/App.jsx'
import { SiteNav, SiteFoot, RouteEffects } from '../src/site.jsx'
import Build from '../src/pages/Build.jsx'
import Modernize from '../src/pages/Modernize.jsx'
import Grow from '../src/pages/Grow.jsx'
import VentureBuild from '../src/pages/VentureBuild.jsx'
import ThinkWithYou from '../src/pages/ThinkWithYou.jsx'
import Work from '../src/pages/Work.jsx'
import About from '../src/pages/About.jsx'
import Insights from '../src/pages/Insights.jsx'
import Contact from '../src/pages/Contact.jsx'
import NotFound from '../src/pages/NotFound.jsx'

const ROUTES = [
  ['/', App],
  ['/build', Build],
  ['/modernize', Modernize],
  ['/grow', Grow],
  ['/venture-build', VentureBuild],
  ['/think-with-you', ThinkWithYou],
  ['/work', Work],
  ['/about', About],
  ['/insights', Insights],
  ['/contact', Contact],
  ['/definitely-not-a-page', NotFound],
]

const KNOWN = new Set([...ROUTES.map(([p]) => p), '/#pillars'])

/* the four things that are easy to get wrong and cheap to check */
function audit(html, path) {
  const out = []

  const h1 = html.match(/<h1[\s>]/g)
  if (!h1) out.push('no <h1>')
  else if (h1.length > 1) out.push(`${h1.length} <h1>s`)

  if (html.includes('undefined')) out.push('literal "undefined"')
  if (html.includes('[object Object]')) out.push('object leaked into text')
  if (/\bNaN\b/.test(html)) out.push('NaN in output')

  /* <a> must never nest inside <a> */
  let depth = 0
  let worst = 0
  const tags = html.match(/<a\b[^>]*>|<\/a>/g) || []
  for (const t of tags) {
    if (t === '</a>') depth -= 1
    else depth += 1
    if (depth > worst) worst = depth
    if (depth < 0) { out.push('unbalanced </a>'); break }
  }
  if (worst > 1) out.push(`nested <a> (depth ${worst})`)
  if (depth > 0) out.push(`${depth} unclosed <a>`)

  /* every internal href has to be a real destination */
  for (const [, href] of html.matchAll(/href="([^"]+)"/g)) {
    if (/^(https?:|mailto:|tel:)/.test(href)) continue
    const [pathname] = href.split('#')
    if (pathname && !KNOWN.has(pathname)) out.push(`dead link ${href}`)
  }

  /* the current route has to announce itself in the nav */
  if (path !== '/definitely-not-a-page' && !html.includes('aria-current')) {
    out.push('no aria-current in nav')
  }

  return out
}

let bad = 0
for (const [path, Comp] of ROUTES) {
  try {
    const html = renderToString(
      <MemoryRouter initialEntries={[path]}>
        <div className="page">
          <RouteEffects />
          <SiteNav />
          <Routes>
            <Route path="*" element={<Comp />} />
          </Routes>
          <SiteFoot />
        </div>
      </MemoryRouter>,
    )

    const problems = audit(html, path)
    if (problems.length) bad++
    console.log(
      `${problems.length ? 'WARN' : 'OK  '} ${path.padEnd(26)} ` +
      `${String(html.length).padStart(7)} chars  ${problems.join(', ')}`,
    )
  } catch (err) {
    bad++
    console.log(`FAIL ${path.padEnd(26)} ${err.message}`)
  }
}

console.log(bad ? `\n${bad} route(s) need attention` : '\nAll routes rendered clean')
