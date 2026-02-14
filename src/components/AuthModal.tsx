import { useState } from 'react'
import { X } from 'lucide-react'

interface AuthModalProps {
  mode: 'login' | 'signup'
  onClose: () => void
  onLogin: (email: string, password: string) => void
  onSignup: (email: string, password: string) => void
  onSwitchMode: () => void
}

export function AuthModal({ mode, onClose, onLogin, onSignup, onSwitchMode }: AuthModalProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (mode === 'login') {
      onLogin(email, password)
    } else {
      onSignup(email, password)
    }
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-md mx-4">
        <div className="glass-input border border-[rgba(255,255,255,0.15)] p-8">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-[#666] hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title */}
          <h2 className="text-[28px] font-medium text-white mb-6 tracking-[-0.02em]">
            {mode === 'login' ? 'Welcome Back' : 'Create Your Account'}
          </h2>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-[11px] text-[#999] uppercase tracking-wider mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] text-white text-[15px] focus:outline-none focus:border-[rgba(255,255,255,0.3)] transition-colors"
                required
                autoFocus
              />
            </div>

            <div>
              <label className="block text-[11px] text-[#999] uppercase tracking-wider mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] text-white text-[15px] focus:outline-none focus:border-[rgba(255,255,255,0.3)] transition-colors"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3.5 bg-white text-black text-[13px] font-medium uppercase tracking-[0.02em] hover:bg-[#e6e6e6] transition-all duration-200 mt-6"
            >
              {mode === 'login' ? 'Log In' : 'Create Account'}
            </button>
          </form>

          {/* Switch mode */}
          <div className="mt-6 text-center">
            <button
              onClick={onSwitchMode}
              className="text-[13px] text-[#999] hover:text-white transition-colors"
            >
              {mode === 'login' ? (
                <>
                  Don't have an account? <span className="underline">Sign up</span>
                </>
              ) : (
                <>
                  Already have an account? <span className="underline">Log in</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
