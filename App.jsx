import AppHeader from './components/AppHeader'
import PetActions from './components/PetActions'
import PetDisplay from './components/PetDisplay'
import PetStatus from './components/PetStatus'

function App() {
  return (
    <main className="app-shell">
      <AppHeader />
      <PetDisplay />
      <PetStatus />
      <PetActions />
    </main>
  )
}

export default App
