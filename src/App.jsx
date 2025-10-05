import { useState } from 'react'
import Header from './components/Header'
import CounterButton from './components/CounterButton'
import PrimaryButton from './components/PrimaryButton'
import InfoCard from './components/InfoCard'

function App() {
  const [count, setCount] = useState(0)
  const [lastAction, setLastAction] = useState('Tap a button to interact with the app.')

  const handleIncrement = () => {
    setCount((c) => c + 1)
    setLastAction('Counter increased')
  }

  const handlePrimary = () => {
    setLastAction('Primary action triggered')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-sky-50 to-blue-50 flex items-center justify-center p-6">
      <div className="w-full max-w-3xl">
        <Header
          title="Vibe Coding App"
          subtitle="A clean, component-driven UI with an added action button."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          <InfoCard
            title="Live Counter"
            message="Keep track of how many times you've interacted."
          />
          <InfoCard
            title="Activity"
            message={lastAction}
          />
        </div>

        <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <CounterButton count={count} onIncrement={handleIncrement} />
          <PrimaryButton label="Add Button" onClick={handlePrimary} />
        </div>
      </div>
    </div>
  )
}

export default App
