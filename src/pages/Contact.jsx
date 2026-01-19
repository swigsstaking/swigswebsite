import { Mail, MapPin, Linkedin } from 'lucide-react'
import SEOHead from '../components/SEOHead'

const Contact = () => {
  return (
    <div className="bg-white">
      <SEOHead page="contact" />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-semibold text-slate-900 mb-6 tracking-tight">
            Nous contacter
          </h1>
          <p className="text-xl text-slate-600">
            Une question ? Un projet ? N'hésitez pas à nous contacter
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Coordonnées */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
              <h2 className="text-2xl font-semibold text-slate-900 mb-6">
                SWIGS S.A.
              </h2>
              
              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#EEF2FF'}}>
                    <MapPin className="w-6 h-6" style={{color: '#6366F1'}} />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-slate-900 mb-1">Adresse</h3>
                    <p className="text-slate-600">
                      Route de la drague 18<br />
                      CH-1950 Sion
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#EEF2FF'}}>
                    <Mail className="w-6 h-6" style={{color: '#6366F1'}} />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-slate-900 mb-1">Email</h3>
                    <a 
                      href="mailto:info@swigs.ch"
                      className="transition-colors"
                      style={{color: '#6366F1'}}
                      onMouseEnter={(e) => e.currentTarget.style.color = '#4F46E5'}
                      onMouseLeave={(e) => e.currentTarget.style.color = '#6366F1'}
                    >
                      info@swigs.ch
                    </a>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#EEF2FF'}}>
                    <Linkedin className="w-6 h-6" style={{color: '#6366F1'}} />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-slate-900 mb-1">LinkedIn</h3>
                    <a 
                      href="https://www.linkedin.com/company/91683835/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors"
                      style={{color: '#6366F1'}}
                      onMouseEnter={(e) => e.currentTarget.style.color = '#4F46E5'}
                      onMouseLeave={(e) => e.currentTarget.style.color = '#6366F1'}
                    >
                      Suivez notre actualité
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA ERP */}
            <div className="rounded-2xl p-8 text-white" style={{background: 'linear-gradient(to bottom right, #6366F1, #4F46E5)'}}>
              <h2 className="text-2xl font-semibold mb-4">
                Intéressé par notre ERP ?
              </h2>
              <p className="text-white/90 mb-6">
                Contactez-nous pour une démonstration personnalisée en visioconférence de SWIGS ERP et découvrez comment nous pouvons optimiser la gestion de votre commerce.
              </p>
              <a 
                href="https://calendar.app.google/miQuqv9sbz2mGErP9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-white rounded-full font-semibold transition-colors"
                style={{color: '#6366F1'}}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F5F3FF'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
              >
                <Mail className="w-5 h-5 mr-2" />
                Demander une démo
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Contact
