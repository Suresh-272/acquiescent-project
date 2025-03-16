"use client"
import { Link } from "react-router-dom"
import styled from "styled-components"

// Modern, subtle animations
const fadeIn = `
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`

const slideInFromBottom = `
  @keyframes slideInFromBottom {
    from { 
      transform: translateY(20px);
      opacity: 0;
    }
    to { 
      transform: translateY(0);
      opacity: 1;
    }
  }
`

const HomePage = styled.div`
  font-family: 'Inter', 'Segoe UI', system-ui, sans-serif;
  color: #1A1A1A;
  line-height: 1.5;
  ${fadeIn}
  ${slideInFromBottom}
`

// Modern Hero Section with enterprise feel
const HeroSection = styled.section`
  position: relative;
  padding: 120px 0 80px;
  background: linear-gradient(135deg, #FFFFFF 0%, #D0E8FF 100%); // Light blue and white gradient
  color: #0A2A5E; // Dark blue for text
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding: 80px 0 60px;
  }
`

const HeroPattern = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 60%;
  height: 100%;
  background-image: radial-gradient(rgba(10, 42, 94, 0.1) 2px, transparent 2px); // Dark blue pattern
  background-size: 30px 30px;
  z-index: 1;
`

const Container = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 2;
`

const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`

const HeroContent = styled.div`
  animation: fadeIn 0.8s ease forwards;

  h1 {
    font-size: 48px;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 24px;
    color: #0A2A5E; // Dark blue
    
    @media (max-width: 768px) {
      font-size: 36px;
    }
  }

  p {
    font-size: 18px;
    line-height: 1.6;
    margin-bottom: 32px;
    color: rgba(10, 42, 94, 0.8); // Dark blue with opacity
    max-width: 540px;
  }
`

const HeroImage = styled.div`
  position: relative;
  animation: slideInFromBottom 0.8s ease forwards;
  animation-delay: 0.2s;
  opacity: 0;
  
  img {
    width: 100%;
    border-radius: 8px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  }
  
  .stats {
    position: absolute;
    bottom: -20px;
    left: 20px;
    right: 20px;
    background: #FFFFFF;
    backdrop-filter: blur(5px);
    border-radius: 8px;
    padding: 16px;
    display: flex;
    justify-content: space-around;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }
  
  .stat-item {
    text-align: center;
    
    h3 {
      font-size: 24px;
      font-weight: 700;
      color: #0A2A5E; // Dark blue
      margin-bottom: 4px;
    }
    
    p {
      font-size: 14px;
      color: #64748B;
      font-weight: 500;
    }
  }
`

const CtaButtons = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 40px;
  
  @media (max-width: 576px) {
    flex-direction: column;
  }
`

const PrimaryButton = styled.button`
  padding: 14px 28px;
  background: #0A2A5E; // Dark blue
  color: #FFFFFF;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(10, 42, 94, 0.2);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(10, 42, 94, 0.3);
  }
  
  @media (max-width: 576px) {
    width: 100%;
  }
`

const SecondaryButton = styled(Link)`
  padding: 14px 28px;
  background: transparent;
  color: #0A2A5E; // Dark blue
  border: 2px solid #0A2A5E;
  border-radius: 6px;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  text-align: center;
  
  &:hover {
    background: rgba(10, 42, 94, 0.1);
    transform: translateY(-2px);
  }
  
  @media (max-width: 576px) {
    width: 100%;
  }
`

const TrustedSection = styled.div`
  margin-top: 60px;
  animation: fadeIn 0.8s ease forwards;
  animation-delay: 0.4s;
  opacity: 0;
  
  h4 {
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: rgba(10, 42, 94, 0.9); // Dark blue
    margin-bottom: 20px;
  }
`

const LogoGrid = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
  flex-wrap: wrap;
  
  img {
    height: 32px;
    opacity: 0.9;
    filter: brightness(0) invert(0.2);
    transition: all 0.3s ease;
    
    &:hover {
      opacity: 1;
    }
  }
`


// Courses Section with modern card design
const Section = styled.section`
  padding: 100px 0;
  background: ${props => props.background || '#ffffff'};
  
  @media (max-width: 768px) {
    padding: 60px 0;
  }
