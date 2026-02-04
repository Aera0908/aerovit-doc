import { Link, useLocation } from 'react-router-dom'

const navigation = [
  {
    title: 'Documentation',
    items: [
      { title: 'Getting Started', path: '/getting-started' },
      { title: 'Features', path: '/features' },
      { title: 'Architecture', path: '/architecture' },
      { title: 'Progress', path: '/progress' },
    ]
  },
  {
    title: 'Web3',
    items: [
      { title: 'Tokenomics', path: '/tokenomics', disabled: true },
    ]
  }
]

export default function Sidebar() {
  const location = useLocation()

  return (
    <aside className="w-64 border-r border-[var(--primary)]/10 min-h-[calc(100vh-73px)] p-6 hidden lg:block bg-[var(--surface)]">
      <nav className="space-y-6">
        {navigation.map((section) => (
          <div key={section.title}>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-3 px-3">
              {section.title}
            </h3>
            <div className="space-y-1">
              {section.items.map((item: { title: string; path: string; disabled?: boolean }) => (
                item.disabled ? (
                  <div
                    key={item.path}
                    className="flex items-center justify-between px-3 py-2 rounded-md text-sm text-[var(--text-muted)] cursor-not-allowed"
                  >
                    <span>{item.title}</span>
                    <span className="text-xs px-1.5 py-0.5 rounded bg-yellow-500/20 text-yellow-400">Soon</span>
                  </div>
                ) : (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`block px-3 py-2 rounded-md text-sm transition-all ${
                      location.pathname === item.path
                        ? 'text-[var(--primary-light)] bg-[var(--primary)]/10'
                        : 'text-[var(--text-secondary)] hover:text-white hover:bg-[var(--card)]'
                    }`}
                  >
                    {item.title}
                  </Link>
                )
              ))}
            </div>
          </div>
        ))}
      </nav>
    </aside>
  )
}
