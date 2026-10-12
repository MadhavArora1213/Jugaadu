import { Link } from 'react-router-dom'
import { Page, SiteCTA } from '../pagekit.jsx'
import { Starburst, Checker } from '../stickers.jsx'

export default function NotFound() {
  return (
    <Page accent="var(--brand-terracotta)" ink="var(--brand-white)" current="">
      <Checker />
      <section className="lost">
        <Starburst label={'404'} size={132} color="#B5523C" ink="#FFFFFF" />
        <h1>That page went out for chai</h1>
        <p>
          The link is broken or the page moved. The five doors below still work — or start at the
          beginning.
        </p>
        <Link className="btn btn--accent btn--lg" to="/">Back to the homepage →</Link>
      </section>
      <SiteCTA />
    </Page>
  )
}