`

const SectionHeader = styled.div`
  max-width: 600px;
  margin: ${props => props.align === 'left' ? '0' : '0 auto'};
  margin-bottom: 60px;
  text-align: ${props => props.align || 'center'};
  
  span {
    display: inline-block;
    padding: 6px 12px;
    background: ${props => props.accentBg || '#E0E7FF'};
    color: ${props => props.accentColor || '#4F46E5'};
    border-radius: 30px;
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 16px;
  }
  
  h2 {
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 16px;
    color: #0F172A;
    
    @media (max-width: 768px) {
      font-size: 28px;
    }
  }
  
  p {
    font-size: 18px;
    color: #64748B;
    line-height: 1.6;
  }
`

const CoursesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
  margin-bottom: 60px;
`

const CourseCard = styled.div`
  background: #ffffff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(15, 23, 42, 0.08);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 24px rgba(15, 23, 42, 0.12);
  }
  
  .course-image {
    position: relative;
    height: 200px;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    
    .course-badge {
      position: absolute;
      top: 16px;
      right: 16px;
      background: #4F46E5;
      color: white;
      font-size: 12px;
      font-weight: 600;
      padding: 4px 10px;
      border-radius: 30px;
    }
  }
  
  .course-content {
    padding: 24px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    
    .course-meta {
      display: flex;
      justify-content: space-between;
      margin-bottom: 12px;
      
      .tag {
        font-size: 12px;
        background: #F1F5F9;
        color: #64748B;
        padding: 4px 10px;
        border-radius: 30px;
        font-weight: 500;
      }
      
      .rating {
        display: flex;
        align-items: center;
        gap: 4px;
        
        .stars {
          color: #F59E0B;
          font-size: 14px;
        }
        
        .count {
          font-size: 12px;
          color: #64748B;
        }
      }
    }
    
    h3 {
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 12px;
      color: #0F172A;
      line-height: 1.4;
    }
    
    p {
      color: #64748B;
      font-size: 15px;
      margin-bottom: 20px;
      line-height: 1.6;
      flex-grow: 1;
    }
    
    .course-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 16px;
      border-top: 1px solid #F1F5F9;
      
      .price {
        font-weight: 700;
        font-size: 18px;
        color: #0F172A;
      }
      
      .duration {
        display: flex;
        align-items: center;
        gap: 4px;
        color: #64748B;
        font-size: 14px;
      }
    }
  }
`

const FeaturesSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 40px;
  margin-top: 60px;
`

const FeatureCard = styled.div`
  text-align: center;
  padding: 30px;
  border-radius: 8px;
  transition: all 0.3s ease;
  
  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 64px;
    height: 64px;
    margin: 0 auto 20px;
    border-radius: 12px;
    background: ${props => props.iconBg || '#E0E7FF'};
    color: ${props => props.iconColor || '#4F46E5'};
    font-size: 28px;
  }
  
  h3 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 12px;
    color: #0F172A;
  }
  
  p {
    font-size: 16px;
    color: #64748B;
    line-height: 1.6;
  }
