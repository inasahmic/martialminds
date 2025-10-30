import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  const toggleLanguage = () => {
    setLanguage(language === 'de' ? 'en' : 'de')
  }

  const menuItems = [
    { label: t.nav.introduction, id: 'einführung' },
    { label: t.nav.offers, id: 'angebote' },
    { label: t.nav.about, id: 'über-mich' },
    { label: t.nav.pricing, id: 'kosten' },
    { label: t.nav.contact, id: 'kontakt' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-white/80 shadow-sm border-b border-gray-200/50 py-3 md:py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 md:space-x-3">
            <img
              src="/logo.jpeg"
              alt="Martial Minds Logo"
              className="h-10 w-10 md:h-14 md:w-14 rounded-full object-cover shadow-lg ring-2 ring-accent/50"
            />
            <span className="text-lg md:text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Martial Minds
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-5 py-2.5 font-medium text-gray-700 rounded-full hover:bg-gradient-to-r hover:from-accent hover:to-amber-400 hover:text-white transition-all duration-300 hover:shadow-lg"
              >
                {item.label}
              </button>
            ))}
            
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="ml-2 px-4 py-2.5 font-medium text-gray-700 rounded-full border-2 border-gray-300 hover:border-accent hover:bg-accent hover:text-white transition-all duration-300 flex items-center space-x-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              </svg>
              <span className="font-semibold">{language === 'de' ? 'EN' : 'DE'}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden focus:outline-none p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 backdrop-blur-lg bg-white/90 rounded-2xl shadow-xl p-4 space-y-2 border border-gray-200/50">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-center px-4 py-3 text-gray-700 font-medium rounded-xl hover:bg-gradient-to-r hover:from-accent hover:to-amber-400 hover:text-white transition-all duration-300"
              >
                {item.label}
              </button>
            ))}
            
            {/* Mobile Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="w-full px-4 py-3 font-medium text-gray-700 rounded-xl border-2 border-gray-300 hover:border-accent hover:bg-accent hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              </svg>
              <span className="font-semibold">{language === 'de' ? 'EN' : 'DE'}</span>
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation

