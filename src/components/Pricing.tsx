import { useLanguage } from '../contexts/LanguageContext'

const Pricing = () => {
  const { t } = useLanguage()

  return (
    <section id="kosten" className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4 md:mb-6 px-2">
            {t.pricing.title}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 px-2">
            {t.pricing.subtitle}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-primary to-secondary text-white">
                  <th className="px-6 py-4 text-left text-lg font-semibold">{t.pricing.service}</th>
                  <th className="px-6 py-4 text-right text-lg font-semibold">{t.pricing.price}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {t.pricing.items.map((item, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4 text-gray-700">
                      <div className="font-medium">{item.service}</div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="font-bold text-accent text-lg">
                        {item.price}
                      </div>
                      {item.unit && (
                        <div className="text-sm text-gray-500">{item.unit}</div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-12 bg-accent bg-opacity-10 border-l-4 border-accent rounded-r-xl p-8">
          <h3 className="text-2xl font-bold text-primary mb-4">Wichtige Hinweise</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start space-x-3">
              <svg className="w-6 h-6 text-accent flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <span>Die Behandlung erfolgt ausschließlich für Selbstzahler oder Personen, deren Privatversicherung die Kosten übernimmt.</span>
            </li>
            <li className="flex items-start space-x-3">
              <svg className="w-6 h-6 text-accent flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <span>Alle Preise sind transparent und verbindlich – keine versteckten Kosten.</span>
            </li>
            <li className="flex items-start space-x-3">
              <svg className="w-6 h-6 text-accent flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <span>Für Unternehmensangebote erstelle ich gerne ein individuelles Angebot basierend auf Ihren spezifischen Bedürfnissen.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Pricing

