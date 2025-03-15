"use client"
import "./Courses.css"

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
    <div className="courses-page">
      <div className="courses-header">
        <div className="container">
          <h1>Our Courses</h1>
          <p>Comprehensive training programs designed to advance your career</p>
        </div>
      </div>

      <section className="section courses-content">
        <div className="container">
          <div className="courses-filters">
            <div className="search-box">
              <input type="text" placeholder="Search courses..." />
              <button>
                <i className="fas fa-search"></i>
              </button>
            </div>
            <div className="filter-options">
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
            </div>
          </div>

          <div className="courses-list">
            {courses.map((course) => (
              <div className="course-card" key={course.id}>
                <div className="course-image">
                  <img src={course.image || "/placeholder.svg"} alt={course.title} />
                  <div className="course-overlay">
                    <button className="btn" onClick={toggleRegistration}>
                      Enroll Now
                    </button>
                  </div>
                </div>
                <div className="course-content">
                  <h3>{course.title}</h3>
                  <div className="course-meta">
                    <span>
                      <i className="fas fa-clock"></i> {course.duration}
                    </span>
                    <span>
                      <i className="fas fa-signal"></i> {course.level}
                    </span>
                    <span>
                      <i className="fas fa-book"></i> {course.lessons} Lessons
                    </span>
                  </div>
                  <p className="course-description">{course.description}</p>
                  <div className="course-stats">
                    <div className="stats-item">
                      <i className="fas fa-user-graduate"></i>
                      <span>{course.students} Students</span>
                    </div>
                    <div className="stats-item">
                      <div className="rating">
                        <span className="rating-value">{course.rating}</span>
                        <span className="stars">★★★★★</span>
                        <span className="reviews">({course.reviews})</span>
                      </div>
                    </div>
                  </div>
                  <div className="course-features">
                    <h4>What You'll Learn</h4>
                    <ul>
                      {course.features.map((feature, index) => (
                        <li key={index}>
                          <i className="fas fa-check"></i> {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="course-actions">
                    <button className="btn" onClick={toggleRegistration}>
                      Enroll Now
                    </button>
                    <a href={`/courses/${course.id}`} className="btn btn-outline">
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Not sure which course is right for you?</h2>
            <p>Schedule a free consultation with our career advisors to find the perfect learning path</p>
            <button className="btn" onClick={toggleRegistration}>
              Book a Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Courses

