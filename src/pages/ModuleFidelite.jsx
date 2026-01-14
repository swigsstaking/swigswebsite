import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Heart, Gift, TrendingUp, Users, Smartphone, Star } from 'lucide-react'
import SEOHead from '../components/SEOHead'

const ModuleFidelite = () => {
  const features = [
    {
      icon: Star,
      title: 'Programme de points',
      description: 'Configurez un système de points personnalisé : points par achat, par visite, ou selon vos propres règles.'
    },
    {
      icon: Smartphone,
      title: 'Cartes de fidélité digitales',
      description: 'Vos clients accèdent à leur carte de fidélité directement depuis leur smartphone, plus besoin de carte physique.'
    },
    {
      icon: Gift,
      title: 'Récompenses personnalisées',
      description: 'Créez des récompenses sur mesure : réductions, produits gratuits, offres exclusives ou avantages VIP.'
    },
    {
      icon: TrendingUp,
      title: 'Statistiques clients',
      description: 'Analysez le comportement d\'achat, identifiez vos meilleurs clients et mesurez l\'impact de votre programme.'
    },
    {
      icon: Users,
      title: 'Segmentation avancée',
      description: 'Créez des segments de clients et proposez des offres ciblées selon leurs habitudes et préférences.'
    },
    {
      icon: Heart,
      title: 'Engagement automatisé',
      description: 'Envoyez automatiquement des notifications pour les anniversaires, points expirés ou nouvelles récompenses.'
    }
  ]

  const benefits = [
    'Augmentez la fréquence de visite de vos clients',
    'Fidélisez votre clientèle sur le long terme',
    'Collectez des données précieuses sur vos clients',
    'Différenciez-vous de la concurrence',
    'Augmentez votre panier moyen',
    'Créez une communauté engagée'
  ]

  const useCases = [
    'Commerces de détail (mode, alimentation, beauté)',
    'Restaurants et cafés',
    'Salons de coiffure et instituts de beauté',
    'Magasins de sport et fitness',
    'Boutiques spécialisées'
  ]

  return (
    <div className="bg-white">
      <SEOHead page="home" />
      
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-indigo-50 to-white">
        <div className="max-w-5xl mx-auto">
          <Link 
            to="/modules"
            className="inline-flex items-center mb-8 font-medium transition-colors"
            style={{color: '#6366F1'}}
            onMouseEnter={(e) => e.currentTarget.style.color = '#4F46E5'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#6366F1'}
          >
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Retour aux modules
          </Link>
          
          <div className="flex items-start gap-6 mb-8">
            <div className="w-20 h-20 rounded-2xl flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#6366F1'}}>
              <Heart className="w-10 h-10 text-white" />
            </div>
            <div>
              <h1 className="text-5xl md:text-6xl font-semibold text-slate-900 mb-4 tracking-tight">
                Module Fidélité
              </h1>
              <p className="text-2xl text-slate-600 mb-6">
                Créez et gérez un programme de fidélité pour vos clients
              </p>
            </div>
          </div>

          <div className="text-white rounded-2xl p-8 inline-block" style={{backgroundColor: '#6366F1'}}>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-5xl font-semibold">250</span>
              <span className="text-2xl">CHF</span>
            </div>
            <p className="text-white/70">Paiement unique - Ajout au forfait ERP de base</p>
          </div>
        </div>
      </section>

      {/* Features détaillées */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold text-slate-900 mb-4">
              Fonctionnalités complètes
            </h2>
            <p className="text-xl text-slate-600">
              Tout pour créer un programme de fidélité efficace
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4" style={{backgroundColor: '#EEF2FF'}}>
                  <feature.icon className="w-7 h-7" style={{color: '#6366F1'}} />
                </div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-semibold text-slate-900 mb-6">
                Pourquoi un programme de fidélité ?
              </h2>
              <p className="text-xl text-slate-600 mb-8">
                Un programme de fidélité bien conçu transforme vos clients occasionnels en ambassadeurs de votre marque.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-3 flex-shrink-0 mt-1" style={{color: '#6366F1'}} />
                    <span className="text-lg text-slate-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-white rounded-3xl p-10" style={{background: 'linear-gradient(to bottom right, #6366F1, #4F46E5)'}}>
              <h3 className="text-3xl font-semibold mb-6">Le saviez-vous ?</h3>
              <div className="space-y-6">
                <div>
                  <div className="text-5xl font-bold mb-2">65%</div>
                  <p className="text-white/70">des revenus proviennent de clients fidèles</p>
                </div>
                <div>
                  <div className="text-5xl font-bold mb-2">5x</div>
                  <p className="text-white/70">moins cher de fidéliser que d'acquérir un nouveau client</p>
                </div>
                <div>
                  <div className="text-5xl font-bold mb-2">+25%</div>
                  <p className="text-white/70">d'augmentation du panier moyen en moyenne</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-semibold text-slate-900 mb-4">
              Idéal pour
            </h2>
            <p className="text-xl text-slate-600">
              Ce module est parfait pour tous les commerces en contact direct avec leurs clients
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
            <ul className="space-y-4">
              {useCases.map((useCase, idx) => (
                <li key={idx} className="flex items-center text-lg text-slate-700">
                  <CheckCircle className="w-6 h-6 mr-4 flex-shrink-0" style={{color: '#6366F1'}} />
                  {useCase}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Integration */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-white rounded-3xl p-12" style={{background: 'linear-gradient(to bottom right, #6366F1, #4F46E5)'}}>
            <h2 className="text-4xl font-semibold mb-6">
              Intégration parfaite avec l'ERP
            </h2>
            <div className="space-y-4 text-lg text-white/70">
              <p className="flex items-start">
                <CheckCircle className="w-6 h-6 mr-3 flex-shrink-0 mt-1" />
                <span>Attribution automatique des points à chaque vente en caisse</span>
              </p>
              <p className="flex items-start">
                <CheckCircle className="w-6 h-6 mr-3 flex-shrink-0 mt-1" />
                <span>Historique complet des transactions et points dans la fiche client</span>
              </p>
              <p className="flex items-start">
                <CheckCircle className="w-6 h-6 mr-3 flex-shrink-0 mt-1" />
                <span>Récompenses déduites automatiquement lors du paiement</span>
              </p>
              <p className="flex items-start">
                <CheckCircle className="w-6 h-6 mr-3 flex-shrink-0 mt-1" />
                <span>Rapports de fidélité consolidés avec vos autres statistiques</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-semibold text-slate-900 mb-6">
            Fidélisez vos clients dès aujourd'hui
          </h2>
          <p className="text-xl text-slate-600 mb-12">
            Ajoutez le module Fidélité à votre ERP SWIGS et transformez vos clients en fans
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-white rounded-full font-semibold text-lg transition-colors"
              style={{backgroundColor: '#6366F1'}}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#4F46E5'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#6366F1'}
            >
              Commander le module
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              to="/erp-v2"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-slate-300 text-slate-700 rounded-full font-semibold text-lg hover:bg-slate-50 transition-colors"
            >
              Voir l'offre ERP
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ModuleFidelite
