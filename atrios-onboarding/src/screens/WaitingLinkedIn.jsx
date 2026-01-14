import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function WaitingLinkedIn() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 flex items-center justify-center p-4">
      <Card className="w-full max-w-lg shadow-lg border-border/50">
        <CardHeader className="space-y-3 pt-10">
          <CardTitle className="text-3xl font-bold tracking-tight">Waiting for LinkedIn</CardTitle>
          <CardDescription className="text-base">
            This usually takes 10-15 minutes
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 pb-10">
          <div className="space-y-4 text-[15px] leading-relaxed text-foreground/80">
            <p>
              LinkedIn is preparing your data. This usually takes 10-15 minutes, but can take up to a few hours.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-muted/60 border border-border/50 rounded-lg">
              <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                <span className="text-lg">⏳</span>
              </div>
              <div className="flex-1">
                <p className="font-medium text-foreground">Waiting for LinkedIn...</p>
                <div className="mt-2 w-full bg-secondary rounded-full h-1.5">
                  <div className="bg-primary h-1.5 rounded-full w-1/3 animate-pulse"></div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 border border-border/50 rounded-lg opacity-50">
              <div className="w-8 h-8 rounded-full border-2 border-border flex items-center justify-center">
                <span className="text-sm">○</span>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Upload data</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 border border-border/50 rounded-lg opacity-50">
              <div className="w-8 h-8 rounded-full border-2 border-border flex items-center justify-center">
                <span className="text-sm">○</span>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">See your matches</p>
              </div>
            </div>
          </div>

          <div className="text-center text-xs text-muted-foreground pt-2">
            <p>...</p>
          </div>

          <Button
            onClick={() => navigate('/upload-data')}
            className="w-full shadow-sm hover:shadow transition-all duration-200"
            size="lg"
          >
            I have my file now
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
