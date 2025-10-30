import { useLanguage } from '../contexts/LanguageContext'

interface ServiceDetailsProps {
  serviceId: string
  onClose: () => void
}

const ServiceDetails = ({ serviceId, onClose }: ServiceDetailsProps) => {
  const { t } = useLanguage()

  // Helper function to render service content based on serviceId
  const renderServiceContent = (id: string) => {
    const services = t.services as any
    
    // Map German IDs to translation keys
    const idMap: Record<string, string> = {
      'verhaltenstherapie': 'therapy',
      'paartherapie': 'couples',
      'praevention': 'prevention',
    }
    
    const translationKey = idMap[id] || id
    const service = services[translationKey]

    if (!service?.fullContent) return null

    const { fullContent } = service

    // Birkman service
    if (translationKey === 'birkman') {
      return (
        <div className="space-y-6">
          <p className="text-lg leading-relaxed">
            <strong>{fullContent.intro}</strong>
          </p>
          <p className="leading-relaxed">{fullContent.paragraph1}</p>
          
          <h4 className="text-2xl font-bold text-primary mt-8">{fullContent.backgroundTitle}</h4>
          <p className="leading-relaxed">{fullContent.background1}</p>
          <p className="leading-relaxed">{fullContent.background2}</p>

          <h4 className="text-2xl font-bold text-primary mt-8">{fullContent.applicationTitle}</h4>
          <p className="leading-relaxed">{fullContent.applicationIntro}</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            {fullContent.applications.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <p className="leading-relaxed mt-4">{fullContent.conclusion}</p>
        </div>
      )
    }

    // EMDR service
    if (translationKey === 'emdr') {
      return (
        <div className="space-y-6">
          <p className="text-lg leading-relaxed">
            <strong>{fullContent.intro}</strong>
          </p>
          <p className="leading-relaxed">{fullContent.paragraph1}</p>
          <p className="leading-relaxed">{fullContent.paragraph2}</p>

          <h4 className="text-2xl font-bold text-primary mt-8">{fullContent.phasesTitle}</h4>
          <ol className="list-decimal list-inside space-y-2 ml-4">
            {fullContent.phases.map((phase: string, index: number) => (
              <li key={index}>{phase}</li>
            ))}
          </ol>

          <h4 className="text-2xl font-bold text-primary mt-8">{fullContent.applicationsTitle}</h4>
          <p className="leading-relaxed">{fullContent.applicationsIntro}</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            {fullContent.applications.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h4 className="text-2xl font-bold text-primary mt-8">{fullContent.recognitionTitle}</h4>
          <p className="leading-relaxed">{fullContent.recognitionIntro}</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            {fullContent.recognition.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <p className="leading-relaxed mt-4">{fullContent.conclusion}</p>
        </div>
      )
    }

    // Therapy service (verhaltenstherapie)
    if (translationKey === 'therapy') {
      return (
        <div className="space-y-6">
          <p className="text-lg leading-relaxed">
            <strong>{fullContent.intro}</strong>
          </p>
          <p className="leading-relaxed">{fullContent.paragraph1}</p>

          <h4 className="text-2xl font-bold text-primary mt-8">{fullContent.focusTitle}</h4>
          <ul className="list-disc list-inside space-y-2 ml-4">
            {fullContent.focus.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h4 className="text-2xl font-bold text-primary mt-8">{fullContent.helpfulForTitle}</h4>
          <ul className="list-disc list-inside space-y-2 ml-4">
            {fullContent.helpfulFor.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h4 className="text-2xl font-bold text-primary mt-8">{fullContent.methodsTitle}</h4>
          <ul className="list-disc list-inside space-y-2 ml-4">
            {fullContent.methods.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <p className="leading-relaxed mt-6">{fullContent.conclusion}</p>
        </div>
      )
    }

    // Couples therapy
    if (translationKey === 'couples') {
      return (
        <div className="space-y-6">
          <p className="text-lg leading-relaxed">
            <strong>{fullContent.intro}</strong>
          </p>
          <p className="leading-relaxed">{fullContent.paragraph1}</p>
        </div>
      )
    }

    // Birthchart Reading
    if (translationKey === 'birthchart') {
      return (
        <div className="space-y-6">
          <p className="text-lg leading-relaxed">
            <strong>{fullContent.intro}</strong>
          </p>
          <p className="leading-relaxed">{fullContent.paragraph1}</p>

          <h4 className="text-2xl font-bold text-primary mt-8">{fullContent.focusTitle}</h4>
          <ul className="list-disc list-inside space-y-2 ml-4">
            {fullContent.focus.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <p className="leading-relaxed mt-6">{fullContent.paragraph2}</p>
          <p className="leading-relaxed">{fullContent.paragraph3}</p>

          <h4 className="text-2xl font-bold text-primary mt-8">{fullContent.integrationTitle}</h4>
          <p className="leading-relaxed">{fullContent.integration}</p>
        </div>
      )
    }

    // Prevention
    if (translationKey === 'prevention') {
      return (
        <div className="space-y-6">
          <p className="text-lg leading-relaxed">
            <strong>{fullContent.intro}</strong>
          </p>
          <p className="leading-relaxed">{fullContent.paragraph1}</p>

          <h4 className="text-2xl font-bold text-primary mt-8">{fullContent.modulesTitle}</h4>
          <ul className="list-disc list-inside space-y-2 ml-4">
            {fullContent.modules.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <p className="leading-relaxed mt-6">{fullContent.conclusion}</p>
        </div>
      )
    }

    // Business coaching
    if (translationKey === 'business') {
      return (
        <div className="space-y-6">
          <p className="leading-relaxed">{fullContent.paragraph1}</p>

          <h4 className="text-2xl font-bold text-primary mt-8">{fullContent.scopeTitle}</h4>
          <ul className="list-disc list-inside space-y-2 ml-4">
            {fullContent.scope.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <p className="leading-relaxed mt-6">{fullContent.conclusion}</p>
        </div>
      )
    }

    return null
  }

  // Get the service title based on serviceId
  const getServiceTitle = (id: string) => {
    const services = t.services as any
    
    // Map German IDs to translation keys (same as in renderServiceContent)
    const idMap: Record<string, string> = {
      'verhaltenstherapie': 'therapy',
      'paartherapie': 'couples',
      'praevention': 'prevention',
    }
    
    const translationKey = idMap[id] || id
    return services[translationKey]?.title || ''
  }

  const serviceTitle = getServiceTitle(serviceId)
  const serviceContent = renderServiceContent(serviceId)

  if (!serviceContent) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 animate-fade-in">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-slide-up">
        <div className="sticky top-0 bg-gradient-to-r from-primary to-secondary text-white p-6 rounded-t-2xl flex justify-between items-center">
          <h2 className="text-3xl font-bold">{serviceTitle}</h2>
          <button
            onClick={onClose}
            className="text-white hover:text-accent transition-colors p-2"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="p-8 text-gray-700">
          {serviceContent}
        </div>
      </div>

      <style>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
    </div>
  )
}

export default ServiceDetails

