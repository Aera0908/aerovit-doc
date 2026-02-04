export default function Tokenomics() {
  return (
    <div className="max-w-3xl">
      <div className="flex items-center gap-3 mb-2">
        <h1 className="text-3xl font-bold text-white">
          Tokenomics
        </h1>
        <span className="px-2 py-1 text-xs font-medium rounded bg-yellow-500/20 text-yellow-400 border border-yellow-500/30">
          Coming Soon
        </span>
      </div>
      <p className="text-[var(--text-secondary)] mb-8">
        AERO token economics and distribution model.
      </p>
      
      <div className="space-y-8">
        {/* Coming Soon Banner */}
        <div className="hud-box p-8 text-center border-yellow-500/30">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-yellow-500/10 flex items-center justify-center">
            <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-white mb-2">Tokenomics Under Development</h2>
          <p className="text-[var(--text-secondary)] mb-4 max-w-md mx-auto">
            The AERO token economics are currently being finalized. Full tokenomics details 
            including distribution, utility, and vesting schedules will be announced soon.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--card)] border border-[var(--primary)]/20">
            <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
            <span className="text-sm text-[var(--text-muted)]">Expected Q2 2026</span>
          </div>
        </div>

        {/* Preview Sections */}
        <section className="opacity-50">
          <h2 className="text-xl font-semibold text-white mb-4">Token Overview</h2>
          <div className="hud-box p-5">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-[var(--text-muted)] mb-1">Token Name</p>
                <p className="text-white font-medium">AERO Token</p>
              </div>
              <div>
                <p className="text-[var(--text-muted)] mb-1">Network</p>
                <p className="text-white font-medium">Ethereum (Sepolia Testnet)</p>
              </div>
              <div>
                <p className="text-[var(--text-muted)] mb-1">Token Standard</p>
                <p className="text-white font-medium">ERC-20</p>
              </div>
              <div>
                <p className="text-[var(--text-muted)] mb-1">Total Supply</p>
                <p className="text-white font-medium">TBA</p>
              </div>
            </div>
          </div>
        </section>

        <section className="opacity-50">
          <h2 className="text-xl font-semibold text-white mb-4">Token Utility</h2>
          <div className="hud-box p-5">
            <ul className="text-[var(--text-secondary)] space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-[var(--primary-light)] mt-0.5">◆</span>
                <span><strong className="text-white">Workout Rewards:</strong> Earn AERO tokens for completing daily quests and challenges</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--primary-light)] mt-0.5">◆</span>
                <span><strong className="text-white">Staking:</strong> Stake AERO to unlock premium features and boost earning rates</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--primary-light)] mt-0.5">◆</span>
                <span><strong className="text-white">Governance:</strong> Participate in platform decisions and feature voting</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--primary-light)] mt-0.5">◆</span>
                <span><strong className="text-white">Marketplace:</strong> Purchase exclusive gear, coaches, and customizations</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="opacity-50">
          <h2 className="text-xl font-semibold text-white mb-4">Distribution</h2>
          <div className="hud-box p-5">
            <p className="text-[var(--text-muted)] text-sm text-center py-8">
              Token distribution chart will be available after tokenomics finalization
            </p>
          </div>
        </section>

        {/* Subscribe for Updates */}
        <div className="hud-box p-6 bg-gradient-to-br from-[var(--primary)]/5 to-transparent">
          <h3 className="text-lg font-semibold text-white mb-2">Stay Updated</h3>
          <p className="text-sm text-[var(--text-secondary)] mb-4">
            Follow our progress and be the first to know when tokenomics are announced.
          </p>
          <div className="flex gap-3">
            <a 
              href="https://github.com/Aera0908" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary text-sm"
            >
              GitHub
            </a>
            <button 
              disabled 
              className="btn-primary text-sm opacity-50 cursor-not-allowed"
            >
              Discord (Coming Soon)
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
