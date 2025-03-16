import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#1a1a2e',
      color: '#fff',
      padding: '3rem 0',
      fontFamily: 'Poppins, sans-serif',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 2rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '2rem',
      }}>
        <div style={{ animation: 'fadeIn 0.8s ease-in' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', position: 'relative' }}>About Us</h3>
          <p style={{ lineHeight: '1.8', marginBottom: '1.5rem' }}>
            We are dedicated to providing quality education and resources to help you achieve your goals.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            {['facebook', 'twitter', 'instagram', 'linkedin'].map(icon => (
              <a key={icon} href={`#${icon}`} style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: '#16213e',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'transform 0.3s, background-color 0.3s',
                ':hover': { transform: 'translateY(-5px)', backgroundColor: '#0f3460' }
              }}>
                <i className={`fab fa-${icon}`}></i>
              </a>
            ))}
          </div>
        </div>
        
        <div style={{ animation: 'fadeIn 0.8s ease-in 0.2s both' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Quick Links</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {['Home', 'About', 'Courses', 'Blog', 'Contact'].map(link => (
              <li key={link} style={{ marginBottom: '0.8rem' }}>
                <a href={`/${link.toLowerCase()}`} style={{
                  color: '#ddd',
                  textDecoration: 'none',
                  transition: 'color 0.3s, transform 0.3s',
                  display: 'inline-block',
                  ':hover': { color: '#fff', transform: 'translateX(5px)' }
                }}>
                  <span style={{ marginRight: '0.5rem' }}>›</span> {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        <div style={{ animation: 'fadeIn 0.8s ease-in 0.4s both' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Contact Info</h3>
          <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
            <i className="fas fa-map-marker-alt" style={{ marginRight: '1rem', marginTop: '0.3rem' }}></i>
            <p>123 Education St, Learning City, ED 12345</p>
          </div>
          <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
            <i className="fas fa-phone" style={{ marginRight: '1rem' }}></i>
            <p>+1 (555) 123-4567</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <i className="fas fa-envelope" style={{ marginRight: '1rem' }}></i>
            <p>info@learningplatform.com</p>
          </div>
        </div>
      </div>
      
      <div style={{
        borderTop: '1px solid #333',
        marginTop: '2rem',
        paddingTop: '1.5rem',
        textAlign: 'center',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '1.5rem 2rem 0',
      }}>
        <p>&copy; {new Date().getFullYear()} Learning Platform. All rights reserved.</p>
      </div>
      
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        a:hover {
          color: #fff;
          transform: translateX(5px);
        }
      `}</style>
    </footer>
  );
};

export default Footer;