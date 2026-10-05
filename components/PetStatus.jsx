import MoodIndicator from './MoodIndicator'
import StatBar from './StatBar'

const statNames = ['Hunger', 'Happiness', 'Energy']

function PetStatus() {
  return (
    <section className="pet-status" aria-labelledby="pet-status-title">
      <h2 id="pet-status-title">Pet status</h2>
      <div className="stat-list" aria-label="Pet stats">
        {statNames.map((name) => (
          <StatBar key={name} name={name} />
        ))}
      </div>
      <MoodIndicator />
    </section>
  )
}

export default PetStatus
