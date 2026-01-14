import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Layout from './components/Layout'

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const ERPV2 = lazy(() => import('./pages/ERP-V2'))
const Modules = lazy(() => import('./pages/Modules'))
const ModuleLocation = lazy(() => import('./pages/ModuleLocation'))
const ModuleFidelite = lazy(() => import('./pages/ModuleFidelite'))
const Contact = lazy(() => import('./pages/Contact'))

// Loading component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
  </div>
)

function App() {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/swigs-sa" element={<About />} />
            <Route path="/erp" element={<ERPV2 />} />
            <Route path="/modules" element={<Modules />} />
            <Route path="/modules/location" element={<ModuleLocation />} />
            <Route path="/modules/fidelite" element={<ModuleFidelite />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  )
}

export default App
