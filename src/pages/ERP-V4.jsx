import { Link } from 'react-router-dom'
import { CheckCircle, ArrowRight, Star, Award, Crown } from 'lucide-react'
import SEOHead from '../components/SEOHead'

const ERPV4 = () => {
  const features = [
    'Dashboard temps réel avec analytics avancés',
    'E-commerce complet avec paiements Stripe',
    'Inventaire multi-entrepôts avec traçabilité',
    'Caisse POS tactile avec mode hors-ligne',
    'Gestion des achats et fournisseurs',
    'Services et location de matériel',
    'Comptabilité simplifiée TVA Suisse',
    'Gestion des médias et documents',
    'Base clients et CRM intégré',
    'Multi-utilisateurs avec permissions'
  ]

  return (
    <div className="bg-gradient-to-b from-slate-50 to-white">
      <SEOHead page="home" />
      
      {/* Hero - Style Premium/Luxe */}
      <section className="relative py-32 px-4 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-purple-50 to-transparent opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-purple-50 to-transparent opacity-50"></div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-purple-100 rounded-full mb-8">
              <Crown className="w-5 h-5 text-purple-600" />
              <span className="text-purple-900 font-semibold">Solution Premium</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold text-slate-900 mb-6">
              SWIGS ERP
            </h1>
            <div className="flex items-center justify-center gap-1 mb-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-purple-600 text-purple-600" />
              ))}
            </div>
            <p className="text-2xl md:text-3xl text-slate-700 mb-4 font-light">
              L'excellence suisse au service de votre entreprise
            </p>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-12">
              Une solution de gestion complète qui allie puissance, élégance et simplicité. 
              Conçue en Suisse pour les PME suisses exigeantes.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                to="/contact"
                className="inline-flex items-center justify-center px-10 py-4 bg-purple-600 text-white rounded-xl font-semibold hover:bg-purple-700 shadow-xl hover:shadow-2xl transition-all text-lg"
              >
                Découvrir l'excellence
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                to="/tarifs"
                className="inline-flex items-center justify-center px-10 py-4 bg-white text-purple-600 border-2 border-purple-600 rounded-xl font-semibold hover:bg-purple-50 transition-all text-lg"
              >
                Voir les tarifs
              </Link>
            </div>
          </div>

          {/* Premium Visual */}
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-800 rounded-3xl transform rotate-3 opacity-20"></div>
              <div className="relative bg-gradient-to-br from-purple-600 via-purple-700 to-purple-900 rounded-3xl p-12 shadow-2xl">
                <div className="grid grid-cols-3 gap-8 text-white">
                  <div className="text-center">
                    <Award className="w-12 h-12 mx-auto mb-4" />
                    <div className="text-3xl font-bold mb-2">10+</div>
                    <div className="text-purple-200">Modules</div>
                  </div>
                  <div className="text-center border-x border-purple-400/30">
                    <Star className="w-12 h-12 mx-auto mb-4" />
                    <div className="text-3xl font-bold mb-2">99.9%</div>
                    <div className="text-purple-200">Disponibilité</div>
                  </div>
                  <div className="text-center">
                    <Crown className="w-12 h-12 mx-auto mb-4" />
                    <div className="text-3xl font-bold mb-2">24/7</div>
                    <div className="text-purple-200">Support Premium</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features - Style Premium Liste */}
      <section className="py-32 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-slate-900 mb-6">
              Fonctionnalités Premium
            </h2>
            <p className="text-xl text-slate-600">
              Tout ce dont vous avez besoin, et bien plus encore
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-6 bg-gradient-to-r from-purple-50 to-white rounded-2xl border border-purple-100 hover:border-purple-300 hover:shadow-lg transition-all"
              >
                <div className="flex-shrink-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <p className="text-slate-700 font-medium pt-1">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing - Style Premium */}
      <section className="py-32 px-4 bg-gradient-to-b from-slate-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-slate-900 mb-6">
              Investissez dans l'excellence
            </h2>
            <p className="text-xl text-slate-600">
              Des tarifs transparents pour une qualité exceptionnelle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Vitrine */}
            <div className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-shadow border border-slate-200">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-slate-900 mb-3">Vitrine</h3>
                <p className="text-slate-600">Présence en ligne professionnelle</p>
              </div>
              <div className="text-center mb-8">
                <div className="text-6xl font-bold text-slate-900 mb-2">29</div>
                <div className="text-xl text-slate-600">CHF / mois</div>
              </div>
              <ul className="space-y-4 mb-10">
                {['CMS complet', 'SEO intégré', 'Multi-domaines', 'Support email'].map((item, i) => (
                  <li key={i} className="flex items-center text-slate-700">
                    <CheckCircle className="w-5 h-5 text-purple-600 mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link 
                to="/contact"
                className="block w-full text-center py-4 bg-slate-900 text-white rounded-xl font-semibold hover:bg-slate-800 transition-colors"
              >
                Choisir Vitrine
              </Link>
            </div>

            {/* E-commerce - Premium */}
            <div className="relative bg-gradient-to-br from-purple-600 to-purple-800 rounded-3xl p-10 shadow-2xl transform md:scale-110 z-10">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="bg-yellow-400 text-purple-900 px-6 py-2 rounded-full font-bold flex items-center gap-2">
                  <Crown className="w-5 h-5" />
                  RECOMMANDÉ
                </div>
              </div>
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-white mb-3">E-commerce</h3>
                <p className="text-purple-100">Solution complète en ligne</p>
              </div>
              <div className="text-center mb-8">
                <div className="text-6xl font-bold text-white mb-2">79</div>
                <div className="text-xl text-purple-100">CHF / mois</div>
              </div>
              <ul className="space-y-4 mb-10">
                {['Tout Vitrine', 'Boutique en ligne', 'Paiements Stripe', 'Gestion commandes'].map((item, i) => (
                  <li key={i} className="flex items-center text-white">
                    <CheckCircle className="w-5 h-5 text-yellow-400 mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link 
                to="/contact"
                className="block w-full text-center py-4 bg-white text-purple-600 rounded-xl font-bold hover:bg-yellow-50 transition-colors"
              >
                Choisir E-commerce
              </Link>
            </div>

            {/* ERP */}
            <div className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-shadow border border-slate-200">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-slate-900 mb-3">ERP Complet</h3>
                <p className="text-slate-600">Gestion d'entreprise totale</p>
              </div>
              <div className="text-center mb-8">
                <div className="text-6xl font-bold text-slate-900 mb-2">149</div>
                <div className="text-xl text-slate-600">CHF / mois</div>
              </div>
              <ul className="space-y-4 mb-10">
                {['Tout E-commerce', 'Inventaire', 'POS', 'Comptabilité'].map((item, i) => (
                  <li key={i} className="flex items-center text-slate-700">
                    <CheckCircle className="w-5 h-5 text-purple-600 mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link 
                to="/contact"
                className="block w-full text-center py-4 bg-slate-900 text-white rounded-xl font-semibold hover:bg-slate-800 transition-colors"
              >
                Choisir ERP
              </Link>
            </div>
          </div>

          <div className="text-center mt-16">
            <p className="text-slate-600 mb-4">✨ Essai gratuit 10 jours • Sans carte bancaire • Support inclus</p>
            <p className="text-sm text-slate-500">Hébergement Suisse • Conformité RGPD • Sauvegardes automatiques</p>
          </div>
        </div>
      </section>

      {/* CTA - Style Premium */}
      <section className="py-32 px-4 bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <Crown className="w-20 h-20 mx-auto mb-8 text-yellow-400" />
          <h2 className="text-5xl font-bold mb-6">
            Rejoignez l'élite des PME suisses
          </h2>
          <p className="text-2xl text-purple-100 mb-12">
            Faites le choix de l'excellence avec SWIGS ERP
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center justify-center px-12 py-5 bg-white text-purple-900 rounded-xl font-bold hover:bg-yellow-50 shadow-2xl transition-all hover:scale-105 text-xl"
          >
            Commencer l'essai gratuit
            <ArrowRight className="ml-3 w-6 h-6" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default ERPV4
