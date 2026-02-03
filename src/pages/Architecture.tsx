export default function Architecture() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-bold text-white mb-2">
        System Architecture
      </h1>
      <p className="text-[var(--text-secondary)] mb-8">
        Overview of the Aerovit system design and component interactions.
      </p>
      
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-4">Overview</h2>
        <p className="text-[var(--text-secondary)] mb-6 text-sm">
          Aerovit follows a modular architecture combining mobile, backend, AI/ML, 
          and hardware components for a unified fitness experience.
        </p>
        
        {/* Architecture Diagram */}
        <div className="hud-box p-6 overflow-x-auto">
          <ArchitectureDiagram />
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-4">Components</h2>
        
        <div className="space-y-4">
          <div className="hud-box p-5">
            <h3 className="text-base font-medium text-white mb-2">Flutter Mobile App</h3>
            <p className="text-[var(--text-secondary)] mb-3 text-sm">
              Cross-platform mobile application built with Flutter and Dart.
            </p>
            <ul className="text-[var(--text-muted)] text-sm space-y-1">
              <li>State management: Provider pattern</li>
              <li>Local storage: SharedPreferences</li>
              <li>Theme system: Dynamic rank-based colors</li>
            </ul>
          </div>

          <div className="hud-box p-5">
            <h3 className="text-base font-medium text-white mb-2">Firebase Backend</h3>
            <p className="text-[var(--text-secondary)] mb-3 text-sm">
              Serverless backend providing authentication and data persistence.
            </p>
            <ul className="text-[var(--text-muted)] text-sm space-y-1">
              <li>Authentication: Email/password</li>
              <li>Database: Firestore</li>
              <li>Storage: Firebase Storage</li>
            </ul>
          </div>

          <div className="hud-box p-5">
            <h3 className="text-base font-medium text-white mb-2">BlazePose Service</h3>
            <p className="text-[var(--text-secondary)] mb-3 text-sm">
              Python-based computer vision service for exercise tracking.
            </p>
            <ul className="text-[var(--text-muted)] text-sm space-y-1">
              <li>MediaPipe BlazePose for pose estimation</li>
              <li>Custom algorithms for rep counting</li>
              <li>WebSocket communication</li>
            </ul>
          </div>

          <div className="hud-box p-5">
            <h3 className="text-base font-medium text-white mb-2">AI Coach</h3>
            <p className="text-[var(--text-secondary)] mb-3 text-sm">
              RAG-powered conversational AI for workout guidance.
            </p>
            <ul className="text-[var(--text-muted)] text-sm space-y-1">
              <li>ChromaDB vector database</li>
              <li>LangChain RAG pipeline</li>
              <li>STT/TTS for voice interactions</li>
            </ul>
          </div>

          <div className="hud-box p-5">
            <h3 className="text-base font-medium text-white mb-2">ESP32 Wearable</h3>
            <p className="text-[var(--text-secondary)] mb-3 text-sm">
              Custom smartwatch hardware for biometric monitoring.
            </p>
            <ul className="text-[var(--text-muted)] text-sm space-y-1">
              <li>MAX30102: Heart rate + SpO2</li>
              <li>MPU6050: Accelerometer + Gyroscope</li>
              <li>BLE data transmission</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-4">Data Flow</h2>
        <div className="hud-box p-5">
          <ol className="text-[var(--text-secondary)] space-y-2 text-sm list-decimal list-inside">
            <li>User authenticates via Firebase</li>
            <li>App fetches user profile and daily quest from Firestore</li>
            <li>User starts workout session</li>
            <li>BlazePose analyzes camera feed for rep counting</li>
            <li>ESP32 wearable transmits biometric data via BLE</li>
            <li>AI Coach provides real-time feedback</li>
            <li>Workout data is saved to Firestore</li>
            <li>User profile is updated with XP and progress</li>
          </ol>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-4">Technology Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="hud-box p-4">
            <h4 className="text-sm font-medium text-[var(--primary-light)] mb-2">Frontend</h4>
            <ul className="text-[var(--text-secondary)] text-sm space-y-1">
              <li>Flutter 3.16+</li>
              <li>Dart 3.2+</li>
              <li>Provider</li>
            </ul>
          </div>
          <div className="hud-box p-4">
            <h4 className="text-sm font-medium text-[var(--primary-light)] mb-2">Backend</h4>
            <ul className="text-[var(--text-secondary)] text-sm space-y-1">
              <li>Firebase Auth</li>
              <li>Cloud Firestore</li>
              <li>Cloud Functions</li>
            </ul>
          </div>
          <div className="hud-box p-4">
            <h4 className="text-sm font-medium text-[var(--primary-light)] mb-2">AI/ML</h4>
            <ul className="text-[var(--text-secondary)] text-sm space-y-1">
              <li>Python 3.9+</li>
              <li>MediaPipe</li>
              <li>ChromaDB</li>
            </ul>
          </div>
          <div className="hud-box p-4">
            <h4 className="text-sm font-medium text-[var(--primary-light)] mb-2">Hardware</h4>
            <ul className="text-[var(--text-secondary)] text-sm space-y-1">
              <li>ESP32</li>
              <li>MAX30102</li>
              <li>MPU6050</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

