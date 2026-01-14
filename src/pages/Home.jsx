import { Link } from 'react-router-dom'
import { ArrowRight, Shield, Zap, TrendingUp } from 'lucide-react'
import SEOHead from '../components/SEOHead'

const Home = () => {
  return (
    <div className="bg-white">
      <SEOHead page="home" />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-semibold text-slate-900 mb-6 tracking-tight">
            SWIGS S.A.
          </h1>
          <p className="text-2xl md:text-3xl font-light text-slate-600 mb-4">
            Solutions technologiques suisses
          </p>
          <p className="text-xl text-slate-500 mb-12 max-w-3xl mx-auto">
            De l'infrastructure blockchain aux logiciels de gestion, nous développons des solutions sécurisées pour votre entreprise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/erp"
              className="inline-flex items-center justify-center px-8 py-4 text-white rounded-full font-semibold text-lg transition-colors"
              style={{backgroundColor: '#6366F1'}}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#4F46E5'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#6366F1'}
            >
              Découvrir SWIGS ERP
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              to="/swigs-sa"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-slate-300 text-slate-700 rounded-full font-semibold text-lg hover:bg-slate-50 transition-colors"
            >
              En savoir plus
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold text-slate-900 mb-4">
              Pourquoi choisir SWIGS ?
            </h2>
            <p className="text-xl text-slate-600">
              Des solutions technologiques pensées pour votre réussite
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#EEF2FF'}}>
                <Shield className="w-8 h-8" style={{color: '#6366F1'}} />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-3">Sécurité suisse</h3>
              <p className="text-slate-600">
                Vos données hébergées en Suisse, conformes au RGPD et à la législation suisse
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#EEF2FF'}}>
                <Zap className="w-8 h-8" style={{color: '#6366F1'}} />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-3">Innovation</h3>
              <p className="text-slate-600">
                Technologies de pointe alliant blockchain et solutions de gestion modernes
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#EEF2FF'}}>
                <TrendingUp className="w-8 h-8" style={{color: '#6366F1'}} />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-3">Performance</h3>
              <p className="text-slate-600">
                Des outils optimisés pour améliorer votre productivité au quotidien
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ERP Highlight */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-3xl p-12 text-white" style={{background: 'linear-gradient(to bottom right, #6366F1, #4F46E5)'}}>
            <div className="max-w-3xl">
              <h2 className="text-4xl md:text-5xl font-semibold mb-6">
                SWIGS ERP
              </h2>
              <p className="text-2xl text-white/90 mb-8">
                La solution de gestion complète pour les commerces suisses
              </p>
              <p className="text-lg text-white/80 mb-8">
                Gérez vos ventes, stocks, clients et bien plus encore avec une interface moderne et intuitive. 
                Inventaire centralisé, E-commerce et modules optionnels (Location, Fidélité) dans une seule plateforme.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/erp"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white rounded-full font-semibold text-lg transition-colors"
                  style={{color: '#6366F1'}}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F5F3FF'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
                >
                  Découvrir l'ERP
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link 
                  to="/modules"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white rounded-full font-semibold text-lg hover:bg-white/10 transition-colors"
                >
                  Voir les modules
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Solutions */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-semibold text-slate-900 mb-4">
              Nos autres solutions
            </h2>
            <p className="text-xl text-slate-600">
              Un écosystème technologique complet
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-slate-200">
              <h3 className="text-2xl font-semibold text-slate-900 mb-3">
                ARMISPRO
              </h3>
              <p className="text-slate-600">
                Logiciel de gestion d'armurerie conforme à la réglementation suisse
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-slate-200">
              <h3 className="text-2xl font-semibold text-slate-900 mb-3">
                PAPERSAFE
              </h3>
              <p className="text-slate-600">
                Solution NFT smartcontract pour la certification numérique
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-slate-200">
              <h3 className="text-2xl font-semibold text-slate-900 mb-3">
                SWIGSTAKING
              </h3>
              <p className="text-slate-600">
                Solution de staking Elrond pour maximiser vos rendements
              </p>
            </div>
          </div>
        </div>
      </section>


    </div>
  )
}

export default Home
