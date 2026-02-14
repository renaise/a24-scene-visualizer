import { Link } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

interface NavigationProps {
  user: { email: string; isPro: boolean } | null
  onLogout: () => void
  onShowAuth: (mode: 'login' | 'signup') => void
}

export function Navigation({ user, onLogout, onShowAuth }: NavigationProps) {
  const [showProfileMenu, setShowProfileMenu] = useState(false)

  return (
    <header className="glass-input border-b border-[rgba(255,255,255,0.1)] relative z-40">
      <div className="max-w-[1400px] mx-auto px-10 py-6">
        <div className="flex items-center justify-between">
          <Link to="/">
            <img
              src="/cinebox-logo.svg"
              alt="CineBox"
              className="h-[20px] opacity-100"
            />
          </Link>

          <nav className="flex items-center gap-10">
            <Link
              to="/browse"
              className="text-[13px] tracking-[0.02em] text-white hover:opacity-60 transition-opacity font-normal"
            >
              Browse Library
            </Link>

            <Link
              to="/analyze"
              className="text-[13px] tracking-[0.02em] text-white hover:opacity-60 transition-opacity font-normal"
            >
              Analyze Script
            </Link>

            <Link
              to="/pricing"
              className="text-[13px] tracking-[0.02em] text-white hover:opacity-60 transition-opacity font-normal"
            >
              Pricing
            </Link>

            {!user ? (
              <>
                <button
                  onClick={() => onShowAuth('login')}
                  className="text-[13px] tracking-[0.02em] text-white hover:opacity-60 transition-opacity font-normal"
                >
                  Login
                </button>
                <button
                  onClick={() => onShowAuth('signup')}
                  className="px-5 py-2.5 bg-white text-black text-[12px] font-medium uppercase tracking-[0.02em] hover:bg-[#e6e6e6] transition-all"
                >
                  Sign Up
                </button>
              </>
            ) : (
              <div className="relative">
                <button
                  onClick={() => setShowProfileMenu(!showProfileMenu)}
                  className="flex items-center gap-2 text-[13px] tracking-[0.02em] text-white hover:opacity-60 transition-opacity font-normal"
                >
                  <span>{user.email}</span>
                  {user.isPro && (
                    <span className="px-2 py-0.5 bg-white text-black text-[9px] font-medium uppercase tracking-wider">
                      Pro
                    </span>
                  )}
                  <ChevronDown className="w-4 h-4" />
                </button>

                {showProfileMenu && (
                  <>
                    <div
                      className="fixed inset-0 z-40"
                      onClick={() => setShowProfileMenu(false)}
                    />
                    <div className="absolute right-0 top-full mt-2 w-48 glass-input border border-[rgba(255,255,255,0.15)] z-50">
                      <div className="p-2">
                        {!user.isPro && (
                          <Link
                            to="/pricing"
                            className="block px-4 py-2 text-[13px] text-white hover:bg-[rgba(255,255,255,0.08)] transition-colors"
                            onClick={() => setShowProfileMenu(false)}
                          >
                            Upgrade to Pro
                          </Link>
                        )}
                        <button
                          onClick={() => {
                            onLogout()
                            setShowProfileMenu(false)
                          }}
                          className="w-full text-left px-4 py-2 text-[13px] text-white hover:bg-[rgba(255,255,255,0.08)] transition-colors"
                        >
                          Logout
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            )}
          </nav>
        </div>
      </div>
    </header>
  )
}
