import { Mail, MapPin, Send } from 'lucide-react'
import SEOHead from '../components/SEOHead'

const Contact = () => {
  return (
    <div className="bg-white">
      <SEOHead page="contact" />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-12">
            Nous contacter
          </h1>
        </div>
      </section>

      {/* Contact Info */}
      <section className="pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-50 rounded-lg p-8 md:p-12">
            <div className="space-y-8">
              {/* Company Name */}
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  SWIGS SA
                </h2>
              </div>

              {/* Address */}
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-red-600 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-lg text-slate-700">
                    Route de la drague 18<br />
                    CH-1950 Sion
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start">
                <Mail className="w-6 h-6 text-red-600 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <a 
                    href="mailto:info@swigs.ch"
                    className="text-lg text-red-600 hover:text-red-700 underline"
                  >
                    info@swigs.ch
                  </a>
                </div>
              </div>

              {/* Telegram */}
              <div className="flex items-start">
                <Send className="w-6 h-6 text-red-600 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-slate-700 mb-2">Actualité:</p>
                  <a 
                    href="https://t.me/swigs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-red-600 hover:text-red-700 underline"
                  >
                    SWIGS info
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA vers ERP */}
      <section className="py-20 px-4 bg-red-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Intéressé par notre solution ERP ?
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Contactez-nous pour une démonstration personnalisée
          </p>
          <a 
            href="mailto:info@swigs.ch?subject=Demande d'information SWIGS ERP"
            className="inline-flex items-center justify-center px-8 py-4 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors shadow-lg"
          >
            <Mail className="w-5 h-5 mr-2" />
            Nous écrire
          </a>
        </div>
      </section>
    </div>
  )
}

export default Contact
