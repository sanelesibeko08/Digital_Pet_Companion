function StatBar({ name }) {
  return (
    <div className="stat" data-stat={name.toLowerCase()}>
      <span className="stat-label">{name}</span>
      <div className="progress-bar" role="progressbar" aria-label={`${name} level`} />
    </div>
  )
}

export default StatBar
