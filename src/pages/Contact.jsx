"use client"

import { useState } from "react"
import styled, { keyframes } from "styled-components"

const fadeIn = keyframes`
  to {
    opacity: 1;
  }
`

const slideUp = keyframes`
  to {
    transform: translateY(0);
    opacity: 1;
  }
`

const wave = keyframes`
  0% { background-position: 0 0; }
  100% { background-position: 100% 0; }
`

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

const ContactPage = styled.div`
  padding-top: 80px;
  opacity: 0;
  animation: ${fadeIn} 1s ease forwards;
`

const ContactHeader = styled.div`
  background: linear-gradient(135deg, var(--primary-color), #3a0ca3);
  color: var(--white);
  padding: 100px 0;
  text-align: center;
  position: relative;
  overflow: hidden;
  border-radius: 0 0 50px 50px;

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

  h1 {
    font-size: 48px;
    margin-bottom: 20px;
    font-weight: 700;
    position: relative;
    z-index: 1;
    transform: translateY(30px);
    opacity: 0;
    animation: ${slideUp} 0.8s ease forwards 0.2s;
    letter-spacing: -0.5px;
  }

  p {
    font-size: 20px;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.8;
    position: relative;
    z-index: 1;
    transform: translateY(30px);
    opacity: 0;
    animation: ${slideUp} 0.8s ease forwards 0.4s;
    font-weight: 300;
  }

  @media (max-width: 992px) {
    border-radius: 0 0 30px 30px;
  }

  @media (max-width: 768px) {
    padding: 80px 0;
    
    h1 {
      font-size: 36px;
    }
  }

  @media (max-width: 576px) {
    border-radius: 0 0 20px 20px;

    h1 {
      font-size: 32px;
    }
  }
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
`

const Section = styled.section`
  padding: 100px 0;
`

const InfoSection = styled(Section)`
  margin-top: -50px;
  position: relative;
  z-index: 10;
`

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`

const InfoCard = styled.div`
  background-color: var(--white);
  padding: 40px 30px;
  border-radius: 20px;
  box-shadow: 0 15px 35px rgba(0,0,0,0.05);
  text-align: center;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border: 1px solid rgba(0,0,0,0.03);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 0%;
    background: linear-gradient(135deg, rgba(67, 97, 238, 0.03), rgba(67, 97, 238, 0.08));
    left: 0;
    bottom: 0;
    z-index: 0;
    transition: height 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  &:hover {
    transform: translateY(-15px);
    box-shadow: 0 20px 40px rgba(67, 97, 238, 0.12);

    &::before {
      height: 100%;
    }
  }

  h3 {
    font-size: 22px;
    color: var(--secondary-color);
    margin-bottom: 15px;
    font-weight: 700;
    position: relative;
    z-index: 1;
  }

  p {
    color: var(--light-text);
    margin-bottom: 5px;
    position: relative;
    z-index: 1;
    font-weight: 300;
  }

  a {
    color: var(--light-text);
    text-decoration: none;
    transition: var(--transition);
    position: relative;
    z-index: 1;

    &:hover {
      color: var(--primary-color);
    }
  }
`

const InfoIcon = styled.div`
  width: 80px;
  height: 80px;
  background-color: var(--primary-light);
  color: var(--primary-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  margin: 0 auto 25px;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  z-index: 1;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border: 2px dashed var(--primary-color);
    border-radius: 50%;
    top: 0;
    left: 0;
    opacity: 0.3;
    animation: ${spin} 15s linear infinite;
  }

  ${InfoCard}:hover & {
    background-color: var(--primary-color);
    color: var(--white);
    transform: rotateY(360deg);
  }
`

const FormSection = styled(Section)`
  background-color: var(--light-gray);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    width: 300px;
    height: 300px;
    background: var(--primary-color);
    border-radius: 50%;
    opacity: 0.05;
    top: -150px;
    left: -150px;
  }

  &::after {
    content: '';
    position: absolute;
    width: 300px;
    height: 300px;
    background: var(--primary-color);
    border-radius: 50%;
    opacity: 0.05;
    bottom: -150px;
    right: -150px;
  }
