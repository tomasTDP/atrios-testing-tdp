import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function UploadData() {
  const navigate = useNavigate()
  const [file, setFile] = useState(null)

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 flex items-center justify-center p-4">
      <Card className="w-full max-w-lg shadow-lg border-border/50">
        <CardHeader className="space-y-3 pt-10">
          <CardTitle className="text-3xl font-bold tracking-tight">Upload Data</CardTitle>
          <CardDescription className="text-base">
            Upload your LinkedIn connections file
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 pb-10">
          {/* File upload zone */}
          <div className="border-2 border-dashed border-border rounded-lg p-8 text-center space-y-4 hover:border-primary/50 transition-colors">
            <div className="flex justify-center">
              <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center">
                <span className="text-3xl">📁</span>
              </div>
            </div>
            <div className="space-y-2">
              <p className="font-medium text-foreground">
                {file ? file.name : 'Drop your file here'}
              </p>
              <p className="text-sm text-muted-foreground">
                or click to browse
              </p>
            </div>
            <input
              type="file"
              onChange={handleFileChange}
              accept=".csv,.zip"
              className="hidden"
              id="file-upload"
            />
            <label htmlFor="file-upload">
              <Button
                variant="outline"
                className="cursor-pointer"
                asChild
              >
                <span>Choose File</span>
              </Button>
            </label>
          </div>

          <div className="bg-muted/60 border border-border/50 p-5 rounded-lg space-y-2 text-sm">
            <p className="font-semibold text-foreground">File Requirements:</p>
            <ul className="space-y-1 text-foreground/80">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>CSV or ZIP file from LinkedIn</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>Must include connections data</span>
              </li>
            </ul>
            <div className="pt-2 border-t border-border/50 mt-3">
              <p className="text-muted-foreground">
                🔒 Your connections are never shared publicly
              </p>
            </div>
          </div>

          <Button
            onClick={() => navigate('/analyzing-connections')}
            className="w-full shadow-sm hover:shadow transition-all duration-200"
            size="lg"
            disabled={!file}
          >
            Upload & Analyze
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
