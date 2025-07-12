import { useState, useEffect } from 'react'
import { MapPin, Wind, Droplets, Eye, Thermometer, Sun, CloudRain, Cloud, Snowflake } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import HourlyForecast from '@/components/HourlyForecast'
import WeeklyForecast from '@/components/WeeklyForecast'

interface WeatherData {
  location: string
  temperature: number
  condition: string
  description: string
  humidity: number
  windSpeed: number
  visibility: number
  feelsLike: number
  uvIndex: number
  pressure: number
}

const mockWeatherData: WeatherData = {
  location: "San Francisco, CA",
  temperature: 72,
  condition: "Partly Cloudy",
  description: "Partly cloudy with a chance of sunshine",
  humidity: 65,
  windSpeed: 12,
  visibility: 10,
  feelsLike: 75,
  uvIndex: 6,
  pressure: 30.15
}

export default function WeatherHome() {
  const [weather, setWeather] = useState<WeatherData>(mockWeatherData)
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const getWeatherIcon = (condition: string) => {
    switch (condition.toLowerCase()) {
      case 'sunny':
      case 'clear':
        return <Sun className="w-24 h-24 text-yellow-400" />
      case 'partly cloudy':
        return <Cloud className="w-24 h-24 text-gray-300" />
      case 'rain':
      case 'rainy':
        return <CloudRain className="w-24 h-24 text-blue-400" />
      case 'snow':
        return <Snowflake className="w-24 h-24 text-blue-200" />
      default:
        return <Cloud className="w-24 h-24 text-gray-300" />
    }
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      hour12: true 
    })
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 space-y-6">
      {/* Current Weather Card */}
      <Card className="bg-white/10 dark:bg-black/20 backdrop-blur-md border-white/20 dark:border-gray-700/30 text-white">
        <CardContent className="p-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-white/70" />
              <span className="text-lg font-medium">{weather.location}</span>
            </div>
            <div className="text-right">
              <div className="text-sm text-white/70">{currentTime.toLocaleDateString()}</div>
              <div className="text-lg font-medium">{formatTime(currentTime)}</div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <div className="text-6xl font-thin mb-2">{weather.temperature}°</div>
              <div className="text-xl font-medium mb-1">{weather.condition}</div>
              <div className="text-white/70">{weather.description}</div>
              <div className="text-sm text-white/70 mt-2">Feels like {weather.feelsLike}°</div>
            </div>
            <div className="flex flex-col items-center">
              {getWeatherIcon(weather.condition)}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Hourly Forecast */}
      <HourlyForecast />

      {/* Weather Details Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-white/10 dark:bg-black/20 backdrop-blur-md border-white/20 dark:border-gray-700/30 text-white">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2 mb-2">
              <Wind className="w-5 h-5 text-white/70" />
              <span className="text-sm text-white/70">Wind</span>
            </div>
            <div className="text-2xl font-semibold">{weather.windSpeed}</div>
            <div className="text-xs text-white/70">mph</div>
          </CardContent>
        </Card>

        <Card className="bg-white/10 dark:bg-black/20 backdrop-blur-md border-white/20 dark:border-gray-700/30 text-white">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2 mb-2">
              <Droplets className="w-5 h-5 text-white/70" />
              <span className="text-sm text-white/70">Humidity</span>
            </div>
            <div className="text-2xl font-semibold">{weather.humidity}</div>
            <div className="text-xs text-white/70">%</div>
          </CardContent>
        </Card>

        <Card className="bg-white/10 dark:bg-black/20 backdrop-blur-md border-white/20 dark:border-gray-700/30 text-white">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2 mb-2">
              <Eye className="w-5 h-5 text-white/70" />
              <span className="text-sm text-white/70">Visibility</span>
            </div>
            <div className="text-2xl font-semibold">{weather.visibility}</div>
            <div className="text-xs text-white/70">mi</div>
          </CardContent>
        </Card>

        <Card className="bg-white/10 dark:bg-black/20 backdrop-blur-md border-white/20 dark:border-gray-700/30 text-white">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2 mb-2">
              <Thermometer className="w-5 h-5 text-white/70" />
              <span className="text-sm text-white/70">UV Index</span>
            </div>
            <div className="text-2xl font-semibold">{weather.uvIndex}</div>
            <div className="text-xs text-white/70">of 10</div>
          </CardContent>
        </Card>
      </div>

      {/* Weekly Forecast */}
      <WeeklyForecast />
    </div>
  )
}