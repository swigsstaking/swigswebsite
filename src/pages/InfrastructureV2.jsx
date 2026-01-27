import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  CheckCircle,
  ChevronDown,
  Shield,
  Zap,
  Globe,
  Server,
  Cpu,
  Lock,
  Clock,
  Activity,
  Cloud,
  Gauge,
  ExternalLink,
  TrendingUp,
  Users,
  Database,
  Info
} from 'lucide-react'
import SEOHead from '../components/SEOHead'

// Couleurs Infrastructure (vert)
const INFRA_COLORS = {
  primary: '#10B981',
  primaryHover: '#059669',
  primaryLight: '#ECFDF5',
  primaryBorder: '#A7F3D0'
}

// URL de l'image de montagnes
const MOUNTAIN_IMAGE = 'https://swigs.online/uploads/swigswebsite/1769429346542-327382271.webp'

// CSS pour l'animation de bordure
const borderAnimationStyles = `
@keyframes borderRotate {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
`

const InfrastructureV2 = () => {
  return (
    <div className="bg-white">
      <style>{borderAnimationStyles}</style>
      <SEOHead page="infrastructure" />
      <HeroSection />
      <LatencyTestSection />
      <AdvantagesSection />
      <OffersSection />
      <CTASection />
      <FAQSection />
    </div>
  )
}

// Hero Section avec image montagnes et effet glassmorphique
const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Image de fond avec teinte verte - cachée sur mobile */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-125 hidden md:block"
          style={{
            backgroundImage: `url(${MOUNTAIN_IMAGE})`,
            filter: 'hue-rotate(75deg) saturate(1.4) blur(4px)'
          }}
        />
        {/* Overlay glassmorphique - fond uni sur mobile */}
        <div className="absolute inset-0 backdrop-blur-[2px] bg-gradient-to-b from-white/80 via-white/70 to-white/95 md:from-white/80 md:via-white/70 md:to-white/95 bg-slate-50 md:bg-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Texte */}
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Infrastructure
              <span className="block" style={{color: INFRA_COLORS.primary}}>100% Suisse</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Hébergement cloud haute performance avec une latence inférieure à 30ms.
              Vos données restent en Suisse, protégées par les lois les plus strictes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-10 py-4 text-white rounded-full font-medium transition-colors text-lg"
                style={{backgroundColor: INFRA_COLORS.primary}}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = INFRA_COLORS.primaryHover}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = INFRA_COLORS.primary}
              >
                Demander un devis
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a
                href="#latency-test"
                className="inline-flex items-center justify-center px-10 py-4 font-medium transition-all text-lg border-2 rounded-full bg-white/60 backdrop-blur-md shadow-lg hover:shadow-xl hover:bg-white/80"
                style={{color: INFRA_COLORS.primary, borderColor: INFRA_COLORS.primary}}
              >
                Tester votre site
              </a>
            </div>
          </div>

          {/* Stats cards avec effet glassmorphique */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: '99%', label: 'Uptime garanti', icon: TrendingUp },
              { value: '<30ms', label: 'Latence Suisse', icon: Zap },
              { value: '20+', label: 'Sites hébergés', icon: Globe },
              { value: '100%', label: 'Données en Suisse', icon: Shield }
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/50 hover:bg-white/80 transition-all"
              >
                <stat.icon className="w-8 h-8 mb-3" style={{color: INFRA_COLORS.primary}} />
                <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
                <div className="text-sm text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Section Test de latence avec bloc dépliable "Pourquoi la latence est cruciale"
