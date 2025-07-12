import { Sun, Cloud, CloudRain, Snowflake } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface DailyData {
  day: string
  date: string
  condition: string
  high: number
  low: number
  precipitation: number
}

const getWeeklyData = () => {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  const today = new Date()
  
  return days.map((day, index) => {
    const date = new Date(today)
    date.setDate(today.getDate() + index)
    
    // Mock weather data for each day
    const conditions = ['Sunny', 'Partly Cloudy', 'Rain', 'Cloudy', 'Sunny', 'Rain', 'Partly Cloudy']
    const highs = [75, 73, 68, 71, 76, 65, 72]
    const lows = [58, 56, 52, 55, 59, 48, 54]
    const precipitation = [0, 10, 80, 20, 0, 90, 30]
    
    return {
      day: index === 0 ? 'Today' : day,
      date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      condition: conditions[index],
      high: highs[index],
      low: lows[index],
      precipitation: precipitation[index]
    }
  })
}

export default function WeeklyForecast() {
  const weeklyData = getWeeklyData()

  const getWeeklyIcon = (condition: string) => {
    switch (condition.toLowerCase()) {
      case 'sunny':
      case 'clear':
        return <Sun className="w-5 h-5 text-yellow-400" />
      case 'partly cloudy':
      case 'cloudy':
        return <Cloud className="w-5 h-5 text-gray-300" />
      case 'rain':
      case 'rainy':
        return <CloudRain className="w-5 h-5 text-blue-400" />
      case 'snow':
        return <Snowflake className="w-5 h-5 text-blue-200" />
      default:
        return <Cloud className="w-5 h-5 text-gray-300" />
    }
  }

  return (
    <Card className="bg-white/10 dark:bg-black/20 backdrop-blur-md border-white/20 dark:border-gray-700/30 text-white">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-medium">7-Day Forecast</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {weeklyData.map((day, index) => (
          <div key={index} className="flex items-center justify-between py-2">
            <div className="flex items-center space-x-4 flex-1">
              <div className="w-12 text-left">
                <div className="font-medium">{day.day}</div>
                <div className="text-xs text-white/70">{day.date}</div>
              </div>
              <div className="flex items-center space-x-2">
                {getWeeklyIcon(day.condition)}
                <span className="text-sm">{day.condition}</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="text-xs text-white/70 w-8 text-center">
                {day.precipitation > 0 ? `${day.precipitation}%` : ''}
              </div>
              <div className="flex items-center space-x-2 w-16 justify-end">
                <span className="text-white/70">{day.low}°</span>
                <span className="font-semibold">{day.high}°</span>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}