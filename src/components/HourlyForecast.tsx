import { Sun, Cloud, CloudRain } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'

interface HourlyData {
  time: string
  temperature: number
  condition: string
  precipitation: number
}

const hourlyData: HourlyData[] = [
  { time: "Now", temperature: 72, condition: "Partly Cloudy", precipitation: 0 },
  { time: "2 PM", temperature: 74, condition: "Sunny", precipitation: 0 },
  { time: "3 PM", temperature: 76, condition: "Sunny", precipitation: 0 },
  { time: "4 PM", temperature: 75, condition: "Partly Cloudy", precipitation: 10 },
  { time: "5 PM", temperature: 73, condition: "Partly Cloudy", precipitation: 20 },
  { time: "6 PM", temperature: 71, condition: "Rain", precipitation: 60 },
  { time: "7 PM", temperature: 69, condition: "Rain", precipitation: 80 },
  { time: "8 PM", temperature: 67, condition: "Partly Cloudy", precipitation: 30 },
  { time: "9 PM", temperature: 65, condition: "Clear", precipitation: 0 },
  { time: "10 PM", temperature: 63, condition: "Clear", precipitation: 0 },
]

export default function HourlyForecast() {
  const getHourlyIcon = (condition: string, size: string = "w-6 h-6") => {
    switch (condition.toLowerCase()) {
      case 'sunny':
      case 'clear':
        return <Sun className={`${size} text-yellow-400`} />
      case 'partly cloudy':
        return <Cloud className={`${size} text-gray-300`} />
      case 'rain':
      case 'rainy':
        return <CloudRain className={`${size} text-blue-400`} />
      default:
        return <Cloud className={`${size} text-gray-300`} />
    }
  }

  return (
    <Card className="bg-white/10 dark:bg-black/20 backdrop-blur-md border-white/20 dark:border-gray-700/30 text-white">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-medium">Hourly Forecast</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="w-full whitespace-nowrap">
          <div className="flex space-x-4 pb-4">
            {hourlyData.map((hour, index) => (
              <div key={index} className="flex flex-col items-center space-y-2 min-w-[80px]">
                <div className="text-sm text-white/70 font-medium">{hour.time}</div>
                <div className="flex items-center justify-center">
                  {getHourlyIcon(hour.condition)}
                </div>
                <div className="text-sm text-white/70">{hour.precipitation}%</div>
                <div className="text-lg font-semibold">{hour.temperature}°</div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}