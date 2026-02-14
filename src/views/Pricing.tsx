import { Check } from 'lucide-react'
import { Link } from 'react-router-dom'

interface PricingProps {
  user: { email: string; isPro: boolean } | null
  onShowAuth: (mode: 'login' | 'signup') => void
  onUpgrade: () => void
}

export function Pricing({ user, onShowAuth, onUpgrade }: PricingProps) {
  const handleProClick = () => {
    if (!user) {
      onShowAuth('signup')
    } else if (!user.isPro) {
      onUpgrade()
    }
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] py-20">
      <div className="max-w-[1100px] mx-auto px-8">
        {/* Title */}
        <div className="text-center mb-16">
          <h1 className="text-[48px] font-medium text-white mb-4 tracking-[-0.02em]">
            Choose Your Plan
          </h1>
          <div className="h-[2px] bg-white w-24 mx-auto"></div>
        </div>

        {/* Plans */}
        <div className="grid md:grid-cols-2 gap-8 max-w-[900px] mx-auto mb-20">
          {/* Free Plan */}
          <div className="glass-input border border-[rgba(255,255,255,0.1)] p-10">
            <h2 className="text-[32px] font-medium text-white mb-8 tracking-[-0.01em]">
              Free
            </h2>

            <ul className="space-y-4 mb-12">
              <li className="flex items-start gap-3 text-[15px] text-white">
                <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Browse reference library</span>
              </li>
              <li className="flex items-start gap-3 text-[15px] text-white">
                <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Basic scene search</span>
              </li>
              <li className="flex items-start gap-3 text-[15px] text-white">
                <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>3 script analyses/month</span>
              </li>
              <li className="flex items-start gap-3 text-[15px] text-[#666]">
                <div className="w-5 h-5 flex-shrink-0 mt-0.5"></div>
                <span>Unlimited analysis</span>
              </li>
              <li className="flex items-start gap-3 text-[15px] text-[#666]">
                <div className="w-5 h-5 flex-shrink-0 mt-0.5"></div>
                <span>Sizzle reel export</span>
              </li>
            </ul>

            <Link
              to="/browse"
              className="block w-full text-center px-8 py-4 border border-[rgba(255,255,255,0.3)] text-white text-[12px] font-medium uppercase tracking-[0.02em] hover:bg-[rgba(255,255,255,0.08)] transition-all"
            >
              Get Started
            </Link>
          </div>

          {/* Pro Plan */}
          <div className="glass-input border border-white p-10 relative">
            {/* Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-white text-black text-[10px] font-medium uppercase tracking-wider">
              Recommended
            </div>

            <h2 className="text-[32px] font-medium text-white mb-3 tracking-[-0.01em]">
              Pro
            </h2>

            <div className="flex items-baseline gap-2 mb-8">
              <span className="text-[48px] font-medium text-white">$49</span>
              <span className="text-[18px] text-[#999]">/month</span>
            </div>

            <ul className="space-y-4 mb-12">
              <li className="flex items-start gap-3 text-[15px] text-white">
                <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="font-medium">Everything in Free</span>
              </li>
              <li className="flex items-start gap-3 text-[15px] text-white">
                <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Unlimited script analysis</span>
              </li>
              <li className="flex items-start gap-3 text-[15px] text-white">
                <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>SceneRAG AI matching</span>
              </li>
              <li className="flex items-start gap-3 text-[15px] text-white">
                <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Multimodal understanding</span>
              </li>
              <li className="flex items-start gap-3 text-[15px] text-white">
                <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Sizzle reel export (video)</span>
              </li>
              <li className="flex items-start gap-3 text-[15px] text-white">
                <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>PDF lookbook export</span>
              </li>
              <li className="flex items-start gap-3 text-[15px] text-white">
                <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Priority support</span>
              </li>
            </ul>

            {user?.isPro ? (
              <div className="w-full text-center px-8 py-4 bg-[rgba(255,255,255,0.1)] text-white text-[12px] font-medium uppercase tracking-[0.02em]">
                Current Plan
              </div>
            ) : (
              <button
                onClick={handleProClick}
                className="w-full px-8 py-4 bg-white text-black text-[12px] font-medium uppercase tracking-[0.02em] hover:bg-[#e6e6e6] transition-all"
              >
                Start 7-Day Free Trial
              </button>
            )}
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-[700px] mx-auto">
          <h2 className="text-[28px] font-medium text-white mb-8 tracking-[-0.01em]">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-[18px] font-medium text-white mb-2">
                Can I cancel anytime?
              </h3>
              <p className="text-[15px] text-[#999] leading-[1.6]">
                Yes, cancel anytime. No long-term commitment.
              </p>
            </div>

            <div>
              <h3 className="text-[18px] font-medium text-white mb-2">
                Is my script private?
              </h3>
              <p className="text-[15px] text-[#999] leading-[1.6]">
                Yes. Your scripts are private and encrypted. We only analyze them to provide visual references — we never share or train on your content.
              </p>
            </div>

            <div>
              <h3 className="text-[18px] font-medium text-white mb-2">
                How does SceneRAG work?
              </h3>
              <p className="text-[15px] text-[#999] leading-[1.6]">
                SceneRAG uses Claude 4.6 to segment your script into semantic scenes, then matches each scene to our database of 300+ films using multimodal AI understanding.
              </p>
            </div>

            <div>
              <h3 className="text-[18px] font-medium text-white mb-2">
                What if I'm a student?
              </h3>
              <p className="text-[15px] text-[#999] leading-[1.6]">
                We offer student discounts. Contact us at <a href="mailto:developer@codexfoundry.com" className="text-white underline">developer@codexfoundry.com</a> with your .edu email.
              </p>
            </div>

            <div>
              <h3 className="text-[18px] font-medium text-white mb-2">
                Can I upgrade from Free to Pro later?
              </h3>
              <p className="text-[15px] text-[#999] leading-[1.6]">
                Absolutely. You can upgrade at any time and your saved data will carry over.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
