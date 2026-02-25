import { Link, useLocation } from 'react-router-dom'

const pageOrder = [
  { path: '/getting-started', label: 'Getting Started' },
  { path: '/features', label: 'Features' },
  { path: '/architecture', label: 'Architecture' },
  { path: '/hardware', label: 'Hardware' },
  { path: '/tokenomics', label: 'Tokenomics' },
  { path: '/progress', label: 'Progress' },
]

export default function PageNavigation() {
  const location = useLocation()
  const currentIndex = pageOrder.findIndex(p => p.path === location.pathname)
  
  // Don't show on home page or pages not in the list
  if (currentIndex === -1) return null
  
  const prevPage = currentIndex > 0 ? pageOrder[currentIndex - 1] : null
  const nextPage = currentIndex < pageOrder.length - 1 ? pageOrder[currentIndex + 1] : null

  return (
    <div className="flex items-center justify-between text-xs sm:text-sm py-2 border-b border-[var(--primary)]/10 mb-4">
      {prevPage ? (
        <Link 
          to={prevPage.path}
          className="flex items-center gap-1 text-[var(--text-muted)] hover:text-[var(--primary-light)] transition-colors"
        >
          <span>←</span>
          <span className="hidden xs:inline">{prevPage.label}</span>
          <span className="xs:hidden">{prevPage.label.split(' ')[0]}</span>
        </Link>
      ) : (
        <div />
      )}
      
      {nextPage ? (
        <Link 
          to={nextPage.path}
          className="flex items-center gap-1 text-[var(--text-muted)] hover:text-[var(--primary-light)] transition-colors"
        >
          <span className="hidden xs:inline">{nextPage.label}</span>
          <span className="xs:hidden">{nextPage.label.split(' ')[0]}</span>
          <span>→</span>
        </Link>
      ) : (
        <div />
      )}
    </div>
  )
}

export function PageNavigationBottom() {
  const location = useLocation()
  const currentIndex = pageOrder.findIndex(p => p.path === location.pathname)
  
  if (currentIndex === -1) return null
  
  const prevPage = currentIndex > 0 ? pageOrder[currentIndex - 1] : null
  const nextPage = currentIndex < pageOrder.length - 1 ? pageOrder[currentIndex + 1] : null

  return (
    <div className="flex items-center justify-between text-xs sm:text-sm py-3 border-t border-[var(--primary)]/10 mt-8">
      {prevPage ? (
        <Link 
          to={prevPage.path}
          className="flex items-center gap-1 text-[var(--text-muted)] hover:text-[var(--primary-light)] transition-colors"
        >
          <span>←</span>
          <span>{prevPage.label}</span>
        </Link>
      ) : (
        <div />
      )}
      
      {nextPage ? (
        <Link 
          to={nextPage.path}
          className="flex items-center gap-1 text-[var(--text-muted)] hover:text-[var(--primary-light)] transition-colors"
        >
          <span>{nextPage.label}</span>
          <span>→</span>
        </Link>
      ) : (
        <div />
      )}
    </div>
  )
}
