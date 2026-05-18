import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <header className="header">
      <div className="logo">FitLife</div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/workouts">Workouts</NavLink>
        <NavLink to="/nutrition">Nutrition</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  )
}

export default Navbar
