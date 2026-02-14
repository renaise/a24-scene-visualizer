import { Link } from 'react-router-dom'

export function Home() {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      {/* Hero - A24 Worthy */}
      <main className="min-h-screen flex items-center justify-center px-8 relative overflow-hidden">
        {/* Background Video (subtle, not overpowering) */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-40 pointer-events-none"
          src="/bg-video.mp4"
        />

        {/* Subtle vignette overlay */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/30 to-black/60 pointer-events-none"></div>

        {/* Content */}
        <div className="max-w-[1100px] mx-auto w-full relative z-10 px-6">
          <h1 className="text-[52px] md:text-[68px] font-light leading-[1.1] text-white mb-6 tracking-[-0.02em] text-center">
            Turn your script into<br />
            a visual treatment
          </h1>

          <p className="text-[16px] leading-[1.8] text-white/65 max-w-[680px] mx-auto mb-12 text-center">
            AI-powered scene analysis. Find reference shots from 300+ films.<br className="hidden md:block" />
            Export as sizzle reel or lookbook. Unblock writer's block.
          </p>

          {/* CTAs with A24 aesthetic */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              to="/analyze"
              className="w-full sm:w-auto px-12 py-4 bg-white text-black text-[11px] font-medium uppercase tracking-[0.15em] hover:opacity-85 transition-all duration-200 text-center"
            >
              Analyze Your Script
            </Link>
            <Link
              to="/browse"
              className="w-full sm:w-auto px-12 py-4 border border-white/30 text-white text-[11px] font-medium uppercase tracking-[0.15em] hover:bg-white/8 transition-all duration-200 text-center"
            >
              Browse Reference Library
            </Link>
          </div>

          {/* Social Proof (minimal) */}
          <div className="text-center">
            <p className="text-[10px] text-white/40 uppercase tracking-[0.2em] mb-6">
              Trusted by filmmakers at NYU, USC, AFI
            </p>
            <div className="flex items-center justify-center gap-8 opacity-30">
              <span className="text-[11px] text-white font-medium tracking-[0.1em]">A24</span>
              <span className="text-[11px] text-white font-medium tracking-[0.1em]">NEON</span>
              <span className="text-[11px] text-white font-medium tracking-[0.1em]">ANNAPURNA</span>
              <span className="text-[11px] text-white font-medium tracking-[0.1em]">MUBI</span>
            </div>
          </div>
        </div>

        {/* Scroll indicator (subtle) */}
        <div className="scroll-indicator">
          <span className="text-white">Scroll</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 3L8 13M8 13L4 9M8 13L12 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </main>

      {/* How It Works */}
      <section className="py-20 border-t border-[#1a1a1a]">
        <div className="max-w-[1100px] mx-auto px-8">
          <h2 className="text-[32px] font-medium text-white mb-16 text-center tracking-[-0.02em]">
            How It Works
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Step 1 */}
            <div>
              <div className="text-[48px] font-medium text-[#333] mb-4">01</div>
              <h3 className="text-[20px] font-medium text-white mb-3 tracking-[-0.01em]">
                Paste Your Script
              </h3>
              <p className="text-[15px] text-[#999] leading-[1.6]">
                Treatment, screenplay, or scene description. AI breaks it into semantic scenes.
              </p>
            </div>

            {/* Step 2 */}
            <div>
              <div className="text-[48px] font-medium text-[#333] mb-4">02</div>
              <h3 className="text-[20px] font-medium text-white mb-3 tracking-[-0.01em]">
                Get Visual References
              </h3>
              <p className="text-[15px] text-[#999] leading-[1.6]">
                AI matches each scene to shots from 300+ films (A24, Neon, Criterion).
              </p>
            </div>

            {/* Step 3 */}
            <div>
              <div className="text-[48px] font-medium text-[#333] mb-4">03</div>
              <h3 className="text-[20px] font-medium text-white mb-3 tracking-[-0.01em]">
                Export Treatment
              </h3>
              <p className="text-[15px] text-[#999] leading-[1.6]">
                Download as PDF lookbook or video sizzle reel. Perfect for pitch decks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-20 border-t border-[#1a1a1a]">
        <div className="max-w-[1100px] mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-[800px] mx-auto">
            {/* Free */}
            <div className="glass-input border border-[rgba(255,255,255,0.1)] p-8">
              <h3 className="text-[24px] font-medium text-white mb-6 tracking-[-0.01em]">
                Free
              </h3>
              <ul className="space-y-3 mb-8">
                <li className="text-[15px] text-[#999]">• Browse reference library</li>
                <li className="text-[15px] text-[#999]">• Basic scene search</li>
                <li className="text-[15px] text-[#999]">• 3 script analyses/month</li>
              </ul>
              <Link
                to="/browse"
                className="block w-full text-center px-6 py-3 border border-[rgba(255,255,255,0.3)] text-white text-[12px] font-medium uppercase tracking-[0.02em] hover:bg-[rgba(255,255,255,0.08)] transition-all"
              >
                Get Started
              </Link>
            </div>

            {/* Pro */}
            <div className="glass-input border border-white p-8 relative">
              <div className="absolute top-0 right-0 px-3 py-1 bg-white text-black text-[9px] font-medium uppercase tracking-wider">
                Popular
              </div>
              <h3 className="text-[24px] font-medium text-white mb-2 tracking-[-0.01em]">
                Pro
              </h3>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-[36px] font-medium text-white">$49</span>
                <span className="text-[15px] text-[#999]">/mo</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="text-[15px] text-white">✓ Everything in Free</li>
                <li className="text-[15px] text-white">✓ Unlimited script analysis</li>
                <li className="text-[15px] text-white">✓ SceneRAG AI matching</li>
                <li className="text-[15px] text-white">✓ Sizzle reel export</li>
                <li className="text-[15px] text-white">✓ PDF lookbook export</li>
                <li className="text-[15px] text-white">✓ Priority support</li>
              </ul>
              <Link
                to="/pricing"
                className="block w-full text-center px-6 py-3 bg-white text-black text-[12px] font-medium uppercase tracking-[0.02em] hover:bg-[#e6e6e6] transition-all"
              >
                Start 7-Day Trial
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-[#1a1a1a]">
        <p className="text-[11px] tracking-[0.05em] text-[#666666] font-normal">
          Made by Renaise © 2026
        </p>
      </footer>
    </div>
  )
}
