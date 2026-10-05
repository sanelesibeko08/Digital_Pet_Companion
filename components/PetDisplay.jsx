import { petArt } from '../data/petArt'

function PetDisplay() {
  return (
    <section className="pet-display" aria-labelledby="pet-display-title">
      <h2 id="pet-display-title">Your companion</h2>
      <pre className="pet-art" aria-label="ASCII pet placeholder">
        {petArt.idle}
      </pre>
    </section>
  )
}

export default PetDisplay
