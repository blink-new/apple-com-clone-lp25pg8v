import { useState } from 'react'
import { Moon, Sun, RotateCcw, Smartphone, Bell, MapPin, Crown, Download } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'
import { useTheme } from '@/components/ThemeProvider'

interface SettingsProps {
  onRestart: () => void
}

export default function Settings({ onRestart }: SettingsProps) {
  const { theme, setTheme } = useTheme()
  const [notifications, setNotifications] = useState(true)
  const [locationServices, setLocationServices] = useState(true)
  const [isUpdating, setIsUpdating] = useState(false)

  const handleSoftwareUpdate = () => {
    setIsUpdating(true)
    setTimeout(() => {
      setIsUpdating(false)
      onRestart()
    }, 3000)
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-6 space-y-6">
      {/* App Info */}
      <Card className="bg-white/10 dark:bg-black/20 backdrop-blur-md border-white/20 dark:border-gray-700/30 text-white">
        <CardContent className="p-6 text-center">
          <div className="w-20 h-20 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Smartphone className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-2xl font-bold mb-2">WeatherSatellite</h1>
          <p className="text-white/70 mb-4">Version 2.1.0</p>
          <Button
            variant="outline"
            className="border-white/20 text-white hover:bg-white/10"
          >
            <Crown className="w-4 h-4 mr-2" />
            Upgrade to Pro
          </Button>
        </CardContent>
      </Card>

      {/* Appearance */}
      <Card className="bg-white/10 dark:bg-black/20 backdrop-blur-md border-white/20 dark:border-gray-700/30 text-white">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Appearance</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {theme === 'dark' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
              <div>
                <div className="font-medium">Theme</div>
                <div className="text-sm text-white/70">
                  {theme === 'dark' ? 'Dark mode' : theme === 'light' ? 'Light mode' : 'System'}
                </div>
              </div>
            </div>
            <div className="flex space-x-2">
              <Button
                variant={theme === 'light' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setTheme('light')}
                className="border-white/20"
              >
                <Sun className="w-4 h-4" />
              </Button>
              <Button
                variant={theme === 'dark' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setTheme('dark')}
                className="border-white/20"
              >
                <Moon className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Preferences */}
      <Card className="bg-white/10 dark:bg-black/20 backdrop-blur-md border-white/20 dark:border-gray-700/30 text-white">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Preferences</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Bell className="w-5 h-5" />
              <div>
                <div className="font-medium">Notifications</div>
                <div className="text-sm text-white/70">Weather alerts and updates</div>
              </div>
            </div>
            <Switch
              checked={notifications}
              onCheckedChange={setNotifications}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5" />
              <div>
                <div className="font-medium">Location Services</div>
                <div className="text-sm text-white/70">Automatic location detection</div>
              </div>
            </div>
            <Switch
              checked={locationServices}
              onCheckedChange={setLocationServices}
            />
          </div>
        </CardContent>
      </Card>

      {/* Software Update */}
      <Card className="bg-white/10 dark:bg-black/20 backdrop-blur-md border-white/20 dark:border-gray-700/30 text-white">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Software Update</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-3">
            <Download className="w-5 h-5 text-green-400" />
            <div>
              <div className="font-medium">WeatherSatellite v2.2.0</div>
              <div className="text-sm text-white/70">
                New features: Enhanced forecasting, performance improvements
              </div>
            </div>
          </div>
          
          <Button
            onClick={handleSoftwareUpdate}
            disabled={isUpdating}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white"
          >
            {isUpdating ? (
              <>
                <RotateCcw className="w-4 h-4 mr-2 animate-spin" />
                Installing Update...
              </>
            ) : (
              <>
                <Download className="w-4 h-4 mr-2" />
                Install Update & Restart
              </>
            )}
          </Button>
          
          {isUpdating && (
            <div className="space-y-2">
              <div className="w-full bg-white/20 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full animate-pulse" style={{ width: '60%' }}></div>
              </div>
              <p className="text-sm text-white/70 text-center">
                Downloading and installing updates...
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* About */}
      <Card className="bg-white/10 dark:bg-black/20 backdrop-blur-md border-white/20 dark:border-gray-700/30 text-white">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">About</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm text-white/70">
          <div>© 2024 WeatherSatellite Inc.</div>
          <div>Privacy Policy • Terms of Service • Support</div>
          <div>Made with ❤️ for weather enthusiasts</div>
        </CardContent>
      </Card>
    </div>
  )
}