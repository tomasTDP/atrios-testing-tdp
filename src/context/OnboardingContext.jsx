import React, { createContext, useContext, useState } from 'react'

const OnboardingContext = createContext()

export function OnboardingProvider({ children }) {
  const [userData, setUserData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    referralCode: '',
    tier: null, // 'tier1' | 'tier2' | 'tier3'
    linkedInConnected: false
  })

  const updateUserData = (data) => {
    setUserData(prev => ({ ...prev, ...data }))
  }

  const assignRandomTier = () => {
    const tiers = ['tier1', 'tier2', 'tier3']
    const randomTier = tiers[Math.floor(Math.random() * tiers.length)]
    setUserData(prev => ({ ...prev, tier: randomTier }))
    return randomTier
  }

  return (
    <OnboardingContext.Provider value={{ userData, updateUserData, assignRandomTier }}>
      {children}
    </OnboardingContext.Provider>
  )
}

export function useOnboarding() {
  const context = useContext(OnboardingContext)
  if (!context) {
    throw new Error('useOnboarding must be used within OnboardingProvider')
  }
  return context
}
