import Card from '../components/Card.jsx'
import CalorieCalculator from '../components/CalorieCalculator.jsx'

function Nutrition() {
  return (
    <section className="page">
      <div className="section-title">
        <h1>Nutrition Guide</h1>
        <p>Good nutrition helps the body recover, build muscle, and stay active during the day.</p>
      </div>

      <div className="grid two-columns">
        <Card title="Protein" text="Chicken, fish, eggs, tuna, yogurt, beans, and protein shakes." />
        <Card title="Carbohydrates" text="Rice, oats, pasta, potatoes, bread, and fruits for energy." />
        <Card title="Healthy Fats" text="Olive oil, nuts, avocado, peanut butter, and eggs." />
        <Card title="Hydration" text="Drink enough water especially before and after training." />
      </div>

      <h2 className="sub-title">Simple Meal Ideas</h2>
      <div className="meal-box">
        <p><strong>Breakfast:</strong> Oats with banana and milk.</p>
        <p><strong>Lunch:</strong> Chicken with rice and vegetables.</p>
        <p><strong>Snack:</strong> Yogurt, fruit, or peanut butter sandwich.</p>
        <p><strong>Dinner:</strong> Eggs, tuna, or grilled chicken with potatoes or salad.</p>
      </div>

      <div className="meal-box">
        <p><strong>Bulking idea:</strong> Add extra rice, oats, peanut butter, or olive oil to increase calories.</p>
        <p><strong>Cutting idea:</strong> Keep protein high and reduce sugary drinks and fried snacks.</p>
      </div>

      <CalorieCalculator />
    </section>
  )
}

export default Nutrition
