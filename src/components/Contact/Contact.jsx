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

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    subject: false,
    message: false
  })

  // Expressions régulières pour la validation
  const validations = {
    name: {
      pattern: /^[a-zA-ZÀ-ÿ\s]{2,50}$/,
      message: 'Le nom doit contenir entre 2 et 50 caractères et ne contenir que des lettres'
    },
    email: {
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
      message: 'Veuillez entrer une adresse email valide'
    },
    subject: {
      pattern: /^.{5,100}$/,
      message: 'Le sujet doit contenir entre 5 et 100 caractères'
    },
    message: {
      pattern: /^[\s\S]{10,1000}$/,
      message: 'Le message doit contenir entre 10 et 1000 caractères'
    }
  }

  const validateField = (name, value) => {
    if (!value.trim()) {
      return 'Ce champ est requis'
    }
    if (!validations[name].pattern.test(value)) {
      return validations[name].message
    }
    return ''
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    if (touched[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: validateField(name, value)
      }))
    }
  }

  const handleBlur = (e) => {
    const { name, value } = e.target
    setTouched(prev => ({
      ...prev,
      [name]: true
    }))
    setErrors(prev => ({
      ...prev,
      [name]: validateField(name, value)
    }))
  }

  const isFormValid = () => {
    const newErrors = {}
    let isValid = true

    // Valider tous les champs
    Object.keys(formData).forEach(field => {
      const error = validateField(field, formData[field])
      newErrors[field] = error
      if (error) {
        isValid = false
      }
    })

    setErrors(newErrors)
    return isValid
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Marquer tous les champs comme touchés
    const allTouched = Object.keys(touched).reduce((acc, field) => ({
      ...acc,
      [field]: true
    }), {})
    setTouched(allTouched)

    if (isFormValid()) {
      // Nettoyage et validation supplémentaire des données
      const sanitizedData = {
        name: formData.name.trim(),
        email: formData.email.trim().toLowerCase(),
        subject: formData.subject.trim(),
        message: formData.message.trim()
      }

      // Construction du lien mailto avec les données nettoyées
      const mailtoLink = `mailto:jordanmoret4@gmail.com?subject=${encodeURIComponent(sanitizedData.subject)}&body=${encodeURIComponent(
        `Nom: ${sanitizedData.name}\nEmail: ${sanitizedData.email}\n\nMessage:\n${sanitizedData.message}`
      )}`
      window.location.href = mailtoLink
    }
  }

  const isSubmitDisabled = Object.keys(errors).some(field => 
    errors[field] || !formData[field].trim()
  )

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
        
        <form className="contact__form" onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="name">Nom complet</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className={touched.name && errors.name ? 'error' : ''}
              required
            />
            {touched.name && errors.name && (
              <span className="error-message">{errors.name}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={touched.email && errors.email ? 'error' : ''}
              required
            />
            {touched.email && errors.email && (
              <span className="error-message">{errors.email}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="subject">Sujet</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              onBlur={handleBlur}
              className={touched.subject && errors.subject ? 'error' : ''}
              required
            />
            {touched.subject && errors.subject && (
              <span className="error-message">{errors.subject}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              onBlur={handleBlur}
              className={touched.message && errors.message ? 'error' : ''}
              required
              rows="5"
            ></textarea>
            {touched.message && errors.message && (
              <span className="error-message">{errors.message}</span>
            )}
          </div>

          <button 
            type="submit" 
            className="submit-button"
            disabled={isSubmitDisabled}
          >
            Envoyer le message
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact