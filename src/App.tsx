import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from '@/components/ui/toaster'
import { ThemeProvider } from '@/components/ThemeProvider'
import WeatherHome from '@/components/WeatherHome'
import SocialFeed from '@/components/SocialFeed'
import Settings from '@/components/Settings'
import Navigation from '@/components/Navigation'
import SubscriptionModal from '@/components/SubscriptionModal'
import './App.css'

function App() {
  const [showSubscription, setShowSubscription] = useState(false)
  const [isRestarting, setIsRestarting] = useState(false)

  const handleRestart = () => {
    setIsRestarting(true)
    setTimeout(() => {
      window.location.reload()
    }, 2000)
  }

  return (
    <ThemeProvider defaultTheme="light" storageKey="weathersatelite-theme">
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
          {isRestarting ? (
            <div className="flex items-center justify-center min-h-screen">
              <div className="text-center text-white">
                <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-xl font-medium">Restarting WeatherSatellite...</p>
                <p className="text-sm opacity-80 mt-2">Installing updates...</p>
              </div>
            </div>
          ) : (
            <>
              <Navigation onUpgrade={() => setShowSubscription(true)} />
              
              <main className="pb-20">
                <Routes>
                  <Route path="/" element={<WeatherHome />} />
                  <Route path="/social" element={<SocialFeed />} />
                  <Route path="/settings" element={<Settings onRestart={handleRestart} />} />
                </Routes>
              </main>

              <SubscriptionModal 
                isOpen={showSubscription}
                onClose={() => setShowSubscription(false)}
              />
            </>
          )}
          
          <Toaster />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App