import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function FastTrack() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 flex items-center justify-center p-4">
      <Card className="w-full max-w-lg shadow-lg border-border/50">
        <CardHeader className="space-y-3 pt-10">
          <CardTitle className="text-3xl font-bold tracking-tight">You've Been Fast Tracked!</CardTitle>
          <CardDescription className="text-base">
            Your profile shows strong network alignment
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 pb-10">
          <div className="space-y-4 text-[15px] leading-relaxed text-foreground/80">
            <p>
              Your profile shows strong network alignment. Based on your professional background
              (CEO/VC/Board Member or referral code), we're expediting your application.
            </p>
            <p>
              No additional verification needed.
            </p>
          </div>

          <div className="bg-muted/60 border border-border/50 p-5 rounded-lg space-y-3">
            <p className="font-semibold text-foreground">What's next:</p>
            <p className="text-[15px] text-foreground/80">
              Schedule a call with our team to complete your onboarding and start making introductions
            </p>
          </div>

          <Button
            onClick={() => navigate('/schedule-call')}
            className="w-full shadow-sm hover:shadow transition-all duration-200"
            size="lg"
          >
            Schedule Your Call
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
