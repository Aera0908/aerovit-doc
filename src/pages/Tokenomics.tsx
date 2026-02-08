export default function Tokenomics() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-bold text-white mb-2">
        Tokenomics
      </h1>
      <p className="text-[var(--text-secondary)] mb-8">
        AERO token economy and move-to-earn mechanics.
      </p>
      
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-4">AERO Token Overview</h2>
        <div className="hud-box p-5">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <p className="text-xs text-[var(--text-muted)]">Token Name</p>
              <p className="text-white font-medium">AERO Token</p>
            </div>
            <div>
              <p className="text-xs text-[var(--text-muted)]">Token Standard</p>
              <p className="text-white font-medium">ERC-20</p>
            </div>
            <div>
              <p className="text-xs text-[var(--text-muted)]">Network</p>
              <p className="text-white font-medium">Ethereum (Sepolia Testnet)</p>
            </div>
            <div>
              <p className="text-xs text-[var(--text-muted)]">Decimals</p>
              <p className="text-white font-medium">18</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-4">Earning AERO Tokens</h2>
        <div className="space-y-4">
          <div className="hud-box p-5">
            <h3 className="text-sm font-medium text-[var(--primary-light)] mb-3">Daily Quest Rewards</h3>
            <ul className="text-[var(--text-secondary)] space-y-2 text-sm">
              <li><span className="text-white">Quest Completion:</span> 10-50 AERO per quest based on difficulty</li>
              <li><span className="text-white">Daily Full Clear:</span> +100 AERO bonus for completing all quests</li>
              <li><span className="text-white">Streak Bonus:</span> +10% per consecutive day (up to 100%)</li>
            </ul>
          </div>

          <div className="hud-box p-5">
            <h3 className="text-sm font-medium text-[var(--primary-light)] mb-3">Dungeon Raid Rewards</h3>
            <ul className="text-[var(--text-secondary)] space-y-2 text-sm">
              <li><span className="text-white">Floor Clear:</span> 5-20 AERO per floor</li>
              <li><span className="text-white">Boss Defeat:</span> 50-200 AERO per boss</li>
              <li><span className="text-white">Full Dungeon Clear:</span> Bonus AERO based on performance</li>
              <li><span className="text-white">First Clear Bonus:</span> 2x rewards on first completion</li>
            </ul>
          </div>

          <div className="hud-box p-5">
            <h3 className="text-sm font-medium text-[var(--primary-light)] mb-3">Achievement Rewards</h3>
            <ul className="text-[var(--text-secondary)] space-y-2 text-sm">
              <li><span className="text-white">Rank Up:</span> 100-1000 AERO per rank advancement</li>
              <li><span className="text-white">Milestones:</span> Variable AERO for reaching milestones</li>
              <li><span className="text-white">Personal Records:</span> 50 AERO per new PR</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-4">Token Utility</h2>
        <div className="hud-box p-5">
          <ul className="text-[var(--text-secondary)] space-y-2 text-sm">
            <li><span className="text-white">In-Game Purchases:</span> Buy equipment and items in Dungeon Raid</li>
            <li><span className="text-white">Stamina Refill:</span> Restore dungeon stamina</li>
            <li><span className="text-white">Skill Unlocks:</span> Unlock new combat skills</li>
            <li><span className="text-white">Cosmetics:</span> Purchase character skins and effects</li>
          </ul>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-4">Wallet Integration</h2>
        <div className="space-y-4">
          <div className="hud-box p-5">
            <h3 className="text-sm font-medium text-[var(--primary-light)] mb-3">Supported Wallets</h3>
            <ul className="text-[var(--text-secondary)] space-y-2 text-sm">
              <li><span className="text-white">MetaMask:</span> Primary wallet integration with sign-in support</li>
              <li><span className="text-white">WalletConnect:</span> Connect any compatible mobile wallet</li>
              <li><span className="text-white">Embedded Wallet:</span> In-app wallet for new crypto users</li>
            </ul>
          </div>

          <div className="hud-box p-5">
            <h3 className="text-sm font-medium text-[var(--primary-light)] mb-3">Authentication Methods</h3>
            <ul className="text-[var(--text-secondary)] space-y-2 text-sm">
              <li><span className="text-white">MetaMask Sign-In:</span> Authenticate with Ethereum address + signature</li>
              <li><span className="text-white">Wallet Linking:</span> Link wallet to existing email/social account</li>
              <li><span className="text-white">Multi-Wallet:</span> Support for multiple wallet addresses</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-4">Token Economics</h2>
        <div className="hud-box p-5">
          <h3 className="text-sm font-medium text-[var(--primary-light)] mb-3">Burn Mechanics</h3>
          <ul className="text-[var(--text-secondary)] space-y-2 text-sm">
            <li><span className="text-white">Equipment Purchases:</span> Tokens spent are partially burned</li>
            <li><span className="text-white">Stamina Refills:</span> 50% of tokens spent are burned</li>
            <li><span className="text-white">Premium Features:</span> Variable burn rate based on feature</li>
          </ul>
          <p className="text-xs text-[var(--text-muted)] mt-4 italic">
            Note: Tokenomics are subject to change during development. Currently deployed on Sepolia Testnet.
          </p>
        </div>
      </section>
    </div>
  )
}
