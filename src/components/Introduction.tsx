import { useLanguage } from '../contexts/LanguageContext'

const Introduction = () => {
  const { t } = useLanguage()
  
  return (
    <section id="einführung" className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4 md:mb-6 px-2">
            {t.introduction.title}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 px-2">
            {t.introduction.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
          <div className="order-2 md:order-1">
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 md:mb-6">
              <span className="font-semibold text-primary">{t.introduction.greeting}</span>
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 md:mb-6">
              {t.introduction.description}
            </p>
          </div>
          <div className="relative order-1 md:order-2">
            <img
              src="/me 2.jpeg"
              alt="Praxis"
              className="rounded-lg shadow-2xl w-full object-contain max-h-[400px] md:max-h-none mx-auto"
            />
          </div>
        </div>

        <div className="bg-gradient-to-br from-primary to-secondary text-white rounded-2xl p-6 sm:p-8 md:p-12 mb-12 md:mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">{t.introduction.focusTitle}</h3>
          <p className="text-lg mb-6 md:mb-8">{t.introduction.focusIntro}</p>
          <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
            {t.introduction.focus.map((item, index) => (
              <div key={index} className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-accent flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-lg">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12 md:mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-6 text-center">{t.introduction.therapyTitle}</h3>
          <div className="bg-gray-50 rounded-xl p-6 md:p-8 space-y-4">
            <p className="text-gray-700 leading-relaxed">{t.introduction.onlineDescription}</p>
            <p className="text-gray-700 leading-relaxed">{t.introduction.flexibleAppointmentsDescription}</p>
            <p className="text-gray-700 leading-relaxed">{t.introduction.inPersonOption}</p>
          </div>
        </div>

        <div className="mb-12 md:mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-6 text-center">{t.introduction.targetGroupsTitle}</h3>
          <div className="bg-gray-50 rounded-xl p-6 md:p-8 space-y-4">
            <p className="text-gray-700 leading-relaxed">{t.introduction.targetGroupsDescription}</p>
            <p className="text-gray-700 leading-relaxed">{t.introduction.targetGroupsDescription2}</p>
            <p className="text-gray-700 leading-relaxed font-medium">{t.introduction.costsNote}</p>
          </div>
        </div>

        <div className="bg-light rounded-2xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-primary mb-6">{t.introduction.advantagesTitle}</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {t.introduction.advantages.map((item, index) => (
              <div key={index} className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-accent flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Introduction

