import Card from '../components/Card.jsx'
import WorkoutFilter from '../components/WorkoutFilter.jsx'

function Workouts() {
  return (
    <section className="page">
      <div className="section-title">
        <h1>Workout Programs</h1>
        <p>Choose between bodybuilding exercises and calisthenics movements depending on your fitness goal.</p>
      </div>

      <h2 className="sub-title">Bodybuilding Section</h2>
      <div className="grid two-columns">
        <Card title="Chest" text="Bench press, incline press, chest fly, and push ups." />
        <Card title="Back" text="Pull ups, rows, lat pulldown, and deadlifts." />
        <Card title="Legs" text="Squats, lunges, leg press, and calf raises." />
        <Card title="Arms" text="Bicep curls, tricep extensions, dips, and hammer curls." />
      </div>

      <h2 className="sub-title">Calisthenics Section</h2>
      <div className="grid two-columns">
        <Card title="Push Exercises" text="Push ups, diamond push ups, dips, and pike push ups." />
        <Card title="Pull Exercises" text="Pull ups, chin ups, body rows, and negative pull ups." />
        <Card title="Core Exercises" text="Plank, leg raises, mountain climbers, and hollow holds." />
        <Card title="Beginner Routine" text="Start with 3 sets of basic movements and increase slowly every week." />
      </div>

      <WorkoutFilter />
    </section>
  )
}

export default Workouts
