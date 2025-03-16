"use client"
import styled from 'styled-components'

const CoursesPage = styled.div`
  padding-top: 80px;
  opacity: 0;
  animation: fadeIn 1s ease forwards;

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }
`

const CoursesHeader = styled.div`
  background: linear-gradient(135deg, #4361ee, #3a0ca3);
  color: #ffffff;
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
    animation: wave 20s linear infinite;
  }

  h1 {
    font-size: 48px;
    margin-bottom: 20px;
    font-weight: 700;
    position: relative;
    z-index: 1;
    transform: translateY(30px);
    opacity: 0;
    animation: slideUp 0.8s ease forwards 0.2s;
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
    animation: slideUp 0.8s ease forwards 0.4s;
    font-weight: 300;
  }

  @keyframes wave {
    0% { background-position: 0 0; }
    100% { background-position: 100% 0; }
  }

  @keyframes slideUp {
    to {
      transform: translateY(0);
      opacity: 1;
    }
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

const CoursesFilters = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  flex-wrap: wrap;
  gap: 20px;
  background-color: #ffffff;
  padding: 25px;
  border-radius: 15px;
  box-shadow: 0 15px 35px rgba(0,0,0,0.05);
  border: 1px solid rgba(0,0,0,0.03);
  margin-top: -30px;
  position: relative;
  z-index: 10;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`

const SearchBox = styled.div`
  display: flex;
  max-width: 400px;
  width: 100%;
  position: relative;

  input {
    flex: 1;
    padding: 15px 20px;
    border: 1px solid #e9ecef;
    border-radius: 10px;
    font-size: 16px;
    transition: all 0.3s ease;
    font-family: 'Poppins', sans-serif;
    font-weight: 300;

    &:focus {
      border-color: #4361ee;
      outline: none;
      box-shadow: 0 0 0 3px rgba(67, 97, 238, 0.1);
    }
  }

  button {
    position: absolute;
    right: 5px;
    top: 50%;
    transform: translateY(-50%);
    padding: 10px;
    background-color: #4361ee;
    color: #ffffff;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background-color: #3a0ca3;
    }
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`

const FilterOptions = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;

  select {
    padding: 15px 20px;
    border: 1px solid #e9ecef;
    border-radius: 10px;
    font-size: 16px;
    background-color: #ffffff;
    min-width: 150px;
    transition: all 0.3s ease;
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
    cursor: pointer;
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%236c757d' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 15px center;
    background-size: 16px;

    &:focus {
      border-color: #4361ee;
      outline: none;
      box-shadow: 0 0 0 3px rgba(67, 97, 238, 0.1);
    }
  }
`

const CoursesList = styled.div`
  display: grid;
  gap: 40px;
`

const CourseCard = styled.div`
  background-color: #ffffff;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(0,0,0,0.05);
  display: grid;
  grid-template-columns: 350px 1fr;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border: 1px solid rgba(0,0,0,0.03);

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 25px 45px rgba(67, 97, 238, 0.1);
  }

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`

const CourseImage = styled.div`
  position: relative;
  height: 100%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  &:hover img {
    transform: scale(1.1);
  }

  @media (max-width: 992px) {
    height: 300px;
  }
`

const CourseOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(43, 45, 66, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.4s ease;

  ${CourseImage}:hover & {
    opacity: 1;
  }
`

const CourseContent = styled.div`
  padding: 35px;

  h3 {
    font-size: 26px;
    color: #2b2d42;
    margin-bottom: 15px;
    font-weight: 700;
    line-height: 1.3;
    transition: all 0.3s ease;
  }

  ${CourseCard}:hover & h3 {
    color: #4361ee;
  }

  @media (max-width: 768px) {
    padding: 25px;
    
    h3 {
      font-size: 22px;
    }
  }
`

const CourseMeta = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  flex-wrap: wrap;

  span {
    display: flex;
    align-items: center;
    color: #6c757d;
    font-size: 14px;
    font-weight: 300;
  }

  i {
    margin-right: 8px;
    color: #4361ee;
  }
`

const CourseDescription = styled.p`
  color: #6c757d;
  margin-bottom: 25px;
  line-height: 1.8;
  font-weight: 300;
`

const CourseStats = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  padding-bottom: 25px;
  border-bottom: 1px solid #e9ecef;
`

const StatsItem = styled.div`
  display: flex;
  align-items: center;

  i {
    color: #4361ee;
    margin-right: 8px;
  }
`

const Rating = styled.div`
  display: flex;
  align-items: center;
`

const RatingValue = styled.span`
  font-weight: 600;
  margin-right: 8px;
  color: #2b2d42;
`

const Stars = styled.span`
  color: #ffc107;
  margin-right: 8px;
`

const Reviews = styled.span`
  color: #6c757d;
  font-size: 14px;
  font-weight: 300;
`

const CourseFeatures = styled.div`
  margin-bottom: 25px;

  h4 {
    font-size: 18px;
    color: #2b2d42;
    margin-bottom: 15px;
    font-weight: 600;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
    list-style: none;
    padding: 0;

    @media (max-width: 992px) {
      grid-template-columns: 1fr;
    }
  }

  li {
    display: flex;
    align-items: center;
    color: #6c757d;
    font-weight: 300;

    i {
      color: #4361ee;
      margin-right: 10px;
    }
  }
`

