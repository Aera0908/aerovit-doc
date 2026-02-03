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
            Inspired by Solo Leveling, the daily quest system provides personalized challenges
            that adapt to your fitness level and rank progression.
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
            Custom ESP32-based smartwatch for continuous biometric monitoring during workouts.
          </p>
          <div className="hud-box p-5">
            <h3 className="text-sm font-medium text-[var(--primary-light)] mb-3">Hardware Components</h3>
            <ul className="text-[var(--text-secondary)] space-y-2 text-sm">
              <li><span className="text-white">MAX30102:</span> Heart rate and SpO2 monitoring</li>
              <li><span className="text-white">MPU6050:</span> Motion tracking (accelerometer + gyroscope)</li>
              <li><span className="text-white">Filtering:</span> Kalman and moving average filters for clean data</li>
              <li><span className="text-white">BLE:</span> Real-time data transmission to mobile app</li>
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
      </div>
    </div>
  )
}
