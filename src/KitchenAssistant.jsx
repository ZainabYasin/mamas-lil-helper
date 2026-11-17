import './KitchenAssistant.css'

function KitchenAssistant({ onBack }) {
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
        <h1>Kitchen Assistant</h1>
        <p className="page-sub">Your recipes, cooking history and meal ideas — all in one place.</p>

        <div className="empty-state">
          <div className="empty-icon">🍳</div>
          <h3>No recipes yet</h3>
          <p>This is where your saved recipes will show up.</p>
          <button className="primary-btn">+ Add your first recipe</button>
        </div>
      </main>
    </div>
  )
}

export default KitchenAssistant