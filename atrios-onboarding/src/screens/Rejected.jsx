import { useOnboarding } from '@/context/OnboardingContext'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function Rejected() {
  const { userData } = useOnboarding()

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 flex items-center justify-center p-4">
      <Card className="w-full max-w-lg shadow-lg border-border/50">
        <CardHeader className="space-y-3 pt-10">
          <CardTitle className="text-3xl font-bold tracking-tight">Not enough matches</CardTitle>
          <CardDescription className="text-base">
            Thanks for applying
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 pb-10">
          <div className="space-y-4 text-[15px] leading-relaxed text-foreground/80">
            <p>
              We found 2 intro opportunities in your network
            </p>
            <p>
              Right now, we're prioritizing connectors with more overlap with the companies we work with.
            </p>
            <p>
              We'll reach out to {userData.email || 'xxxx'} if new companies join that match your network.
            </p>
          </div>

          <div className="bg-muted/60 border border-border/50 p-5 rounded-lg space-y-3">
            <p className="font-semibold text-foreground">Want to increase your chances?</p>
            <div className="space-y-2 text-[15px] text-foreground/80">
              <p>Get a referral from a current connector</p>
              <p className="text-sm text-muted-foreground">
                Referrals are reviewed within 24 hours...
              </p>
            </div>
          </div>

          <Button
            onClick={() => window.location.href = '/'}
            className="w-full shadow-sm hover:shadow transition-all duration-200"
            size="lg"
            variant="outline"
          >
            Understood
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
