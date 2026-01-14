import { useNavigate } from 'react-router-dom'
import { DollarSign, Users, Phone, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function Landing() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background flex items-center justify-center p-6">
      <Card className="w-full max-w-[600px] shadow-lg">
        <CardHeader className="text-center space-y-8 pb-8 pt-12 px-12">
          {/* Logo Placeholder */}
          <div className="flex justify-center">
            <div className="text-4xl font-bold tracking-tight text-primary">
              ATRIOS
            </div>
          </div>
          <div className="space-y-4">
            <h1 className="text-[40px] leading-tight font-bold text-balance">
              Join the Atrios Connector Network
            </h1>
            <p className="text-lg text-secondary leading-relaxed">
              We're building a community of professionals who earn by making warm introductions.
            </p>
          </div>
        </CardHeader>
        <CardContent className="space-y-8 pb-12 px-12">
          <div className="space-y-6">
            <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 border border-border/50 transition-all duration-200 hover:bg-muted/70 hover:shadow-sm">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-success/10 flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-success" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-foreground">$500 average per introduction</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 border border-border/50 transition-all duration-200 hover:bg-muted/70 hover:shadow-sm">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-foreground">Curated network of 2,800+ professionals</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 border border-border/50 transition-all duration-200 hover:bg-muted/70 hover:shadow-sm">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-foreground">Personal onboarding with our team</p>
              </div>
            </div>
          </div>
          <div className="space-y-4 pt-4">
            <Button
              onClick={() => navigate('/signup')}
              size="lg"
              className="w-full text-base font-semibold"
            >
              Apply to Join
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              className="w-full"
              onClick={() => navigate('/referral')}
            >
              Referral code? Enter here
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
