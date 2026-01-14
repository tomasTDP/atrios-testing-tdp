# Atrios Onboarding Flow - Interactive Prototype

A complete medium-fidelity interactive prototype for the Atrios Connector Network onboarding flow built with Vite, React, React Router, and shadcn/ui. Features all 18 screens with exact copy from Lucia's wireframes.

## Complete Implementation

### Core Flow (5 screens)
1. **Landing** - "Join the Atrios Connector Network" with value props
2. **Referral Code** - Optional referral code entry
3. **Sign Up** - User registration form
4. **LinkedIn Connect** - Simulated OAuth with modal
5. **Processing** - Manual tier path selection for demo

### Fast Track Path - Tier 1 (3 screens)
6. **Fast Track** - Expedited approval for VIP profiles
7. **Schedule Call** - Calendar interface for onboarding call
8. **Confirmation** - Success confirmation with next steps

### Qualified Path - Tier 2 (8 screens)
6. **Qualified** - Standard verification process intro
7. **Find Matches** - Explain LinkedIn data requirement
8. **Export Instructions** - 9-step LinkedIn export guide
9. **Waiting LinkedIn** - Progress tracker while waiting
10. **Upload Data** - File upload interface
11. **Analyzing Connections** - Processing with loader
12a. **Approved** - Success with match stats → Schedule Call
12b. **Rejected** - Not enough matches message

### Waitlist Path - Tier 3 (1 screen)
6. **Waitlist** - Under review message

### Design Features
- **Medium-fidelity UI** - Polished shadcn/ui components with proper styling
- **Professional color palette** - Clean, modern design matching Atrios brand
- **Micro-interactions** - Hover states, transitions, and subtle animations
- **Responsive layout** - Works on all screen sizes
- **Gradient backgrounds** - Subtle gradients for visual depth
- **Shadow & depth** - Layered card design with proper elevation

### Technical Features
- **LinkedIn OAuth simulation** - Modal overlay with 2-3 second loading state
- **Manual tier selection** - Three clickable paths after profile analysis
- **Context API** - Persistent user data across screens
- **Form validation** - Real-time validation on all inputs
- **Smooth animations** - Custom keyframes for fade-in and zoom effects
- **Loading states** - Professional spinners and loading indicators

## Tech Stack

- **Vite** - Build tool and dev server
- **React** - UI library
- **React Router** - Client-side routing
- **shadcn/ui** - Component library
- **Tailwind CSS** - Styling

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser to `http://localhost:5173`

## Project Structure

```
atrios-onboarding/
├── src/
│   ├── components/
│   │   └── ui/           # shadcn/ui components
│   │       ├── button.jsx
│   │       ├── card.jsx
│   │       ├── input.jsx
│   │       └── label.jsx
│   ├── context/
│   │   └── OnboardingContext.jsx  # User data persistence
│   ├── screens/          # Flow screens
│   │   ├── Landing.jsx
│   │   ├── ReferralCode.jsx
│   │   ├── SignUp.jsx
│   │   ├── LinkedInConnect.jsx
│   │   └── Processing.jsx
│   ├── lib/
│   │   └── utils.js      # Utility functions
│   ├── App.jsx           # Router configuration
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Flow Overview

### Core Flow
1. **Landing** → User clicks "Get Started" or "I don't have a referral code"
2. **Referral Code** (optional) → User enters code or skips
3. **Sign Up** → User enters name and email
4. **LinkedIn Connect** → User authorizes LinkedIn (simulated)
5. **Processing** → System analyzes profile and assigns tier

### Tier Assignment (Manual for Demo)
After the processing screen analyzes the profile, users can manually select one of three paths:
- **Tier 1 (Fast Track)** - Strong network alignment
- **Tier 2 (Qualified)** - Additional verification needed
- **Tier 3 (Waitlist)** - Under review

## Adding Your Logo

The landing page currently displays "ATRIOS" as a text placeholder. To add your actual logo:

1. Place your logo file in `public/logo.png` (or `.svg`)
2. Follow the detailed instructions in `LOGO_INSTRUCTIONS.md`

Recommended format: SVG with transparent background, 32-48px height

## Updates

### v4.0 - High-Fidelity Design System ✨

**Design System Overhaul:**
- ✅ Professional color palette (#1a1a1a primary, success/warning/error colors)
- ✅ Enhanced typography (h1: 40px, h2: 32px, body: 16px, proper line-height)
- ✅ Custom animations (fadeIn, pulse-slow, smooth transitions)
- ✅ Professional shadows (sm, md, lg, xl)
- ✅ Lucide-react icons integrated throughout

**Enhanced Components:**
- ✅ **Button**: Hover lift effect, shadows, icon gap, success variant, larger sizes
- ✅ **Input**: h-12, enhanced focus states with ring, rounded-lg borders
- ✅ **Card**: rounded-xl, fadeIn animation, better shadows
- ✅ **Progress**: New component with smooth transitions
- ✅ **Badge**: New component with color variants (success, warning, error)

**Upgraded Screens:**
- ✅ **Landing**: Lucide icons in colored circles, hover cards, ArrowRight on CTA
- ✅ **Processing**: Enhanced spinner, icon-based tier selection with hover lift

**Design Guidelines Created:**
- 📖 `DESIGN_UPGRADE_GUIDE.md` - Complete reference for upgrading all remaining screens
- Includes code patterns, icon usage, color coding, and implementation priorities

### v3.0 - Complete Flow

**Full Implementation:**
- ✅ All 18 screens built with exact wireframe copy
- ✅ Core flow (5 screens) + 3 complete tier paths
- ✅ Full navigation between all screens
- ✅ Manual tier selection for demo purposes
- ✅ Random branching in Qualified path (Approved/Rejected)

**Tier Paths:**
- Fast Track (Tier 1): 3 screens - VIP expedited path
- Qualified (Tier 2): 8 screens - Standard verification with LinkedIn export
- Waitlist (Tier 3): 1 screen - Immediate waitlist

## Documentation

See `FLOW_DOCUMENTATION.md` for complete screen-by-screen breakdown with exact copy and navigation flows.

## User Data Persistence

User data is stored in Context and includes:
- Email address
- First and last name
- Referral code (if provided)
- LinkedIn connection status
- Selected tier (manual selection for demo purposes)

This data is accessible across all screens and displayed where relevant.
