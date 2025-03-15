"use client"

import { useState } from "react"
import "./RegistrationPopup.css"

const RegistrationPopup = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const validateForm = () => {
    const tempErrors = {}
    let isValid = true

    if (!formData.name.trim()) {
      tempErrors.name = "Name is required"
      isValid = false
    }

    if (!formData.email.trim()) {
      tempErrors.email = "Email is required"
      isValid = false
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid"
      isValid = false
    }

    if (!formData.phone.trim()) {
      tempErrors.phone = "Phone number is required"
      isValid = false
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      tempErrors.phone = "Phone number must be 10 digits"
      isValid = false
    }

    if (!formData.course) {
      tempErrors.course = "Please select a course"
      isValid = false
    }

    setErrors(tempErrors)
    return isValid
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      // Here you would typically send the data to your server
      console.log("Form submitted:", formData)
      alert("Registration successful! We'll contact you soon.")
      onClose()
    }
  }

  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <div className="popup-header">
          <h2>Enroll for a Course</h2>
          <button className="close-btn" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="popup-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
              />
              {errors.name && <span className="error">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
              />
              {errors.phone && <span className="error">{errors.phone}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="course">Select Course</label>
              <select id="course" name="course" value={formData.course} onChange={handleChange}>
                <option value="">-- Select a Course --</option>
                <option value="java">Java</option>
                <option value="software-testing">Software Testing</option>
                <option value="devops">DevOps</option>
                <option value="python">Python</option>
                <option value="data-science">Data Science</option>
                <option value="salesforce">Salesforce</option>
                <option value="power-bi">Power BI</option>
              </select>
              {errors.course && <span className="error">{errors.course}</span>}
            </div>

            <button type="submit" className="submit-btn">
              Register Now
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default RegistrationPopup

