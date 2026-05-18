import { useState } from 'react'

const workouts = [
  { name: 'Bench Press', type: 'Bodybuilding', level: 'Intermediate', muscle: 'Chest' },
  { name: 'Incline Dumbbell Press', type: 'Bodybuilding', level: 'Beginner', muscle: 'Chest' },
  { name: 'Lat Pulldown', type: 'Bodybuilding', level: 'Beginner', muscle: 'Back' },
  { name: 'Deadlift', type: 'Bodybuilding', level: 'Advanced', muscle: 'Back' },
  { name: 'Squats', type: 'Bodybuilding', level: 'Intermediate', muscle: 'Legs' },
  { name: 'Leg Press', type: 'Bodybuilding', level: 'Beginner', muscle: 'Legs' },
  { name: 'Push Ups', type: 'Calisthenics', level: 'Beginner', muscle: 'Chest' },
  { name: 'Pull Ups', type: 'Calisthenics', level: 'Intermediate', muscle: 'Back' },
  { name: 'Dips', type: 'Calisthenics', level: 'Intermediate', muscle: 'Arms' },
  { name: 'Plank', type: 'Calisthenics', level: 'Beginner', muscle: 'Core' },
  { name: 'Leg Raises', type: 'Calisthenics', level: 'Beginner', muscle: 'Core' },
  { name: 'Pike Push Ups', type: 'Calisthenics', level: 'Intermediate', muscle: 'Shoulders' }
]

function WorkoutFilter() {
  const [selectedType, setSelectedType] = useState('All')
  const [selectedLevel, setSelectedLevel] = useState('All')

  const filteredWorkouts = workouts.filter((workout) => {
    const typeMatch = selectedType === 'All' || workout.type === selectedType
    const levelMatch = selectedLevel === 'All' || workout.level === selectedLevel
    return typeMatch && levelMatch
  })

  return (
    <section className="filter-box">
      <div className="section-title">
        <h2>Workout Filter</h2>
        <p>Use the filter to quickly choose exercises depending on training style and difficulty.</p>
      </div>

      <div className="filter-controls">
        <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
          <option value="All">All Types</option>
          <option value="Bodybuilding">Bodybuilding</option>
          <option value="Calisthenics">Calisthenics</option>
        </select>

        <select value={selectedLevel} onChange={(e) => setSelectedLevel(e.target.value)}>
          <option value="All">All Levels</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>
      </div>

      <div className="workout-list">
        {filteredWorkouts.map((workout, index) => (
          <div className="workout-item" key={index}>
            <h3>{workout.name}</h3>
            <p>{workout.type} • {workout.level} • {workout.muscle}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WorkoutFilter
