import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import '../tokens.css'
import './index.css'
import App from './App.jsx'
import { SiteNav, SiteFoot, RouteEffects } from './site.jsx'
import Build from './pages/Build.jsx'
import Modernize from './pages/Modernize.jsx'
import Grow from './pages/Grow.jsx'
import VentureBuild from './pages/VentureBuild.jsx'
import ThinkWithYou from './pages/ThinkWithYou.jsx'
import Work from './pages/Work.jsx'
import About from './pages/About.jsx'
import Insights from './pages/Insights.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'
import './pages.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <div className="page">
        <RouteEffects />
        <SiteNav />

        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/build" element={<Build />} />
          <Route path="/modernize" element={<Modernize />} />
          <Route path="/grow" element={<Grow />} />
          <Route path="/venture-build" element={<VentureBuild />} />
          <Route path="/think-with-you" element={<ThinkWithYou />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <SiteFoot />
      </div>
    </BrowserRouter>
  </StrictMode>,
)
