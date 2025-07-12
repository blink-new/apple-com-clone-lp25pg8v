import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Cloud, Users, Settings, Crown } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface NavigationProps {
  onUpgrade: () => void
}

export default function Navigation({ onUpgrade }: NavigationProps) {
  const location = useLocation()

  const isActive = (path: string) => location.pathname === path

  return (
    <>
      {/* Top Header */}
      <header className="bg-white/10 dark:bg-black/20 backdrop-blur-md border-b border-white/20 dark:border-gray-700/30 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Cloud className="w-8 h-8 text-white" />
            <h1 className="text-xl font-bold text-white">WeatherSatellite</h1>
          </div>
          
          <Button
            onClick={onUpgrade}
            className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white border-0 font-semibold"
          >
            <Crown className="w-4 h-4 mr-2" />
            Upgrade to Pro
          </Button>
        </div>
      </header>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white/10 dark:bg-black/20 backdrop-blur-md border-t border-white/20 dark:border-gray-700/30 z-50">
        <div className="max-w-6xl mx-auto px-4 py-2">
          <div className="flex justify-around">
            <Link
              to="/"
              className={`flex flex-col items-center space-y-1 p-2 rounded-lg transition-colors ${
                isActive('/') 
                  ? 'bg-white/20 text-white' 
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              <Cloud className="w-6 h-6" />
              <span className="text-xs font-medium">Weather</span>
            </Link>
            
            <Link
              to="/social"
              className={`flex flex-col items-center space-y-1 p-2 rounded-lg transition-colors ${
                isActive('/social') 
                  ? 'bg-white/20 text-white' 
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              <Users className="w-6 h-6" />
              <span className="text-xs font-medium">Social</span>
            </Link>
            
            <Link
              to="/settings"
              className={`flex flex-col items-center space-y-1 p-2 rounded-lg transition-colors ${
                isActive('/settings') 
                  ? 'bg-white/20 text-white' 
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              <Settings className="w-6 h-6" />
              <span className="text-xs font-medium">Settings</span>
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}