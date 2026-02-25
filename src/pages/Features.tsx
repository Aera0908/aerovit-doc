export default function Features() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-bold text-white mb-2">
        Features
      </h1>
      <p className="text-[var(--text-secondary)] mb-8">
        Core features that make up the Aerovit fitness platform.
      </p>
      
      <div className="space-y-10">
        <section>
          <h2 className="text-xl font-semibold text-white mb-4">Daily Quest System</h2>
          <p className="text-[var(--text-secondary)] mb-4 text-sm">
            The gamified daily quest system provides personalized challenges
            that adapt to your fitness level and rank progression, rewarding you with AERO tokens.
          </p>
          <div className="hud-box p-5">
            <h3 className="text-sm font-medium text-[var(--primary-light)] mb-3">Key Features</h3>
            <ul className="text-[var(--text-secondary)] space-y-2 text-sm">
              <li>Dynamic difficulty scaling based on user rank (E to S-Rank)</li>
              <li>5 daily exercises: Push-ups, Sit-ups, Squats, Running, Plank</li>
              <li>XP rewards and streak tracking</li>
              <li>4 AM daily reset system</li>
              <li>Progress persistence across app sessions</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-4">AI Fitness Coach</h2>
          <p className="text-[var(--text-secondary)] mb-4 text-sm">
            RAG-powered AI assistant that provides personalized workout guidance using a
            curated knowledge base of fitness information.
          </p>
          <div className="hud-box p-5">
            <h3 className="text-sm font-medium text-[var(--primary-light)] mb-3">Capabilities</h3>
            <ul className="text-[var(--text-secondary)] space-y-2 text-sm">
              <li>Real-time workout advice and form corrections</li>
              <li>Personalized training recommendations</li>
              <li>Voice and text interactions via STT/TTS</li>
              <li>Exercise database with contextual responses</li>
              <li>ChromaDB-powered semantic search</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-4">BlazePose Tracking</h2>
          <p className="text-[var(--text-secondary)] mb-4 text-sm">
            Real-time exercise form analysis using Google's MediaPipe BlazePose for accurate
            rep counting and posture correction.
          </p>
          <div className="hud-box p-5">
            <h3 className="text-sm font-medium text-[var(--primary-light)] mb-3">Supported Exercises</h3>
            <ul className="text-[var(--text-secondary)] space-y-2 text-sm">
              <li>Push-ups (with form feedback)</li>
              <li>Sit-ups (rep counting)</li>
              <li>Squats (depth and alignment analysis)</li>
              <li>Plank (hold time tracking)</li>
              <li>Custom pose detection algorithms</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-4">Wearable Integration</h2>
          <p className="text-[var(--text-secondary)] mb-4 text-sm">
            Custom ESP32-S3 based smartwatch for continuous biometric monitoring, activity tracking, and hardware wallet security.
          </p>
          <div className="hud-box p-5">
            <h3 className="text-sm font-medium text-[var(--primary-light)] mb-3">Hardware Components</h3>
            <ul className="text-[var(--text-secondary)] space-y-2 text-sm">
              <li><span className="text-white">MAX30102:</span> Heart rate and SpO2 monitoring</li>
              <li><span className="text-white">QMI8658:</span> 6-axis IMU (accelerometer + gyroscope)</li>
              <li><span className="text-white">Activity Detection:</span> Auto-detect walking, running, idle states</li>
              <li><span className="text-white">Signal Filtering:</span> Kalman and moving average filters for clean data</li>
              <li><span className="text-white">BLE:</span> Real-time data transmission to mobile app</li>
              <li><span className="text-white">Quest Sync:</span> Display quest progress on watch</li>
              <li><span className="text-white">Hardware Wallet:</span> On-device Ethereum key generation, AES-256 storage, ECDSA signing</li>
            </ul>
          </div>
          <div className="hud-box p-5 mt-4">
            <h3 className="text-sm font-medium text-[var(--primary-light)] mb-3">Smart Wake/Sleep System</h3>
            <ul className="text-[var(--text-secondary)] space-y-2 text-sm">
              <li><span className="text-white">Raise-to-Wake:</span> Wrist tilt gesture shows soft wake time screen (10s timeout)</li>
              <li><span className="text-white">Soft Wake:</span> Dim clock display for quick time checks without full wake</li>
              <li><span className="text-white">Dashboard Wake:</span> Tap or power button for full dashboard access (10s timeout)</li>
              <li><span className="text-white">Gesture Debounce:</span> 500ms touch debounce prevents false wakes from arm movement</li>
              <li><span className="text-white">Power Button Toggle:</span> Quick sleep/wake toggle with direct dashboard access</li>
              <li><span className="text-white">Timeout Chain:</span> Dashboard → soft wake → full sleep for battery conservation</li>
            </ul>
          </div>
          <div className="hud-box p-5 mt-4">
            <h3 className="text-sm font-medium text-[var(--primary-light)] mb-3">Battery & Power Management</h3>
            <ul className="text-[var(--text-secondary)] space-y-2 text-sm">
              <li><span className="text-white">Voltage Monitoring:</span> ADC-based battery level with 2:1 voltage divider</li>
              <li><span className="text-white">USB Detection:</span> Automatic USB vs battery mode detection (4180mV threshold)</li>
              <li><span className="text-white">Charging Indicator:</span> Visual charging status when connected to USB</li>
              <li><span className="text-white">Power Latch:</span> GPIO-controlled power system for clean shutdown</li>
              <li><span className="text-white">Auto-Dim:</span> Reduces brightness after 5s inactivity to save power</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-4">Progress Tracking</h2>
          <div className="hud-box p-5">
            <ul className="text-[var(--text-secondary)] space-y-2 text-sm">
              <li>Daily, weekly, and monthly statistics</li>
              <li>Rank progression system (E, D, C, B, A, S, National)</li>
              <li>Streak tracking and rewards</li>
              <li>Historical workout data visualization</li>
              <li>Personal records and achievements</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-4">Dungeon Raid Game</h2>
          <p className="text-[var(--text-secondary)] mb-4 text-sm">
            Pokemon-style turn-based dungeon crawler where your workout progress powers your in-game character.
          </p>
          <div className="hud-box p-5">
            <h3 className="text-sm font-medium text-[var(--primary-light)] mb-3">Game Features</h3>
            <ul className="text-[var(--text-secondary)] space-y-2 text-sm">
              <li><span className="text-white">Turn-Based Combat:</span> Speed-based turn order with strategic skill selection</li>
              <li><span className="text-white">Status Effects:</span> 10 effects including Poison, Burn, Freeze, Paralysis, and more</li>
              <li><span className="text-white">Skill System:</span> 20+ skills across Physical, Magic, Heal, Buff, and Status categories</li>
              <li><span className="text-white">Multi-Enemy Battles:</span> Fight multiple enemies per floor with target selection</li>
              <li><span className="text-white">5-Floor Dungeons:</span> Progressive difficulty with boss fights</li>
              <li><span className="text-white">AERO Token Rewards:</span> Earn tokens for dungeon completion</li>
            </ul>
          </div>
          <div className="hud-box p-5 mt-4">
            <h3 className="text-sm font-medium text-[var(--primary-light)] mb-3">Character Stats</h3>
            <ul className="text-[var(--text-secondary)] space-y-2 text-sm">
              <li><span className="text-white">STR (Strength):</span> Physical damage and carry weight</li>
              <li><span className="text-white">VIT (Vitality):</span> Max HP and defense</li>
              <li><span className="text-white">AGI (Agility):</span> Speed, dodge chance, and crit chance</li>
              <li><span className="text-white">INT (Intelligence):</span> Magic damage and max mana</li>
              <li><span className="text-white">END (Endurance):</span> Stamina regen and status resistance</li>
              <li><span className="text-white">LUK (Luck):</span> Drop rates and crit damage</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-4">Web3 Integration</h2>
          <p className="text-[var(--text-secondary)] mb-4 text-sm">
            Hardware wallet on the ESP32-S3 watch and move-to-earn mechanics powered by the Ethereum blockchain.
            Private keys never leave the device — true hardware-level security.
          </p>
          <div className="hud-box p-5">
            <h3 className="text-sm font-medium text-[var(--primary-light)] mb-3">Blockchain Features</h3>
            <ul className="text-[var(--text-secondary)] space-y-2 text-sm">
              <li><span className="text-white">AERO Token:</span> ERC-20 token for workout rewards (Sepolia Testnet)</li>
              <li><span className="text-white">Hardware Wallet:</span> ESP32-S3 watch generates & stores keys, signs transactions via BLE</li>
              <li><span className="text-white">Software Wallets:</span> MetaMask, WalletConnect, and embedded wallet support</li>
              <li><span className="text-white">Move-to-Earn:</span> Earn tokens for completing daily quests and workouts</li>
              <li><span className="text-white">Token Burning:</span> 5% withdrawal fee burned on-chain for deflationary economics</li>
              <li><span className="text-white">Social Auth:</span> Google, Facebook, and MetaMask authentication</li>
              <li><span className="text-white">On-Chain:</span> Transparent reward distribution via smart contracts</li>
            </ul>
          </div>
          <div className="hud-box p-5 mt-4">
            <h3 className="text-sm font-medium text-[var(--primary-light)] mb-3">Hardware Wallet Security</h3>
            <ul className="text-[var(--text-secondary)] space-y-2 text-sm">
              <li><span className="text-white">Key Generation:</span> BIP-39 mnemonic → BIP-32 seed → secp256k1 on-device</li>
              <li><span className="text-white">Encryption:</span> AES-256-CBC with PKCS7 padding in ESP32 NVS flash</li>
              <li><span className="text-white">PIN Lock:</span> PBKDF2 (10K iterations), 5-attempt lockout with 5-min cooldown</li>
              <li><span className="text-white">Signing:</span> Private key decrypted only in RAM during signing, wiped immediately</li>
              <li><span className="text-white">Keccak-256:</span> Custom implementation for Ethereum address derivation</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-4">Authentication Options</h2>
          <div className="hud-box p-5">
            <ul className="text-[var(--text-secondary)] space-y-2 text-sm">
              <li><span className="text-white">Email/Password:</span> Traditional Firebase authentication</li>
              <li><span className="text-white">Google Sign-In:</span> Quick access via Google account</li>
              <li><span className="text-white">Facebook Login:</span> Social authentication integration</li>
              <li><span className="text-white">MetaMask:</span> Web3 wallet-based authentication with Ethereum address</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-4">Pre-Recorded Audio System</h2>
          <p className="text-[var(--text-secondary)] mb-4 text-sm">
            Zero-delay voice feedback system with pre-generated audio for instant playback during workouts.
            Modular audio chaining allows dynamic phrase construction.
          </p>
          <div className="hud-box p-5">
            <h3 className="text-sm font-medium text-[var(--primary-light)] mb-3">Key Features</h3>
            <ul className="text-[var(--text-secondary)] space-y-2 text-sm">
              <li><span className="text-white">Instant Playback:</span> 0ms delay vs 1-3 second API calls</li>
              <li><span className="text-white">Three Coach Personalities:</span> Fitness Monarch (serious), Luna (friendly), Valkyrie (fierce)</li>
              <li><span className="text-white">Modular Audio:</span> Numbers (1-20) + modifiers chainable for dynamic feedback</li>
              <li><span className="text-white">Rep Feedback Variations:</span> Good/Perfect rep phrases with 3 variations each</li>
              <li><span className="text-white">Offline Capable:</span> Works without internet for pre-recorded phrases</li>
              <li><span className="text-white">API Cost Reduction:</span> 80-90% fewer TTS API calls</li>
            </ul>
          </div>
          <div className="hud-box p-5 mt-4">
            <h3 className="text-sm font-medium text-[var(--primary-light)] mb-3">Audio Categories</h3>
            <ul className="text-[var(--text-secondary)] space-y-2 text-sm">
              <li><span className="text-white">Countdown:</span> Ready, 3, 2, 1, Go! phrases</li>
              <li><span className="text-white">Numbers:</span> 1-20 standalone for mixing</li>
              <li><span className="text-white">Modifiers:</span> "Last rep", "Second to last", "Halfway", etc.</li>
              <li><span className="text-white">Rep Feedback:</span> Good/Perfect/Bad rep responses</li>
              <li><span className="text-white">Transitions:</span> Next exercise, rest time, final set</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-4">Adaptive Workout System</h2>
          <p className="text-[var(--text-secondary)] mb-4 text-sm">
            AI-powered workout generation using only BlazePose-supported exercises from a curated library.
            Dynamically adapts to user level, biometrics, and available equipment.
          </p>
          <div className="hud-box p-5">
            <h3 className="text-sm font-medium text-[var(--primary-light)] mb-3">Exercise Library</h3>
            <ul className="text-[var(--text-secondary)] space-y-2 text-sm">
              <li><span className="text-white">LEGS (6):</span> Squats, Lunges, Bulgarian Split Squats, Wall Sits, Goblet Squats</li>
              <li><span className="text-white">PUSH (6):</span> Push-ups (standard/incline/decline), Dips, Shoulder Press</li>
              <li><span className="text-white">PULL (5):</span> Pull-ups, Chin-ups, Inverted Rows, Resistance Band Row</li>
              <li><span className="text-white">CORE (5):</span> Plank, Russian Twist, Bicycle Crunch, Leg Raise, Mountain Climber</li>
              <li><span className="text-white">FULL BODY (2):</span> Jumping Jacks, Burpees</li>
            </ul>
          </div>
          <div className="hud-box p-5 mt-4">
            <h3 className="text-sm font-medium text-[var(--primary-light)] mb-3">Equipment Modes</h3>
            <ul className="text-[var(--text-secondary)] space-y-2 text-sm">
              <li><span className="text-white">Bodyweight Only:</span> No equipment needed</li>
              <li><span className="text-white">Home Equipment:</span> Dumbbells, resistance bands, pull-up bar, bench</li>
              <li><span className="text-white">Gym:</span> Full gym equipment (coming soon)</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-4">RAG Workout Selection</h2>
          <p className="text-[var(--text-secondary)] mb-4 text-sm">
            35 predefined workouts that RAG must choose from — zero hallucinations possible.
            Ensures consistent, validated exercise routines.
          </p>
          <div className="hud-box p-5">
            <h3 className="text-sm font-medium text-[var(--primary-light)] mb-3">Workout Categories</h3>
            <ul className="text-[var(--text-secondary)] space-y-2 text-sm">
              <li><span className="text-white">Difficulty-Based (20):</span> Beginner, Intermediate, Advanced, Elite workouts</li>
              <li><span className="text-white">Goal-Based (7):</span> Fat loss, muscle gain, strength, mobility, core stability</li>
              <li><span className="text-white">Time-Based (3):</span> Quick 15min, Medium 30min, Long 45min</li>
              <li><span className="text-white">Equipment-Based (4):</span> Bodyweight only, dumbbells, bands, pull bar</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-4">In-Game Token System</h2>
          <p className="text-[var(--text-secondary)] mb-4 text-sm">
            Axie Infinity-style token economy with off-chain accumulation and on-chain withdrawal.
            ESP32 watch acts as hardware ledger for secure transaction signing. 5% of every withdrawal is burned on-chain.
          </p>
          <div className="hud-box p-5">
            <h3 className="text-sm font-medium text-[var(--primary-light)] mb-3">Token Flow</h3>
            <ul className="text-[var(--text-secondary)] space-y-2 text-sm">
              <li><span className="text-white">Earn:</span> Complete workouts → AERO stored in Firestore (off-chain)</li>
              <li><span className="text-white">Withdraw:</span> Request → Cloud Function burns 5% fee → Watch signs TX → Net sent to wallet</li>
              <li><span className="text-white">Deposit:</span> On-chain → Detected → Credit to in-game balance</li>
              <li><span className="text-white">Burn:</span> 5% withdrawal fee + planned in-game purchase burns (3-10% by rarity)</li>
            </ul>
          </div>
          <div className="hud-box p-5 mt-4">
            <h3 className="text-sm font-medium text-[var(--primary-light)] mb-3">Earning AERO</h3>
            <ul className="text-[var(--text-secondary)] space-y-2 text-sm">
              <li><span className="text-white">Workout Completion:</span> 50 base + 10 per perfect form</li>
              <li><span className="text-white">Quest Completion:</span> 100-500 based on difficulty</li>
              <li><span className="text-white">Daily Login:</span> 10 base + 5 per streak day</li>
              <li><span className="text-white">Level Up:</span> level × 50</li>
              <li><span className="text-white">Rank Breakthrough:</span> 500-2000 based on rank</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-4">RL Coaching Integration</h2>
          <p className="text-[var(--text-secondary)] mb-4 text-sm">
            FSM-Constrained PPO model for intelligent workout intensity adjustments.
            Deterministic safety layer + learned optimization policy.
          </p>
          <div className="hud-box p-5">
            <h3 className="text-sm font-medium text-[var(--primary-light)] mb-3">Action Space</h3>
            <ul className="text-[var(--text-secondary)] space-y-2 text-sm">
              <li><span className="text-white">FSM Layer:</span> EMERGENCY_STOP, REDUCE_MODERATELY (safety-critical)</li>
              <li><span className="text-white">RL Layer:</span> MAINTAIN, INCREASE_SLIGHTLY, INCREASE_MODERATELY, REDUCE_SLIGHTLY</li>
            </ul>
          </div>
          <div className="hud-box p-5 mt-4">
            <h3 className="text-sm font-medium text-[var(--primary-light)] mb-3">Input Features</h3>
            <ul className="text-[var(--text-secondary)] space-y-2 text-sm">
              <li><span className="text-white">heart_rate_zone:</span> resting, recovery, aerobic, anaerobic, maximum, dangerous</li>
              <li><span className="text-white">spo2_level:</span> excellent, good, moderate, low, critical</li>
              <li><span className="text-white">body_condition:</span> good, moderate, poor, critical</li>
              <li><span className="text-white">safety_score:</span> 1-10 integer</li>
              <li><span className="text-white">performance_score:</span> 1-10 integer</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-4">Performance Optimization</h2>
          <p className="text-[var(--text-secondary)] mb-4 text-sm">
            Native splash screens and optimized widget library for smooth app experience.
          </p>
          <div className="hud-box p-5">
            <h3 className="text-sm font-medium text-[var(--primary-light)] mb-3">Optimizations</h3>
            <ul className="text-[var(--text-secondary)] space-y-2 text-sm">
              <li><span className="text-white">Native Splash:</span> Instant display while Flutter initializes</li>
              <li><span className="text-white">Pre-rendered PNGs:</span> 9-slice HUD borders, grid patterns</li>
              <li><span className="text-white">OptimizedHudBox:</span> PNG 9-slice instead of 5 widgets (~5x reduction)</li>
              <li><span className="text-white">MinimalHudBox:</span> Simple border, fastest option</li>
              <li><span className="text-white">StaticGridBackground:</span> Tiled PNG instead of CustomPaint (GPU-accelerated)</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  )
}
