import { useOnboarding } from '@/context/OnboardingContext'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function Confirmation() {
  const { userData } = useOnboarding()

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 flex items-center justify-center p-4">
      <Card className="w-full max-w-lg shadow-lg border-border/50">
        <CardHeader className="space-y-3 pt-10 text-center">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
              <span className="text-3xl">✓</span>
            </div>
          </div>
          <CardTitle className="text-3xl font-bold tracking-tight">Call Scheduled!</CardTitle>
          <CardDescription className="text-base">
            We've sent a calendar invite to {userData.email}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 pb-10">
          <div className="space-y-4">
            <div className="bg-muted/60 border border-border/50 p-5 rounded-lg">
              <p className="font-semibold text-foreground mb-2">Before the call:</p>
              <p className="text-[15px] text-foreground/80">
                We'll email you instructions for uploading your LinkedIn connections data
              </p>
            </div>

            <div className="bg-muted/60 border border-border/50 p-5 rounded-lg">
              <p className="font-semibold text-foreground mb-2">What happens next:</p>
              <p className="text-[15px] text-foreground/80">
                Our team will review your network and identify high-value introduction opportunities
              </p>
            </div>
          </div>

          <Button
            onClick={() => window.location.href = '/'}
            className="w-full shadow-sm hover:shadow transition-all duration-200"
            size="lg"
          >
            Done
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
