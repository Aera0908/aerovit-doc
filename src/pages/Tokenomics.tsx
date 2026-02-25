export default function Tokenomics() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-bold text-white mb-2">
        Tokenomics
      </h1>
      <p className="text-[var(--text-secondary)] mb-8">
        AERO token economy, move-to-earn mechanics, and deflationary burn system.
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
            <div>
              <p className="text-xs text-[var(--text-muted)]">Max Supply</p>
              <p className="text-white font-medium">100,000,000 AERO</p>
            </div>
            <div>
              <p className="text-xs text-[var(--text-muted)]">Initial Mint</p>
              <p className="text-white font-medium">10,000,000 AERO</p>
            </div>
          </div>
          <p className="text-xs text-[var(--text-muted)] border-t border-[var(--primary)]/10 pt-3 mt-2">
            Contract: <code className="text-[var(--text-muted)]">0x4AEBa9CDc6B49ac5b677cB0CACB7bbf0B5B6F98E</code> (Sepolia)
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-4">Off-Chain / On-Chain Token Flow</h2>
        <p className="text-[var(--text-secondary)] mb-4 text-sm">
          Axie Infinity-style dual economy — tokens are earned off-chain (Firestore) and withdrawn on-chain via the hardware wallet.
        </p>
        <div className="hud-box p-5">
          <h3 className="text-sm font-medium text-[var(--primary-light)] mb-3">Token Flow</h3>
          <code className="block bg-[var(--background)] p-3 rounded text-[var(--text-muted)] text-xs overflow-x-auto">
            [Workout / Quest] → Off-chain AERO (Firestore)<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;↓ Withdraw request<br/>
            [Cloud Function] → Burn 5% fee on-chain → Transfer net to wallet<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;↓ Hardware wallet signs TX<br/>
            [On-Chain AERO] ← ERC-20 transfer confirmed<br/><br/>
            [On-Chain AERO] → Deposit detected → Credit to in-game balance
          </code>
        </div>
        <div className="hud-box p-5 mt-4">
          <h3 className="text-sm font-medium text-[var(--primary-light)] mb-3">Withdrawal Rules</h3>
          <ul className="text-[var(--text-secondary)] space-y-2 text-sm">
            <li><span className="text-white">Minimum Withdrawal:</span> 100 AERO</li>
            <li><span className="text-white">Withdrawal Fee:</span> 5% (burned on-chain)</li>
            <li><span className="text-white">Cooldown:</span> 24 hours between withdrawals</li>
            <li><span className="text-white">Signing:</span> Hardware wallet (ESP32) confirms each withdrawal</li>
          </ul>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-4">Earning AERO Tokens</h2>
        <div className="space-y-4">
          <div className="hud-box p-5">
            <h3 className="text-sm font-medium text-[var(--primary-light)] mb-3">Workout & Daily Quest Rewards</h3>
            <ul className="text-[var(--text-secondary)] space-y-2 text-sm">
              <li><span className="text-white">Workout Completion:</span> 50 base + 10 per perfect form rep</li>
              <li><span className="text-white">Quest Completion:</span> 100-500 AERO based on difficulty</li>
              <li><span className="text-white">Daily Login:</span> 10 base + 5 per streak day</li>
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
            <h3 className="text-sm font-medium text-[var(--primary-light)] mb-3">Progression Rewards</h3>
            <ul className="text-[var(--text-secondary)] space-y-2 text-sm">
              <li><span className="text-white">Level Up:</span> level × 50 AERO</li>
              <li><span className="text-white">Rank Breakthrough:</span> 500-2000 AERO based on rank</li>
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
            <h3 className="text-sm font-medium text-[var(--primary-light)] mb-3">Hardware Wallet (ESP32-S3 Watch)</h3>
            <ul className="text-[var(--text-secondary)] space-y-2 text-sm">
              <li><span className="text-white">On-Device Keys:</span> Private keys generated and stored on ESP32 — never leave the watch</li>
              <li><span className="text-white">secp256k1 ECDSA:</span> Native Ethereum transaction signing on the microcontroller</li>
              <li><span className="text-white">BLE Signing:</span> App sends TX hash → Watch signs → Returns 65-byte signature (r+s+v)</li>
              <li><span className="text-white">PIN Protection:</span> 6-digit PIN with PBKDF2 (10K iterations), 5-attempt lockout</li>
              <li><span className="text-white">AES-256 Storage:</span> Private key encrypted at rest in ESP32 NVS flash</li>
              <li><span className="text-white">Gesture Confirm:</span> Physical approval required for each transaction</li>
            </ul>
          </div>

          <div className="hud-box p-5">
            <h3 className="text-sm font-medium text-[var(--primary-light)] mb-3">Authentication Methods</h3>
            <ul className="text-[var(--text-secondary)] space-y-2 text-sm">
              <li><span className="text-white">Watch Wallet Auth:</span> Authenticate via BLE-paired hardware wallet address</li>
              <li><span className="text-white">Wallet Linking:</span> Link hardware wallet to existing email/social account</li>
              <li><span className="text-white">Social Login:</span> Google and Facebook as alternative sign-in methods</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-4">Burn Mechanics (Deflationary)</h2>
        <p className="text-[var(--text-secondary)] mb-4 text-sm">
          AERO is deflationary — tokens are permanently burned on-chain via the smart contract's <code className="text-[var(--text-muted)]">burn()</code> function.
          The burn is executed by the Cloud Function before transferring the net amount to the user's wallet.
        </p>
        <div className="space-y-4">
          <div className="hud-box p-5">
            <h3 className="text-sm font-medium text-[var(--primary-light)] mb-3">Withdrawal Burn (Live)</h3>
            <ul className="text-[var(--text-secondary)] space-y-2 text-sm">
              <li><span className="text-white">Rate:</span> 5% of every withdrawal is burned on-chain</li>
              <li><span className="text-white">Flow:</span> Validate → Burn fee → Transfer net → Record burnTxHash</li>
              <li><span className="text-white">Example:</span> Withdraw 1000 AERO → 50 burned, 950 sent to wallet</li>
            </ul>
            <code className="block bg-[var(--background)] p-3 rounded text-[var(--text-muted)] text-xs mt-3 overflow-x-auto">
              {`// Smart Contract
function burn(uint256 amount) external {
    _burn(msg.sender, amount);
    emit TokensBurned(msg.sender, amount);
}`}
            </code>
          </div>

          <div className="hud-box p-5">
            <h3 className="text-sm font-medium text-[var(--primary-light)] mb-3">In-Game Purchase Burns (Planned)</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-xs sm:text-sm text-left min-w-[280px]">
                <thead className="text-[var(--primary-light)] border-b border-[var(--primary)]/20">
                  <tr>
                    <th className="py-2 px-3">Purchase Category</th>
                    <th className="py-2 px-3">Burn Rate</th>
                  </tr>
                </thead>
                <tbody className="text-[var(--text-secondary)]">
                  <tr className="border-b border-[var(--primary)]/10">
                    <td className="py-2 px-3">Consumables / Common Items</td>
                    <td className="py-2 px-3 text-white">5%</td>
                  </tr>
                  <tr className="border-b border-[var(--primary)]/10">
                    <td className="py-2 px-3">Rare Items</td>
                    <td className="py-2 px-3 text-white">7%</td>
                  </tr>
                  <tr className="border-b border-[var(--primary)]/10">
                    <td className="py-2 px-3">Epic Items</td>
                    <td className="py-2 px-3 text-white">8%</td>
                  </tr>
                  <tr className="border-b border-[var(--primary)]/10">
                    <td className="py-2 px-3">Legendary Items</td>
                    <td className="py-2 px-3 text-white">10%</td>
                  </tr>
                  <tr className="border-b border-[var(--primary)]/10">
                    <td className="py-2 px-3">Stamina Refill</td>
                    <td className="py-2 px-3 text-white">10%</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3">Cosmetics</td>
                    <td className="py-2 px-3 text-white">3%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <p className="text-xs text-[var(--text-muted)] mt-4 italic">
          Note: Tokenomics are subject to change during development. Currently deployed on Sepolia Testnet.
        </p>
      </section>
    </div>
  )
}
