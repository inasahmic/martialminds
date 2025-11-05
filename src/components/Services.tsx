import { useLanguage } from '../contexts/LanguageContext'

interface ServicesProps {
  onServiceClick: (serviceId: string) => void
}

const Services = ({ onServiceClick }: ServicesProps) => {
  const { t, language } = useLanguage()
  
  const services = [
    {
      id: 'birkman',
      title: t.services.birkman.title,
      description: t.services.birkman.description,
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      id: 'emdr',
      title: t.services.emdr.title,
      description: t.services.emdr.description,
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
    },
    {
      id: 'verhaltenstherapie',
      title: t.services.therapy.title,
      description: t.services.therapy.description,
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      id: 'paartherapie',
      title: t.services.couples.title,
      description: t.services.couples.description,
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
    {
      id: 'birthchart',
      title: t.services.birthchart.title,
      description: t.services.birthchart.description,
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ),
    },
    {
      id: 'praevention',
      title: t.services.prevention.title,
      description: t.services.prevention.description,
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      id: 'business',
      title: t.services.business.title,
      description: t.services.business.description,
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
  ]

  return (
    <section id="angebote" className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4 md:mb-6 px-2">
            {t.services.title}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 px-2">
            {t.services.subtitle}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => onServiceClick(service.id)}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-left group"
            >
              <div className="text-accent mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                {service.description}
              </p>
              <div className="flex items-center text-accent font-medium">
                Mehr erfahren
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>
          ))}
        </div>

        {/* Personal Touch Section */}
        <div className="mt-20 mb-20 bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12 shadow-lg">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <img
                src={`${import.meta.env.BASE_URL}me-2.jpeg`}
                alt="Azra Mujcinovic"
                className="w-64 md:w-80 rounded-2xl shadow-xl object-contain"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                {language === 'de' ? 'Individuelle Begleitung auf Ihrem Weg' : 'Individual Support on Your Journey'}
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                {language === 'de' 
                  ? 'Jeder Mensch ist einzigartig – und so auch der Weg zur inneren Balance. Mit Empathie, Fachkompetenz und einem ganzheitlichen Ansatz begleite ich Sie dabei, Ihre persönlichen Ziele zu erreichen.'
                  : 'Every person is unique – and so is the path to inner balance. With empathy, expertise, and a holistic approach, I support you in achieving your personal goals.'}
              </p>
            </div>
          </div>
        </div>

        {/* Partnerships & Certifications */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            {t.services.partnersTitle}
          </h3>
          <p className="text-lg text-gray-600 mb-12">
            {t.services.partnersSubtitle}
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Fresh Minds Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex justify-center mb-6">
                <img
                  src={`${import.meta.env.BASE_URL}fresh-minds.jpeg`}
                  alt="Fresh Minds"
                  className="h-28 w-28 rounded-full object-cover shadow-md"
                />
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-4">
                {t.services.freshMindsTitle}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {t.services.freshMindsDescription}
              </p>
            </div>

            {/* Birkman Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex justify-center mb-6">
                <img
                  src={`${import.meta.env.BASE_URL}birkman.webp`}
                  alt="Official Birkman Consultant"
                  className="h-28 object-contain"
                />
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-4">
                {t.services.birkmanConsultant}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {t.services.birkmanDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services