const CourseActions = styled.div`
  display: flex;
  gap: 15px;

  .btn {
    padding: 12px 25px;
    border-radius: 10px;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    display: inline-block;
  }

  .btn-primary {
    background-color: #4361ee;
    color: #ffffff;
    border: 2px solid #4361ee;

    &:hover {
      background-color: transparent;
      color: #4361ee;
      transform: translateY(-5px);
      box-shadow: 0 10px 20px rgba(67, 97, 238, 0.15);
    }
  }

  .btn-outline {
    background-color: transparent;
    border: 2px solid #e9ecef;
    color: #2b2d42;

    &:hover {
      border-color: #4361ee;
      color: #4361ee;
      transform: translateY(-5px);
      box-shadow: 0 10px 20px rgba(0,0,0,0.05);
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const CTASection = styled.section`
  background: linear-gradient(135deg, #4361ee, #3a0ca3);
  color: #ffffff;
  text-align: center;
  margin-top: 80px;
  padding: 100px 0;
  position: relative;
  overflow: hidden;
  border-radius: 50px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('/assets/wave-pattern.svg');
    opacity: 0.1;
    animation: wave 20s linear infinite;
  }

  @media (max-width: 992px) {
    border-radius: 30px;
  }

  @media (max-width: 576px) {
    border-radius: 20px;
    padding: 60px 0;
  }
`

const CTAContent = styled.div`
  position: relative;
  z-index: 1;

  h2 {
    font-size: 42px;
    margin-bottom: 20px;
    font-weight: 700;
    letter-spacing: -0.5px;

    @media (max-width: 768px) {
      font-size: 36px;
    }

    @media (max-width: 576px) {
      font-size: 28px;
    }
  }

  p {
    font-size: 20px;
    max-width: 700px;
    margin: 0 auto 40px;
    line-height: 1.8;
    font-weight: 300;
  }

  .btn {
    background-color: #ffffff;
    color: #4361ee;
    padding: 15px 40px;
    font-size: 18px;
    font-weight: 600;
    border-radius: 30px;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    border: 2px solid #ffffff;
    display: inline-block;
    text-decoration: none;

    &:hover {
      background-color: transparent;
      color: #ffffff;
      transform: translateY(-5px);
      box-shadow: 0 10px 20px rgba(0,0,0,0.1);
    }
  }
