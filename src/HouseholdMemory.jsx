import './KitchenAssistant.css'

function HouseholdMemory({ onBack }) {
  return (
    <div className="kitchen-page">
      <header className="page-header">
        <button className="back-link" onClick={onBack}>← Back</button>
        <div className="page-brand">
          <span className="brand-dot"></span>
          Mama's Lil Helper
        </div>
      </header>

      <main className="page-main">
        <h1>Household Memory</h1>
        <p className="page-sub">Where did I put it? This is where you'll always remember.</p>

        <div className="empty-state">
          <div className="empty-icon">🏠</div>
          <h3>Nothing recorded yet</h3>
          <p>This is where your saved item locations will show up.</p>
          <button className="primary-btn">+ Record where something is</button>
        </div>
      </main>
    </div>
  )
}

export default HouseholdMemory