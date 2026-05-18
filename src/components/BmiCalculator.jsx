import { useState } from 'react'

function BmiCalculator() {
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [result, setResult] = useState(null)

  function calculateBmi(e) {
    e.preventDefault()

    const weightNumber = parseFloat(weight)
    const heightNumber = parseFloat(height) / 100

    if (!weightNumber || !heightNumber) {
      setResult('Please enter valid numbers.')
      return
    }

    const bmi = weightNumber / (heightNumber * heightNumber)
    let category = 'Normal weight'

    if (bmi < 18.5) {
      category = 'Underweight'
    } else if (bmi >= 25 && bmi < 30) {
      category = 'Overweight'
    } else if (bmi >= 30) {
      category = 'Obese'
    }

    setResult(`Your BMI is ${bmi.toFixed(1)} - ${category}`)
  }

  return (
    <section className="bmi-section">
      <div className="section-title">
        <h2>BMI Calculator</h2>
        <p>Check your body mass index using your height and weight.</p>
      </div>

      <form className="bmi-form" onSubmit={calculateBmi}>
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
        <button type="submit">Calculate BMI</button>
      </form>

      {result && <p className="bmi-result">{result}</p>}
    </section>
  )
}

export default BmiCalculator
