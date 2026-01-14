import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useOnboarding } from '@/context/OnboardingContext'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function LinkedInConnect() {
  const navigate = useNavigate()
  const { updateUserData, userData } = useOnboarding()
  const [isConnecting, setIsConnecting] = useState(false)

  const handleConnect = async () => {
    setIsConnecting(true)

    // Simulate OAuth flow with 2-3 second delay
    await new Promise(resolve => setTimeout(resolve, 2500))

    updateUserData({ linkedInConnected: true })
    setIsConnecting(false)
    navigate('/processing')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 flex items-center justify-center p-4">
      <Card className="w-full max-w-lg shadow-lg border-border/50">
        <CardHeader className="space-y-3 pt-10">
          <CardTitle className="text-3xl font-bold tracking-tight">Connect Your LinkedIn</CardTitle>
          <CardDescription className="text-base">
            We'll analyze your professional network to determine your fit
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8 pb-10">
          <div className="space-y-4 text-[15px] leading-relaxed">
            <p className="text-foreground/80">
              Welcome, <span className="font-medium text-foreground">{userData.firstName}</span>! To assess your application, we need to
              understand your professional network.
            </p>
            <p className="text-foreground/80">
              By connecting LinkedIn, we can predict your likelihood of acceptance
              before requesting detailed connection data.
            </p>
            <div className="bg-muted/60 border border-border/50 p-5 rounded-lg space-y-3">
              <p className="font-semibold text-foreground">What we'll access:</p>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  <span>Professional profile information</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  <span>Network size and composition</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  <span>Industry and experience data</span>
                </li>
              </ul>
            </div>
          </div>
          <Button
            onClick={handleConnect}
            className="w-full shadow-sm hover:shadow transition-all duration-200"
            size="lg"
            disabled={isConnecting}
          >
            {isConnecting ? 'Connecting...' : 'Connect LinkedIn'}
          </Button>
        </CardContent>
      </Card>

      {/* OAuth Simulation Modal */}
      {isConnecting && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-in fade-in duration-200">
          <Card className="w-full max-w-sm shadow-2xl border-border animate-in zoom-in-95 duration-200">
            <CardContent className="pt-10 pb-10">
              <div className="text-center space-y-5">
                <div className="inline-block animate-spin rounded-full h-10 w-10 border-2 border-muted border-t-primary"></div>
                <div className="space-y-2">
                  <p className="text-base font-semibold">Authorizing with LinkedIn...</p>
                  <p className="text-sm text-muted-foreground">
                    You will be redirected to LinkedIn to approve access
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
