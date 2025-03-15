import "./Blog.css"

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Software Development: Trends to Watch in 2023",
      excerpt:
        "Explore the emerging trends that are shaping the future of software development, from AI-driven development to low-code platforms.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop",
      author: "Rahul Mehta",
      date: "August 15, 2023",
      category: "Technology",
      tags: ["Software Development", "AI", "Future Tech"],
    },
    {
      id: 2,
      title: "How to Prepare for a Career in Data Science",
      excerpt:
        "A comprehensive guide to building the skills and knowledge needed to launch a successful career in the growing field of data science.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
      author: "Priya Sharma",
      date: "July 28, 2023",
      category: "Career",
      tags: ["Data Science", "Career Growth", "Skills Development"],
    },
    {
      id: 3,
      title: "The Importance of Continuous Learning in IT",
      excerpt:
        "Why ongoing education and skill development are crucial for professionals in the rapidly evolving technology industry.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=500&fit=crop",
      author: "Vikram Patel",
      date: "July 10, 2023",
      category: "Professional Development",
      tags: ["Learning", "IT Career", "Skill Enhancement"],
    },
    {
      id: 4,
      title: "Understanding DevOps: A Beginner's Guide",
      excerpt:
        "An introduction to DevOps principles, practices, and tools for those looking to understand this collaborative approach to software development.",
      image: "https://images.unsplash.com/photo-1537884944318-390069bb8665?w=800&h=500&fit=crop",
      author: "Amit Kumar",
      date: "June 22, 2023",
      category: "DevOps",
      tags: ["DevOps", "CI/CD", "Automation"],
    },
    {
      id: 5,
      title: "The Role of Artificial Intelligence in Modern Business",
      excerpt:
        "How AI is transforming business operations, customer experiences, and decision-making processes across industries.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=500&fit=crop",
      author: "Neha Reddy",
      date: "June 5, 2023",
      category: "Technology",
      tags: ["AI", "Business", "Digital Transformation"],
    },
    {
      id: 6,
      title: "Top Programming Languages to Learn in 2023",
      excerpt:
        "A detailed analysis of the most in-demand programming languages and why they're worth adding to your skill set this year.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=500&fit=crop",
      author: "Rohan Desai",
      date: "May 18, 2023",
      category: "Programming",
      tags: ["Programming Languages", "Coding", "Career"],
    },
  ]

  return (
    <div className="blog-page">
      <div className="blog-header">
        <div className="container">
          <h1>Our Blog</h1>
          <p>Insights, guides, and industry news from our experts</p>
        </div>
      </div>

      <div className="blog-content section">
        <div className="container">
          <div className="blog-grid">
            {blogPosts.map((post) => (
              <div className="blog-card" key={post.id}>
                <div className="blog-image">
                  <img src={post.image || "/placeholder.svg"} alt={post.title} />
                  <div className="blog-category">{post.category}</div>
                </div>
                <div className="blog-details">
                  <div className="blog-meta">
                    <span className="blog-author">{post.author}</span>
                    <span className="blog-date">{post.date}</span>
                  </div>
                  <h2 className="blog-title">{post.title}</h2>
                  <p className="blog-excerpt">{post.excerpt}</p>
                  <div className="blog-tags">
                    {post.tags.map((tag, index) => (
                      <span className="tag" key={index}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a href={`/blog/${post.id}`} className="read-more">
                    Read More
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="pagination">
            <button className="pagination-btn active">1</button>
            <button className="pagination-btn">2</button>
            <button className="pagination-btn">3</button>
            <button className="pagination-btn next">Next</button>
          </div>
        </div>
      </div>

      <div className="newsletter-section">
        <div className="container">
          <div className="newsletter-content">
            <h2>Subscribe to Our Newsletter</h2>
            <p>Stay updated with our latest articles, industry insights, and company news</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Your Email Address" required />
              <button type="submit" className="btn">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog

