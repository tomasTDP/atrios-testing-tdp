import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function ScheduleCall() {
  const navigate = useNavigate()
  const [showPrep, setShowPrep] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 flex items-center justify-center p-4">
      <Card className="w-full max-w-lg shadow-lg border-border/50">
        <CardHeader className="space-y-3 pt-10">
          <CardTitle className="text-3xl font-bold tracking-tight">Schedule Your Onboarding Call</CardTitle>
          <CardDescription className="text-base">
            Choose a time that works best for you
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 pb-10">
          {/* Calendar interface placeholder */}
          <div className="border-2 border-dashed border-border rounded-lg p-8 space-y-4">
            <div className="text-center text-muted-foreground">
              <p className="text-sm font-medium mb-4">📅 Calendar Interface</p>
              <p className="text-xs">Wireframe: Calendar date picker would go here</p>
            </div>

            <div className="space-y-3">
              <div className="p-3 border border-border rounded-md hover:bg-secondary/60 transition-colors cursor-pointer">
                <p className="text-sm font-medium">Monday, Jan 20 - 10:00 AM</p>
              </div>
              <div className="p-3 border border-border rounded-md hover:bg-secondary/60 transition-colors cursor-pointer">
                <p className="text-sm font-medium">Monday, Jan 20 - 2:00 PM</p>
              </div>
              <div className="p-3 border border-border rounded-md hover:bg-secondary/60 transition-colors cursor-pointer">
                <p className="text-sm font-medium">Tuesday, Jan 21 - 11:00 AM</p>
              </div>
            </div>

            <div className="pt-2">
              <label className="text-sm font-medium mb-2 block">Timezone</label>
              <select className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm">
                <option>Pacific Time (PT)</option>
                <option>Eastern Time (ET)</option>
                <option>Central Time (CT)</option>
                <option>Mountain Time (MT)</option>
              </select>
            </div>
          </div>

          {/* Expandable section */}
          <div className="border border-border rounded-lg overflow-hidden">
            <button
              onClick={() => setShowPrep(!showPrep)}
              className="w-full p-4 text-left hover:bg-secondary/60 transition-colors flex justify-between items-center"
            >
              <span className="font-medium text-sm">What to prepare</span>
              <span className="text-muted-foreground">{showPrep ? '−' : '+'}</span>
            </button>
            {showPrep && (
              <div className="p-4 pt-0 space-y-2 text-sm text-foreground/80">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>Your LinkedIn connections data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>Questions about introductions you'd like to make</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>Your availability for the next 2 weeks</span>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <Button
            onClick={() => navigate('/confirmation')}
            className="w-full shadow-sm hover:shadow transition-all duration-200"
            size="lg"
          >
            Confirm Booking
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
