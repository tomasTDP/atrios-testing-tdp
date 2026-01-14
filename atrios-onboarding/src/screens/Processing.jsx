import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Zap, CheckCircle, Clock, ArrowRight } from 'lucide-react'
import { useOnboarding } from '@/context/OnboardingContext'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function Processing() {
  const navigate = useNavigate()
  const { updateUserData } = useOnboarding()
  const [processing, setProcessing] = useState(true)

  useEffect(() => {
    const processProfile = async () => {
      // Simulate processing delay (2-3 seconds)
      await new Promise(resolve => setTimeout(resolve, 2500))
      setProcessing(false)
    }

    processProfile()
  }, [])

  const handleTierSelection = (tier) => {
    updateUserData({ tier })
    if (tier === 'tier1') {
      navigate('/fast-track')
    } else if (tier === 'tier2') {
      navigate('/qualified')
    } else if (tier === 'tier3') {
      navigate('/waitlist')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background flex items-center justify-center p-6">
      <Card className="w-full max-w-[600px] shadow-lg">
        {processing ? (
          <CardContent className="pt-16 pb-16">
            <div className="text-center space-y-8 py-8">
              <div className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-muted border-t-primary"></div>
              <div className="space-y-3">
                <h2 className="text-2xl font-bold">Analyzing Your Profile</h2>
                <p className="text-base text-secondary">
                  Evaluating network strength and professional fit...
                </p>
              </div>
            </div>
          </CardContent>
        ) : (
          <>
            <CardHeader className="text-center space-y-4 pt-12 px-12">
              <h2 className="text-[32px] font-bold">Profile Analysis Complete</h2>
              <p className="text-lg text-secondary">
                Choose a path to explore the demo
              </p>
            </CardHeader>
            <CardContent className="space-y-6 pb-12 px-12">
              <div className="space-y-4">
                <button
                  onClick={() => handleTierSelection('tier1')}
                  className="w-full p-6 flex items-center gap-4 rounded-xl border-2 border-border bg-background transition-all duration-200 hover:border-success hover:bg-success/5 hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-success/10 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-success" />
                  </div>
                  <div className="flex-1 text-left">
                    <div className="font-bold text-lg mb-1">View Fast Track Path</div>
                    <div className="text-sm text-secondary">
                      Strong network alignment - expedited onboarding
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-secondary" />
                </button>

                <button
                  onClick={() => handleTierSelection('tier2')}
                  className="w-full p-6 flex items-center gap-4 rounded-xl border-2 border-border bg-background transition-all duration-200 hover:border-accent hover:bg-accent/5 hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex-1 text-left">
                    <div className="font-bold text-lg mb-1">View Qualified Path</div>
                    <div className="text-sm text-secondary">
                      Additional verification required
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-secondary" />
                </button>

                <button
                  onClick={() => handleTierSelection('tier3')}
                  className="w-full p-6 flex items-center gap-4 rounded-xl border-2 border-border bg-background transition-all duration-200 hover:border-warning hover:bg-warning/5 hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-warning/10 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-warning" />
                  </div>
                  <div className="flex-1 text-left">
                    <div className="font-bold text-lg mb-1">View Waitlist Path</div>
                    <div className="text-sm text-secondary">
                      Under review - join our waitlist
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-secondary" />
                </button>
              </div>

              <div className="pt-6 border-t border-border">
                <p className="text-sm text-center text-secondary italic">
                  For demo purposes - choose a path to explore
                </p>
              </div>
            </CardContent>
          </>
        )}
      </Card>
    </div>
  )
}
