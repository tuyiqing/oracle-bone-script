import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import HomePage from '@/pages/home-page'
import CharacterDetailPage from '@/pages/character-detail-page'

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="oracle-bone-theme">
      <div className="min-h-screen bg-slate-950 text-slate-50">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/character/:id" element={<CharacterDetailPage />} />
        </Routes>
        <Toaster />
      </div>
    </ThemeProvider>
  )
}

export default App
