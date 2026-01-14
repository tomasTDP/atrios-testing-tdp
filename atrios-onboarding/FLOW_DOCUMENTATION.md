# Atrios Onboarding Flow - Complete Documentation

## Overview
Complete implementation of the Atrios Connector Network onboarding flow with exact copy from Lucia's wireframes. The flow branches into 3 different paths based on user tier classification.

---

## CORE FLOW (Shared by all users)

### 1. Landing Page `/`
**Heading:** "Join the Atrios Connector Network"
**Subheading:** "We're building an community of professionals who earn by making warm introductions."

**Value Props:**
- 💰 $500 average per introduction
- 🤝 Curated network of 2,800+ professionals
- 📞 Personal onboarding with our team

**CTAs:**
- Primary: "Apply to Join" → `/signup`
- Secondary: "Referral code? Enter here" → `/referral`

---

### 2. Referral Code `/referral` (Optional)
**Heading:** "Referral Code"
**Subheading:** "Enter your referral code to expedite your application"

**Features:**
- Optional text input for referral code
- Can skip this step
- Note: "Referrals from existing members receive priority review and faster processing"

**CTAs:**
- "Continue" → `/signup` (if code entered)
- "Skip for now" → `/signup`

---

### 3. Sign Up `/signup`
**Heading:** "Create Your Account"
**Subheading:** "Tell us a bit about yourself to get started"

**Form Fields:**
- First Name
- Last Name
- Email Address

**CTA:** "Continue" → `/linkedin`

---

### 4. LinkedIn Connect `/linkedin`
**Heading:** "Connect Your LinkedIn"
**Subheading:** "We'll analyze your professional network to determine your fit"

**Features:**
- Simulated LinkedIn OAuth (2-3 second delay)
- Modal overlay: "Authorizing with LinkedIn..."
- What we'll access:
  - Professional profile information
  - Network size and composition
  - Industry and experience data

**CTA:** "Connect LinkedIn" → `/processing`

---

### 5. Processing `/processing`
**Heading:** "Analyzing Your Profile"
**Loading State:** 2-3 seconds with spinner and progress text

**After Processing:**
**Heading:** "Profile Analysis Complete"
**Subheading:** "Choose a path to explore the demo"

**Manual Path Selection (for demo purposes):**
- "View Fast Track Path" → `/fast-track`
- "View Qualified Path" → `/qualified`
- "View Waitlist Path" → `/waitlist`

**Note:** "For demo purposes - choose a path to explore"

---

## FAST TRACK PATH (Tier 1 - VIP)

### 6a. Fast Track `/fast-track`
**Heading:** "You've Been Fast Tracked!"
**Subheading:** "Your profile shows strong network alignment"

**Body:**
"Your profile shows strong network alignment. Based on your professional background (CEO/VC/Board Member or referral code), we're expediting your application.

No additional verification needed."

**Info Card:** "What's next: Schedule a call with our team to complete your onboarding and start making introductions"

**CTA:** "Schedule Your Call" → `/schedule-call`

---

### 7a. Schedule Call `/schedule-call`
**Heading:** "Schedule Your Onboarding Call"
**Subheading:** "Choose a time that works best for you"

**Features:**
- Calendar interface (wireframe placeholder)
- Time slot selection
- Timezone dropdown
- Expandable "What to prepare" section:
  - Your LinkedIn connections data
  - Questions about introductions you'd like to make
  - Your availability for the next 2 weeks

**CTA:** "Confirm Booking" → `/confirmation`

---

### 8a. Confirmation `/confirmation`
**Heading:** "Call Scheduled!"
**Subheading:** "We've sent a calendar invite to [user email]"

**Info Cards:**
- "Before the call: We'll email you instructions for uploading your LinkedIn connections data"
- "What happens next: Our team will review your network and identify high-value introduction opportunities"

**CTA:** "Done"

---

## QUALIFIED PATH (Tier 2 - Standard)

### 6b. Qualified `/qualified`
**Heading:** "Qualified"
**Subheading:** "Additional verification required"

**Body:**
"Likely to have more than 5 1st degree connections that are relevant to Atrios"

**Process Outline:**
1. Download profile from LinkedIn
2. Upload
3. Run through database to see if they have relevant contacts (waitlist if not)

**Note:** "OR: Complete form with 5-10 connections manually"

**CTA:** "Continue" → `/find-matches`

---

### 7b. Find Matches `/find-matches`
**Heading:** "Let's find your matches"
**Subheading:** "See your 1st degree matches"

**Body:**
"Now let's actually see who you might know that fits our criteria.
[In order to verify connections, we need data]"

**Info Card:** "To find your matches, we need your LinkedIn connections."
- 📊 Connectors like you typically have 40-60 intro opportunities
- 💰 Average payout: $500 per intro

**Privacy Note:** "Your connections are never shared publicly. We only use them to find intro opportunities."

**CTA:** "Go to LinkedIn Export →" → `/export-instructions`

---

