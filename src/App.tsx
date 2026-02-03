import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import Home from './pages/Home'
import GettingStarted from './pages/GettingStarted'
import Features from './pages/Features'
import Architecture from './pages/Architecture'
import Progress from './pages/Progress'

function AppContent() {
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      {isHomePage ? (
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      ) : (
        <div className="flex flex-1">
          <Sidebar />
          <main className="flex-1 p-8 max-w-4xl">
            <Routes>
              <Route path="/getting-started" element={<GettingStarted />} />
              <Route path="/features" element={<Features />} />
              <Route path="/architecture" element={<Architecture />} />
              <Route path="/progress" element={<Progress />} />
            </Routes>
          </main>
        </div>
      )}
      <Footer />
    </div>
  )
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App
