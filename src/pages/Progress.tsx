export default function Progress() {
  const progressData = [
    { category: 'Mobile App', percentage: 85, status: 'In Development' },
    { category: 'Wearable Device', percentage: 70, status: 'In Development' },
    { category: 'AI Coach', percentage: 60, status: 'In Development' },
    { category: 'Documentation', percentage: 70, status: 'In Progress' },
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
        <div className="space-y-4">
          <div className="border-l-2 border-[var(--primary)] pl-4">
            <p className="text-sm text-[var(--text-muted)]">February 3, 2026</p>
            <p className="text-white">Documentation site launched with initial content</p>
          </div>
          <div className="border-l-2 border-[var(--primary)]/50 pl-4">
            <p className="text-sm text-[var(--text-muted)]">Coming Soon</p>
            <p className="text-[var(--text-secondary)]">More detailed progress tracking and milestones</p>
          </div>
        </div>
      </div>
    </div>
  )
}
