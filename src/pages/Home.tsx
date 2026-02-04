import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="min-h-screen grid-bg">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-6">
            <span className="inline-block px-4 py-1 text-sm rounded-full bg-[var(--card)] border border-[var(--primary)]/30 text-[var(--primary-light)]">
              Undergraduate Thesis Project
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            AEROVIT
          </h1>
          <p className="text-xl md:text-2xl text-[var(--text-secondary)] mb-4 max-w-3xl mx-auto">
            Web3-Powered Fitness Platform with Move-to-Earn Mechanics
          </p>
          <p className="text-[var(--text-muted)] mb-10 max-w-2xl mx-auto">
            A comprehensive fitness ecosystem combining computer vision, wearable technology, 
            and blockchain rewards. Train, earn AERO tokens, and level up your fitness journey.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/getting-started" className="btn-primary">
              View Documentation
            </Link>
            <button
              disabled
              className="btn-secondary opacity-50 cursor-not-allowed"
              title="Currently Unavailable"
            >
              Source Code (Currently Unavailable)
            </button>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16 px-6 bg-[var(--surface)]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Project Overview</h2>
          <p className="text-center text-[var(--text-secondary)] mb-12 max-w-3xl mx-auto">
            Aerovit addresses the growing demand for accessible and engaging fitness solutions
            by integrating multiple technologies into a unified platform.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="hud-box p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-[var(--primary)]/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-[var(--primary-light)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Gamified Fitness</h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Daily quest system that makes exercise engaging with progressive challenges and rewards
              </p>
            </div>
            
            <div className="hud-box p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-[var(--primary)]/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-[var(--primary-light)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Computer Vision</h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Real-time exercise form tracking and rep counting using BlazePose technology
              </p>
            </div>
            
            <div className="hud-box p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-[var(--primary)]/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-[var(--primary-light)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Wearable Device</h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Custom ESP32-based smartwatch for biometric data collection and monitoring
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Timeline */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Project Milestones</h2>
          <p className="text-center text-[var(--text-secondary)] mb-12 max-w-2xl mx-auto">
            Track our journey from concept to completion
          </p>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-6 left-0 right-0 h-1 bg-gradient-to-r from-[var(--primary)]/20 via-[var(--primary)]/40 to-[var(--primary)]/20" />
            
            {/* Timeline Items */}
            <div className="relative grid grid-cols-2 md:grid-cols-4 lg:grid-cols-9 gap-4">
              <TimelineItem 
                milestone="Concept" 
                status="completed"
                description="Initial planning"
              />
              <TimelineItem 
                milestone="Hardware" 
                status="completed"
                description="ESP32 watch design"
              />
              <TimelineItem 
                milestone="BlazePose" 
                status="completed"
                description="CV integration"
              />
              <TimelineItem 
                milestone="Mobile App" 
                status="completed"
                description="Flutter development"
              />
              <TimelineItem 
                milestone="Web3" 
                status="completed"
                description="Wallet & tokens"
              />
              <TimelineItem 
                milestone="AI Coach" 
                status="active"
                description="RAG system"
              />
              <TimelineItem 
                milestone="Tokenomics" 
                status="upcoming"
                description="AERO economy"
              />
              <TimelineItem 
                milestone="Testing" 
                status="upcoming"
                description="User trials"
              />
              <TimelineItem 
                milestone="Launch" 
                status="upcoming"
                description="Final release"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Core Features</h2>
          <p className="text-center text-[var(--text-secondary)] mb-12 max-w-2xl mx-auto">
            Each component is designed to work together, creating a seamless fitness experience.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FeatureCard
              icon={<QuestIcon />}
              title="Daily Quest System"
              description="RPG-inspired daily challenges that adapt to your fitness level. Complete quests to earn XP, AERO tokens, and level up your rank."
            />
            <FeatureCard
              icon={<AIIcon />}
              title="AI Fitness Coach"
              description="RAG-powered assistant that provides personalized workout guidance, answers fitness questions, and tracks your progress."
            />
            <FeatureCard
              icon={<CameraIcon />}
              title="BlazePose Tracking"
              description="MediaPipe-based computer vision for real-time exercise form analysis, rep counting, and movement quality feedback."
            />
            <FeatureCard
              icon={<WatchIcon />}
              title="Biometric Monitoring"
              description="Heart rate, SpO2, temperature, and motion tracking via custom ESP32 smartwatch with BLE connectivity."
            />
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 px-6 bg-[var(--surface)]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Technology Stack</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <TechCard 
              category="Mobile App" 
              technologies={['Flutter', 'Dart', 'Firebase']} 
            />
            <TechCard 
              category="AI / ML" 
              technologies={['Python', 'BlazePose', 'ChromaDB', 'ONNX']} 
            />
            <TechCard 
              category="Hardware" 
              technologies={['ESP32', 'MAX30102', 'MPU6050', 'BLE']} 
            />
            <TechCard 
              category="Backend" 
              technologies={['Firebase Auth', 'Firestore', 'FastAPI']} 
            />
            <TechCard 
              category="Web3" 
              technologies={['Ethereum', 'ERC-20', 'MetaMask', 'Sepolia']} 
            />
          </div>
        </div>
      </section>

      {/* Web3 Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Move-to-Earn Economy</h2>
          <p className="text-center text-[var(--text-secondary)] mb-12 max-w-2xl mx-auto">
            Built on Web3 principles, Aerovit rewards your fitness efforts with real value.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="hud-box p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-purple-500/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">AERO Token</h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Earn AERO tokens for completing workouts, daily quests, and achieving milestones
              </p>
            </div>
            
            <div className="hud-box p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-orange-500/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">MetaMask Wallet</h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Secure wallet integration for managing your AERO tokens and fitness rewards
              </p>
            </div>
            
            <div className="hud-box p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-blue-500/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">On-Chain Rewards</h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Transparent, verifiable rewards on Ethereum with real ownership of your earnings
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-[var(--surface)]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Explore the Documentation</h2>
          <p className="text-[var(--text-secondary)] mb-8">
            Learn about the system architecture, implementation details, and how to set up the project.
          </p>
          <Link to="/getting-started" className="btn-primary">
            Get Started
          </Link>
        </div>
      </section>
    </div>
  )
}

interface TimelineItemProps {
  milestone: string
  status: 'completed' | 'active' | 'upcoming'
  description: string
}

function TimelineItem({ milestone, status, description }: TimelineItemProps) {
  const getStatusColor = () => {
    switch (status) {
      case 'completed':
        return 'bg-green-500 border-green-500'
      case 'active':
        return 'bg-[var(--primary)] border-[var(--primary)] animate-pulse'
      case 'upcoming':
        return 'bg-[var(--card)] border-[var(--primary)]/30'
      default:
        return 'bg-[var(--card)] border-[var(--primary)]/30'
    }
  }

  const getTextColor = () => {
    switch (status) {
      case 'completed':
        return 'text-green-400'
      case 'active':
        return 'text-[var(--primary-light)]'
      case 'upcoming':
        return 'text-[var(--text-muted)]'
      default:
        return 'text-[var(--text-muted)]'
    }
  }

  return (
    <div className="flex flex-col items-center">
      {/* Circle Marker */}
      <div className={`relative w-12 h-12 rounded-full border-4 ${getStatusColor()} flex items-center justify-center mb-3 z-10`}>
        {status === 'completed' && (
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        )}
        {status === 'active' && (
          <div className="w-3 h-3 rounded-full bg-white" />
        )}
      </div>
      
      {/* Milestone Info */}
      <div className="text-center">
        <p className={`font-semibold text-sm mb-1 ${getTextColor()}`}>{milestone}</p>
        <p className="text-xs text-[var(--text-muted)]">{description}</p>
      </div>
    </div>
  )
}

// Icon Components
function QuestIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    </svg>
  )
}

function AIIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  )
}

function CameraIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
  )
}

function WatchIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="hud-box p-6 transition-all hover:border-[var(--primary)]/40">
      <div className="w-10 h-10 mb-4 rounded-lg bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary-light)]">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-sm text-[var(--text-secondary)]">{description}</p>
    </div>
  )
}

interface TechCardProps {
  category: string
  technologies: string[]
}

function TechCard({ category, technologies }: TechCardProps) {
  return (
    <div className="hud-box p-5">
      <h3 className="text-sm font-semibold text-[var(--primary-light)] mb-3 uppercase tracking-wider">
        {category}
      </h3>
      <ul className="space-y-2">
        {technologies.map((tech) => (
          <li key={tech} className="text-sm text-[var(--text-secondary)]">
            {tech}
          </li>
        ))}
      </ul>
    </div>
  )
}
