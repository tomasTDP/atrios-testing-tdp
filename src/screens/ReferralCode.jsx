import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useOnboarding } from '@/context/OnboardingContext'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function ReferralCode() {
  const navigate = useNavigate()
  const { updateUserData } = useOnboarding()
  const [referralCode, setReferralCode] = useState('')

  const handleContinue = () => {
    updateUserData({ referralCode })
    navigate('/signup')
  }

  const handleSkip = () => {
    updateUserData({ referralCode: '' })
    navigate('/signup')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 flex items-center justify-center p-4">
      <Card className="w-full max-w-lg shadow-lg border-border/50">
        <CardHeader className="space-y-3 pt-10">
          <CardTitle className="text-3xl font-bold tracking-tight">Referral Code</CardTitle>
          <CardDescription className="text-base">
            Enter your referral code to expedite your application
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 pb-10">
          <div className="space-y-3">
            <Label htmlFor="referralCode" className="text-sm font-medium">
              Referral Code (Optional)
            </Label>
            <Input
              id="referralCode"
              placeholder="Enter code"
              value={referralCode}
              onChange={(e) => setReferralCode(e.target.value)}
              className="h-11 transition-all focus:ring-2 focus:ring-ring"
            />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Referrals from existing members receive priority review and faster processing.
            </p>
          </div>
          <div className="space-y-3 pt-2">
            <Button
              onClick={handleContinue}
              className="w-full shadow-sm hover:shadow transition-all duration-200"
              size="lg"
              disabled={!referralCode.trim()}
            >
              Continue
            </Button>
            <Button
              variant="ghost"
              onClick={handleSkip}
              className="w-full hover:bg-secondary/60 transition-colors duration-200"
            >
              Skip for now
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
