import { useState } from 'react'
import { LanguageProvider } from './contexts/LanguageContext'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Introduction from './components/Introduction'
import Services from './components/Services'
import ServiceDetails from './components/ServiceDetails'
import About from './components/About'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [selectedService, setSelectedService] = useState<string | null>(null)

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <Navigation />
        <Hero />
        <Introduction />
        <Services onServiceClick={setSelectedService} />
        {selectedService && (
          <ServiceDetails 
            serviceId={selectedService} 
            onClose={() => setSelectedService(null)} 
          />
        )}
        <About />
        <Pricing />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  )
}

export default App