`

const TestimonialSection = styled.div`
  position: relative;
  
  &::before {
    content: """;
    position: absolute;
    top: -40px;
    left: 0;
    font-size: 120px;
    line-height: 1;
    color: rgba(79, 70, 229, 0.1);
    font-family: serif;
  }
`

const TestimonialCard = styled.div`
  background: white;
  padding: 32px;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.08);
  margin-bottom: 24px;
  
  p {
    font-size: 18px;
    line-height: 1.7;
    color: #334155;
    font-weight: 500;
    margin-bottom: 24px;
  }
  
  .testimonial-author {
    display: flex;
    align-items: center;
    gap: 16px;
    
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
        color: #0F172A;
        margin-bottom: 4px;
      }
      
      span {
        font-size: 14px;
        color: #64748B;
      }
    }
  }
`

const TestimonialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin-top: 40px;
`

// Stats section with enterprise feel
const StatsSection = styled.div`
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
const StatCard = styled.div`
  text-align: center;
  padding: 30px 20px;
  border-radius: 8px;
  background: white;
  box-shadow: 0 4px 20px rgba(15, 23, 42, 0.05);
  
  h3 {
    font-size: 36px;
    font-weight: 700;
    color: #4F46E5;
    margin-bottom: 8px;
  }
  
  p {
    font-size: 16px;
    color: #64748B;
    font-weight: 500;
  }
`

// Newsletter with modern design
const NewsletterSection = styled.div`
  background: linear-gradient(135deg, #4F46E5 0%, #3563E9 100%);
  padding: 60px;
  border-radius: 12px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  
  @media (max-width: 768px) {
    padding: 40px 20px;
  }
  
  h2 {
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 16px;
    max-width: 600px;
  }
  
  p {
    font-size: 18px;
    margin-bottom: 32px;
    max-width: 600px;
    opacity: 0.9;
  }
`

const NewsletterForm = styled.form`
  display: flex;
  max-width: 500px;
  width: 100%;
  
  @media (max-width: 576px) {
    flex-direction: column;
    gap: 16px;
  }
  
  input {
    flex-grow: 1;
    padding: 14px 20px;
    border: none;
    border-radius: 6px 0 0 6px;
    font-size: 16px;
    
    &:focus {
      outline: none;
    }
    
    @media (max-width: 576px) {
      border-radius: 6px;
    }
  }
  
  button {
    padding: 14px 24px;
    background: #0A2540;
    color: white;
    border: none;
    border-radius: 0 6px 6px 0;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    
    &:hover {
      background: #0F172A;
    }
    
    @media (max-width: 576px) {
      border-radius: 6px;
    }
  }
`

// Footer with enterprise design
const Footer = styled.footer`
  background: #0A2540;
  color: white;
  padding: 80px 0 40px;
`

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr repeat(3, 1fr);
  gap: 60px;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`

const FooterBrand = styled.div`
  .logo {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 16px;
    display: inline-block;
  }
  
  p {
    font-size: 15px;
    opacity: 0.7;
    margin-bottom: 24px;
    max-width: 300px;
  }
  
  .social {
    display: flex;
    gap: 16px;
    
    a {
      width: 36px;
      height: 36px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 50%;
      transition: all 0.3s ease;
      
      &:hover {
        background: rgba(255, 255, 255, 0.2);
        transform: translateY(-3px);
      }
    }
  }
`

const FooterLinks = styled.div`
  h4 {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 20px;
  }
  
  ul {
    list-style: none;
    padding: 0;
    
    li {
      margin-bottom: 12px;
      
      a {
        color: rgba(255, 255, 255, 0.7);
        text-decoration: none;
        font-size: 15px;
        transition: all 0.3s ease;
        
        &:hover {
          color: white;
        }
      }
    }
  }
`

const Copyright = styled.div`
  margin-top: 60px;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.5);
`

// Main component
const Home = ({ toggleRegistration }) => {
  return (
    <HomePage>
      <HeroSection>
        <HeroPattern />
        <Container>
          <HeroGrid>
            <HeroContent>
              <h1>Accelerate Your Career with Industry-Leading Tech Skills</h1>
              <p>
                Join over 50,000 professionals who have transformed their careers through our expert-led training programs and certification courses.
              </p>
              <CtaButtons>
                <PrimaryButton onClick={toggleRegistration}>
                  Start Your Learning Journey
                </PrimaryButton>
                <SecondaryButton to="/courses">
                  Browse All Courses
                </SecondaryButton>
              </CtaButtons>
              
              <TrustedSection>
                <h4>Trusted by leading organizations worldwide</h4>
                <LogoGrid>
                  <img src="/placeholder-logo1.svg" alt="Microsoft" />
                  <img src="/placeholder-logo2.svg" alt="Amazon" />
                  <img src="/placeholder-logo3.svg" alt="Google" />
                  <img src="/placeholder-logo4.svg" alt="IBM" />
                </LogoGrid>
              </TrustedSection>
            </HeroContent>
            
            <HeroImage>
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&h=500" 
                alt="Students learning"
              />
              <div className="stats">
                <div className="stat-item">
                  <h3>98%</h3>
                  <p>Job Placement</p>
                </div>
                <div className="stat-item">
                  <h3>50K+</h3>
                  <p>Graduates</p>
                </div>
                <div className="stat-item">
                  <h3>4.9</h3>
                  <p>Student Rating</p>
                </div>
              </div>
            </HeroImage>
          </HeroGrid>
        </Container>
      </HeroSection>

      {/* Featured Courses Section */}
      <Section>
        <Container>
          <SectionHeader>
            <span>World-Class Training</span>
            <h2>Our Most In-Demand Courses</h2>
            <p>Designed by industry experts to help you master the skills that top employers are looking for right now</p>
          </SectionHeader>
          
          <CoursesGrid>
            <CourseCard>
              <div className="course-image">
                <img
                  src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop"
                  alt="Java Development"
                />
                <div className="course-badge">Bestseller</div>
              </div>
              <div className="course-content">
                <div className="course-meta">
                  <div className="tag">Development</div>
                  <div className="rating">
                    <div className="stars">★★★★★</div>
                    <div className="count">(4.9)</div>
                  </div>
                </div>
                <h3>Enterprise Java Development Masterclass</h3>
                <p>Master Java programming with Spring Boot and build real-world enterprise applications.</p>
                <div className="course-footer">
                  <div className="price">$599</div>
                  <div className="duration">12 weeks</div>
                </div>
              </div>
            </CourseCard>
            
            <CourseCard>
              <div className="course-image">
                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&h=300&fit=crop"
                  alt="Software Testing"
                />
                <div className="course-badge">New</div>
              </div>
              <div className="course-content">
                <div className="course-meta">
                  <div className="tag">QA & Testing</div>
                  <div className="rating">
                    <div className="stars">★★★★★</div>
                    <div className="count">(4.8)</div>
                  </div>
                </div>
                <h3>Advanced Software Testing & Automation</h3>
                <p>Learn industry-standard QA practices, automation frameworks, and CI/CD integration.</p>
                <div className="course-footer">
                  <div className="price">$499</div>
                  <div className="duration">10 weeks</div>
                </div>
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
                <div className="course-meta">
                  <div className="tag">DevOps</div>
                  <div className="rating">
                    <div className="stars">★★★★★</div>
                    <div className="count">(4.7)</div>
                  </div>
                </div>
                <h3>DevOps & Cloud Infrastructure Engineering</h3>
                <p>Master continuous integration, containerization, Kubernetes, and AWS/Azure deployment.</p>
                <div className="course-footer">
                  <div className="price">$699</div>
                  <div className="duration">14 weeks</div>
                </div>
              </div>
            </CourseCard>
            
            <CourseCard>
              <div className="course-image">
                <img
                  src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=500&h=300&fit=crop"
                  alt="Data Science"
                />
                <div className="course-badge">Hot</div>
              </div>
              <div className="course-content">
                <div className="course-meta">
                  <div className="tag">Data Science</div>
                  <div className="rating">
                    <div className="stars">★★★★★</div>
                    <div className="count">(4.9)</div>
                  </div>
                </div>
                <h3>Data Science & Machine Learning Bootcamp</h3>
                <p>Build a portfolio of real-world data science projects using Python, TensorFlow, and PyTorch.</p>
                <div className="course-footer">
                  <div className="price">$799</div>
                  <div className="duration">16 weeks</div>
                </div>
              </div>
            </CourseCard>
          </CoursesGrid>
          
          <div style={{ textAlign: 'center' }}>
            <PrimaryButton as={Link} to="/courses">
              View All Courses
            </PrimaryButton>
          </div>
        </Container>
      </Section>

      {/* Why Choose Us Section */}
      <Section background="#F8FAFC">
        <Container>
          <SectionHeader>
            <span>Our Advantage</span>
            <h2>Why Top Companies Choose Our Graduates</h2>
            <p>We combine industry expertise, hands-on projects, and career support to ensure your success</p>
          </SectionHeader>
          
          <FeaturesSection>
            <FeatureCard iconBg="#EDE9FE" iconColor="#7C3AED">
              <div className="icon">
                <i className="fas fa-laptop-code"></i>
              </div>
              <h3>Industry-Aligned Curriculum</h3>
              <p>Our courses are developed with input from leading tech companies to ensure you learn skills that are in high demand.</p>
            </FeatureCard>
            
            <FeatureCard iconBg="#E0F2FE" iconColor="#0EA5E9">
              <div className="icon">
                <i className="fas fa-certificate"></i>
              </div>
              <h3>Recognized Certifications</h3>
              <p>Earn certifications that are respected by employers worldwide and demonstrate your expertise.</p>
            </FeatureCard>
            
            <FeatureCard iconBg="#ECFDF5" iconColor="#10B981">
              <div className="icon">
                <i className="fas fa-user-tie"></i>
              </div>
              <h3>Career Development</h3>
              <p>Get personalized career coaching, resume reviews, and interview preparation to land your dream job.</p>
            </FeatureCard>
            
            <FeatureCard iconBg="#FEF2F2" iconColor="#EF4444">
              <div className="icon">
                <i className="fas fa-headset"></i>
              </div>
              <h3>Lifetime Support</h3>
              <p>Access to our alumni network, job board, and technical mentorship even after course completion.</p>
            </FeatureCard>
          </FeaturesSection>
        </Container>
      </Section>

      {/* Stats Section */}
      <Section>
        <Container>
          <SectionHeader>
            <span>Our Impact</span>
            <h2>Driving Exceptional Results</h2>
            <p>We're committed to your success and our numbers prove it</p>
          </SectionHeader>
          
          <StatsSection>
            <StatCard>
              <h3>98%</h3>
              <p>Job Placement Rate</p>
            </StatCard>
            
            <StatCard>
              <h3>50,000+</h3>
              <p>Trained Professionals</p>
            </StatCard>
            
            <StatCard>
              <h3>300+</h3>
              <p>Enterprise Partners</p>
            </StatCard>
            
            <StatCard>
              <h3>85%</h3>
              <p>Salary Increase</p>
            </StatCard>
          </StatsSection>
        </Container>
      </Section>
      
      {/* Testimonials Section */}
      <Section background="#F8FAFC">
        <Container>
          <SectionHeader>
            <span>Success Stories</span>
            <h2>What Our Graduates Are Saying</h2>
            <p>Real stories from professionals who transformed their careers with our courses</p>
          </SectionHeader>
          
          <TestimonialGrid>
            <TestimonialCard>
              <p>
                "After completing the Java Development course, I received three job offers within two weeks. The hands-on projects and enterprise-focus gave me exactly what employers were looking for. My salary increased by 40% in my new role!"
              </p>
              <div className="testimonial-author">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
                  alt="Anjali Verma"
                />
                <div className="author-info">
                  <h4>Anjali Verma</h4>
                  <span>Senior Java Developer, TechSolutions Inc.</span>
                </div>
              </div>
            </TestimonialCard>
            
            <TestimonialCard>
              <p>
                "The DevOps certification program was a game-changer for my career. The instructors were industry veterans who provided real-world insights beyond just theory. I'm now leading cloud infrastructure projects at a Fortune 500 company."
              </p>
              <div className="testimonial-author">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
                  alt="Vikram Sharma"
                />
                <div className="author-info">
                  <h4>Vikram Sharma</h4>
                  <span>Cloud Infrastructure Lead, Global Systems</span>
                </div>
              </div>
            </TestimonialCard>
            
            <TestimonialCard>
              <p>
                "As someone transitioning into tech from finance, I was worried about breaking into data science. The step-by-step curriculum and mentorship made it accessible, and the career support helped me land my first role within a month of graduating."
              </p>
              <div className="testimonial-author">
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop"
                  alt="Pooja Iyer"
                />
                <div className="author-info">
                  <h4>Pooja Iyer</h4>
                  <span>Data Scientist, FinTech Innovations</span>
                </div>
              </div>
            </TestimonialCard>
          </TestimonialGrid>
        </Container>
      </Section>
      
      {/* Newsletter Section */}
      <Section>
        <Container>
          <NewsletterSection>
            <h2>Stay Ahead with Industry Updates and Course Offers</h2>
            <p>Join our newsletter to receive the latest tech trends, career insights, and exclusive course discounts</p>
            <NewsletterForm>
              <input type="email" placeholder="Enter your email address" required />
              <button type="submit">Subscribe Now</button>
            </NewsletterForm>
          </NewsletterSection>
        </Container>
      </Section>
    
    </HomePage>
  );
};

export default Home;