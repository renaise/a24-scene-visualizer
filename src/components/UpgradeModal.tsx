import { X, Check } from 'lucide-react'

interface UpgradeModalProps {
  onClose: () => void
  onUpgrade: () => void
}

export function UpgradeModal({ onClose, onUpgrade }: UpgradeModalProps) {
  const handleUpgrade = () => {
    onUpgrade()
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
      <div className="relative w-full max-w-lg mx-4">
        <div className="glass-input border border-[rgba(255,255,255,0.15)] p-8">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-[#666] hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title */}
          <h2 className="text-[32px] font-medium text-white mb-3 tracking-[-0.02em]">
            Upgrade to Pro
          </h2>
          <p className="text-[15px] text-[#999] mb-8">
            Unlock studio matching and project uploads
          </p>

          {/* Features */}
          <div className="space-y-3 mb-8">
            {[
              'Upload unlimited projects',
              'Studio matching algorithm',
              'Detailed match analysis',
              'PDF export & sharing',
              'Priority support'
            ].map((feature) => (
              <div key={feature} className="flex items-center gap-3">
                <Check className="w-5 h-5 text-white flex-shrink-0" />
                <span className="text-[15px] text-white">{feature}</span>
              </div>
            ))}
          </div>

          {/* Price */}
          <div className="mb-8 p-6 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)]">
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-[48px] font-medium text-white">$49</span>
              <span className="text-[15px] text-[#999]">/month</span>
            </div>
            <p className="text-[13px] text-[#666]">
              Cancel anytime. No long-term commitment.
            </p>
          </div>

          {/* CTA */}
          <button
            onClick={handleUpgrade}
            className="w-full px-6 py-4 bg-white text-black text-[13px] font-medium uppercase tracking-[0.02em] hover:bg-[#e6e6e6] transition-all duration-200"
          >
            Start 7-Day Free Trial
          </button>

          <p className="text-[11px] text-[#666] text-center mt-4">
            By upgrading, you agree to our Terms of Service
          </p>
        </div>
      </div>
    </div>
  )
}
