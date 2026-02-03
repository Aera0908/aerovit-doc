import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-[var(--primary)]/10 bg-[var(--surface)] mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col gap-6">
          {/* Main Footer Content */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="font-semibold text-white text-sm">AEROVIT</p>
              <p className="text-xs text-[var(--text-muted)] mt-1">
                Undergraduate Thesis Project - 2025
              </p>
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <Link 
                to="/getting-started" 
                className="text-[var(--text-secondary)] hover:text-white transition-colors"
              >
                Documentation
              </Link>
              <a 
                href="https://github.com/aerovit"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-secondary)] hover:text-white transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Credits */}
          <div className="pt-4 border-t border-[var(--primary)]/10 text-center">
            <p className="text-xs text-[var(--text-muted)] mb-2">Developed by</p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm text-[var(--text-secondary)]">
              <span>Aira Josh Ynte</span>
              <span>Jeff Yancy Arguedo</span>
              <span>Christian Padilla</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
