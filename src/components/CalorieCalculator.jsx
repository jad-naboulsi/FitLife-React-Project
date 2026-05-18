import { useState } from 'react'

function CalorieCalculator() {
  const [age, setAge] = useState('')
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [gender, setGender] = useState('male')
  const [activity, setActivity] = useState('1.375')
  const [result, setResult] = useState('')

  function calculateCalories(e) {
    e.preventDefault()

    if (!age || !weight || !height) {
      setResult('Please fill all fields first.')
      return
    }

    let bmr

    if (gender === 'male') {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5
    } else {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161
    }

    const maintenance = Math.round(bmr * Number(activity))
    const bulk = maintenance + 300
    const cut = maintenance - 300

    setResult(`Maintenance: ${maintenance} calories/day | Bulking: ${bulk} | Cutting: ${cut}`)
  }

  return (
    <section className="calculator-section">
      <div className="section-title">
        <h2>Calories Calculator</h2>
        <p>Enter simple information to estimate daily calories for maintaining, bulking, or cutting.</p>
      </div>

      <form className="calculator-form" onSubmit={calculateCalories}>
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <input
          type="number"
          placeholder="Weight in kg"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />

        <input
          type="number"
          placeholder="Height in cm"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />

        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <select value={activity} onChange={(e) => setActivity(e.target.value)}>
          <option value="1.2">Low activity</option>
          <option value="1.375">Light training</option>
          <option value="1.55">Moderate training</option>
          <option value="1.725">High training</option>
        </select>

        <button type="submit">Calculate Calories</button>
      </form>

      {result && <p className="calculator-result">{result}</p>}
    </section>
  )
}

export default CalorieCalculator
