import { useLanguage } from '../contexts/LanguageContext'

const Hero = () => {
  const { t } = useLanguage()
  
  const scrollToIntro = () => {
    const element = document.getElementById('einführung')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-amber-50/30 to-slate-100">
      {/* Background Image with Modern Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: 'url(/me-1.jpeg)',
        }}
      />
      
      {/* Modern Gradient Mesh */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-amber-500/10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-200/20 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
        <div className="mb-6 md:mb-8 animate-fade-in">
          <img
            src="/logo.jpeg"
            alt="Martial Minds Logo"
            className="h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 mx-auto rounded-full shadow-2xl ring-4 ring-accent/30 mb-4 md:mb-6"
          />
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent animate-fade-in-up leading-tight">
          {t.hero.title}
        </h1>
        
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-3 md:mb-4 bg-gradient-to-r from-accent to-amber-600 bg-clip-text text-transparent font-semibold animate-fade-in-up animation-delay-200 px-2">
          {t.hero.subtitle}
        </p>
        
        <p className="text-base sm:text-lg md:text-xl mb-8 md:mb-12 text-gray-600 animate-fade-in-up animation-delay-400 px-2">
          {t.hero.description}
        </p>

        <button
          onClick={scrollToIntro}
          className="bg-gradient-to-r from-accent to-amber-500 hover:from-amber-600 hover:to-accent text-white px-6 sm:px-8 md:px-10 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl animate-fade-in-up animation-delay-600"
        >
          {t.hero.button}
        </button>
      </div>


      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer" onClick={scrollToIntro}>
        <div className="bg-gradient-to-r from-accent to-amber-500 p-3 rounded-full shadow-lg hover:shadow-xl transition-all">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
          animation-fill-mode: forwards;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
          animation-fill-mode: forwards;
        }
        .animation-delay-600 {
          animation-delay: 0.6s;
          opacity: 0;
          animation-fill-mode: forwards;
        }
      `}</style>
    </div>
  )
}

export default Hero

