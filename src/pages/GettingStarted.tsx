import { Link } from 'react-router-dom'

export default function GettingStarted() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-bold text-white mb-2">
        Getting Started
      </h1>
      <p className="text-[var(--text-secondary)] mb-8">
        Set up and run the Aerovit project on your local machine.
      </p>
      
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-4">Prerequisites</h2>
        <div className="hud-box p-5">
          <ul className="text-[var(--text-secondary)] space-y-2 text-sm">
            <li>Flutter SDK 3.16.0 or higher</li>
            <li>Python 3.9+ (for AI coach backend)</li>
            <li>Firebase account</li>
            <li>Android Studio or Xcode (for mobile development)</li>
            <li>PlatformIO (for ESP32 development)</li>
          </ul>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-4">Installation</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-base font-medium text-[var(--primary-light)] mb-2">1. Clone the Repository</h3>
            <pre className="text-sm">
              <code>git clone https://github.com/aerovit/aerovit.git{'\n'}cd aerovit</code>
            </pre>
          </div>

          <div>
            <h3 className="text-base font-medium text-[var(--primary-light)] mb-2">2. Setup Flutter App</h3>
            <pre className="text-sm">
              <code>cd Aerovit_app{'\n'}flutter pub get{'\n'}flutter run</code>
            </pre>
          </div>

          <div>
            <h3 className="text-base font-medium text-[var(--primary-light)] mb-2">3. Setup AI Coach Backend</h3>
            <pre className="text-sm">
              <code>cd ai_coach_dummy{'\n'}pip install -r requirements.txt{'\n'}python src/main.py</code>
            </pre>
          </div>

          <div>
            <h3 className="text-base font-medium text-[var(--primary-light)] mb-2">4. Setup BlazePose Tracking</h3>
            <pre className="text-sm">
              <code>cd Blazepose-test{'\n'}pip install -r requirements.txt{'\n'}python src/main.py</code>
            </pre>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-4">Firebase Configuration</h2>
        <div className="hud-box p-5">
          <ol className="text-[var(--text-secondary)] space-y-3 list-decimal list-inside text-sm">
            <li>Create a new Firebase project at <a href="https://console.firebase.google.com" className="text-[var(--primary-light)] hover:underline" target="_blank" rel="noopener noreferrer">console.firebase.google.com</a></li>
            <li>Enable Authentication (Email/Password)</li>
            <li>Create a Firestore database</li>
            <li>Download <code>google-services.json</code> (Android) and <code>GoogleService-Info.plist</code> (iOS)</li>
            <li>Place configuration files in appropriate directories</li>
          </ol>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-4">Next Steps</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link to="/features" className="hud-box p-5 hover:border-[var(--primary)]/40 transition-all">
            <h3 className="text-base font-semibold text-white mb-1">Explore Features</h3>
            <p className="text-[var(--text-secondary)] text-sm">Learn about daily quests, AI coaching, and more</p>
          </Link>
          <Link to="/architecture" className="hud-box p-5 hover:border-[var(--primary)]/40 transition-all">
            <h3 className="text-base font-semibold text-white mb-1">Architecture</h3>
            <p className="text-[var(--text-secondary)] text-sm">Understand the system design and components</p>
          </Link>
        </div>
      </section>
    </div>
  )
}
