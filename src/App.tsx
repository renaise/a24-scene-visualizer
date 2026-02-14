import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useState } from 'react'
import './index.css'

// Hooks
import { useAuth } from './hooks/useAuth'

// Components
import { Navigation } from './components/Navigation'
import { AuthModal } from './components/AuthModal'
import { UpgradeModal } from './components/UpgradeModal'

// Views
import { Home } from './views/Home'
import { Browse } from './views/Browse'
import { ScriptAnalyzer } from './views/ScriptAnalyzer'
import { Pricing } from './views/Pricing'

function AppContent() {
  const location = useLocation()
  const { user, login, signup, logout, upgradeToPro } = useAuth()

  const [showAuthModal, setShowAuthModal] = useState(false)
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login')
  const [showUpgradeModal, setShowUpgradeModal] = useState(false)

  const handleShowAuth = (mode: 'login' | 'signup') => {
    setAuthMode(mode)
    setShowAuthModal(true)
  }

  const handleSwitchAuthMode = () => {
    setAuthMode(authMode === 'login' ? 'signup' : 'login')
  }

  // Hide navigation on Browse page
  const showNavigation = location.pathname !== '/browse'

  // Hide footer on Browse page
  const showFooter = location.pathname !== '/browse'

  return (
    <div className="min-h-screen bg-black">
      {showNavigation && (
        <Navigation
          user={user}
          onLogout={logout}
          onShowAuth={handleShowAuth}
        />
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/analyze" element={<ScriptAnalyzer />} />
        <Route
          path="/pricing"
          element={
            <Pricing
              user={user}
              onShowAuth={handleShowAuth}
              onUpgrade={() => {
                upgradeToPro()
                alert('Welcome to Pro! 🎬')
              }}
            />
          }
        />
      </Routes>

      {showFooter && location.pathname !== '/' && (
        <footer className="py-8 text-center border-t border-[#1a1a1a]">
          <p className="text-[11px] tracking-[0.05em] text-[#666666] font-normal">
            Made by Renaise © 2026
          </p>
        </footer>
      )}

      {/* Auth Modal */}
      {showAuthModal && (
        <AuthModal
          mode={authMode}
          onClose={() => setShowAuthModal(false)}
          onLogin={login}
          onSignup={signup}
          onSwitchMode={handleSwitchAuthMode}
        />
      )}

      {/* Upgrade Modal */}
      {showUpgradeModal && (
        <UpgradeModal
          onClose={() => setShowUpgradeModal(false)}
          onUpgrade={upgradeToPro}
        />
      )}
    </div>
  )
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App
