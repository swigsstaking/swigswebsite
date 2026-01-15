import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Package, Calendar, FileText, CreditCard, BarChart3, Settings } from 'lucide-react'
import SEOHead from '../components/SEOHead'

const ModuleLocation = () => {
  const features = [
    {
      icon: Package,
      title: 'Gestion du parc matériel',
      description: 'Cataloguez et suivez l\'ensemble de votre matériel disponible à la location avec photos, descriptions et états.'
    },
    {
      icon: Calendar,
      title: 'Calendrier de disponibilité',
      description: 'Visualisez en temps réel la disponibilité de chaque équipement et évitez les conflits de réservation.'
    },
    {
      icon: FileText,
      title: 'Contrats de location',
      description: 'Générez automatiquement des contrats de location personnalisés avec conditions et signatures électroniques.'
    },
    {
      icon: CreditCard,
      title: 'Facturation automatique',
      description: 'Créez des factures automatiquement basées sur la durée de location et les tarifs configurés.'
    },
    {
      icon: BarChart3,
      title: 'Rapports et statistiques',
      description: 'Analysez la rentabilité de votre parc, les taux d\'utilisation et identifiez vos équipements les plus demandés.'
    },
    {
      icon: Settings,
      title: 'Configuration flexible',
      description: 'Définissez vos propres tarifs (heure, jour, semaine), cautions et conditions de location.'
    }
  ]

  const useCases = [
    'Magasins de sport (ski, vélo, matériel outdoor)',
    'Entreprises de location d\'équipement événementiel',
    'Centres de loisirs et parcs d\'attractions',
    'Ateliers et espaces de coworking (outils, équipement)',
    'Boutiques de location de matériel photo/vidéo'
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
              <Package className="w-10 h-10 text-white" />
            </div>
            <div>
              <h1 className="text-5xl md:text-6xl font-semibold text-slate-900 mb-4 tracking-tight">
                Module Location
              </h1>
              <p className="text-2xl text-slate-600 mb-6">
                Gérez votre parc matériel et vos contrats de location en toute simplicité
              </p>
            </div>
          </div>

          <div className="text-white rounded-2xl p-8 inline-block" style={{backgroundColor: '#6366F1'}}>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-5xl font-semibold">250</span>
              <span className="text-2xl">CHF</span>
            </div>
            <p className="text-white/70 mb-3">Paiement unique</p>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-3xl font-semibold">+ 10</span>
              <span className="text-xl">CHF/mois</span>
            </div>
            <p className="text-white/70">Ajout au forfait ERP de base</p>
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
              Tout ce dont vous avez besoin pour gérer vos locations
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

      {/* Use Cases */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-semibold text-slate-900 mb-4">
              Idéal pour
            </h2>
            <p className="text-xl text-slate-600">
              Ce module est parfait pour les commerces proposant de la location
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
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
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-white rounded-3xl p-12" style={{background: 'linear-gradient(to bottom right, #6366F1, #4F46E5)'}}>
            <h2 className="text-4xl font-semibold mb-6">
              Intégration parfaite avec l'ERP
            </h2>
            <div className="space-y-4 text-lg text-white/70">
              <p className="flex items-start">
                <CheckCircle className="w-6 h-6 mr-3 flex-shrink-0 mt-1" />
                <span>Synchronisation automatique avec votre inventaire principal</span>
              </p>
              <p className="flex items-start">
                <CheckCircle className="w-6 h-6 mr-3 flex-shrink-0 mt-1" />
                <span>Les locations génèrent automatiquement des écritures comptables</span>
              </p>
              <p className="flex items-start">
                <CheckCircle className="w-6 h-6 mr-3 flex-shrink-0 mt-1" />
                <span>Gestion des clients centralisée avec historique complet</span>
              </p>
              <p className="flex items-start">
                <CheckCircle className="w-6 h-6 mr-3 flex-shrink-0 mt-1" />
                <span>Rapports consolidés avec vos autres activités</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-semibold text-slate-900 mb-6">
            Prêt à optimiser vos locations ?
          </h2>
          <p className="text-xl text-slate-600 mb-12">
            Ajoutez le module Location à votre ERP SWIGS dès aujourd'hui
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

export default ModuleLocation
