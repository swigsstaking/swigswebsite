import { Link } from 'react-router-dom'
import { ArrowRight, Package, Heart, Calendar, Users, TrendingUp, Shield, MessageSquare } from 'lucide-react'
import SEOHead from '../components/SEOHead'

const Modules = () => {
  const modules = [
    {
      id: 'location',
      name: 'Module Location',
      slug: 'location',
      icon: Package,
      description: 'Gérez votre parc matériel et vos contrats de location en toute simplicité',
      price: '250 CHF',
      priceLabel: 'Paiement unique',
      monthlyPrice: '10 CHF/mois',
      features: [
        'Gestion du parc matériel',
        'Contrats de location',
        'Calendrier de disponibilité',
        'Facturation automatique'
      ],
      color: 'purple'
    },
    {
      id: 'fidelite',
      name: 'Module Fidélité',
      slug: 'fidelite',
      icon: Heart,
      description: 'Créez et gérez un programme de fidélité pour vos clients',
      price: '250 CHF',
      priceLabel: 'Paiement unique',
      monthlyPrice: '5 CHF/mois',
      features: [
        'Programme de points',
        'Cartes de fidélité',
        'Récompenses personnalisées',
        'Statistiques clients'
      ],
      color: 'purple'
    }
  ]

  return (
    <div className="bg-white">
      <SEOHead page="home" />
      
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-indigo-50 to-white">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-semibold text-slate-900 mb-6 tracking-tight">
            Modules SWIGS ERP
          </h1>
          <p className="text-3xl md:text-4xl font-light text-slate-600 mb-4">
            Étendez les capacités de votre ERP
          </p>
          <p className="text-xl text-slate-500 mb-12 max-w-3xl mx-auto">
            Ajoutez des fonctionnalités spécialisées à votre système de gestion pour répondre aux besoins spécifiques de votre commerce.
          </p>
        </div>
      </section>

      {/* Modules Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {modules.map((module) => (
              <div 
                key={module.id}
                className="bg-white rounded-3xl p-8 shadow-lg border-2 border-slate-200 hover:border-indigo-300 hover:shadow-xl transition-all"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center">
                    <module.icon className="w-8 h-8" style={{color: '#6366F1'}} />
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-semibold" style={{color: '#6366F1'}}>{module.price}</div>
                    <div className="text-sm text-slate-600">{module.priceLabel}</div>
                    <div className="text-xl font-semibold mt-2" style={{color: '#6366F1'}}>+ {module.monthlyPrice}</div>
                  </div>
                </div>

                <h3 className="text-3xl font-semibold text-slate-900 mb-3">
                  {module.name}
                </h3>
                <p className="text-slate-600 mb-6">
                  {module.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {module.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-slate-700">
                      <div className="w-2 h-2 rounded-full mr-3" style={{backgroundColor: '#6366F1'}}></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex gap-3">
                  <Link 
                    to={`/modules/${module.slug}`}
                    className="flex-1 text-center py-3 text-white rounded-full font-medium transition-colors inline-flex items-center justify-center gap-2"
                    style={{backgroundColor: '#6366F1'}}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#4F46E5'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#6366F1'}
                  >
                    En savoir plus
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link 
                    to="/contact"
                    className="flex-1 text-center py-3 border-2 rounded-full font-medium transition-colors"
                    style={{borderColor: '#6366F1', color: '#6366F1'}}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#EEF2FF'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                  >
                    Commander
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-semibold text-slate-900 mb-4">
              Prochainement
            </h2>
            <p className="text-xl text-slate-600">
              D'autres modules sont en cours de développement
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Calendar, name: 'Module Réservations', desc: 'Gestion des réservations et rendez-vous' },
              { icon: MessageSquare, name: 'Module ChatGPT', desc: 'Assistant IA pour votre e-commerce et support client', highlight: true },
              { icon: TrendingUp, name: 'Module Marketing', desc: 'Campagnes et analyses marketing' }
            ].map((item, idx) => (
              <div key={idx} className={`bg-white rounded-2xl p-6 text-center ${
                item.highlight ? 'opacity-100 border-2 shadow-lg' : 'opacity-60'
              }`} style={item.highlight ? {borderColor: '#6366F1'} : {}}>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 ${
                  item.highlight ? '' : 'bg-slate-100'
                }`} style={item.highlight ? {backgroundColor: '#EEF2FF'} : {}}>
                  <item.icon className="w-6 h-6" style={item.highlight ? {color: '#6366F1'} : {}} />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{item.name}</h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-semibold text-slate-900 mb-6">
            Besoin d'un module personnalisé ?
          </h2>
          <p className="text-xl text-slate-600 mb-12">
            Nous pouvons développer des modules sur mesure pour répondre à vos besoins spécifiques.
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 text-white rounded-full font-semibold text-lg transition-colors"
            style={{backgroundColor: '#6366F1'}}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#4F46E5'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#6366F1'}
          >
            Discuter de mon projet
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Modules
