import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  to {
    opacity: 1;
  }
`

const wave = keyframes`
  0% { background-position: 0 0; }
  100% { background-position: 100% 0; }
`

const slideUp = keyframes`
  to {
    transform: translateY(0);
    opacity: 1;
  }
`

const slideInLeft = keyframes`
  to {
    transform: translateX(0);
    opacity: 1;
  }
`

const slideInRight = keyframes`
  to {
    transform: translateX(0);
    opacity: 1;
  }
`

const countUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const AboutPage = styled.div`
  padding-top: 80px;
  opacity: 0;
  animation: ${fadeIn} 1s ease forwards;
  font-family: 'Poppins', sans-serif;
`

const AboutHeader = styled.div`
  background: linear-gradient(135deg, var(--primary-color), #3a0ca3);
  color: var(--white);
  padding: 120px 0;
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
    font-size: 56px;
    margin-bottom: 25px;
    font-weight: 700;
    transform: translateY(30px);
    opacity: 0;
    animation: ${slideUp} 0.8s ease forwards 0.2s;
    letter-spacing: -1px;
  }

  p {
    font-size: 20px;
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.8;
    transform: translateY(30px);
    opacity: 0;
    animation: ${slideUp} 0.8s ease forwards 0.4s;
    font-weight: 300;
  }
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
`

const Section = styled.section`
  padding: 100px 0;
`

const AboutIntroGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
`

const AboutIntroContent = styled.div`
  opacity: 0;
  transform: translateX(-30px);
  animation: ${slideInLeft} 0.8s ease forwards;

  h2 {
    font-size: 42px;
    color: var(--secondary-color);
    margin-bottom: 30px;
    font-weight: 700;
    letter-spacing: -0.5px;
    line-height: 1.2;
  }

  p {
    margin-bottom: 25px;
    line-height: 1.8;
    color: var(--light-text);
    font-size: 18px;
    font-weight: 300;
  }
`

const AboutStats = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  margin-top: 60px;
`

const StatItem = styled.div`
  text-align: center;
  padding: 30px;
  background: var(--white);
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border: 1px solid rgba(0,0,0,0.03);

  &:hover {
    transform: translateY(-15px);
    box-shadow: 0 15px 35px rgba(67, 97, 238, 0.15);
    border-color: rgba(67, 97, 238, 0.1);
  }

  h3 {
    font-size: 48px;
    color: var(--primary-color);
    margin-bottom: 15px;
    font-weight: 700;
    opacity: 0;
    animation: ${countUp} 2s ease forwards;
  }

  p {
    font-size: 16px;
    color: var(--light-text);
    margin-bottom: 0;
    font-weight: 500;
  }
`

const AboutIntroImage = styled.div`
  opacity: 0;
  transform: translateX(30px);
  animation: ${slideInRight} 0.8s ease forwards;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: var(--primary-color);
    top: -20px;
    right: -20px;
    border-radius: 20px;
    z-index: -1;
    opacity: 0.1;
    transition: all 0.3s ease;
  }

  &:hover::before {
    top: -30px;
    right: -30px;
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 20px;
    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
    transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);

    &:hover {
      transform: scale(1.03);
    }
  }
`

const About = () => {
  return (
    <AboutPage>
      <AboutHeader>
        <Container>
          <h1>About Us</h1>
          <p>Empowering professionals through knowledge and expertise</p>
        </Container>
      </AboutHeader>

      <Section>
        <Container>
          <AboutIntroGrid>
            <AboutIntroContent>
              <h2>Our Story</h2>
              <p>
                Founded in 2010, our company has grown from a small training center to a leading provider of IT
                education and consulting services. We started with a simple mission: to bridge the gap between
                theoretical knowledge and practical application in the technology industry.
              </p>
              <p>
                Over the years, we've helped thousands of professionals advance their careers through our comprehensive
                training programs and expert consulting services. Our commitment to excellence and innovation has made
                us a trusted partner for individuals and organizations seeking to thrive in the digital age.
              </p>
              <AboutStats>
                <StatItem>
                  <h3>10+</h3>
                  <p>Years of Experience</p>
                </StatItem>
                <StatItem>
                  <h3>15,000+</h3>
                  <p>Students Trained</p>
                </StatItem>
                <StatItem>
                  <h3>50+</h3>
                  <p>Corporate Clients</p>
                </StatItem>
                <StatItem>
                  <h3>98%</h3>
                  <p>Satisfaction Rate</p>
                </StatItem>
              </AboutStats>
            </AboutIntroContent>
            <AboutIntroImage>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=800&fit=crop"
                alt="Our Team"
              />
            </AboutIntroImage>
          </AboutIntroGrid>
        </Container>
      </Section>

      {/* Rest of the sections would follow similar pattern */}
      {/* Mission Section */}
      {/* Team Section */}
      {/* Clients Section */}
      {/* CTA Section */}
      
    </AboutPage>
  )
}

export default About