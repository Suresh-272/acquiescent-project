import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navLinks = ['Home', 'About', 'Courses', 'Blog', 'Contact'];
  
  return (
    <nav style={{
      position: 'fixed',
      width: '100%',
      top: 0,
      left: 0,
      zIndex: 1000,
      padding: isScrolled ? '0.8rem 0' : '1.5rem 0',
      backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
      boxShadow: isScrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none',
      transition: 'all 0.3s ease',
      fontFamily: 'Poppins, sans-serif',
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 2rem',
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
        }}>
          <Link to="/" style={{
            fontWeight: 700,
            fontSize: '1.8rem',
            textDecoration: 'none',
            color: isScrolled ? '#1a1a2e' : '#fff',
            transition: 'color 0.3s',
          }}>
            <span style={{ color: '#4361ee' }}>Learn</span>Platform
          </Link>
        </div>
        
        <div style={{
          display: 'flex',
          alignItems: 'center',
        }}>
          <ul style={{
            listStyle: 'none',
            display: 'flex',
            gap: '2rem',
            margin: 0,
            padding: 0,
            '@media (max-width: 768px)': {
              display: 'none',
            },
          }}>
            {navLinks.map(link => (
              <li key={link}>
                <Link to={`/${link.toLowerCase()}`} style={{
                  color: isScrolled ? '#1a1a2e' : '#fff',
                  textDecoration: 'none',
                  fontWeight: 500,
                  fontSize: '1rem',
                  position: 'relative',
                  transition: 'color 0.3s',
                  padding: '0.5rem 0',
                }}>
                  {link}
                  <span style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '0%',
                    height: '2px',
                    backgroundColor: '#4361ee',
                    transition: 'width 0.3s',
                  }}></span>
                </Link>
              </li>
            ))}
          </ul>
          
          <button style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: isScrolled ? '#1a1a2e' : '#fff',
            fontSize: '1.5rem',
            cursor: 'pointer',
            '@media (max-width: 768px)': {
              display: 'block',
            },
          }} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
          
          <Link to="/register" style={{
            backgroundColor: '#4361ee',
            color: '#fff',
            padding: '0.8rem 1.5rem',
            borderRadius: '50px',
            textDecoration: 'none',
            fontWeight: 500,
            marginLeft: '2rem',
            transition: 'transform 0.3s, box-shadow 0.3s',
            boxShadow: '0 4px 12px rgba(67, 97, 238, 0.3)',
            ':hover': {
              transform: 'translateY(-3px)',
              boxShadow: '0 8px 15px rgba(67, 97, 238, 0.4)',
            },
            '@media (max-width: 768px)': {
              display: 'none',
            },
          }}>
            Get Started
          </Link>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div style={{
        position: 'fixed',
        top: 0,
        right: mobileMenuOpen ? 0 : '-100%',
        width: '70%',
        height: '100vh',
        backgroundColor: '#fff',
        boxShadow: '-5px 0 15px rgba(0, 0, 0, 0.1)',
        padding: '2rem',
        transition: 'right 0.3s ease',
        zIndex: 2000,
        '@media (min-width: 769px)': {
          display: 'none',
        },
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'flex-end',
          marginBottom: '2rem',
        }}>
          <button style={{
            background: 'none',
            border: 'none',
            fontSize: '1.5rem',
            cursor: 'pointer',
          }} onClick={() => setMobileMenuOpen(false)}>
            ✕
          </button>
        </div>
        
        <ul style={{
          listStyle: 'none',
          padding: 0,
          margin: 0,
        }}>
          {navLinks.map(link => (
            <li key={link} style={{ marginBottom: '1.5rem' }}>
              <Link to={`/${link.toLowerCase()}`} style={{
                color: '#1a1a2e',
                textDecoration: 'none',
                fontWeight: 500,
                fontSize: '1.2rem',
                display: 'block',
                padding: '0.5rem 0',
              }} onClick={() => setMobileMenuOpen(false)}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
        
        <Link to="/register" style={{
          backgroundColor: '#4361ee',
          color: '#fff',
          padding: '0.8rem 1.5rem',
          borderRadius: '50px',
          textDecoration: 'none',
          fontWeight: 500,
          display: 'inline-block',
          marginTop: '1.5rem',
          textAlign: 'center',
        }}>
          Get Started
        </Link>
      </div>
      
      {/* Overlay */}
      {mobileMenuOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1500,
          '@media (min-width: 769px)': {
            display: 'none',
          },
        }} onClick={() => setMobileMenuOpen(false)}></div>
      )}
      
      <style jsx>{`
        @media (max-width: 768px) {
          nav ul {
            display: none;
          }
          
          nav button {
            display: block;
          }
          
          nav a.get-started {
            display: none;
          }
        }
        
        nav a:hover span {
          width: 100%;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;