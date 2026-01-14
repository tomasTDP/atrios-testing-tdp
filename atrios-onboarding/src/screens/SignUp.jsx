import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useOnboarding } from '@/context/OnboardingContext'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function SignUp() {
  const navigate = useNavigate()
  const { updateUserData } = useOnboarding()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  })

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    updateUserData(formData)
    navigate('/linkedin')
  }

  const isFormValid = formData.firstName && formData.lastName && formData.email

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 flex items-center justify-center p-4">
      <Card className="w-full max-w-lg shadow-lg border-border/50">
        <CardHeader className="space-y-3 pt-10">
          <CardTitle className="text-3xl font-bold tracking-tight">Create Your Account</CardTitle>
          <CardDescription className="text-base">
            Tell us a bit about yourself to get started
          </CardDescription>
        </CardHeader>
        <CardContent className="pb-10">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="text-sm font-medium">
                First Name
              </Label>
              <Input
                id="firstName"
                placeholder="John"
                value={formData.firstName}
                onChange={(e) => handleChange('firstName', e.target.value)}
                className="h-11 transition-all focus:ring-2 focus:ring-ring"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName" className="text-sm font-medium">
                Last Name
              </Label>
              <Input
                id="lastName"
                placeholder="Doe"
                value={formData.lastName}
                onChange={(e) => handleChange('lastName', e.target.value)}
                className="h-11 transition-all focus:ring-2 focus:ring-ring"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                className="h-11 transition-all focus:ring-2 focus:ring-ring"
                required
              />
            </div>
            <div className="pt-4">
              <Button
                type="submit"
                className="w-full shadow-sm hover:shadow transition-all duration-200"
                size="lg"
                disabled={!isFormValid}
              >
                Continue
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
