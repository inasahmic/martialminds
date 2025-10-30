const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-primary via-secondary to-primary text-white py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/logo.jpeg"
                alt="Martial Minds Logo"
                className="h-12 w-12 rounded-full shadow-lg"
              />
              <span className="text-xl font-bold">Martial Minds</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Praxis für Psychotherapie<br />
              (Nach dem Heilpraktikergesetz)
            </p>
            <a 
              href="https://www.instagram.com/_martialminds_" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 mt-4 text-gray-300 hover:text-accent transition-colors group"
            >
              <svg 
                className="w-6 h-6 group-hover:scale-110 transition-transform" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span className="font-medium">@_martialminds_</span>
            </a>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-accent">Kontakt</h4>
            <div className="space-y-2 text-gray-300">
              <p>Azra Mujcinovic, M.Sc.</p>
              <p>Heilpraktikerin für Psychotherapie</p>
              <p className="pt-2">
                <a href="tel:01751427016" className="hover:text-accent transition-colors">
                  Tel. 0175 1427016
                </a>
              </p>
              <p>
                <a href="mailto:kontakt@martial-minds.de" className="hover:text-accent transition-colors">
                  kontakt@martial-minds.de
                </a>
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-accent">Qualifikationen</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• Master of Science in Social Psychology</li>
              <li>• EMDR-Therapeutin</li>
              <li>• Zertifizierter Birkman Coach</li>
              <li>• Psychologische Birthchart Readerin</li>
              <li>• 3. Dan Kuk Sool Won</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Martial Minds. Alle Rechte vorbehalten.
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="hover:text-accent transition-colors flex items-center space-x-2"
              >
                <span>Nach oben</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

