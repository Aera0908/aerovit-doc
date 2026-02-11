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
            Custom ESP32-S3 based smartwatch for continuous biometric monitoring and activity tracking.
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
            Built-in cryptocurrency wallet and move-to-earn mechanics powered by the Ethereum blockchain.
          </p>
          <div className="hud-box p-5">
            <h3 className="text-sm font-medium text-[var(--primary-light)] mb-3">Blockchain Features</h3>
            <ul className="text-[var(--text-secondary)] space-y-2 text-sm">
              <li><span className="text-white">AERO Token:</span> ERC-20 token for workout rewards (Sepolia Testnet)</li>
              <li><span className="text-white">Wallet:</span> Embedded crypto wallet with MetaMask sign-in support</li>
              <li><span className="text-white">Move-to-Earn:</span> Earn tokens for completing daily quests and workouts</li>
              <li><span className="text-white">Social Auth:</span> Google, Facebook, and MetaMask authentication</li>
              <li><span className="text-white">On-Chain:</span> Transparent reward distribution via smart contracts</li>
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
      </div>
    </div>
  )
}