### 8b. Export Instructions `/export-instructions`
**Heading:** "Connect your LinkedIn Export"
**Subheading:** "Follow these steps to download your connections"

**9-Step Process:**
1. Login to your account on linkedin.com
2. Click the Me icon at the top of your LinkedIn homepage
3. Select Settings & Privacy
4. Click Data Privacy on the left
5. Under the 'Get a copy of your data' section, click on 'Get Started'
6. Select what you'd like to download: Connections
7. Click 'Request Archive'
8. It can take up to 10 minutes before the archive is available to download. LinkedIn will send you an email
9. Click download archive

**Note:** "OR: Complete form with 5-10 connections manually"

**CTA:** "I've requested my data" → `/waiting-linkedin`

---

### 9b. Waiting LinkedIn `/waiting-linkedin`
**Heading:** "Waiting for LinkedIn"
**Subheading:** "This usually takes 10-15 minutes"

**Body:**
"LinkedIn is preparing your data. This usually takes 10-15 minutes, but can take up to a few hours."

**Progress Steps:**
- ⏳ Waiting for LinkedIn... (active with progress bar)
- ○ Upload data (inactive)
- ○ See your matches (inactive)

**CTA:** "I have my file now" → `/upload-data`

---

### 10b. Upload Data `/upload-data`
**Heading:** "Upload Data"
**Subheading:** "Upload your LinkedIn connections file"

**Features:**
- Drag & drop file zone
- File browse button
- File requirements:
  - CSV or ZIP file from LinkedIn
  - Must include connections data
- Privacy assurance: "🔒 Your connections are never shared publicly"

**CTA:** "Upload & Analyze" → `/analyzing-connections`

---

### 11b. Analyzing Connections `/analyzing-connections`
**Heading:** "Analyzing Your Network"
**Subheading:** "We're finding your best matches"

**Features:**
- Spinner animation
- Progress bar
- 2-3 second delay
- Randomly navigates to either `/approved` or `/rejected`

---

### 12b-A. Approved `/approved`
**Heading:** "See your matches"
**Subheading:** "Great news! We found matching opportunities in your network"

**Stats Display:**
- 47 Intro opportunities
- $23.5k Potential earnings

**Body:**
"We've identified strong matches between your network and the companies we work with.

Next step: Schedule a call with our team to review your matches and start making introductions."

**CTA:** "Schedule Your Call" → `/schedule-call`

---

### 12b-B. Rejected `/rejected`
**Heading:** "Not enough matches"
**Subheading:** "Thanks for applying"

**Body:**
"We found 2 intro opportunities in your network

Right now, we're prioritizing connectors with more overlap with the companies we work with.

We'll reach out to [email] if new companies join that match your network."

**Info Card:** "Want to increase your chances?"
- Get a referral from a current connector
- Referrals are reviewed within 24 hours...

**CTA:** "Understood"

---

## WAITLIST PATH (Tier 3 - Immediate Waitlist)

### 6c. Waitlist `/waitlist`
**Heading:** "Waitlist"
**Subheading:** "Your application is under review"

**Body:**
"We review every application carefully to maintain the quality of our connector community.

We'll reach out to [email] if there's a fit for the types of introductions companies are currently seeking."

**Info Card:** "Want to increase your chances?"
- Get a referral from a current connector
- Referrals are reviewed within 24 hours
- ...

**CTA:** "Got it"

---

## Route Map

```
/                          Landing Page
├─ /referral              Referral Code (optional)
├─ /signup                Sign Up
└─ /linkedin              LinkedIn Connect
   └─ /processing         Processing & Tier Selection
      ├─ /fast-track      [TIER 1] Fast Track
      │  └─ /schedule-call      Schedule Call
      │     └─ /confirmation    Confirmation
      │
      ├─ /qualified       [TIER 2] Qualified
      │  └─ /find-matches       Find Matches
      │     └─ /export-instructions    Export Instructions
      │        └─ /waiting-linkedin    Waiting LinkedIn
      │           └─ /upload-data      Upload Data
      │              └─ /analyzing-connections   Analyzing
      │                 ├─ /approved → /schedule-call
      │                 └─ /rejected
      │
      └─ /waitlist        [TIER 3] Waitlist
```

---

## Implementation Details

### Technologies
- Vite + React
- React Router for navigation
- shadcn/ui components
- Tailwind CSS
- Context API for state management

### Key Features
- All copy matches Lucia's exact wireframe text
- Medium-fidelity design with proper shadcn/ui components
- Micro-interactions and smooth transitions
- Simulated LinkedIn OAuth with realistic timing
- Manual tier selection for demo purposes
- User data persistence across screens
- Fully functional navigation between all screens

### State Management
User data stored in Context:
- Email, First Name, Last Name
- Referral Code (if provided)
- LinkedIn connection status
- Selected tier (tier1, tier2, tier3)

---

## Total Screen Count: 18 Screens

**Core Flow:** 5 screens
**Fast Track Path:** 3 screens
**Qualified Path:** 8 screens
**Waitlist Path:** 1 screen
**Shared:** 1 screen (schedule-call reused)
