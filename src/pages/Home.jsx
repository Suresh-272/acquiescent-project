"use client"
import { Link } from "react-router-dom"
import styled, { keyframes } from "styled-components"

const slideUp = keyframes`
  to {
    transform: translateY(0);
    opacity: 1;
  }
`

const HomePage = styled.div`
  font-family: 'Poppins', sans-serif;
`

const HeroSection = styled.section`
  position: relative;
  height: 100vh;
  min-height: 700px;
  display: flex;
  align-items: center;
  color: #ffffff;
  overflow: hidden;
`

const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(67, 97, 238, 0.85), rgba(58, 12, 163, 0.95));
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
`

const HeroContent = styled.div`
  text-align: left;
  position: relative;
  z-index: 1;

  h1 {
    font-size: 60px;
    font-weight: 700;
    margin-bottom: 25px;
    line-height: 1.2;
    color: #ffffff;
    letter-spacing: -1px;
    transform: translateY(30px);
    opacity: 0;
    animation: ${slideUp} 0.8s ease forwards 0.2s;
  }

  p {
    font-size: 20px;
    margin-bottom: 35px;
    line-height: 1.7;
    max-width: 600px;
    font-weight: 300;
    transform: translateY(30px);
    opacity: 0;
    animation: ${slideUp} 0.8s ease forwards 0.4s;
  }
`

const HeroButtons = styled.div`
  display: flex;
  gap: 25px;
  margin-bottom: 60px;
  transform: translateY(30px);
  opacity: 0;
  animation: ${slideUp} 0.8s ease forwards 0.6s;
`

const Button = styled.button`
  padding: 15px 35px;
  border-radius: 30px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  display: inline-block;
  font-size: 16px;
  background-color: ${props => props.outline ? 'transparent' : '#ffffff'};
  color: ${props => props.outline ? '#ffffff' : '#4361ee'};
  border: 2px solid #ffffff;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.outline ? '#ffffff' : 'transparent'};
    color: ${props => props.outline ? '#4361ee' : '#ffffff'};
    transform: translateY(-5px);
    box-shadow: 0 15px 25px rgba(0,0,0,0.2);
  }
