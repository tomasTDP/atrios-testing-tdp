import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function Qualified() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 flex items-center justify-center p-4">
      <Card className="w-full max-w-lg shadow-lg border-border/50">
        <CardHeader className="space-y-3 pt-10">
          <CardTitle className="text-3xl font-bold tracking-tight">Qualified</CardTitle>
          <CardDescription className="text-base">
            Additional verification required
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 pb-10">
          <div className="space-y-4 text-[15px] leading-relaxed text-foreground/80">
            <p>
              Likely to have more than 5 1st degree connections that are relevant to Atrios
            </p>
          </div>

          <div className="bg-muted/60 border border-border/50 p-5 rounded-lg space-y-3">
            <p className="font-semibold text-foreground">Contact</p>
            <ol className="space-y-2 text-[15px] text-foreground/80 list-decimal list-inside">
              <li>Download profile from LinkedIn</li>
              <li>Upload</li>
              <li>Run through database to see if they have relevant contacts (waitlist if not)</li>
            </ol>
            <p className="text-sm text-muted-foreground italic pt-2">
              OR: Complete form with 5-10 connections manually
            </p>
          </div>

          <Button
            onClick={() => navigate('/find-matches')}
            className="w-full shadow-sm hover:shadow transition-all duration-200"
            size="lg"
          >
            Continue
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
