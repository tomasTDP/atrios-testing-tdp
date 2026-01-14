import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function Approved() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 flex items-center justify-center p-4">
      <Card className="w-full max-w-lg shadow-lg border-border/50">
        <CardHeader className="space-y-3 pt-10 text-center">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
              <span className="text-3xl">✓</span>
            </div>
          </div>
          <CardTitle className="text-3xl font-bold tracking-tight">See your matches</CardTitle>
          <CardDescription className="text-base">
            Great news! We found matching opportunities in your network
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 pb-10">
          <div className="bg-muted/60 border border-border/50 p-5 rounded-lg">
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <p className="text-3xl font-bold text-primary">47</p>
                <p className="text-sm text-muted-foreground mt-1">Intro opportunities</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">$23.5k</p>
                <p className="text-sm text-muted-foreground mt-1">Potential earnings</p>
              </div>
            </div>
          </div>

          <div className="space-y-3 text-[15px] text-foreground/80">
            <p>
              We've identified strong matches between your network and the companies we work with.
            </p>
            <p>
              Next step: Schedule a call with our team to review your matches and start making introductions.
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
