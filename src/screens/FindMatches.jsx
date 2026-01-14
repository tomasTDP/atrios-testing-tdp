import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function FindMatches() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 flex items-center justify-center p-4">
      <Card className="w-full max-w-lg shadow-lg border-border/50">
        <CardHeader className="space-y-3 pt-10">
          <CardTitle className="text-3xl font-bold tracking-tight">Let's find your matches</CardTitle>
          <CardDescription className="text-base">
            See your 1st degree matches
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 pb-10">
          <div className="space-y-4 text-[15px] leading-relaxed text-foreground/80">
            <p>
              Now let's actually see who you might know that fits our criteria.
            </p>
            <p className="text-sm text-muted-foreground italic">
              [In order to verify connections, we need data]
            </p>
          </div>

          <div className="bg-muted/60 border border-border/50 p-5 rounded-lg space-y-4">
            <p className="font-semibold text-foreground">To find your matches, we need your LinkedIn connections.</p>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-xl">📊</span>
                <div>
                  <p className="text-[15px] text-foreground">Connectors like you typically have 40-60 intro opportunities</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl">💰</span>
                <div>
                  <p className="text-[15px] text-foreground">Average payout: $500 per intro</p>
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-border/50">
              <p className="text-sm text-muted-foreground">
                Your connections are never shared publicly.
                We only use them to find intro opportunities.
              </p>
              <p className="text-xs text-muted-foreground pt-1">...</p>
            </div>
          </div>

          <Button
            onClick={() => navigate('/export-instructions')}
            className="w-full shadow-sm hover:shadow transition-all duration-200"
            size="lg"
          >
            Go to LinkedIn Export →
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