`

const Courses = ({ toggleRegistration }) => {
  const courses = [
    {
      id: 1,
      title: "Java Development",
      description:
        "Master Java programming from basics to advanced concepts with real-world projects and industry best practices.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop",
      duration: "12 Weeks",
      level: "Beginner to Advanced",
      lessons: 48,
      students: 1250,
      rating: 4.9,
      reviews: 420,
      features: [
        "Core Java fundamentals",
        "Object-oriented programming",
        "Java frameworks (Spring, Hibernate)",
        "Web application development",
        "Database integration",
        "Real-world projects",
      ],
    },
    {
      id: 2,
      title: "Software Testing",
      description:
        "Learn manual and automation testing with industry-standard tools and frameworks to ensure software quality.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&h=300&fit=crop",
      duration: "10 Weeks",
      level: "Beginner to Intermediate",
      lessons: 40,
      students: 980,
      rating: 4.8,
      reviews: 380,
      features: [
        "Manual testing fundamentals",
        "Test case design and execution",
        "Selenium automation",
        "API testing with Postman",
        "Performance testing with JMeter",
        "Mobile application testing",
      ],
    },
    {
      id: 3,
      title: "DevOps Engineering",
      description:
        "Master CI/CD pipelines, containerization, and cloud infrastructure automation for modern software delivery.",
      image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=500&h=300&fit=crop",
      duration: "14 Weeks",
      level: "Intermediate to Advanced",
      lessons: 56,
      students: 750,
      rating: 4.9,
      reviews: 290,
      features: [
        "CI/CD pipeline implementation",
        "Docker and Kubernetes",
        "Infrastructure as Code",
        "Cloud platforms (AWS, Azure)",
        "Monitoring and logging",
        "DevSecOps practices",
      ],
    },
    {
      id: 4,
      title: "Data Science",
      description:
        "Learn data analysis, machine learning, and visualization with Python and R to extract insights from complex datasets.",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=500&h=300&fit=crop",
      duration: "16 Weeks",
      level: "Intermediate",
      lessons: 64,
      students: 820,
      rating: 4.7,
      reviews: 350,
      features: [
        "Data analysis with Python",
        "Statistical modeling",
        "Machine learning algorithms",
        "Deep learning fundamentals",
        "Data visualization",
        "Big data technologies",
      ],
    },
    {
      id: 5,
      title: "Salesforce Development",
      description:
        "Become a certified Salesforce developer with hands-on training in customization, integration, and app development.",
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=500&h=300&fit=crop",
      duration: "12 Weeks",
      level: "Beginner to Advanced",
      lessons: 48,
      students: 680,
      rating: 4.8,
      reviews: 240,
      features: [
        "Salesforce platform fundamentals",
        "Apex programming",
        "Lightning component development",
        "Integration with external systems",
        "Salesforce administration",
        "Certification preparation",
      ],
    },
    {
      id: 6,
      title: "Python Programming",
      description:
        "Master Python programming for web development, data analysis, automation, and application development.",
      image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=500&h=300&fit=crop",
      duration: "10 Weeks",
      level: "Beginner to Intermediate",
      lessons: 40,
      students: 1100,
      rating: 4.9,
      reviews: 380,
      features: [
        "Python fundamentals",
        "Object-oriented programming",
        "Web development with Django/Flask",
        "Data analysis with pandas",
        "Automation scripting",
        "API development",
      ],
    },
    {
      id: 7,
      title: "Power BI",
      description: "Learn to create powerful business intelligence dashboards and reports with Microsoft Power BI.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      duration: "8 Weeks",
      level: "Beginner to Intermediate",
      lessons: 32,
      students: 560,
      rating: 4.7,
      reviews: 190,
      features: [
        "Data modeling and transformation",
        "DAX formulas and calculations",
        "Interactive visualizations",
        "Dashboard design",
        "Data connectivity and integration",
        "Power BI service deployment",
      ],
    },
    {
      id: 8,
      title: "Apache Kafka",
      description:
        "Master distributed event streaming platform for building real-time data pipelines and streaming applications.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop",
      duration: "8 Weeks",
      level: "Intermediate to Advanced",
      lessons: 32,
      students: 420,
      rating: 4.8,
      reviews: 150,
      features: [
        "Kafka architecture and components",
        "Producer and consumer applications",
        "Stream processing with Kafka Streams",
        "Kafka Connect for data integration",
        "Kafka security and monitoring",
        "Real-world use cases",
      ],
    },
  ]

  return (
    <CoursesPage>
      <CoursesHeader>
        <div className="container">
          <h1>Our Courses</h1>
          <p>Comprehensive training programs designed to advance your career</p>
        </div>
      </CoursesHeader>

      <section className="section courses-content">
        <div className="container">
          <CoursesFilters>
            <SearchBox>
              <input type="text" placeholder="Search courses..." />
              <button>
                <i className="fas fa-search"></i>
              </button>
            </SearchBox>
            <FilterOptions>
              <select>
                <option value="">All Categories</option>
                <option value="programming">Programming</option>
                <option value="testing">Testing</option>
                <option value="devops">DevOps</option>
                <option value="data">Data Science</option>
                <option value="cloud">Cloud Computing</option>
              </select>
              <select>
                <option value="">All Levels</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
              <select>
                <option value="">Sort By</option>
                <option value="popular">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">Newest</option>
              </select>
            </FilterOptions>
          </CoursesFilters>

          <CoursesList>
            {courses.map((course) => (
              <CourseCard key={course.id}>
                <CourseImage>
                  <img src={course.image || "/placeholder.svg"} alt={course.title} />
                  <CourseOverlay>
                    <button className="btn" onClick={toggleRegistration}>
                      Enroll Now
                    </button>
                  </CourseOverlay>
                </CourseImage>
                <CourseContent>
                  <h3>{course.title}</h3>
                  <CourseMeta>
                    <span>
                      <i className="fas fa-clock"></i> {course.duration}
                    </span>
                    <span>
                      <i className="fas fa-signal"></i> {course.level}
                    </span>
                    <span>
                      <i className="fas fa-book"></i> {course.lessons} Lessons
                    </span>
                  </CourseMeta>
                  <CourseDescription>{course.description}</CourseDescription>
                  <CourseStats>
                    <StatsItem>
                      <i className="fas fa-user-graduate"></i>
                      <span>{course.students} Students</span>
                    </StatsItem>
                    <StatsItem>
                      <Rating>
                        <RatingValue>{course.rating}</RatingValue>
                        <Stars>★★★★★</Stars>
                        <Reviews>({course.reviews})</Reviews>
                      </Rating>
                    </StatsItem>
                  </CourseStats>
                  <CourseFeatures>
                    <h4>What You'll Learn</h4>
                    <ul>
                      {course.features.map((feature, index) => (
                        <li key={index}>
                          <i className="fas fa-check"></i> {feature}
                        </li>
                      ))}
                    </ul>
                  </CourseFeatures>
                  <CourseActions>
                    <button className="btn btn-primary" onClick={toggleRegistration}>
                      Enroll Now
                    </button>
                    <a href={`/courses/${course.id}`} className="btn btn-outline">
                      View Details
                    </a>
                  </CourseActions>
                </CourseContent>
              </CourseCard>
            ))}
          </CoursesList>
        </div>
      </section>

      <CTASection>
        <div className="container">
          <CTAContent>
            <h2>Not sure which course is right for you?</h2>
            <p>Schedule a free consultation with our career advisors to find the perfect learning path</p>
            <button className="btn" onClick={toggleRegistration}>
              Book a Consultation
            </button>
          </CTAContent>
        </div>
      </CTASection>
    </CoursesPage>
  )
}

export default Courses
