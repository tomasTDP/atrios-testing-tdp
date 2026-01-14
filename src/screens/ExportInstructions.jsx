import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function ExportInstructions() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 flex items-center justify-center p-4">
      <Card className="w-full max-w-lg shadow-lg border-border/50">
        <CardHeader className="space-y-3 pt-10">
          <CardTitle className="text-3xl font-bold tracking-tight">Connect your LinkedIn Export</CardTitle>
          <CardDescription className="text-base">
            Follow these steps to download your connections
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 pb-10">
          <div className="bg-muted/60 border border-border/50 p-5 rounded-lg space-y-3">
            <p className="font-semibold text-foreground mb-3">LinkedIn Export</p>
            <ol className="space-y-3 text-[15px] text-foreground/80">
              <li className="flex gap-3">
                <span className="font-semibold text-primary min-w-[1.5rem]">1.</span>
                <span>Login to your account on linkedin.com</span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-primary min-w-[1.5rem]">2.</span>
                <span>Click the Me icon at the top of your LinkedIn homepage</span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-primary min-w-[1.5rem]">3.</span>
                <span>Select Settings & Privacy</span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-primary min-w-[1.5rem]">4.</span>
                <span>Click Data Privacy on the left</span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-primary min-w-[1.5rem]">5.</span>
                <span>Under the 'Get a copy of your data' section, click on 'Get Started'</span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-primary min-w-[1.5rem]">6.</span>
                <span>Select what you'd like to download: Connections</span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-primary min-w-[1.5rem]">7.</span>
                <span>Click 'Request Archive'</span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-primary min-w-[1.5rem]">8.</span>
                <span>It can take up to 10 minutes before the archive is available to download. LinkedIn will send you an email</span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-primary min-w-[1.5rem]">9.</span>
                <span>Click download archive</span>
              </li>
            </ol>
            <p className="text-sm text-muted-foreground italic pt-3 border-t border-border/50">
              OR: Complete form with 5-10 connections manually
            </p>
          </div>

          <Button
            onClick={() => navigate('/waiting-linkedin')}
            className="w-full shadow-sm hover:shadow transition-all duration-200"
            size="lg"
          >
            I've requested my data
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
