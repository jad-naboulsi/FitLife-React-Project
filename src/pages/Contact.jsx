import { useState } from 'react'

function Contact() {
  const [message, setMessage] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    setMessage('Thank you for contacting FitLife. We will respond soon.')
  }

  return (
    <section className="page narrow-page">
      <h1>Contact Us</h1>
      <p>If you have any question about workouts or nutrition, you can send us a message.</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>

      {message && <p className="success-message">{message}</p>}
    </section>
  )
}

export default Contact