// Architecture Diagram Component
function ArchitectureDiagram() {
  return (
    <div className="w-full">
      {/* Mobile App Layer */}
      <DiagramBox 
        title="Flutter Mobile App" 
        color="primary"
        className="w-full"
      >
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-2">
          <MiniBox label="Daily Quest" />
          <MiniBox label="AI Coach" />
          <MiniBox label="Profile" />
        </div>
      </DiagramBox>
      
      {/* Connection: App to Services */}
      <div className="flex justify-center py-1">
        <div className="w-px h-6 sm:h-8 bg-[var(--primary)]/40" />
      </div>

      {/* Services Layer */}
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
        <DiagramBox title="Firebase" subtitle="Backend" color="orange" className="flex-1" />
        <DiagramBox title="BlazePose" subtitle="Python" color="green" className="flex-1" />
      </div>

      {/* Connection: Services to Bottom */}
      <div className="flex justify-center py-1">
        <div className="w-px h-6 sm:h-8 bg-[var(--primary)]/40" />
      </div>

      {/* Bottom Layer */}
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
        <DiagramBox title="ESP32" subtitle="Wearable" color="purple" className="flex-1" />
        <DiagramBox title="AI Coach" subtitle="RAG" color="cyan" className="flex-1" />
      </div>

      {/* Legend */}
      <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-[var(--primary)]/10">
        <p className="text-xs text-[var(--text-muted)] mb-2">Components</p>
        <div className="flex flex-wrap gap-3 sm:gap-4 text-xs">
          <LegendItem color="primary" label="Mobile App" />
          <LegendItem color="orange" label="Backend" />
          <LegendItem color="green" label="Vision" />
          <LegendItem color="cyan" label="AI" />
          <LegendItem color="purple" label="Hardware" />
        </div>
      </div>
    </div>
  )
}

interface DiagramBoxProps {
  title: string
  subtitle?: string
  color: 'primary' | 'orange' | 'green' | 'cyan' | 'purple'
  className?: string
  children?: React.ReactNode
}

function DiagramBox({ title, subtitle, color, className = '', children }: DiagramBoxProps) {
  const colorMap = {
    primary: 'border-[var(--primary)] bg-[var(--primary)]/5',
    orange: 'border-orange-500/50 bg-orange-500/5',
    green: 'border-green-500/50 bg-green-500/5',
    cyan: 'border-cyan-400/50 bg-cyan-400/5',
    purple: 'border-purple-500/50 bg-purple-500/5',
  }
  
  const textColorMap = {
    primary: 'text-[var(--primary-light)]',
    orange: 'text-orange-400',
    green: 'text-green-400',
    cyan: 'text-cyan-400',
    purple: 'text-purple-400',
  }

  return (
    <div className={`border rounded-lg p-3 ${colorMap[color]} ${className}`}>
      <p className={`text-sm font-medium ${textColorMap[color]}`}>{title}</p>
      {subtitle && (
        <p className="text-xs text-[var(--text-muted)]">{subtitle}</p>
      )}
      {children}
    </div>
  )
}

function MiniBox({ label }: { label: string }) {
  return (
    <div className="px-2 py-1 text-xs bg-[var(--card)] border border-[var(--primary)]/20 rounded text-[var(--text-secondary)]">
      {label}
    </div>
  )
}

function LegendItem({ color, label }: { color: string; label: string }) {
  const colorMap: Record<string, string> = {
    primary: 'bg-[var(--primary)]',
    orange: 'bg-orange-500',
    green: 'bg-green-500',
    cyan: 'bg-cyan-400',
    purple: 'bg-purple-500',
  }
  
  return (
    <div className="flex items-center gap-1.5">
      <div className={`w-2 h-2 rounded-full ${colorMap[color]}`} />
      <span className="text-[var(--text-secondary)]">{label}</span>
    </div>
  )
}