`

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  position: relative;
  z-index: 1;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`

const FormWrapper = styled.div`
  background-color: var(--white);
  padding: 50px;
  border-radius: 20px;
  box-shadow: 0 15px 35px rgba(0,0,0,0.05);
  border: 1px solid rgba(0,0,0,0.03);
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    width: 200px;
    height: 200px;
    background: var(--primary-color);
    border-radius: 50%;
    opacity: 0.05;
    top: -100px;
    right: -100px;
  }

  &:hover {
    box-shadow: 0 25px 45px rgba(67, 97, 238, 0.1);
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    padding: 30px;
  }

  @media (max-width: 576px) {
    padding: 25px;
  }
`

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const FormGroup = styled.div`
  margin-bottom: 25px;
`

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  font-weight: 500;
  color: var(--secondary-color);
  font-size: 15px;
`

const Input = styled.input`
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
`

const TextArea = styled.textarea`
  width: 100%;
  padding: 15px;
  border: 1px solid var(--border-color);
  border-radius: 10px;
  font-size: 16px;
  transition: all 0.3s ease;
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  min-height: 150px;
  resize: vertical;

  &:focus {
    border-color: var(--primary-color);
    outline: none;
    box-shadow: 0 0 0 3px rgba(67, 97, 238, 0.1);
  }
`

const Button = styled.button`
  background: var(--primary-color);
  color: var(--white);
  border: 2px solid var(--primary-color);
  padding: 15px 30px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  display: inline-block;

  &:hover {
    background-color: transparent;
    color: var(--primary-color);
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(67, 97, 238, 0.15);
  }
`

const Error = styled.span`
  color: #e74c3c;
  font-size: 14px;
  margin-top: 5px;
  display: block;
`

const Map = styled.div`
  height: 100%;
  min-height: 500px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(0,0,0,0.05);
  border: 1px solid rgba(0,0,0,0.03);
  transition: all 0.4s ease;

  &:hover {
    box-shadow: 0 25px 45px rgba(67, 97, 238, 0.1);
    transform: translateY(-5px);
  }

  @media (max-width: 992px) {
    min-height: 400px;
  }
`

const FaqSection = styled(Section)`
  padding: 100px 0;
`

const FaqGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  margin-top: 50px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const FaqItem = styled.div`
  background-color: var(--white);
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 15px 35px rgba(0,0,0,0.05);
  border: 1px solid rgba(0,0,0,0.03);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 0%;
    background: linear-gradient(135deg, rgba(67, 97, 238, 0.03), rgba(67, 97, 238, 0.08));
    left: 0;
    bottom: 0;
    z-index: 0;
    transition: height 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 25px 45px rgba(67, 97, 238, 0.1);

    &::before {
      height: 100%;
    }
  }

  h3 {
    font-size: 20px;
    color: var(--secondary-color);
    margin-bottom: 15px;
    font-weight: 700;
    position: relative;
    z-index: 1;
  }

  p {
    color: var(--light-text);
    line-height: 1.8;
    position: relative;
    z-index: 1;
    font-weight: 300;
  }
`

const SectionTitle = styled.div`
  margin-bottom: 50px;
  text-align: ${props => props.textLeft ? 'left' : 'center'};

  h2 {
    font-size: 42px;
    color: var(--secondary-color);
    margin-bottom: 20px;
    font-weight: 700;
    letter-spacing: -0.5px;
    line-height: 1.2;

    @media (max-width: 768px) {
      font-size: 36px;
    }

    @media (max-width: 576px) {
      font-size: 30px;
    }
  }

  p {
    color: var(--light-text);
    font-size: 18px;
    max-width: 600px;
    line-height: 1.8;
    font-weight: 300;
    margin: ${props => props.textLeft ? '0' : '0 auto'};
  }
