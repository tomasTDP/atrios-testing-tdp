import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { OnboardingProvider } from './context/OnboardingContext'

// Core Flow
import Landing from './screens/Landing'
import ReferralCode from './screens/ReferralCode'
import SignUp from './screens/SignUp'
import LinkedInConnect from './screens/LinkedInConnect'
import Processing from './screens/Processing'

// Fast Track Path (Tier 1)
import FastTrack from './screens/FastTrack'
import ScheduleCall from './screens/ScheduleCall'
import Confirmation from './screens/Confirmation'

// Qualified Path (Tier 2)
import Qualified from './screens/Qualified'
import FindMatches from './screens/FindMatches'
import ExportInstructions from './screens/ExportInstructions'
import WaitingLinkedIn from './screens/WaitingLinkedIn'
import UploadData from './screens/UploadData'
import AnalyzingConnections from './screens/AnalyzingConnections'
import Approved from './screens/Approved'
import Rejected from './screens/Rejected'

// Waitlist Path (Tier 3)
import Waitlist from './screens/Waitlist'

function App() {
  return (
    <OnboardingProvider>
      <BrowserRouter>
        <Routes>
          {/* Core Flow */}
          <Route path="/" element={<Landing />} />
          <Route path="/referral" element={<ReferralCode />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/linkedin" element={<LinkedInConnect />} />
          <Route path="/processing" element={<Processing />} />

          {/* Fast Track Path (Tier 1) */}
          <Route path="/fast-track" element={<FastTrack />} />
          <Route path="/schedule-call" element={<ScheduleCall />} />
          <Route path="/confirmation" element={<Confirmation />} />

          {/* Qualified Path (Tier 2) */}
          <Route path="/qualified" element={<Qualified />} />
          <Route path="/find-matches" element={<FindMatches />} />
          <Route path="/export-instructions" element={<ExportInstructions />} />
          <Route path="/waiting-linkedin" element={<WaitingLinkedIn />} />
          <Route path="/upload-data" element={<UploadData />} />
          <Route path="/analyzing-connections" element={<AnalyzingConnections />} />
          <Route path="/approved" element={<Approved />} />
          <Route path="/rejected" element={<Rejected />} />

          {/* Waitlist Path (Tier 3) */}
          <Route path="/waitlist" element={<Waitlist />} />

          {/* Catch all */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </OnboardingProvider>
  )
}

export default App
