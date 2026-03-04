export default function Progress() {
  const progressData = [
    { category: 'Mobile App', percentage: 92, status: 'In Development' },
    { category: 'Dungeon Raid Game', percentage: 92, status: 'In Development' },
    { category: 'Wearable Device', percentage: 90, status: 'In Development' },
    { category: 'AI Coach', percentage: 75, status: 'In Development' },
    { category: 'Web3 Integration', percentage: 85, status: 'In Development' },
    { category: 'RL Model Integration', percentage: 90, status: 'Production Ready' },
    { category: 'Documentation', percentage: 85, status: 'In Progress' },
  ]

  const overallProgress = Math.round(
    progressData.reduce((sum, item) => sum + item.percentage, 0) / progressData.length
  )

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-white mb-4">Development Progress</h1>
        <p className="text-[var(--text-secondary)] text-lg">
          Track the current status of Aerovit project components.
        </p>
      </div>

      {/* Overall Progress */}
      <div className="hud-panel p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-white">Overall Progress</h2>
          <span className="text-3xl font-bold text-[var(--primary-light)]">{overallProgress}%</span>
        </div>
        <div className="w-full bg-[var(--card)] rounded-full h-4 overflow-hidden border border-[var(--primary)]/20">
          <div
            className="h-full bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)] transition-all duration-500"
            style={{ width: `${overallProgress}%` }}
          />
        </div>
      </div>

      {/* Component Progress */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Component Breakdown</h2>
        {progressData.map((item, index) => (
          <div key={index} className="hud-panel p-6">
            <div className="flex items-center justify-between mb-3">
              <div>
                <h3 className="text-xl font-semibold text-white">{item.category}</h3>
                <p className="text-sm text-[var(--text-muted)]">{item.status}</p>
              </div>
              <span className="text-2xl font-bold text-[var(--primary-light)]">{item.percentage}%</span>
            </div>
            <div className="w-full bg-[var(--card)] rounded-full h-3 overflow-hidden border border-[var(--primary)]/20">
              <div
                className="h-full bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)] transition-all duration-500"
                style={{ width: `${item.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Recent Updates */}
      <div className="hud-panel p-6">
        <h2 className="text-2xl font-bold text-white mb-4">Recent Updates</h2>
        <div className="space-y-6">
          {/* March 4, 2026 Update - Dungeon Game Major Expansion */}
          <div className="border-l-2 border-red-500 pl-4">
            <p className="text-sm text-red-400 font-medium">March 4, 2026</p>
            <p className="text-white font-semibold mb-2">Dungeon Raid — 20-Floor Expansion, Equipment, Consumables &amp; Full Audio</p>
            <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-0.5">✓</span>
                <span><strong className="text-white">20-Floor Dungeon</strong> — Expanded from 5 to 20 floors with 10 enemy species, 62 encounters, and progressive difficulty</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-0.5">✓</span>
                <span><strong className="text-white">Boss System</strong> — Floor 10 mini-boss (Venom Widow) and Floor 20 final boss (Demon Lord) with 3-phase mechanic (solo → summons adds → AoE rage)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-0.5">✓</span>
                <span><strong className="text-white">Equipment System</strong> — 11 weapons + 11 armors (Common to Legendary) with on-hit effects: poison, bleed, lifesteal, deflect</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-0.5">✓</span>
                <span><strong className="text-white">Consumable Items</strong> — 9 consumables (potions, antidotes, salves, elixirs, buff crystals); bag UI with scroll, select, and use</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-0.5">✓</span>
                <span><strong className="text-white">Player Status Effects</strong> — Enemies now apply status effects to player; player processes DoTs, stun/freeze/paralysis skip turns</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-0.5">✓</span>
                <span><strong className="text-white">44 VFX Classes</strong> — Per-skill visual effects for all 23 player skills and enemy abilities with screen shake</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-0.5">✓</span>
                <span><strong className="text-white">43 SFX Files</strong> — Complete audio: skill SFX, enemy attack SFX (bite, rock smash/blast/slide, bone, web, poison, paralyze), hit impacts, blocks, UI, death</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-0.5">✓</span>
                <span><strong className="text-white">BGM System</strong> — Battle intro → seamless loop → outro architecture with victory fanfare; AudioContext SFX/BGM conflict fix</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-0.5">✓</span>
                <span><strong className="text-white">SFX Timing Polish</strong> — VFX → hit impact sequencing (500ms magic, 300ms physical); wait-for-playback system for proper audio flow</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-0.5">✓</span>
                <span><strong className="text-white">Save &amp; Resume</strong> — Exit mid-dungeon and resume from current floor; consumable state, gold, and progress persisted to Firestore</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-0.5">✓</span>
                <span><strong className="text-white">Floor Reward System</strong> — Gold scaling (80 + floor×20), first-clear bonuses, replay reduction (20%), loot drops by floor tier</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-0.5">✓</span>
                <span><strong className="text-white">Shop System</strong> — 4-tab shop (Weapons, Armor, Consumables, Skill Tree) with 5 rarity tiers and gold currency</span>
              </li>
            </ul>
          </div>

          {/* February 25, 2026 Update - Hardware Wallet & Token Burning */}
          <div className="border-l-2 border-amber-500 pl-4">
            <p className="text-sm text-amber-400 font-medium">February 25, 2026</p>
            <p className="text-white font-semibold mb-2">Hardware Watch Wallet & Token Burning System</p>
            <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
              <li className="flex items-start gap-2">
                <span className="text-amber-400 mt-0.5">✓</span>
                <span><strong className="text-white">Hardware Wallet Core</strong> — Full Ethereum wallet on ESP32-S3: BIP-39 mnemonic, BIP-32 key derivation, secp256k1 ECDSA signing</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 mt-0.5">✓</span>
                <span><strong className="text-white">Custom Keccak-256</strong> — On-device Ethereum address derivation (0x01 padding, not SHA3)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 mt-0.5">✓</span>
                <span><strong className="text-white">AES-256 Key Storage</strong> — Private key encrypted with PKCS7 padding in ESP32 NVS flash, 16-byte IV + salt</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 mt-0.5">✓</span>
                <span><strong className="text-white">PIN Security</strong> — PBKDF2 (10K iterations), 5-attempt lockout with 5-minute cooldown, session key in RAM only</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 mt-0.5">✓</span>
                <span><strong className="text-white">Secure Signing Flow</strong> — Private key decrypted in RAM only during signing, immediately wiped; EIP-2 s-normalization + recovery ID</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 mt-0.5">✓</span>
                <span><strong className="text-white">BLE Wallet Protocol</strong> — 7 opcodes (CREATE/UNLOCK/LOCK/GET_ADDRESS/SIGN_TX/GET_STATUS) with response codes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 mt-0.5">✓</span>
                <span><strong className="text-white">Wallet UI</strong> — Watch dashboard page showing AERO token balance, LOCKED/UNLOCKED badge, address display</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 mt-0.5">✓</span>
                <span><strong className="text-white">Token Burn System</strong> — 5% of every withdrawal burned on-chain via smart contract burn() function</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 mt-0.5">✓</span>
                <span><strong className="text-white">Cloud Function Withdrawal</strong> — Validate → Burn fee on-chain → Transfer net to wallet → Record burnTxHash in Firestore</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 mt-0.5">✓</span>
                <span><strong className="text-white">Planned Burn Tiers</strong> — In-game purchase burns: 3% cosmetics, 5% common, 7% rare, 8% epic, 10% legendary/stamina</span>
              </li>
            </ul>
          </div>

          {/* February 23, 2026 Update - Social, Compare, Notifications, Trophy Case */}
          <div className="border-l-2 border-emerald-500 pl-4">
            <p className="text-sm text-emerald-400 font-medium">February 23, 2026</p>
            <p className="text-white font-semibold mb-2">Social Tab, Compare Hunters, Notifications & Trophy Case</p>
            <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5">✓</span>
                <span><strong className="text-white">Social Tab</strong> — Replaced Rank tab with Social: Leaderboards (Local / Global / Friends) and Friends list with friend requests (Accept/Decline)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5">✓</span>
                <span><strong className="text-white">Compare Hunters</strong> — Side-by-side compare with any leaderboard user: level, streak, XP, and dungeon character (floor cleared, ATK/DEF, equipped weapon/armor)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5">✓</span>
                <span><strong className="text-white">Notification Bell</strong> — Bell icon in upper-right of dashboard; mute option in Settings (persisted)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5">✓</span>
                <span><strong className="text-white">Trophy Case</strong> — Users select up to 3 achievements to display on their profile; shown in social profile dialog and leaderboard cards</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5">✓</span>
                <span><strong className="text-white">Profile Titles</strong> — Unlockable titles from achievements; selectable in Hunter Profile with All/Unlocked/Locked filters</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5">✓</span>
                <span><strong className="text-white">Firestore Social</strong> — friends and friendRequests collections; FirebaseService methods for send/accept/decline and streams for friends and requests</span>
              </li>
            </ul>
          </div>

          {/* February 18, 2026 Update - Pre-Recorded Audio & Adaptive Workouts */}
          <div className="border-l-2 border-pink-500 pl-4">
            <p className="text-sm text-pink-400 font-medium">February 18, 2026</p>
            <p className="text-white font-semibold mb-2">Pre-Recorded Audio System & Adaptive Workout Generation</p>
            <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
              <li className="flex items-start gap-2">
                <span className="text-pink-400 mt-0.5">✓</span>
                <span><strong className="text-white">Zero-Delay Audio</strong> — Pre-generated voice files for instant workout feedback (0ms vs 1-3s API calls)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-pink-400 mt-0.5">✓</span>
                <span><strong className="text-white">Three Coach Personalities</strong> — Fitness Monarch (serious), Luna (friendly), Valkyrie (fierce) with unique voice styles</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-pink-400 mt-0.5">✓</span>
                <span><strong className="text-white">Modular Audio Chaining</strong> — Numbers (1-20) + modifiers dynamically chainable for rep feedback</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-pink-400 mt-0.5">✓</span>
                <span><strong className="text-white">Exercise Library</strong> — 24 BlazePose-supported exercises across Legs, Push, Pull, Core, Full Body</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-pink-400 mt-0.5">✓</span>
                <span><strong className="text-white">Equipment Selection</strong> — Bodyweight, Home Equipment, Gym modes for workout customization</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-pink-400 mt-0.5">✓</span>
                <span><strong className="text-white">35 Predefined Workouts</strong> — RAG-validated workouts with zero hallucination guarantee</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-pink-400 mt-0.5">✓</span>
                <span><strong className="text-white">In-Game Token System</strong> — Axie-style off-chain accumulation with on-chain withdrawal via hardware wallet</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-pink-400 mt-0.5">✓</span>
                <span><strong className="text-white">Performance Optimization</strong> — Native splash screens, OptimizedHudBox (5x widget reduction), GPU-accelerated grids</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-pink-400 mt-0.5">✓</span>
                <span><strong className="text-white">RL Model Production Ready</strong> — FSM-Constrained PPO with &gt;90% validation accuracy, ONNX/TFLite ready</span>
              </li>
            </ul>
          </div>

          {/* February 12, 2026 Update - Wake/Sleep System */}
          <div className="border-l-2 border-cyan-500 pl-4">
            <p className="text-sm text-cyan-400 font-medium">February 12, 2026</p>
            <p className="text-white font-semibold mb-2">Watch Wake/Sleep System & Battery Detection</p>
            <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-0.5">✓</span>
                <span><strong className="text-white">Dual Timeout System</strong> — Soft wake (10s) and dashboard (10s) with separate timeout handling</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-0.5">✓</span>
                <span><strong className="text-white">Raise-to-Wake → Soft Wake</strong> — Wrist raise shows time screen at dim brightness (10s timeout)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-0.5">✓</span>
                <span><strong className="text-white">Touch → Dashboard</strong> — Tap during soft wake transitions to full dashboard</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-0.5">✓</span>
                <span><strong className="text-white">Power Button Wake</strong> — Direct wake to dashboard, bypassing soft wake</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-0.5">✓</span>
                <span><strong className="text-white">Soft Wake Debounce</strong> — 500ms debounce prevents false touch wakes from arm movement</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-0.5">✓</span>
                <span><strong className="text-white">Battery Detection Fix</strong> — Fixed USB vs battery detection using 4180mV voltage threshold</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-0.5">✓</span>
                <span><strong className="text-white">Charging Indicator</strong> — Correctly shows charging only when USB connected</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-0.5">✓</span>
                <span><strong className="text-white">ADC Debug Logging</strong> — Added raw ADC, pin voltage, and battery voltage logging</span>
              </li>
            </ul>
          </div>

          {/* February 9, 2026 Update - Dungeon Game */}
          <div className="border-l-2 border-orange-500 pl-4">
            <p className="text-sm text-orange-400 font-medium">February 9, 2026</p>
            <p className="text-white font-semibold mb-2">Dungeon Raid Game System - Complete Implementation</p>
            <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-0.5">✓</span>
                <span><strong className="text-white">Turn-Based Combat</strong> — Pokemon-style strategic battles with speed-based turn order</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-0.5">✓</span>
                <span><strong className="text-white">Status Effect System</strong> — 10 status effects: Poison, Burn, Freeze, Paralysis, Bleed, Stun, Weaken, Slow, Blind, Curse</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-0.5">✓</span>
                <span><strong className="text-white">Skill System</strong> — 20+ skills including Physical, Magic, Heal, Buff, and Status types with SP costs</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-0.5">✓</span>
                <span><strong className="text-white">Multi-Enemy Battles</strong> — Fight multiple enemies per floor with target selection</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-0.5">✓</span>
                <span><strong className="text-white">Dungeon Floor Progression</strong> — 5-floor dungeons with boss fights and AERO token rewards</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-0.5">✓</span>
                <span><strong className="text-white">Flame 2D Integration</strong> — Full game engine with sprites, animations, and effects</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-0.5">✓</span>
                <span><strong className="text-white">Character Stats</strong> — 6-stat system (STR, VIT, AGI, INT, END, LUK) with derived combat stats</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-0.5">✓</span>
                <span><strong className="text-white">Workout Integration</strong> — Character stats scale with user's fitness progress and streak multiplier</span>
              </li>
            </ul>
          </div>

          {/* February 5, 2026 Update - Social Auth */}
          <div className="border-l-2 border-purple-500 pl-4">
            <p className="text-sm text-purple-400 font-medium">February 5, 2026 — Evening</p>
            <p className="text-white font-semibold mb-2">Social Authentication & Wallet Integration</p>
            <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
              <li className="flex items-start gap-2">
                <span className="text-purple-400 mt-0.5">✓</span>
                <span><strong className="text-white">Google Sign-In</strong> — Added Google authentication via Firebase Auth</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 mt-0.5">✓</span>
                <span><strong className="text-white">Facebook Login</strong> — Integrated Facebook authentication with flutter_facebook_auth</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 mt-0.5">✓</span>
                <span><strong className="text-white">MetaMask Sign-In</strong> — Wallet-based authentication using Ethereum address + signature</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 mt-0.5">✓</span>
                <span><strong className="text-white">Social Login UI</strong> — HUD-styled buttons for Google, Facebook, MetaMask on login screen</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 mt-0.5">✓</span>
                <span><strong className="text-white">WalletService Provider</strong> — Registered WalletService in MultiProvider for global access</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 mt-0.5">✓</span>
                <span><strong className="text-white">Package Fix</strong> — Downgraded google_sign_in to v6.x for API compatibility</span>
              </li>
            </ul>
          </div>

          {/* February 5, 2026 Update */}
          <div className="border-l-2 border-green-500 pl-4">
            <p className="text-sm text-green-400 font-medium">February 5, 2026</p>
            <p className="text-white font-semibold mb-2">Major Hardware & App Integration Update</p>
            <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-0.5">✓</span>
                <span><strong className="text-white">QR Code Pairing Bug Fix</strong> — Resolved connectivity issues during device pairing</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-0.5">✓</span>
                <span><strong className="text-white">Quest Progress Sync</strong> — Connected quest progress from app to hardware display</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-0.5">✓</span>
                <span><strong className="text-white">Activity Auto-Detection</strong> — Implemented cadence-based activity classification (Idle/Walk/Run)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-0.5">✓</span>
                <span><strong className="text-white">Activity Stats Page</strong> — Created dedicated watch UI page with cadence arc, calories, walk/run time</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-0.5">✓</span>
                <span><strong className="text-white">Page Reordering</strong> — New order: Biometrics → Activity Stats → Quest → Connection</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-0.5">✓</span>
                <span><strong className="text-white">False Detection Fix</strong> — Increased idle threshold to 50 spm for better accuracy</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-0.5">✓</span>
                <span><strong className="text-white">Layout Fixes</strong> — Adjusted Walk/Run label positions to prevent overlap with timers</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-0.5">✓</span>
                <span><strong className="text-white">App Integration</strong> — Extended BLE protocol to send activity data (24-byte packets)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-0.5">✓</span>
                <span><strong className="text-white">Dashboard Update</strong> — Added Activity Stats section with activity type card and 4 metric cards</span>
              </li>
            </ul>
          </div>

          {/* February 3, 2026 Update */}
          <div className="border-l-2 border-[var(--primary)] pl-4">
            <p className="text-sm text-[var(--text-muted)]">February 3, 2026</p>
            <p className="text-white">Documentation site launched with initial content</p>
          </div>
        </div>
      </div>
    </div>
  )
}
