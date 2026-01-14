import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, CardContent } from '@/components/ui/card'

export default function AnalyzingConnections() {
  const navigate = useNavigate()

  useEffect(() => {
    const analyze = async () => {
      // Simulate analysis delay (2-3 seconds)
      await new Promise(resolve => setTimeout(resolve, 2500))

      // Randomly navigate to approved or rejected (50/50)
      const isApproved = Math.random() > 0.5
      navigate(isApproved ? '/approved' : '/rejected')
    }

    analyze()
  }, [navigate])

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 flex items-center justify-center p-4">
      <Card className="w-full max-w-lg shadow-lg border-border/50">
        <CardContent className="pt-10 pb-10">
          <div className="text-center space-y-6 py-8">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-2 border-muted border-t-primary"></div>
            <div className="space-y-2">
              <p className="text-xl font-semibold">Analyzing Your Network</p>
              <p className="text-[15px] text-muted-foreground">
                We're finding your best matches
              </p>
            </div>
            <div className="pt-4">
              <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
                <div className="bg-primary h-2 rounded-full animate-pulse" style={{width: '60%'}}></div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
