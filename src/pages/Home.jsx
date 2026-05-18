import { Link } from 'react-router-dom'
import BmiCalculator from '../components/BmiCalculator.jsx'
import Card from '../components/Card.jsx'
import workout1 from '../assets/workout1.avif'
import workout2 from '../assets/workout2.avif'
import workout3 from '../assets/workout3.avif'

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-text">
          <h1>Build Strength. Transform Your Body.</h1>
          <p>Your fitness journey starts today.</p>
          <Link className="btn" to="/workouts">Explore Workouts</Link>
        </div>
      </section>

      <section className="features">
        <Card title="Workout Plans" text="Simple training programs for bodybuilding and calisthenics." />
        <Card title="Nutrition Tips" text="Meal ideas to support strength, energy, and a healthy lifestyle." />
        <Card title="Fitness Lifestyle" text="Build discipline and consistency through daily habits." />
      </section>

      <section className="page light-section">
        <div className="section-title">
          <h2>Why Choose FitLife?</h2>
          <p>FitLife gives basic and clear fitness information for beginners and students who want to start training.</p>
        </div>
        <div className="grid three-columns">
          <Card title="Easy Navigation" text="The pages are organized so users can quickly find workouts, nutrition, and contact information." />
          <Card title="Beginner Friendly" text="The content uses simple explanations and examples that are easy to follow." />
          <Card title="Responsive Layout" text="The website works properly on laptops, tablets, and mobile phones." />
        </div>
      </section>

      <section className="gallery">
        <img src={workout1} alt="Gym workout" />
        <img src={workout2} alt="Fitness training" />
        <img src={workout3} alt="Healthy lifestyle" />
      </section>

      <BmiCalculator />
    </>
  )
}

export default Home