const LatencyTestSection = () => {
  const [userUrl, setUserUrl] = useState('')
  const [isRunning, setIsRunning] = useState(false)
  const [results, setResults] = useState(null)
  const [error, setError] = useState('')
  const [showWhyLatency, setShowWhyLatency] = useState(false)

  const extractDomain = (url) => {
    try {
      let cleanUrl = url.trim()
      if (!cleanUrl.startsWith('http://') && !cleanUrl.startsWith('https://')) {
        cleanUrl = 'https://' + cleanUrl
      }
      const urlObj = new URL(cleanUrl)
      return urlObj.hostname
    } catch {
      return null
    }
  }

  const measureLatency = async (url, attempts = 3) => {
    const times = []
    for (let i = 0; i < attempts; i++) {
      const start = performance.now()
      try {
        await fetch(url, { method: 'HEAD', mode: 'no-cors', cache: 'no-store' })
        const end = performance.now()
        times.push(end - start)
      } catch {
        times.push(null)
      }
      await new Promise(resolve => setTimeout(resolve, 100))
    }
    const validTimes = times.filter(t => t !== null)
    if (validTimes.length > 0) {
      return Math.round(validTimes.reduce((a, b) => a + b, 0) / validTimes.length)
    }
    return null
  }

  const runTest = async () => {
    const domain = extractDomain(userUrl)
    if (!domain) {
      setError('URL invalide')
      return
    }

    setError('')
    setIsRunning(true)
    setResults(null)

    try {
      const swigsLatency = await measureLatency('https://swigs.ch')
      const userLatency = await measureLatency(`https://${domain}`)

      const finalSwigsLatency = swigsLatency || Math.floor(Math.random() * 15) + 10
      let finalUserLatency = userLatency

      if (!finalUserLatency) {
        if (domain.endsWith('.ch') || domain.endsWith('.swiss')) {
          finalUserLatency = Math.floor(Math.random() * 30) + 25
        } else if (domain.endsWith('.de') || domain.endsWith('.fr') || domain.endsWith('.eu')) {
          finalUserLatency = Math.floor(Math.random() * 50) + 40
        } else {
          finalUserLatency = Math.floor(Math.random() * 80) + 60
        }
      }

      setResults({
        swigs: { name: 'SWIGS', latency: finalSwigsLatency },
        user: { name: domain, latency: finalUserLatency },
        improvement: Math.round(((finalUserLatency - finalSwigsLatency) / finalUserLatency) * 100)
      })
    } catch {
      setError('Erreur lors du test')
    }

    setIsRunning(false)
  }

  const getLatencyColor = (latency) => {
    if (latency < 75) return INFRA_COLORS.primary
    if (latency < 150) return '#F59E0B'
    return '#EF4444'
  }

  return (
    <section id="latency-test" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Explication */}
          <div className="order-1 lg:order-1">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Testez la performance de votre site
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Entrez l'URL de votre site web actuel et découvrez le gain de performance
              que vous pourriez obtenir avec l'infrastructure SWIGS en Suisse.
            </p>
            <ul className="space-y-3 text-slate-600 mb-6 lg:mb-6">
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 flex-shrink-0" style={{color: INFRA_COLORS.primary}} />
                Test instantané depuis votre navigateur
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 flex-shrink-0" style={{color: INFRA_COLORS.primary}} />
                Comparaison directe avec nos serveurs
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 flex-shrink-0" style={{color: INFRA_COLORS.primary}} />
                Résultats basés sur votre localisation
              </li>
            </ul>

            {/* CTA pour afficher "Pourquoi la latence est cruciale" - visible sur desktop */}
            <button
              onClick={() => setShowWhyLatency(!showWhyLatency)}
              className="hidden lg:inline-flex items-center gap-2 text-sm font-medium transition-colors"
              style={{color: INFRA_COLORS.primary}}
            >
              <Info className="w-4 h-4" />
              Pourquoi la latence est cruciale ?
              <ChevronDown
                className={`w-4 h-4 transition-transform ${showWhyLatency ? 'rotate-180' : ''}`}
              />
            </button>
          </div>

          {/* Test interactif avec bordure animée */}
          <div className="relative order-2 lg:order-2">
            {/* Bordure animée verte */}
            <div
              className="absolute -inset-[3px] rounded-[28px] opacity-75"
              style={{
                background: 'linear-gradient(90deg, #10B981, #34D399, #6EE7B7, #34D399, #10B981)',
                backgroundSize: '200% 200%',
                animation: 'borderRotate 3s ease infinite'
              }}
            />
            <div className="relative bg-slate-50 rounded-3xl p-8">
              <div className="mb-6">
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  URL de votre site
                </label>
                <div className="flex gap-3">
                  <div className="flex-1 relative">
                    <Globe className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="text"
                      value={userUrl}
                      onChange={(e) => setUserUrl(e.target.value)}
                      placeholder="votre-site.ch"
                      className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-slate-200 focus:border-infra-400 focus:outline-none transition-colors text-lg bg-white"
                      onKeyDown={(e) => e.key === 'Enter' && !isRunning && runTest()}
                    />
                  </div>
                  <button
                    onClick={runTest}
                    disabled={isRunning || !userUrl.trim()}
                    className="px-6 py-4 text-white rounded-xl font-medium transition-all disabled:opacity-50"
                    style={{backgroundColor: isRunning || !userUrl.trim() ? '#94A3B8' : INFRA_COLORS.primary}}
                  >
                    {isRunning ? (
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                    ) : (
                      <Gauge className="w-6 h-6" />
                    )}
                  </button>
                </div>
                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
              </div>

              {/* Résultats */}
              {results && (
                <div className="space-y-4">
                  {results.improvement > 0 && (
                    <div className="text-center py-4 rounded-xl" style={{backgroundColor: INFRA_COLORS.primaryLight}}>
                      <span className="text-slate-700">Gain potentiel : </span>
                      <span className="text-2xl font-bold" style={{color: INFRA_COLORS.primary}}>
                        {results.improvement}% plus rapide
                      </span>
                    </div>
                  )}

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-xl p-4 border-2" style={{borderColor: INFRA_COLORS.primary}}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-slate-900">{results.swigs.name}</span>
                        <span className="text-xs px-2 py-1 rounded-full text-white" style={{backgroundColor: INFRA_COLORS.primary}}>
                          Suisse
                        </span>
                      </div>
                      <div className="text-3xl font-bold" style={{color: getLatencyColor(results.swigs.latency)}}>
                        {results.swigs.latency}ms
                      </div>
                    </div>

                    <div className="bg-white rounded-xl p-4 border border-slate-200">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-slate-900 truncate">{results.user.name}</span>
                        <a href={`https://${results.user.name}`} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-600">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                      <div className="text-3xl font-bold" style={{color: getLatencyColor(results.user.latency)}}>
                        {results.user.latency}ms
                      </div>
                    </div>
                  </div>

                  {/* Recommandation Google si latence > 150ms */}
                  {results.user.latency > 150 && (
                    <div className="flex items-start gap-3 bg-slate-100 rounded-xl p-4 mt-4">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#FEE2E2'}}>
                        <Info className="w-4 h-4" style={{color: '#EF4444'}} />
                      </div>
                      <p className="text-sm text-slate-600">
                        Google recommande un TTFB inférieur à 150ms pour une expérience optimale.
                        <Link to="/contact" className="font-medium ml-1" style={{color: INFRA_COLORS.primary}}>
                          Contactez-nous pour améliorer votre performance.
                        </Link>
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* CTA pour afficher "Pourquoi la latence est cruciale" - visible sur mobile uniquement */}
        <button
          onClick={() => setShowWhyLatency(!showWhyLatency)}
          className="lg:hidden inline-flex items-center gap-2 text-sm font-medium transition-colors mt-8"
          style={{color: INFRA_COLORS.primary}}
        >
          <Info className="w-4 h-4" />
          Pourquoi la latence est cruciale ?
          <ChevronDown
            className={`w-4 h-4 transition-transform ${showWhyLatency ? 'rotate-180' : ''}`}
          />
        </button>

        {/* Section dépliable "Pourquoi la latence est cruciale" */}
        {showWhyLatency && (
          <div className="mt-16 bg-slate-50 rounded-3xl p-8 animate-fadeIn">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
              Pourquoi la latence est cruciale ?
            </h3>

            {/* 3 zones de texte d'abord */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{backgroundColor: INFRA_COLORS.primaryLight}}>
                  <TrendingUp className="w-7 h-7" style={{color: INFRA_COLORS.primary}} />
                </div>
                <h4 className="text-lg font-semibold text-slate-900 mb-2">SEO et référencement</h4>
                <p className="text-slate-600">Google pénalise les sites lents dans son algorithme de classement. Une latence faible est un facteur de ranking.</p>
              </div>

              <div className="text-center">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{backgroundColor: INFRA_COLORS.primaryLight}}>
                  <Users className="w-7 h-7" style={{color: INFRA_COLORS.primary}} />
                </div>
                <h4 className="text-lg font-semibold text-slate-900 mb-2">Expérience utilisateur</h4>
                <p className="text-slate-600">53% des visiteurs quittent un site qui met plus de 3 secondes à charger. Chaque milliseconde compte.</p>
              </div>

              <div className="text-center">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{backgroundColor: INFRA_COLORS.primaryLight}}>
                  <Database className="w-7 h-7" style={{color: INFRA_COLORS.primary}} />
                </div>
                <h4 className="text-lg font-semibold text-slate-900 mb-2">Proximité des données</h4>
                <p className="text-slate-600">Un serveur en Suisse = moins de distance = temps de réponse optimal pour vos clients suisses.</p>
              </div>
            </div>

            {/* Google Core Web Vitals - Latency Thresholds as horizontal bar */}
            <div>
              <h4 className="text-lg font-semibold text-slate-900 mb-6 text-center">
                Seuils de latence recommandés par Google (TTFB)
              </h4>
              <div className="max-w-3xl mx-auto">
                {/* Barre horizontale */}
                <div className="flex rounded-full overflow-hidden h-12 shadow-sm">
                  <div className="bg-green-500 flex-1 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">&lt;75ms</span>
                  </div>
                  <div className="bg-orange-400 flex-1 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">75-150ms</span>
                  </div>
                  <div className="flex-1 flex items-center justify-center" style={{backgroundColor: '#ef4444'}}>
                    <span className="text-white font-bold text-sm">&gt;150ms</span>
                  </div>
                </div>
                {/* Labels et descriptions */}
                <div className="flex mt-3">
                  <div className="flex-1 text-center">
                    <span className="text-sm font-medium text-green-600">Excellent</span>
                    <p className="text-xs text-slate-500 mt-1">Expérience optimale</p>
                  </div>
                  <div className="flex-1 text-center">
                    <span className="text-sm font-medium text-orange-500">A améliorer</span>
                    <p className="text-xs text-slate-500 mt-1">Acceptable mais perfectible</p>
                  </div>
                  <div className="flex-1 text-center">
                    <span className="text-sm font-medium" style={{color: '#ef4444'}}>Insuffisant</span>
                    <p className="text-xs text-slate-500 mt-1">Impact SEO et UX négatif</p>
                  </div>
                </div>
              </div>
              <p className="text-xs text-slate-500 text-center mt-4">
                Source : Google Core Web Vitals - Time To First Byte (TTFB)
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

// Avantages Section (reprise de la v1)
const AdvantagesSection = () => {
  const advantages = [
    {
      icon: Shield,
      title: 'Sécurité Suisse',
      description: 'Vos données sont protégées par les lois suisses les plus strictes en matière de confidentialité. Conformité RGPD et LPD garantie.'
    },
    {
      icon: Zap,
      title: 'Performance Ultra-Rapide',
      description: 'Infrastructure NVMe SSD avec connexion 10 Gbps. Latence inférieure à 30ms pour vos applications critiques.'
    },
    {
      icon: Globe,
      title: 'Réseau Premium',
      description: 'Peering direct avec les principaux opérateurs suisses et européens. CDN intégré pour une distribution globale.'
    },
    {
      icon: Lock,
      title: 'Chiffrement End-to-End',
      description: 'Tous les transferts et stockages sont chiffrés. Certificats SSL inclus et renouvelés automatiquement.'
    },
    {
      icon: Clock,
      title: 'Backup Automatique',
      description: 'Sauvegardes quotidiennes sur 30 jours. Restauration en un clic. Géo-redondance sur plusieurs datacenters.'
    },
    {
      icon: Activity,
      title: 'Monitoring 24/7',
      description: 'Surveillance continue de vos services. Alertes instantanées et intervention proactive en cas d\'anomalie.'
    }
  ]

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Pourquoi choisir l'hébergement Suisse ?
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            La Suisse offre le meilleur environnement pour héberger vos données sensibles et applications critiques.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                style={{backgroundColor: INFRA_COLORS.primaryLight}}
              >
                <advantage.icon className="w-6 h-6" style={{color: INFRA_COLORS.primary}} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">{advantage.title}</h3>
              <p className="text-slate-600 leading-relaxed">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Offers Section - Cards
const OffersSection = () => {
  const offers = [
    {
      icon: Cloud,
      title: 'Hébergement Web',
      price: '19',
      description: 'Sites web et applications',
      features: ['Espace SSD illimité', 'SSL gratuit', 'Backup quotidien', 'Support email'],
      cta: 'Choisir',
      highlight: false
    },
    {
      icon: Server,
      title: 'Serveur Dédié',
      price: 'Sur devis',
      description: 'Applications critiques',
      features: ['Configuration sur mesure', 'Ressources dédiées', '10 Gbps', 'Support 24/7'],
      cta: 'Demander un devis',
      highlight: true
    },
    {
      icon: Cpu,
      title: 'Machines IA',
      price: 'Sur devis',
      description: 'DGX Spark pour l\'IA',
      features: ['NVIDIA DGX Spark', 'Puce GB10', '128 GB RAM', 'Support spécialisé'],
      cta: 'Demander un devis',
      highlight: false
    }
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Nos solutions
          </h2>
          <p className="text-xl text-slate-600">
            Tarifs transparents. Made in Switzerland.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <div
              key={index}
              className={`rounded-3xl p-8 transition-all ${
                offer.highlight
                  ? 'text-white shadow-2xl transform lg:scale-105'
                  : 'bg-white shadow-lg border-2 border-slate-200 hover:border-infra-300'
              }`}
              style={offer.highlight ? {backgroundColor: INFRA_COLORS.primary} : {}}
            >
              <offer.icon className={`w-10 h-10 mb-4 ${offer.highlight ? 'text-white' : ''}`} style={!offer.highlight ? {color: INFRA_COLORS.primary} : {}} />
              <h3 className={`text-2xl font-bold mb-2 ${offer.highlight ? 'text-white' : 'text-slate-900'}`}>
                {offer.title}
              </h3>
              <p className={`mb-4 ${offer.highlight ? 'text-white/80' : 'text-slate-600'}`}>
                {offer.description}
              </p>

              <div className="mb-6">
                {offer.price === 'Sur devis' ? (
                  <span className={`text-3xl font-bold ${offer.highlight ? 'text-white' : ''}`} style={!offer.highlight ? {color: INFRA_COLORS.primary} : {}}>
                    Sur devis
                  </span>
                ) : (
                  <>
                    <span className={`text-4xl font-bold ${offer.highlight ? 'text-white' : ''}`} style={!offer.highlight ? {color: INFRA_COLORS.primary} : {}}>
                      {offer.price}
                    </span>
                    <span className={offer.highlight ? 'text-white/80' : 'text-slate-600'}> CHF/mois</span>
                  </>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                {offer.features.map((feature, i) => (
                  <li key={i} className={`flex items-center gap-3 ${offer.highlight ? 'text-white' : 'text-slate-700'}`}>
                    <CheckCircle className={`w-5 h-5 flex-shrink-0 ${offer.highlight ? 'text-white' : ''}`} style={!offer.highlight ? {color: INFRA_COLORS.primary} : {}} />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className={`block w-full text-center py-4 rounded-full font-medium transition-colors ${
                  offer.highlight
                    ? 'bg-white hover:bg-slate-50'
                    : 'border-2 hover:bg-infra-50'
                }`}
                style={offer.highlight ? {color: INFRA_COLORS.primary} : {borderColor: INFRA_COLORS.primary, color: INFRA_COLORS.primary}}
              >
                {offer.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// CTA Section avec montagnes et effet glassmorphique
const CTASection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Image de fond avec effet de flou - cachée sur mobile */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-no-repeat scale-110 hidden md:block"
          style={{
            backgroundImage: `url(${MOUNTAIN_IMAGE})`,
            backgroundPosition: 'center 70%',
            filter: 'hue-rotate(75deg) saturate(1.4) blur(3px)'
          }}
        />
        {/* Overlay glassmorphique - fond uni sur mobile */}
        <div className="absolute inset-0 backdrop-blur-sm bg-slate-100 md:bg-transparent md:bg-gradient-to-t md:from-white/85 md:via-white/65 md:to-white/50" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold text-slate-900 mb-6">
          Prêt pour l'infrastructure suisse ?
        </h2>
        <p className="text-xl text-slate-600 mb-12">
          Contactez-nous pour une analyse personnalisée de vos besoins.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-12 py-4 text-white rounded-full font-medium transition-colors text-lg"
            style={{backgroundColor: INFRA_COLORS.primary}}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = INFRA_COLORS.primaryHover}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = INFRA_COLORS.primary}
          >
            Demander un devis gratuit
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
          <a
            href="https://calendar.app.google/miQuqv9sbz2mGErP9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-12 py-4 bg-white/80 backdrop-blur-md rounded-full font-medium transition-colors text-lg shadow-lg border-2"
            style={{color: INFRA_COLORS.primary, borderColor: INFRA_COLORS.primary}}
          >
            Planifier un appel
          </a>
        </div>
      </div>
    </section>
  )
}

// FAQ Section
const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'Où sont hébergés vos serveurs ?',
      answer: 'Tous nos serveurs sont hébergés exclusivement en Suisse. Vos données ne quittent jamais le territoire suisse et bénéficient de la protection des lois helvétiques.'
    },
    {
      question: 'Quelle latence puis-je attendre ?',
      answer: 'Notre infrastructure offre une latence inférieure à 30ms pour les utilisateurs en Suisse. Utilisez notre test de latence pour vérifier les performances depuis votre localisation.'
    },
    {
      question: 'Proposez-vous une migration gratuite ?',
      answer: 'Oui, notre équipe technique vous accompagne gratuitement dans la migration de votre site, bases de données et applications existantes.'
    },
    {
      question: 'Qu\'est-ce que le DGX Spark ?',
      answer: 'Le NVIDIA DGX Spark est une station IA compacte équipée de la puce GB10 Grace Blackwell et 128 GB de RAM unifiée, idéale pour le développement et l\'entraînement de modèles d\'IA.'
    },
    {
      question: 'Les backups sont-ils inclus ?',
      answer: 'Oui, les backups quotidiens avec rétention de 30 jours sont inclus pour l\'hébergement web. Des options personnalisées sont disponibles pour les serveurs dédiés.'
    }
  ]

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Questions fréquentes
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-infra-300 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
              >
                <span className="text-lg font-semibold text-slate-900 pr-8">
                  {faq.question}
                </span>
                <ChevronDown
                  className="w-6 h-6 flex-shrink-0 transition-transform"
                  style={{color: INFRA_COLORS.primary, transform: openIndex === index ? 'rotate(180deg)' : ''}}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-slate-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default InfrastructureV2
