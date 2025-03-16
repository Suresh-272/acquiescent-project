"use client"

import { useState } from "react"
import styled, { keyframes } from "styled-components"

const popup = keyframes`
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`

const wave = keyframes`
  0% { background-position: 0 0; }
  100% { background-position: 100% 0; }
`

const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
  opacity: ${props => props.$active ? 1 : 0};
  visibility: ${props => props.$active ? 'visible' : 'hidden'};
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
`

const PopupContainer = styled.div`
  background-color: var(--white);
  width: 90%;
  max-width: 500px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
  animation: ${popup} 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
  transform: scale(0.8);
  opacity: 0;

  @media (max-width: 576px) {
    width: 95%;
  }
`

const PopupHeader = styled.div`
  background: linear-gradient(135deg, var(--primary-color), #3a0ca3);
  color: var(--white);
  padding: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('/assets/wave-pattern.svg');
    opacity: 0.1;
    animation: ${wave} 20s linear infinite;
  }

  h2 {
    margin: 0;
    font-size: 24px;
    font-weight: 700;
    position: relative;
    z-index: 1;
  }

  @media (max-width: 576px) {
    padding: 20px;
    
    h2 {
      font-size: 20px;
    }
  }
`

const CloseButton = styled.button`
  background: none;
  border: none;
  color: var(--white);
  font-size: 28px;
  cursor: pointer;
  line-height: 1;
  position: relative;
  z-index: 1;
  transition: all 0.3s ease;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    transform: rotate(90deg);
  }
`

const PopupBody = styled.div`
  padding: 30px;

  @media (max-width: 576px) {
    padding: 20px;
  }
`

const FormGroup = styled.div`
  margin-bottom: 25px;

  label {
    display: block;
    margin-bottom: 10px;
    font-weight: 500;
    color: var(--secondary-color);
    font-size: 15px;
  }

  input, select {
    width: 100%;
    padding: 15px;
    border: 1px solid var(--border-color);
    border-radius: 10px;
    font-size: 16px;
    transition: all 0.3s ease;
    font-family: 'Poppins', sans-serif;
    font-weight: 300;

    &:focus {
      border-color: var(--primary-color);
      outline: none;
      box-shadow: 0 0 0 3px rgba(67, 97, 238, 0.1);
    }
  }

  select {
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%236c757d' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 15px center;
    background-size: 16px;
  }
`

const Error = styled.span`
  color: #e74c3c;
  font-size: 14px;
  margin-top: 8px;
  display: block;
  font-weight: 500;
`

const SubmitButton = styled.button`
  width: 100%;
  padding: 15px;
  background-color: var(--primary-color);
  color: var(--white);
  border: none;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border: 2px solid var(--primary-color);

  &:hover {
    background-color: transparent;
    color: var(--primary-color);
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(67, 97, 238, 0.15);
  }
`

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
    <PopupOverlay $active={true}>
      <PopupContainer>
        <PopupHeader>
          <h2>Enroll for a Course</h2>
          <CloseButton onClick={onClose}>
            &times;
          </CloseButton>
        </PopupHeader>
        <PopupBody>
          <form onSubmit={handleSubmit}>
            <FormGroup>
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
              />
              {errors.name && <Error>{errors.name}</Error>}
            </FormGroup>

            <FormGroup>
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
              />
              {errors.email && <Error>{errors.email}</Error>}
            </FormGroup>

            <FormGroup>
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
              />
              {errors.phone && <Error>{errors.phone}</Error>}
            </FormGroup>

            <FormGroup>
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
              {errors.course && <Error>{errors.course}</Error>}
            </FormGroup>

            <SubmitButton type="submit">
              Register Now
            </SubmitButton>
          </form>
        </PopupBody>
      </PopupContainer>
    </PopupOverlay>
  )
}

export default RegistrationPopup
