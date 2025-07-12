import { useState } from 'react'
import { X, Crown, Check, Gift, Zap, Cloud, Shield, Users } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface SubscriptionModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function SubscriptionModal({ isOpen, onClose }: SubscriptionModalProps) {
  const [selectedPlan, setSelectedPlan] = useState<'trial' | 'annual'>('trial')

  const features = [
    { icon: <Zap className="w-5 h-5" />, text: "Ultra-precise hourly forecasts" },
    { icon: <Cloud className="w-5 h-5" />, text: "Satellite weather imaging" },
    { icon: <Shield className="w-5 h-5" />, text: "Storm tracking & alerts" },
    { icon: <Users className="w-5 h-5" />, text: "Premium social features" },
    { icon: <Crown className="w-5 h-5" />, text: "Ad-free experience" },
    { icon: <Check className="w-5 h-5" />, text: "Priority customer support" }
  ]

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-white/10 dark:bg-black/20 backdrop-blur-md border-white/20 dark:border-gray-700/30 text-white">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-bold flex items-center">
              <Crown className="w-8 h-8 text-yellow-400 mr-3" />
              WeatherSatellite+
            </DialogTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-white/70 hover:text-white hover:bg-white/10"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          {/* Features */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Premium Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="text-yellow-400">{feature.icon}</div>
                  <span className="text-sm">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Plans */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Choose Your Plan</h3>
            
            {/* Free Trial Plan */}
            <Card 
              className={`cursor-pointer transition-all ${
                selectedPlan === 'trial' 
                  ? 'bg-gradient-to-r from-green-500/20 to-blue-500/20 border-green-400/50' 
                  : 'bg-white/5 border-white/20 hover:bg-white/10'
              }`}
              onClick={() => setSelectedPlan('trial')}
            >
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-4 h-4 rounded-full border-2 ${
                      selectedPlan === 'trial' ? 'bg-green-400 border-green-400' : 'border-white/30'
                    }`} />
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="font-semibold">1 Year Free Trial</span>
                        <Badge className="bg-green-500 text-white">
                          <Gift className="w-3 h-3 mr-1" />
                          Best Value
                        </Badge>
                      </div>
                      <div className="text-sm text-white/70">
                        Full access to all premium features
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-400">FREE</div>
                    <div className="text-xs text-white/70">For 1 year</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Annual Plan */}
            <Card 
              className={`cursor-pointer transition-all ${
                selectedPlan === 'annual' 
                  ? 'bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border-yellow-400/50' 
                  : 'bg-white/5 border-white/20 hover:bg-white/10'
              }`}
              onClick={() => setSelectedPlan('annual')}
            >
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-4 h-4 rounded-full border-2 ${
                      selectedPlan === 'annual' ? 'bg-yellow-400 border-yellow-400' : 'border-white/30'
                    }`} />
                    <div>
                      <div className="font-semibold">Annual Subscription</div>
                      <div className="text-sm text-white/70">
                        After free trial ends
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold">{formatPrice(23233234)}</div>
                    <div className="text-xs text-white/70">per year</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA Buttons */}
          <div className="space-y-3">
            {selectedPlan === 'trial' ? (
              <Button className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-semibold py-3 text-lg">
                <Gift className="w-5 h-5 mr-2" />
                Start Free Trial (1 Year)
              </Button>
            ) : (
              <Button className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-semibold py-3 text-lg">
                <Crown className="w-5 h-5 mr-2" />
                Subscribe for {formatPrice(23233234)}/year
              </Button>
            )}
            
            <Button 
              variant="ghost" 
              className="w-full text-white/70 hover:text-white hover:bg-white/10"
              onClick={onClose}
            >
              Maybe Later
            </Button>
          </div>

          {/* Terms */}
          <div className="text-xs text-white/60 text-center space-y-1">
            <p>Free trial automatically renews to annual subscription.</p>
            <p>Cancel anytime. Terms and conditions apply.</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}