`

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
    <ContactPage>
      <ContactHeader>
        <Container>
          <h1>Contact Us</h1>
          <p>Get in touch with our team for any inquiries or collaborations</p>
        </Container>
      </ContactHeader>

      <InfoSection>
        <Container>
          <InfoGrid>
            <InfoCard>
              <InfoIcon>
                <i className="fas fa-map-marker-alt"></i>
              </InfoIcon>
              <h3>Our Location</h3>
              <p>Plot No. 26, Ground Floor, Tech Park, Business District, City - 500032</p>
            </InfoCard>

            <InfoCard>
              <InfoIcon>
                <i className="fas fa-phone-alt"></i>
              </InfoIcon>
              <h3>Phone Number</h3>
              <p>
                <a href="tel:+919177089287">+91 91770 89287</a>
              </p>
              <p>
                <a href="tel:+919059318889">+91 90593 18889</a>
              </p>
            </InfoCard>

            <InfoCard>
              <InfoIcon>
                <i className="fas fa-envelope"></i>
              </InfoIcon>
              <h3>Email Address</h3>
              <p>
                <a href="mailto:info@company.com">info@company.com</a>
              </p>
              <p>
                <a href="mailto:support@company.com">support@company.com</a>
              </p>
            </InfoCard>

            <InfoCard>
              <InfoIcon>
                <i className="fas fa-clock"></i>
              </InfoIcon>
              <h3>Working Hours</h3>
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 9:00 AM - 1:00 PM</p>
            </InfoCard>
          </InfoGrid>
        </Container>
      </InfoSection>

      <FormSection>
        <Container>
          <ContactGrid>
            <FormWrapper>
              <SectionTitle textLeft>
                <h2>Send Us a Message</h2>
                <p>Fill out the form below and we'll get back to you as soon as possible</p>
              </SectionTitle>

              <form onSubmit={handleSubmit}>
                <FormRow>
                  <FormGroup>
                    <Label htmlFor="name">Your Name</Label>
                    <Input
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
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email address"
                    />
                    {errors.email && <Error>{errors.email}</Error>}
                  </FormGroup>
                </FormRow>

                <FormRow>
                  <FormGroup>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
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
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Enter message subject"
                    />
                    {errors.subject && <Error>{errors.subject}</Error>}
                  </FormGroup>
                </FormRow>

                <FormGroup>
                  <Label htmlFor="message">Your Message</Label>
                  <TextArea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Type your message here..."
                  />
                  {errors.message && <Error>{errors.message}</Error>}
                </FormGroup>

                <Button type="submit">
                  Send Message
                </Button>
              </form>
            </FormWrapper>

            <Map>
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
            </Map>
          </ContactGrid>
        </Container>
      </FormSection>

      <FaqSection>
        <Container>
          <SectionTitle>
            <h2>Frequently Asked Questions</h2>
            <p>Find answers to common questions about our services</p>
          </SectionTitle>

          <FaqGrid>
            <FaqItem>
              <h3>How can I enroll in a course?</h3>
              <p>
                You can enroll in any of our courses by clicking the "Enroll Now" button on the course page or by
                contacting our admissions team directly via phone or email.
              </p>
            </FaqItem>

            <FaqItem>
              <h3>Do you offer online training?</h3>
              <p>
                Yes, we offer both in-person and online training options for all our courses. Our online training
                includes live instructor-led sessions and access to recorded materials.
              </p>
            </FaqItem>

            <FaqItem>
              <h3>What payment methods do you accept?</h3>
              <p>
                We accept various payment methods including credit/debit cards, bank transfers, and digital payment
                platforms. We also offer installment options for selected courses.
              </p>
            </FaqItem>

            <FaqItem>
              <h3>Do you provide job assistance?</h3>
              <p>
                Yes, we provide comprehensive job assistance including resume building, interview preparation, and
                connections with our corporate partners for placement opportunities.
              </p>
            </FaqItem>

            <FaqItem>
              <h3>Can I get a demo class before enrolling?</h3>
              <p>
                We offer free demo classes for all our courses to help you understand our teaching methodology and
                course content before making a decision.
              </p>
            </FaqItem>

            <FaqItem>
              <h3>What is your refund policy?</h3>
              <p>
                We offer a 7-day money-back guarantee for all our courses. If you're not satisfied with the course
                content or delivery, you can request a refund within the first week of enrollment.
              </p>
            </FaqItem>
          </FaqGrid>
        </Container>
      </FaqSection>
    </ContactPage>
  )
}

export default Contact
