import { useLanguage } from '../contexts/LanguageContext'

const Contact = () => {
  const { t } = useLanguage()
  
  return (
    <section id="kontakt" className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4 md:mb-6 px-2">
            {t.contact.title}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 px-2">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div className="space-y-6 md:space-y-8">
            <div className="bg-gradient-to-br from-primary to-secondary text-white rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 md:mb-6">{t.contact.name}</h3>
              <p className="text-base sm:text-lg mb-6 md:mb-8">
                {t.contact.callToAction}
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-accent bg-opacity-20 rounded-full p-3">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-gray-200 mb-1">{t.contact.phone}</div>
                    <a href="tel:01751427016" className="text-xl font-semibold hover:text-accent transition-colors">
                      0175 1427016
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-accent bg-opacity-20 rounded-full p-3">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-gray-200 mb-1">{t.contact.email}</div>
                    <a href="mailto:kontakt@martial-minds.de" className="text-xl font-semibold hover:text-accent transition-colors break-all">
                      kontakt@martial-minds.de
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-light rounded-2xl p-8">
              <h4 className="text-xl font-bold text-primary mb-4">{t.contact.appointmentTitle}</h4>
              <ul className="space-y-3 text-gray-700">
                {t.contact.appointmentDetails.map((detail, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-accent flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 rounded-2xl p-8 h-full flex flex-col justify-center">
              <div className="text-center mb-8">
                <img
                  src={`${import.meta.env.BASE_URL}me-2.jpeg`}
                  alt="Azra Mujcinovic"
                  className="h-48 w-48 mx-auto rounded-2xl shadow-xl border-4 border-accent mb-6 object-cover"
                />
                <h3 className="text-3xl font-bold text-primary mb-2">Martial Minds</h3>
                <p className="text-lg text-gray-600">Praxis für Psychotherapie</p>
              </div>

              <div className="space-y-4 text-gray-700">
                <p className="text-center leading-relaxed">
                  Ich freue mich darauf, Sie auf Ihrem Weg zu mehr innerer Stärke, Klarheit und psychischem Wachstum zu begleiten.
                </p>
                
                <div className="pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-500 text-center">
                    Termine nach Vereinbarung<br />
                    Online und in Präsenz
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