`

const TrustedBy = styled.div`
  margin-top: 80px;
  transform: translateY(30px);
  opacity: 0;
  animation: ${slideUp} 0.8s ease forwards 0.8s;

  p {
    font-size: 16px;
    font-weight: 500;
    opacity: 0.9;
    margin-bottom: 20px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`

const CompanyLogos = styled.div`
  display: flex;
  gap: 50px;
  flex-wrap: wrap;
  align-items: center;

  img {
    height: 45px;
    filter: brightness(0) invert(1);
    opacity: 0.8;
    transition: all 0.3s ease;

    &:hover {
      opacity: 1;
      transform: translateY(-5px);
    }
  }
`

const Section = styled.section`
  padding: 100px 0;
  background: ${props => props.background || '#ffffff'};
`

const SectionTitle = styled.div`
  text-align: ${props => props.align || 'center'};
  margin-bottom: 60px;

  h2 {
    font-size: 40px;
    font-weight: 700;
    color: #2d3748;
    margin-bottom: 20px;
  }

  p {
    font-size: 18px;
    color: #718096;
    max-width: 600px;
    margin: ${props => props.align === 'left' ? '0' : '0 auto'};
  }
`

const CoursesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  margin-bottom: 50px;
`

const CourseCard = styled.div`
  background: #ffffff;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0,0,0,0.05);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 30px rgba(0,0,0,0.1);
  }

  .course-image {
    height: 200px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .course-content {
    padding: 25px;

    h3 {
      font-size: 22px;
      font-weight: 600;
      color: #2d3748;
      margin-bottom: 15px;
    }

    .course-rating {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 15px;

      .stars {
        color: #f6ad55;
      }

      .reviews {
        color: #718096;
        font-size: 14px;
      }
    }

    p {
      color: #718096;
      margin-bottom: 20px;
      line-height: 1.6;
    }
  }
`

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;

  .about-image {
    img {
      width: 100%;
      border-radius: 15px;
    }
  }

  .features {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    margin-bottom: 40px;
  }
`

const Feature = styled.div`
  display: flex;
  gap: 20px;

  .feature-icon {
    font-size: 24px;
    color: #4361ee;
  }

  .feature-content {
    h3 {
      font-size: 18px;
      font-weight: 600;
      color: #2d3748;
      margin-bottom: 10px;
    }

    p {
      color: #718096;
      line-height: 1.6;
    }
  }
`

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
`

const TestimonialCard = styled.div`
  background: #ffffff;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.05);

  .testimonial-content {
    margin-bottom: 25px;

    p {
      color: #4a5568;
      font-style: italic;
      line-height: 1.8;
    }
  }

  .testimonial-author {
    display: flex;
    align-items: center;
    gap: 15px;

    img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      object-fit: cover;
    }

    .author-info {
      h4 {
        font-size: 18px;
        font-weight: 600;
        color: #2d3748;
        margin-bottom: 5px;
      }

      p {
        color: #718096;
        font-size: 14px;
      }
    }
  }
`

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;

  .contact-form {
    form {
      display: grid;
      gap: 20px;

      .form-group {
        input {
          width: 100%;
          padding: 15px;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          font-size: 16px;

          &:focus {
            outline: none;
            border-color: #4361ee;
          }
        }
      }
    }
  }
`

const Home = ({ toggleRegistration }) => {
  return (
    <HomePage>
      <HeroSection>
        <HeroBackground>
          <img
            src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=1920&h=1080"
            alt="Corporate Background"
          />
        </HeroBackground>
        <Container>
          <HeroContent>
            <h1>Empowering Your Future with Knowledge</h1>
            <p>
              Unlock endless possibilities with our industry-leading training programs and expert consulting services
            </p>
            <HeroButtons>
              <Button onClick={toggleRegistration}>
                Enroll Now
              </Button>
              <Button as={Link} to="/courses" outline>
                Explore Courses
              </Button>
            </HeroButtons>
            <TrustedBy>
              <p>Trusted by leading companies worldwide</p>
              <CompanyLogos>
                <img
                  src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=100&h=50&fit=crop&crop=edges"
                  alt="Company 1"
                />
                <img
                  src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=100&h=50&fit=crop&crop=edges"
                  alt="Company 2"
                />
                <img
                  src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=100&h=50&fit=crop&crop=edges"
                  alt="Company 3"
                />
                <img
                  src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=100&h=50&fit=crop&crop=edges"
                  alt="Company 4"
                />
              </CompanyLogos>
            </TrustedBy>
          </HeroContent>
        </Container>
      </HeroSection>

      {/* Courses Section */}
      <Section>
        <Container>
          <SectionTitle>
            <h2>Our Featured Courses</h2>
            <p>Explore our industry-relevant courses designed to help you advance your career</p>
          </SectionTitle>
          <CoursesGrid>
            <CourseCard>
              <div className="course-image">
                <img
                  src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop"
                  alt="Java Course"
                />
              </div>
              <div className="course-content">
                <h3>Java Development</h3>
                <div className="course-rating">
                  <span className="stars">★★★★★</span>
                  <span className="reviews">(42 Reviews)</span>
                </div>
                <p>Master Java programming from basics to advanced concepts with real-world projects</p>
                <Button onClick={toggleRegistration}>
                  Enroll Now
                </Button>
              </div>
            </CourseCard>

            <CourseCard>
              <div className="course-image">
                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&h=300&fit=crop"
                  alt="Software Testing"
                />
              </div>
              <div className="course-content">
                <h3>Software Testing</h3>
                <div className="course-rating">
                  <span className="stars">★★★★★</span>
                  <span className="reviews">(38 Reviews)</span>
                </div>
                <p>Learn manual and automation testing with industry-standard tools and frameworks</p>
                <Button onClick={toggleRegistration}>
                  Enroll Now
                </Button>
              </div>
            </CourseCard>

            <CourseCard>
              <div className="course-image">
                <img
                  src="https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=500&h=300&fit=crop"
                  alt="DevOps"
                />
              </div>
              <div className="course-content">
                <h3>DevOps Engineering</h3>
                <div className="course-rating">
                  <span className="stars">★★★★★</span>
                  <span className="reviews">(29 Reviews)</span>
                </div>
                <p>Master CI/CD pipelines, containerization, and cloud infrastructure automation</p>
                <Button onClick={toggleRegistration}>
                  Enroll Now
                </Button>
              </div>
            </CourseCard>

            <CourseCard>
              <div className="course-image">
                <img
                  src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=500&h=300&fit=crop"
                  alt="Data Science"
                />
              </div>
              <div className="course-content">
                <h3>Data Science</h3>
                <div className="course-rating">
                  <span className="stars">★★★★★</span>
                  <span className="reviews">(35 Reviews)</span>
                </div>
                <p>Learn data analysis, machine learning, and visualization with Python and R</p>
                <Button onClick={toggleRegistration}>
                  Enroll Now
                </Button>
              </div>
            </CourseCard>
          </CoursesGrid>
          <div style={{ textAlign: 'center' }}>
            <Button as={Link} to="/courses" outline>
              View All Courses
            </Button>
          </div>
        </Container>
      </Section>

      {/* About Section */}
      <Section background="#f8fafc">
        <Container>
          <AboutGrid>
            <div className="about-image">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=800&fit=crop"
                alt="About Us"
              />
            </div>
            <div className="about-content">
              <SectionTitle align="left">
                <h2>Why Choose Us?</h2>
                <p>We are committed to providing the highest quality training and consulting services</p>
              </SectionTitle>
              <div className="features">
                <Feature>
                  <div className="feature-icon">
                    <i className="fas fa-chalkboard-teacher"></i>
                  </div>
                  <div className="feature-content">
                    <h3>Expert Instructors</h3>
                    <p>Learn from industry professionals with years of real-world experience</p>
                  </div>
                </Feature>

                <Feature>
                  <div className="feature-icon">
                    <i className="fas fa-laptop-code"></i>
                  </div>
                  <div className="feature-content">
                    <h3>Hands-on Learning</h3>
                    <p>Gain practical skills through project-based learning and real-world scenarios</p>
                  </div>
                </Feature>

                <Feature>
                  <div className="feature-icon">
                    <i className="fas fa-certificate"></i>
                  </div>
                  <div className="feature-content">
                    <h3>Industry Recognized</h3>
                    <p>Earn certificates that are valued by top employers worldwide</p>
                  </div>
                </Feature>

                <Feature>
                  <div className="feature-icon">
                    <i className="fas fa-headset"></i>
                  </div>
                  <div className="feature-content">
                    <h3>Dedicated Support</h3>
                    <p>Get personalized guidance and support throughout your learning journey</p>
                  </div>
                </Feature>
              </div>
              <Button as={Link} to="/about">
                Learn More About Us
              </Button>
            </div>
          </AboutGrid>
        </Container>
      </Section>

      {/* Testimonials Section */}
      <Section>
        <Container>
          <SectionTitle>
            <h2>What Our Students Say</h2>
            <p>Hear from our successful graduates who have transformed their careers</p>
          </SectionTitle>
          <TestimonialsGrid>
            <TestimonialCard>
              <div className="testimonial-content">
                <p>
                  "The training was exceptional! The structured curriculum and hands-on approach helped me build
                  real-world skills that I now apply daily in my career."
                </p>
              </div>
              <div className="testimonial-author">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
                  alt="Anjali Verma"
                />
                <div className="author-info">
                  <h4>Anjali Verma</h4>
                  <p>Project Manager @ TechNova Solutions</p>
                </div>
              </div>
            </TestimonialCard>

            <TestimonialCard>
              <div className="testimonial-content">
                <p>
                  "An outstanding learning experience! The well-structured course material and real-world projects made
                  it easy to grasp even the most complex concepts."
                </p>
              </div>
              <div className="testimonial-author">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
                  alt="Vikram Sharma"
                />
                <div className="author-info">
                  <h4>Vikram Sharma</h4>
                  <p>Marketing Head @ Digital Elevate</p>
                </div>
              </div>
            </TestimonialCard>

            <TestimonialCard>
              <div className="testimonial-content">
                <p>
                  "The live classes were engaging, and the mentors were incredibly supportive. I gained in-depth
                  knowledge that has significantly boosted my confidence."
                </p>
              </div>
              <div className="testimonial-author">
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop"
                  alt="Pooja Iyer"
                />
                <div className="author-info">
                  <h4>Pooja Iyer</h4>
                  <p>UI/UX Designer @ PixelCraft Studios</p>
                </div>
              </div>
            </TestimonialCard>
          </TestimonialsGrid>
        </Container>
      </Section>

      {/* Contact Section */}
      <Section background="#f8fafc">
        <Container>
          <ContactGrid>
            <div className="contact-content">
              <SectionTitle align="left">
                <h2>Want to stay informed about new courses?</h2>
                <p>
                  Subscribe to our newsletter to receive updates on new courses, special offers, and industry insights
                </p>
              </SectionTitle>
            </div>
            <div className="contact-form">
              <form>
                <div className="form-group">
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <input type="tel" placeholder="Your Phone" required />
                </div>
                <Button type="submit">
                  Subscribe Now
                </Button>
              </form>
            </div>
          </ContactGrid>
        </Container>
      </Section>
    </HomePage>
  )
}

export default Home