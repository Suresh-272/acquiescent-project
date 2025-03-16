import styled, { keyframes } from "styled-components"

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

const BlogPage = styled.div`
  padding-top: 80px;
  opacity: 0;
  animation: ${fadeIn} 1s ease forwards;
`

const BlogHeader = styled.div`
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
`

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 40px;
  margin-top: 60px;
`

const BlogCard = styled.div`
  background-color: var(--white);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(0,0,0,0.05);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border: 1px solid rgba(0,0,0,0.03);
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-15px);
    box-shadow: 0 25px 45px rgba(67, 97, 238, 0.1);
  }
`

const BlogImage = styled.div`
  position: relative;
  height: 220px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  ${BlogCard}:hover & img {
    transform: scale(1.1);
  }
`

const BlogCategory = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  background-color: var(--primary-color);
  color: var(--white);
  padding: 8px 15px;
  border-radius: 30px;
  font-size: 12px;
  font-weight: 600;
  z-index: 1;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
`

const BlogDetails = styled.div`
  padding: 30px;
  flex: 1;
  display: flex;
  flex-direction: column;
`

const BlogMeta = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  font-size: 14px;
  color: var(--light-text);
  font-weight: 300;
`

const BlogTitle = styled.h2`
  font-size: 22px;
  margin-bottom: 15px;
  color: var(--secondary-color);
  line-height: 1.4;
  font-weight: 700;
  transition: all 0.3s ease;

  ${BlogCard}:hover & {
    color: var(--primary-color);
  }
`

const BlogExcerpt = styled.p`
  color: var(--light-text);
  margin-bottom: 25px;
  line-height: 1.8;
  font-weight: 300;
  flex: 1;
`

const BlogTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 25px;
`

const Tag = styled.span`
  background-color: var(--primary-light);
  color: var(--primary-color);
  padding: 5px 15px;
  border-radius: 30px;
  font-size: 12px;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background-color: var(--primary-color);
    color: var(--white);
    transform: translateY(-3px);
  }
`

const ReadMore = styled.a`
  display: inline-block;
  color: var(--primary-color);
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
  padding-bottom: 3px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--primary-color);
    transition: width 0.3s ease;
  }

  &:hover {
    color: var(--secondary-color);
    &::after {
      width: 100%;
    }
  }
`

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 60px;
  gap: 10px;
`

const PaginationButton = styled.button`
  width: ${props => props.$isNextPrev ? 'auto' : '45px'};
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.$active ? 'var(--primary-color)' : 'var(--white)'};
  color: ${props => props.$active ? 'var(--white)' : 'inherit'};
  border: 1px solid ${props => props.$active ? 'var(--primary-color)' : 'var(--border-color)'};
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
  padding: ${props => props.$isNextPrev ? '0 20px' : '0'};

  &:hover:not(:disabled) {
    background-color: ${props => props.$active ? 'var(--primary-color)' : 'var(--primary-light)'};
    color: ${props => props.$active ? 'var(--white)' : 'var(--primary-color)'};
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(67, 97, 238, 0.1);
  }
`

const NewsletterSection = styled.div`
  background-color: var(--primary-light);
  padding: 100px 0;
  margin-top: 100px;
  position: relative;
  overflow: hidden;
  border-radius: 50px;

  &::before, &::after {
    content: '';
    position: absolute;
    width: 300px;
    height: 300px;
    background: var(--primary-color);
    border-radius: 50%;
    opacity: 0.05;
  }

  &::before {
    top: -150px;
    left: -150px;
  }

  &::after {
    bottom: -150px;
    right: -150px;
  }
`

const NewsletterContent = styled.div`
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 1;

  h2 {
    font-size: 36px;
    color: var(--secondary-color);
    margin-bottom: 20px;
    font-weight: 700;
    letter-spacing: -0.5px;
  }

  p {
    color: var(--light-text);
    margin-bottom: 30px;
    line-height: 1.8;
    font-weight: 300;
  }
`

const NewsletterForm = styled.form`
  display: flex;
  gap: 15px;
  position: relative;

  input {
    flex: 1;
    padding: 15px 20px;
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

  button {
    background: var(--primary-color);
    color: var(--white);
    border: 2px solid var(--primary-color);
    padding: 15px 30px;
    font-size: 16px;
    font-weight: 600;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);

    &:hover {
      background-color: transparent;
      color: var(--primary-color);
      transform: translateY(-5px);
      box-shadow: 0 10px 20px rgba(67, 97, 238, 0.15);
    }
  }
`

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
    <BlogPage>
      <BlogHeader>
        <div className="container">
          <h1>Our Blog</h1>
          <p>Insights, guides, and industry news from our experts</p>
        </div>
      </BlogHeader>

      <div className="section">
        <div className="container">
          <BlogGrid>
            {blogPosts.map((post) => (
              <BlogCard key={post.id}>
                <BlogImage>
                  <img src={post.image || "/placeholder.svg"} alt={post.title} />
                  <BlogCategory>{post.category}</BlogCategory>
                </BlogImage>
                <BlogDetails>
                  <BlogMeta>
                    <span>{post.author}</span>
                    <span>{post.date}</span>
                  </BlogMeta>
                  <BlogTitle>{post.title}</BlogTitle>
                  <BlogExcerpt>{post.excerpt}</BlogExcerpt>
                  <BlogTags>
                    {post.tags.map((tag, index) => (
                      <Tag key={index}>{tag}</Tag>
                    ))}
                  </BlogTags>
                  <ReadMore href={`/blog/${post.id}`}>Read More</ReadMore>
                </BlogDetails>
              </BlogCard>
            ))}
          </BlogGrid>

          <Pagination>
            <PaginationButton $active>1</PaginationButton>
            <PaginationButton>2</PaginationButton>
            <PaginationButton>3</PaginationButton>
            <PaginationButton $isNextPrev>Next</PaginationButton>
          </Pagination>
        </div>
      </div>

      <NewsletterSection>
        <div className="container">
          <NewsletterContent>
            <h2>Subscribe to Our Newsletter</h2>
            <p>Stay updated with our latest articles, industry insights, and company news</p>
            <NewsletterForm>
              <input type="email" placeholder="Your Email Address" required />
              <button type="submit">Subscribe</button>
            </NewsletterForm>
          </NewsletterContent>
        </div>
      </NewsletterSection>
    </BlogPage>
  )
}

export default Blog
