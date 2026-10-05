import ActionButton from './ActionButton'

const actions = ['Feed', 'Play', 'Clean']

function PetActions() {
  return (
    <section className="pet-actions" aria-labelledby="pet-actions-title">
      <h2 id="pet-actions-title">Actions</h2>
      <div className="action-buttons">
        {actions.map((label) => (
          <ActionButton key={label} label={label} />
        ))}
      </div>
    </section>
  )
}

export default PetActions
