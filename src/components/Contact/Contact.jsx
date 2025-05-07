import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import './Contact.scss'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Construction du lien mailto avec les données du formulaire
    const mailtoLink = `mailto:jordanmoret4@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Nom: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`
    window.location.href = mailtoLink
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="contact">
      <h1>Contact</h1>
      <div className="contact__container">
        <div className="contact__info">
          <h2>Informations de contact</h2>
          <div className="contact__info-items">
            
            <div className="contact__info-item">
              <FontAwesomeIcon icon={faPhone} />
              <p>Sur demande</p>
            </div>
            <div className="contact__info-item">
              <FontAwesomeIcon icon={faLocationDot} />
              <p>Le Boulou, France</p>
            </div>
          </div>
        </div>
        
        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nom complet</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Sujet</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
            ></textarea>
          </div>

          <button type="submit" className="submit-button">
            Envoyer le message
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact