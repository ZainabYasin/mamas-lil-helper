import { useState } from 'react'
import './App.css'
import KitchenAssistant from './KitchenAssistant'
import HouseholdMemory from './HouseholdMemory'

function App() {
  const [selected, setSelected] = useState(null)

  const t = {
    welcomeTitle: "Good evening!",
    welcomeSub: "What would you like to do today?",
    suggestionLabel: "Today's suggestion",
    suggestionMeal: "Try something with chicken",
    kitchenTitle: "Kitchen Assistant",
    kitchenDesc: "Your recipes, cooking history and meal ideas.",
    householdTitle: "Household Memory",
    householdDesc: "Remember where everything is kept.",
    open: "Open",
  }

  if (selected === 'kitchen') {
    return <KitchenAssistant onBack={() => setSelected(null)} />
  }
    if (selected === 'household') {
    return <HouseholdMemory onBack={() => setSelected(null)} />
  }

  return (
    <div className="app">
      <header className="header">
        <div className="brand">
          <span className="brand-dot"></span>
          Mama's Lil Helper
        </div>
      </header>

      <main className="main">
        <section className="welcome">
          <h1>{t.welcomeTitle}</h1>
          <p>{t.welcomeSub}</p>
        </section>

        <section className="suggestion-card">
          <div>
            <div className="suggestion-label">{t.suggestionLabel}</div>
            <h2>{t.suggestionMeal}</h2>
          </div>
          <div className="suggestion-icon">🍲</div>
        </section>

        <section className="grid">
          <button className="card" onClick={() => setSelected('kitchen')}>
            <div className="card-icon icon-kitchen">🍳</div>
            <h3>{t.kitchenTitle}</h3>
            <p>{t.kitchenDesc}</p>
            <span className="card-arrow">{t.open} →</span>
          </button>

          <button className="card" onClick={() => setSelected('household')}>
            <div className="card-icon icon-household">🏠</div>
            <h3>{t.householdTitle}</h3>
            <p>{t.householdDesc}</p>
            <span className="card-arrow">{t.open} →</span>
          </button>
        </section>
      </main>

      <footer className="footer">Mama's Lil Helper · made with care</footer>
    </div>
  )
}

export default App