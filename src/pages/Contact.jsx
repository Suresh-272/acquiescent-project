"use client"

import { useState } from "react"
import "./Contact.css"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
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

    if (!formData.subject.trim()) {
      tempErrors.subject = "Subject is required"
      isValid = false
    }

    if (!formData.message.trim()) {
      tempErrors.message = "Message is required"
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
      alert("Your message has been sent successfully! We'll get back to you soon.")
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      })
    }
  }

  return (
    <div className="contact-page">
      <div className="contact-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Get in touch with our team for any inquiries or collaborations</p>
        </div>
      </div>

      <section className="section contact-info">
        <div className="container">
          <div className="info-grid">
            <div className="info-card">
              <div className="info-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <h3>Our Location</h3>
              <p>Plot No. 26, Ground Floor, Tech Park, Business District, City - 500032</p>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <i className="fas fa-phone-alt"></i>
              </div>
              <h3>Phone Number</h3>
              <p>
                <a href="tel:+919177089287">+91 91770 89287</a>
              </p>
              <p>
                <a href="tel:+919059318889">+91 90593 18889</a>
              </p>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <h3>Email Address</h3>
              <p>
                <a href="mailto:info@company.com">info@company.com</a>
              </p>
              <p>
                <a href="mailto:support@company.com">support@company.com</a>
              </p>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <i className="fas fa-clock"></i>
              </div>
              <h3>Working Hours</h3>
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 9:00 AM - 1:00 PM</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section contact-form-section bg-light">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-form-wrapper">
              <div className="section-title text-left">
                <h2>Send Us a Message</h2>
                <p>Fill out the form below and we'll get back to you as soon as possible</p>
              </div>

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
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
                </div>

                <div className="form-row">
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
                    <label htmlFor="subject">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Enter message subject"
                    />
                    {errors.subject && <span className="error">{errors.subject}</span>}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Type your message here..."
                  ></textarea>
                  {errors.message && <span className="error">{errors.message}</span>}
                </div>

                <button type="submit" className="btn">
                  Send Message
                </button>
              </form>
            </div>

            <div className="contact-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.354689402926!2d78.3539107!3d17.442729699999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb939631adbba5%3A0xf5694cff5af6f515!2sC9V3%2B3H3%20Laxmi%20Enclave%2C%20Vinayak%20Nagar%2C%20Indira%20Nagar%2C%20Gachibowli%2C%20Hyderabad%2C%20Telangana%20500032!5e0!3m2!1sen!2sin!4v1739720082061!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Our Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <section className="section faq-section">
        <div className="container">
          <div className="section-title">
            <h2>Frequently Asked Questions</h2>
            <p>Find answers to common questions about our services</p>
          </div>

          <div className="faq-grid">
            <div className="faq-item">
              <h3>How can I enroll in a course?</h3>
              <p>
                You can enroll in any of our courses by clicking the "Enroll Now" button on the course page or by
                contacting our admissions team directly via phone or email.
              </p>
            </div>

            <div className="faq-item">
              <h3>Do you offer online training?</h3>
              <p>
                Yes, we offer both in-person and online training options for all our courses. Our online training
                includes live instructor-led sessions and access to recorded materials.
              </p>
            </div>

            <div className="faq-item">
              <h3>What payment methods do you accept?</h3>
              <p>
                We accept various payment methods including credit/debit cards, bank transfers, and digital payment
                platforms. We also offer installment options for selected courses.
              </p>
            </div>

            <div className="faq-item">
              <h3>Do you provide job assistance?</h3>
              <p>
                Yes, we provide comprehensive job assistance including resume building, interview preparation, and
                connections with our corporate partners for placement opportunities.
              </p>
            </div>

            <div className="faq-item">
              <h3>Can I get a demo class before enrolling?</h3>
              <p>
                We offer free demo classes for all our courses to help you understand our teaching methodology and
                course content before making a decision.
              </p>
            </div>

            <div className="faq-item">
              <h3>What is your refund policy?</h3>
              <p>
                We offer a 7-day money-back guarantee for all our courses. If you're not satisfied with the course
                content or delivery, you can request a refund within the first week of enrollment.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact

