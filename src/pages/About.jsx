import { Link } from 'react-router-dom'
import SEOHead from '../components/SEOHead'

const About = () => {
  return (
    <div className="bg-white">
      <SEOHead page="home" />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 text-center">
            SWIGS S.A
          </h1>
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <p className="text-lg text-slate-700 mb-8 leading-relaxed border-l-4 border-red-600 pl-6 italic">
              Nous concevons des applications web spécialisées dans la gestion d'objets identifiés. 
              Nos systèmes permettent d'optimiser chaque saisie informatique ainsi d'optimiser les 
              différents flux de données vers chaque support et auprès de chaque partenaire.
            </p>
            
            <p className="text-base text-slate-600 leading-relaxed mb-6">
              Actuellement, notre équipe optimise nos solutions ARMIS PRO, SWIGSSTAKING et UNISWIGS. 
              Les applications sont adaptées en fonction des besoins des utilisateurs principaux et 
              des autorités de contrôle. Dans le cadre de nos travaux de recherches, nous avons conçu 
              une solution dédiée à la remise de registres d'objets identifiés (certificats, permis, 
              titres...), basée sur les technologies de registres distribués (DLT-blockchain).
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-start">
                <span className="text-red-600 font-bold mr-3">•</span>
                <div>
                  <span className="font-semibold">Logiciel de gestion d'armurerie </span>
                  <a 
                    href="https://swigs.ch/fr/Armis-Pro/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-red-600 hover:text-red-700 underline"
                  >
                    ARMISPRO
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-red-600 font-bold mr-3">•</span>
                <div>
                  <span className="font-semibold">Solution NFT smartcontract pour suivis de registre </span>
                  <a 
                    href="https://swigs.ch/fr/Uniswigs" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-red-600 hover:text-red-700 underline"
                  >
                    PAPERSAFE
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-red-600 font-bold mr-3">•</span>
                <div>
                  <span className="font-semibold">Solution de stacking Elrond </span>
                  <a 
                    href="https://swigs.ch/fr/Elrond-Swigs-Staking" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-red-600 hover:text-red-700 underline"
                  >
                    SWIGSTAKING
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Travaux Section */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-slate-50 rounded-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Travaux
            </h2>
            
            <p className="text-lg text-slate-700 mb-6 leading-relaxed border-l-4 border-red-600 pl-6 italic">
              Nos travaux s'appliquent à l'ensemble des marchés d'échanges d'objets identifiés: 
              automobile, outillage, armes, luxe, certifications... En ce qui concerne les secteurs 
              soumis à régulation de l'État (p. ex.: armes, automobile), nos API permettent l'échange 
              de données entre les acteurs et les institutions étatiques; ceci sans tenir de base de 
              données centrale.
            </p>
            
            <p className="text-base text-slate-600 leading-relaxed">
              Nos solutions ont pour objectif de répondre aux exigences de chacun des acteurs, en 
              allégeant leur travail de saisie tout en augmentant les garanties de protections de 
              données des utilisateurs.
            </p>
          </div>
        </div>
      </section>

      {/* CTA vers ERP */}
      <section className="py-20 px-4 bg-red-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Découvrez notre solution ERP
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Une solution complète de gestion pour votre commerce
          </p>
          <Link 
            to="/erp"
            className="inline-flex items-center justify-center px-8 py-4 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors shadow-lg"
          >
            En savoir plus sur SWIGS ERP
          </Link>
        </div>
      </section>
    </div>
  )
}

export default About
