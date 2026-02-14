import { useState, useEffect } from 'react'

interface User {
  email: string
  isPro: boolean
}

export function useAuth() {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Load user from localStorage
    const mockUser = localStorage.getItem('mock_user')
    const mockPro = localStorage.getItem('mock_pro')

    if (mockUser) {
      setUser({
        email: mockUser,
        isPro: mockPro === 'true'
      })
    }

    setIsLoading(false)
  }, [])

  const login = (email: string, _password: string) => {
    // Mock login
    localStorage.setItem('mock_user', email)
    localStorage.setItem('mock_pro', 'false')
    setUser({
      email,
      isPro: false
    })
  }

  const signup = (email: string, _password: string) => {
    // Mock signup
    localStorage.setItem('mock_user', email)
    localStorage.setItem('mock_pro', 'false')
    setUser({
      email,
      isPro: false
    })
  }

  const logout = () => {
    localStorage.removeItem('mock_user')
    localStorage.removeItem('mock_pro')
    setUser(null)
  }

  const upgradeToPro = () => {
    if (user) {
      localStorage.setItem('mock_pro', 'true')
      setUser({
        ...user,
        isPro: true
      })
    }
  }

  return {
    user,
    isLoading,
    login,
    signup,
    logout,
    upgradeToPro
  }
}
