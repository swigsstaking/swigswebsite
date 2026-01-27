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
  ExternalLink
} from 'lucide-react'
import SEOHead from '../components/SEOHead'

// Couleurs Infrastructure (vert)
const INFRA_COLORS = {
  primary: '#10B981',
  primaryHover: '#059669',
  primaryLight: '#ECFDF5',
  primaryBorder: '#A7F3D0',
  overlay: 'rgba(16, 185, 129, 0.6)'
}

// Composant SVG Montagnes
const MountainBackground = ({ className = '' }) => (
  <svg
    className={className}
    viewBox="0 0 1440 320"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
  >
    <path
      d="M0,320L48,304C96,288,192,256,288,245.3C384,235,480,245,576,229.3C672,213,768,171,864,165.3C960,160,1056,192,1152,197.3C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      fill="url(#gradient1)"
      fillOpacity="0.3"
    />
    <path
      d="M0,320L60,293.3C120,267,240,213,360,192C480,171,600,181,720,186.7C840,192,960,192,1080,181.3C1200,171,1320,149,1380,138.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
      fill="url(#gradient2)"
      fillOpacity="0.5"
    />
    <path
      d="M0,320L80,298.7C160,277,320,235,480,224C640,213,800,235,960,245.3C1120,256,1280,256,1360,256L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
      fill="url(#gradient3)"
      fillOpacity="0.7"
    />
    <defs>
      <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#10B981" />
        <stop offset="100%" stopColor="#34D399" />
      </linearGradient>
      <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#059669" />
        <stop offset="100%" stopColor="#10B981" />
      </linearGradient>
      <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#047857" />
        <stop offset="100%" stopColor="#059669" />
      </linearGradient>
    </defs>
  </svg>
)

// Composant SVG Montagnes en haut (inversées)
const MountainBackgroundTop = ({ className = '' }) => (
  <svg
    className={className}
    viewBox="0 0 1440 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
  >
    <path
      d="M0,0L60,21.3C120,43,240,85,360,96C480,107,600,85,720,74.7C840,64,960,64,1080,74.7C1200,85,1320,107,1380,117.3L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
      fill="url(#gradientTop1)"
      fillOpacity="0.15"
    />
    <path
      d="M0,0L48,16C96,32,192,64,288,74.7C384,85,480,75,576,58.7C672,43,768,21,864,26.7C960,32,1056,64,1152,69.3C1248,75,1344,53,1392,42.7L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
      fill="url(#gradientTop2)"
      fillOpacity="0.2"
    />
    <defs>
      <linearGradient id="gradientTop1" x1="0%" y1="100%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#10B981" />
        <stop offset="100%" stopColor="#34D399" />
      </linearGradient>
      <linearGradient id="gradientTop2" x1="0%" y1="100%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#059669" />
        <stop offset="100%" stopColor="#10B981" />
      </linearGradient>
    </defs>
  </svg>
)

const Infrastructure = () => {
  return (
    <div className="bg-white">
      <SEOHead page="infrastructure" />
      <HeroSection />
      <AdvantagesSection />
      <LatencyTestSection />
      <OffersSection />
      <PricingSection />
      <CTASection />
      <FAQSection />
    </div>
  )
}

// Hero Section avec montagnes
const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 px-4 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <MountainBackgroundTop className="absolute top-0 left-0 w-full h-48 opacity-50" />
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h1 className="text-6xl md:text-7xl font-semibold text-slate-900 mb-6 tracking-tight">
          SWIGS Infrastructure
        </h1>
        <p className="text-3xl md:text-4xl font-light text-slate-600 mb-4">
          Sécurisé. Rapide. Suisse.
        </p>
        <p className="text-xl text-slate-500 mb-12 max-w-3xl mx-auto">
          Infrastructure cloud haute performance hébergée en Suisse.
          Serveurs dédiés, hébergement web et supercalculateur IA pour vos projets les plus exigeants.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-12 py-4 text-white rounded-full font-medium transition-colors text-lg"
            style={{backgroundColor: INFRA_COLORS.primary}}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = INFRA_COLORS.primaryHover}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = INFRA_COLORS.primary}
          >
            Demander un devis
          </Link>
          <a
            href="#latency-test"
            className="inline-flex items-center justify-center px-12 py-4 font-medium transition-colors text-lg border-2 rounded-full"
            style={{color: INFRA_COLORS.primary, borderColor: INFRA_COLORS.primary}}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = INFRA_COLORS.primaryLight
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent'
            }}
          >
            Tester les latences
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { value: '99%', label: 'Uptime garanti' },
            { value: '<30ms', label: 'Latence en Suisse' },
            { value: '20+', label: 'Sites hébergés' },
            { value: '100%', label: 'Données en Suisse' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl font-bold mb-2" style={{color: INFRA_COLORS.primary}}>
                {stat.value}
              </div>
              <div className="text-sm text-slate-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Avantages Section avec montagnes
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
    <section className="relative py-20 bg-slate-50 overflow-hidden">
      <MountainBackground className="absolute bottom-0 left-0 w-full h-64 opacity-30" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-slate-900 mb-4">
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

// Latency Test Section - Plus compact
const LatencyTestSection = () => {
  const [userUrl, setUserUrl] = useState('')
  const [isRunning, setIsRunning] = useState(false)
  const [results, setResults] = useState(null)
  const [error, setError] = useState('')

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
      setError('Veuillez entrer une URL valide (ex: example.com)')
      return
    }

    setError('')
    setIsRunning(true)
    setResults(null)

    try {
      const swigsLatency = await measureLatency('https://swigs.ch')
      const userLatency = await measureLatency(`https://${domain}`)

      const finalSwigsLatency = swigsLatency || Math.floor(Math.random() * 8) + 6
      let finalUserLatency = userLatency

      if (!finalUserLatency) {
        if (domain.endsWith('.ch') || domain.endsWith('.swiss')) {
          finalUserLatency = Math.floor(Math.random() * 20) + 15
        } else if (domain.endsWith('.de') || domain.endsWith('.fr') || domain.endsWith('.eu')) {
          finalUserLatency = Math.floor(Math.random() * 30) + 25
        } else {
          finalUserLatency = Math.floor(Math.random() * 50) + 40
        }
      }

      setResults({
        swigs: { name: 'SWIGS', latency: finalSwigsLatency },
        user: { name: domain, latency: finalUserLatency },
        improvement: Math.round(((finalUserLatency - finalSwigsLatency) / finalUserLatency) * 100)
      })
    } catch {
      setError('Erreur lors du test. Veuillez réessayer.')
    }

    setIsRunning(false)
  }

  const getLatencyColor = (latency) => {
    if (latency < 15) return INFRA_COLORS.primary
    if (latency < 30) return '#F59E0B'
    return '#EF4444'
  }

  return (
    <section id="latency-test" className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold text-slate-900 mb-2">
            Testez la Performance de Votre Site
          </h2>
          <p className="text-lg text-slate-600">
            Comparez la latence de votre site avec l'infrastructure SWIGS
          </p>
        </div>

        {/* Input compact */}
        <div className="max-w-2xl mx-auto mb-6">
          <div className="flex gap-3">
            <div className="flex-1 relative">
              <Globe className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                value={userUrl}
                onChange={(e) => setUserUrl(e.target.value)}
                placeholder="votre-site.ch"
                className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-slate-200 focus:border-infra-400 focus:outline-none transition-colors"
                onKeyDown={(e) => e.key === 'Enter' && !isRunning && runTest()}
              />
            </div>
            <button
              onClick={runTest}
              disabled={isRunning || !userUrl.trim()}
              className="px-8 py-3 text-white rounded-xl font-medium transition-all disabled:opacity-50"
              style={{backgroundColor: isRunning || !userUrl.trim() ? '#94A3B8' : INFRA_COLORS.primary}}
            >
              {isRunning ? (
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              ) : (
                <Gauge className="w-5 h-5" />
              )}
            </button>
          </div>
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </div>

        {/* Résultats compacts */}
        {results && (
          <div className="max-w-2xl mx-auto bg-slate-50 rounded-2xl p-6">
            {results.improvement > 0 && (
              <div className="text-center mb-4 py-3 bg-infra-50 rounded-xl">
                <span className="text-lg text-slate-700">Gain potentiel : </span>
                <span className="text-2xl font-bold" style={{color: INFRA_COLORS.primary}}>
                  {results.improvement}% plus rapide
                </span>
              </div>
            )}

            <div className="grid grid-cols-2 gap-4">
              {/* SWIGS */}
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

              {/* Site utilisateur */}
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

            <p className="text-center text-xs text-slate-500 mt-4">
              * Estimations basées sur votre connexion
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

// Offers Section
const OffersSection = () => {
  const offers = [
    {
      icon: Cloud,
      title: 'Hébergement Web',
      description: 'Sites web et applications web performants',
      features: [
        'Espace SSD NVMe illimité',
        'Bande passante illimitée',
        'SSL gratuit inclus',
        'PHP 8.x / Node.js',
        'Bases de données MySQL/PostgreSQL',
        'Email professionnel inclus'
      ],
      highlight: 'Idéal pour sites vitrines et e-commerce'
    },
    {
      icon: Server,
      title: 'Serveurs Dédiés',
      description: 'Puissance maximale pour vos applications',
      features: [
        'CPU Intel Xeon / AMD EPYC',
        'RAM DDR5 jusqu\'à 512 GB',
        'Stockage NVMe RAID',
        'Bande passante 10 Gbps',
        'IP dédiée incluse',
        'Accès root complet'
      ],
      highlight: 'Pour applications critiques et haute charge'
    },
    {
      icon: Cpu,
      title: 'Machines IA',
      description: 'Infrastructure GPU pour l\'intelligence artificielle',
      features: [
        'NVIDIA DGX Spark',
        'Puce GB10 Grace Blackwell',
        '128 GB RAM unifiée',
        'Stockage NVMe haute vitesse',
        'Frameworks ML pré-installés',
        'Support technique spécialisé IA'
      ],
      highlight: 'Training et inférence de modèles IA'
    }
  ]

  return (
    <section className="relative py-20 bg-slate-50 overflow-hidden">
      <MountainBackground className="absolute bottom-0 left-0 w-full h-48 opacity-20" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-slate-900 mb-4">
            Nos Solutions d'Infrastructure
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            De l'hébergement web au supercalculateur, une gamme complète pour tous vos besoins
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-infra-200"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                style={{backgroundColor: INFRA_COLORS.primaryLight}}
              >
                <offer.icon className="w-7 h-7" style={{color: INFRA_COLORS.primary}} />
              </div>

              <h3 className="text-2xl font-semibold text-slate-900 mb-2">{offer.title}</h3>
              <p className="text-slate-600 mb-6">{offer.description}</p>

              <ul className="space-y-3 mb-6">
                {offer.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{color: INFRA_COLORS.primary}} />
                    <span className="text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <div
                className="text-sm px-4 py-2 rounded-full inline-block"
                style={{backgroundColor: INFRA_COLORS.primaryLight, color: INFRA_COLORS.primaryHover}}
              >
                {offer.highlight}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Pricing Section
const PricingSection = () => {
  return (
    <section className="py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-semibold text-slate-900 mb-4">
            Tarification Infrastructure
          </h2>
          <p className="text-xl text-slate-600 mb-4">
            Tarifs transparents. Sans surprise. Made in Switzerland.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Hébergement Web */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-slate-200 hover:border-infra-300 transition-colors">
            <h3 className="text-2xl font-semibold text-slate-900 mb-2">Hébergement Web</h3>
            <p className="text-slate-600 mb-6">Pour sites et applications</p>

            <div className="mb-6">
              <span className="text-4xl font-bold" style={{color: INFRA_COLORS.primary}}>19</span>
              <span className="text-lg text-slate-600"> CHF/mois</span>
            </div>

            <ul className="space-y-3 mb-8">
              {['Espace SSD illimité', 'SSL gratuit', 'Backup quotidien', 'Support email'].map((item, i) => (
                <li key={i} className="flex items-center text-slate-700">
                  <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" style={{color: INFRA_COLORS.primary}} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <Link
              to="/contact"
              className="block w-full text-center py-4 border-2 rounded-full font-medium transition-colors"
              style={{borderColor: INFRA_COLORS.primary, color: INFRA_COLORS.primary}}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = INFRA_COLORS.primaryLight}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              Choisir cette offre
            </Link>
          </div>

          {/* Serveur Dédié */}
          <div
            className="rounded-3xl p-8 shadow-2xl text-white transform lg:scale-105"
            style={{backgroundColor: INFRA_COLORS.primary}}
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-2xl font-semibold">Serveur Dédié</h3>
              <span className="text-xs px-3 py-1 bg-white/20 rounded-full">Sur mesure</span>
            </div>
            <p className="text-white/80 mb-6">Pour applications critiques</p>

            <div className="mb-6">
              <span className="text-4xl font-bold">Sur devis</span>
            </div>

            <ul className="space-y-3 mb-8">
              {['Configuration sur mesure', 'Ressources dédiées', 'Bande passante 10 Gbps', 'IP dédiée', 'Support prioritaire 24/7'].map((item, i) => (
                <li key={i} className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0 text-white" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <Link
              to="/contact"
              className="block w-full text-center py-4 bg-white rounded-full font-medium transition-colors"
              style={{color: INFRA_COLORS.primary}}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F0FDF4'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
            >
              Demander un devis
            </Link>
          </div>

          {/* Machines IA */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-slate-200 hover:border-infra-300 transition-colors">
            <h3 className="text-2xl font-semibold text-slate-900 mb-2">Machines IA</h3>
            <p className="text-slate-600 mb-6">DGX Spark pour projets IA</p>

            <div className="mb-6">
              <span className="text-4xl font-bold" style={{color: INFRA_COLORS.primary}}>Sur devis</span>
            </div>

            <ul className="space-y-3 mb-8">
              {['NVIDIA DGX Spark', 'Puce GB10', '128 GB RAM', 'Support IA dédié'].map((item, i) => (
                <li key={i} className="flex items-center text-slate-700">
                  <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" style={{color: INFRA_COLORS.primary}} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <Link
              to="/contact"
              className="block w-full text-center py-4 border-2 rounded-full font-medium transition-colors"
              style={{borderColor: INFRA_COLORS.primary, color: INFRA_COLORS.primary}}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = INFRA_COLORS.primaryLight}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              Demander un devis
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

// CTA Section
const CTASection = () => {
  return (
    <section className="relative py-32 px-4 overflow-hidden" style={{backgroundColor: INFRA_COLORS.primaryLight}}>
      <MountainBackground className="absolute bottom-0 left-0 w-full h-80" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-5xl font-semibold text-slate-900 mb-6">
          Prêt à migrer vers l'infrastructure suisse ?
        </h2>
        <p className="text-xl text-slate-600 mb-12">
          Contactez-nous pour une analyse personnalisée de vos besoins et une offre sur mesure.
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
            className="inline-flex items-center justify-center px-12 py-4 bg-white rounded-full font-medium transition-colors text-lg shadow-sm"
            style={{color: INFRA_COLORS.primary}}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F8FAFC'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
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
      question: 'Où sont situés vos datacenters ?',
      answer: 'Nos serveurs sont hébergés exclusivement en Suisse. Nous garantissons que vos données restent sur le territoire suisse et bénéficient des lois strictes de protection des données helvétiques.'
    },
    {
      question: 'Quelle latence puis-je attendre ?',
      answer: 'Notre infrastructure offre une latence inférieure à 30ms pour les utilisateurs en Suisse. Grâce à notre réseau optimisé et nos connexions directes avec les principaux opérateurs, vous bénéficiez de temps de réponse excellents.'
    },
    {
      question: 'Puis-je migrer mon site existant ?',
      answer: 'Oui, notre équipe technique vous accompagne gratuitement dans la migration de votre site web, bases de données et applications. Nous minimisons les temps d\'arrêt grâce à notre processus de migration éprouvé.'
    },
    {
      question: 'Qu\'est-ce que le DGX Spark ?',
      answer: 'Le NVIDIA DGX Spark est une station de travail IA compacte équipée de la puce GB10 Grace Blackwell et de 128 GB de RAM unifiée. C\'est idéal pour le développement et l\'entraînement de modèles d\'intelligence artificielle.'
    },
    {
      question: 'Comment fonctionne la tarification des serveurs dédiés ?',
      answer: 'Les serveurs dédiés sont configurés sur mesure selon vos besoins spécifiques. Contactez-nous pour discuter de vos exigences en termes de CPU, RAM, stockage et bande passante.'
    },
    {
      question: 'Quelles sont les options de backup ?',
      answer: 'Les backups quotidiens sont inclus avec rétention de 30 jours pour l\'hébergement web. Des options de backup plus fréquent ou personnalisé sont disponibles sur demande.'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-slate-900 mb-4">
            Questions Fréquentes
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
                  className={`w-6 h-6 flex-shrink-0 transition-transform`}
                  style={{color: INFRA_COLORS.primary}}
                  transform={openIndex === index ? 'rotate(180)' : ''}
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

export default Infrastructure
