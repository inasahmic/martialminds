import { useLanguage } from '../contexts/LanguageContext'

const About = () => {
  const { t } = useLanguage()
  
  return (
    <section id="über-mich" className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4 md:mb-6 px-2">
            {t.about.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start mb-8 md:mb-12">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-primary to-secondary text-white rounded-2xl p-6 sm:p-8">
              <h3 className="text-2xl sm:text-3xl font-bold mb-3 md:mb-4">{t.about.name}</h3>
              <p className="text-lg sm:text-xl text-accent mb-2">{t.about.degree}</p>
              <p className="text-base sm:text-lg">{t.about.profession}</p>
            </div>
            
            <div className="relative">
              <img
                src={`${import.meta.env.BASE_URL}me-3.jpeg`}
                alt="Azra Mujcinovic"
                className="rounded-2xl shadow-2xl w-full object-contain max-h-[400px] md:max-h-none mx-auto"
              />
            </div>
          </div>

          <div className="space-y-4 md:space-y-6 text-gray-700 leading-relaxed text-base sm:text-lg">
            <p>
              {t.about.paragraph1}
            </p>
            
            <p>
              {t.about.paragraph2}
            </p>

            <div className="bg-light rounded-xl p-6 my-8">
              <h4 className="text-2xl font-bold text-primary mb-4">{t.about.qualificationsTitle}</h4>
              <ul className="space-y-3">
                {t.about.qualifications.map((qualification, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-accent flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{qualification}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p dangerouslySetInnerHTML={{ __html: t.about.paragraph3 }} />

            <div className="bg-accent bg-opacity-10 border-l-4 border-accent rounded-r-xl p-6 my-8">
              <p className="text-lg italic" dangerouslySetInnerHTML={{ __html: t.about.inspiration }} />
            </div>

            <p>
              {t.about.attitude}
            </p>

            <p className="text-lg font-medium text-primary">
              {t.about.closing}
            </p>

            <p className="text-lg">
              {t.about.greetingClosing}<br />
              <span className="font-bold text-primary">{t.about.name}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

