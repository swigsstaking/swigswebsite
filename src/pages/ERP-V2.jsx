import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react'
import SEOHead from '../components/SEOHead'

const ERPV2 = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const erpScreens = [
    {
      title: 'Dashboard',
      description: 'Visualisez toutes vos données clés en temps réel. Graphiques interactifs, KPIs et alertes intelligentes pour piloter votre activité.',
      image: 'https://swigs.online/uploads/swigswebsite/1768374084044-527275705.webp'
    },
    {
      title: 'E-commerce',
      description: 'Gérez votre boutique en ligne avec un catalogue produits complet, paiements sécurisés et synchronisation automatique des stocks.',
      image: 'https://swigs.online/uploads/swigswebsite/1768374090814-25337808.webp'
    },
    {
      title: 'Inventaire',
      description: 'Contrôlez votre stock sur plusieurs entrepôts avec traçabilité complète, alertes de réapprovisionnement et gestion des mouvements.',
      image: 'https://swigs.online/uploads/swigswebsite/1768373971877-852476975.webp'
    },
    {
      title: 'Achat',
      description: 'Optimisez vos achats avec la gestion des fournisseurs, bons de commande, réceptions et suivi des coûts en temps réel.',
      image: 'https://swigs.online/uploads/swigswebsite/1768373971394-52371214.webp'
    },
    {
      title: 'Location',
      description: 'Gérez votre parc de matériel, contrats de location, calendrier de disponibilité et facturation automatique des locations.',
      image: 'https://swigs.online/uploads/swigswebsite/1768373971271-364110632.webp'
    },
    {
      title: 'Media',
      description: 'Toutes vos images sont automatiquement converties en format WebP pour optimiser la performance et la qualité de votre site web.',
      image: 'https://swigs.online/uploads/swigswebsite/1768373970909-176250517.webp'
    },
    {
      title: 'Caisse',
      description: 'Interface tactile optimisée pour vos ventes en magasin. Mode hors-ligne, gestion des paiements et synchronisation automatique.',
      image: 'https://swigs.online/uploads/swigswebsite/1768373971128-42967442.webp'
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % erpScreens.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + erpScreens.length) % erpScreens.length)
  }

  const features = [
    {
      title: 'Dashboard & Analytics',
      description: 'Visualisez vos données en temps réel avec des graphiques interactifs et des alertes intelligentes.'
    },
    {
      title: 'E-commerce',
      description: 'Gérez votre boutique en ligne avec un catalogue produits complet et des paiements sécurisés.'
    },
    {
      title: 'Inventaire',
      description: 'Contrôlez votre stock sur plusieurs entrepôts avec une traçabilité complète.'
    },
    {
      title: 'Caisse POS',
      description: 'Interface tactile optimisée pour vos ventes en magasin, en ligne ou hors-ligne.'
    },
    {
      title: 'Services & Location',
      description: 'Gérez votre parc de matériel et vos contrats de location en toute simplicité.'
    },
    {
      title: 'Comptabilité',
      description: 'Suivez vos finances avec la TVA Suisse automatique et des rapports détaillés.'
    }
  ]

  return (
    <div className="bg-white">
      <SEOHead page="home" />
      
      {/* Hero - Style Apple */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-semibold text-slate-900 mb-6 tracking-tight">
            SWIGS ERP
          </h1>
          <p className="text-3xl md:text-4xl font-light text-slate-600 mb-4">
            Solide. Simple. Suisse.
          </p>
          <p className="text-xl text-slate-500 mb-12 max-w-3xl mx-auto">
            La solution de gestion complète pour les commerces de détails suisses. Inventaire centralisé, E-commerce et Location dans une interface élégante.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link 
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3 text-white rounded-full font-medium transition-colors"
              style={{backgroundColor: '#6366F1'}}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#4F46E5'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#6366F1'}
            >
              Essai gratuit
            </Link>
            <a 
              href="https://calendar.app.google/miQuqv9sbz2mGErP9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 font-medium transition-colors"
              style={{color: '#6366F1'}}
              onMouseEnter={(e) => e.currentTarget.style.color = '#4F46E5'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#6366F1'}
            >
              Réserver une démo
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>

          {/* Interactive ERP Carousel */}
          <div className="relative mx-auto max-w-7xl">
            <div 
              className="relative rounded-3xl shadow-2xl overflow-hidden cursor-pointer bg-slate-100"
              style={{aspectRatio: '2940 / 1630'}}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={nextSlide}
            >
              {/* Image */}
              <img 
                src={erpScreens[currentSlide].image}
                alt={erpScreens[currentSlide].title}
                className={`w-full h-full object-contain transition-all duration-500 ${
                  isHovered ? 'blur-0' : 'md:blur-sm'
                }`}
              />
              
              {/* Overlay avec texte (visible quand pas hover) - caché sur mobile */}
              <div className={`hidden md:flex absolute inset-0 backdrop-blur-sm transition-opacity duration-500 items-center justify-center ${
                isHovered ? 'opacity-0 pointer-events-none' : 'opacity-100'
              }`} style={{backgroundColor: 'rgba(99, 102, 241, 0.6)'}}>
                <div className="text-center px-8">
                  <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    {erpScreens[currentSlide].title}
                  </h3>
                  <p className="text-xl text-white/90 max-w-2xl">
                    {erpScreens[currentSlide].description}
                  </p>
                </div>
              </div>


              {/* Click to advance indicator - caché sur mobile */}
              <div className={`hidden md:block absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium transition-opacity duration-300 z-10 ${
                isHovered ? 'opacity-0' : 'opacity-100'
              }`} style={{color: '#6366F1'}}>
                Cliquer pour avancer →
              </div>

              {/* Indicators */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {erpScreens.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentSlide 
                        ? 'bg-white w-8' 
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                    aria-label={`Aller à l'image ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Section title and navigation below carousel */}
            <div className="flex items-center justify-center gap-6 mt-8">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:bg-slate-100"
                style={{color: '#6366F1'}}
                aria-label="Image précédente"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <p className="text-lg text-slate-600 font-medium">
                {currentSlide + 1} / {erpScreens.length} - {erpScreens[currentSlide].title}
              </p>
              
              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:bg-slate-100"
                style={{color: '#6366F1'}}
                aria-label="Image suivante"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features - Style Apple Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <h3 className="text-2xl font-semibold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing - Style Apple */}
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-semibold text-slate-900 mb-4">
              Tarification ERP
            </h2>
            <p className="text-xl text-slate-600 mb-4">
              Sans engagement. Résiliable à tout moment.
            </p>
            <p className="text-sm text-slate-500 italic">
              Les offres E-commerce et Vitrine sont réservées aux sites web SWIGS.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Offre ERP principale */}
            <div className="lg:col-span-2 text-white rounded-3xl p-10 shadow-2xl" style={{backgroundColor: '#6366F1'}}>
              <div className="text-center mb-6">
                <h3 className="text-3xl font-semibold mb-2">SWIGS ERP</h3>
                <p className="text-white/70">Solution complète de gestion</p>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-8">
                <div className="text-center">
                  <div className="mb-2">
                    <span className="text-5xl font-semibold">50</span>
                    <span className="text-2xl text-white/70"> CHF/mois</span>
                  </div>
                  <p className="text-sm text-white/60">Paiement mensuel</p>
                </div>
                
                <div className="text-white/60 text-2xl hidden md:block">ou</div>
                
                <div className="text-center">
                  <div className="mb-2">
                    <span className="text-5xl font-semibold">45</span>
                    <span className="text-2xl text-white/70"> CHF/mois</span>
                  </div>
                  <p className="text-sm text-white/60">Paiement annuel (540 CHF/an)</p>
                </div>
              </div>

              <div className="bg-white/10 rounded-2xl p-6 mb-8">
                <p className="text-center text-white/70 mb-2">
                  <span className="font-semibold">+ 1'500 CHF</span> pour l'intégration de vos données
                </p>
                <p className="text-center text-sm text-white/60">
                  (Frais unique lors de la mise en place)
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <ul className="space-y-3">
                  {['Inventaire centralisé', 'Point de vente (POS)', 'Comptabilité'].map((item, i) => (
                    <li key={i} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-white mr-3 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <ul className="space-y-3">
                  {['Dashboard & Analytics', 'Multi-utilisateurs', 'Support prioritaire'].map((item, i) => (
                    <li key={i} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-white mr-3 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link 
                to="/contact"
                className="block w-full text-center py-4 bg-white rounded-full font-semibold text-lg transition-colors"
                style={{color: '#6366F1'}}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F5F3FF'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
              >
                Démarrer avec l'ERP
              </Link>
            </div>

            {/* Modules optionnels */}
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-semibold text-slate-900 mb-4">
                  Modules optionnels
                </h3>
                <p className="text-slate-600 mb-2">
                  Étendez les capacités de votre ERP
                </p>
                <Link 
                  to="/modules"
                  className="font-medium inline-flex items-center gap-2 transition-colors"
                  style={{color: '#6366F1'}}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#4F46E5'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#6366F1'}
                >
                  Voir tous les modules
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="space-y-4">
                <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-slate-200 transition-colors hover:shadow-xl" style={{'--hover-border': '#C7D2FE'}} onMouseEnter={(e) => e.currentTarget.style.borderColor = '#C7D2FE'} onMouseLeave={(e) => e.currentTarget.style.borderColor = '#E2E8F0'}>
                  <h4 className="text-xl font-semibold text-slate-900 mb-2">Module Location</h4>
                  <div className="mb-4">
                    <span className="text-3xl font-semibold" style={{color: '#6366F1'}}>250</span>
                    <span className="text-lg text-slate-600"> CHF</span>
                  </div>
                  <ul className="space-y-2 mb-4">
                    {['Gestion du parc matériel', 'Contrats de location', 'Calendrier de disponibilité'].map((item, i) => (
                      <li key={i} className="flex items-center text-slate-700">
                        <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" style={{color: '#6366F1'}} />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to="/modules/location"
                    className="block w-full text-center py-2 border-2 rounded-full font-medium transition-colors text-sm"
                    style={{borderColor: '#6366F1', color: '#6366F1'}}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#EEF2FF'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                  >
                    En savoir plus
                  </Link>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-slate-200 transition-colors hover:shadow-xl" style={{'--hover-border': '#C7D2FE'}} onMouseEnter={(e) => e.currentTarget.style.borderColor = '#C7D2FE'} onMouseLeave={(e) => e.currentTarget.style.borderColor = '#E2E8F0'}>
                  <h4 className="text-xl font-semibold text-slate-900 mb-2">Module Fidélité</h4>
                  <div className="mb-4">
                    <span className="text-3xl font-semibold" style={{color: '#6366F1'}}>250</span>
                    <span className="text-lg text-slate-600"> CHF</span>
                  </div>
                  <ul className="space-y-2 mb-4">
                    {['Programme de points', 'Cartes de fidélité', 'Récompenses personnalisées'].map((item, i) => (
                      <li key={i} className="flex items-center text-slate-700">
                        <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" style={{color: '#6366F1'}} />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to="/modules/fidelite"
                    className="block w-full text-center py-2 border-2 rounded-full font-medium transition-colors text-sm"
                    style={{borderColor: '#6366F1', color: '#6366F1'}}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#EEF2FF'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                  >
                    En savoir plus
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Style Apple */}
      <section className="py-32 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-semibold text-slate-900 mb-6">
            Prêt à commencer ?
          </h2>
          <p className="text-xl text-slate-600 mb-12">
            Essai gratuit 10 jours. Sans carte bancaire.
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-3 text-white rounded-full font-medium transition-colors text-lg"
            style={{backgroundColor: '#6366F1'}}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#4F46E5'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#6366F1'}
          >
            Démarrer l'essai gratuit
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />
    </div>
  )
}

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'Puis-je changer d\'offre à tout moment ?',
      answer: 'Oui, vous pouvez upgrader ou downgrader votre offre à tout moment. Les changements sont effectifs immédiatement et la facturation est ajustée au prorata.'
    },
    {
      question: 'Y a-t-il des frais cachés ?',
      answer: 'Non, nos tarifs sont transparents. Le prix affiché inclut l\'hébergement, les mises à jour et le support. Les seuls frais supplémentaires peuvent être les commissions de paiement Stripe.'
    },
    {
      question: 'Où sont hébergées mes données ?',
      answer: 'Toutes vos données sont hébergées en Suisse, dans des datacenters sécurisés. Nous sommes conformes au RGPD et à la législation suisse sur la protection des données.'
    },
    {
      question: 'Comment fonctionne l\'essai gratuit ?',
      answer: 'L\'essai gratuit de 10 jours pour l\'offre ERP vous donne accès à toutes les fonctionnalités sans limitation. Aucune carte bancaire n\'est requise pour démarrer.'
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
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-purple-300 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
              >
                <span className="text-lg font-semibold text-slate-900 pr-8">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-purple-600 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
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

export default ERPV2
