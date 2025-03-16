import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


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
    <NavContainer isScrolled={isScrolled}>
      <NavContent>
        <LogoContainer>
          <LogoLink to="/" isScrolled={isScrolled}>
            <LogoSpan>Learn</LogoSpan>Platform
          </LogoLink>
        </LogoContainer>
        
        <NavLinksContainer>
          <NavList>
            {navLinks.map(link => (
              <li key={link}>
                <NavLink to={`/${link.toLowerCase()}`} isScrolled={isScrolled}>
                  {link}
                  <NavLinkUnderline />
                </NavLink>
              </li>
            ))}
          </NavList>
          
          <MenuButton 
            isScrolled={isScrolled} 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </MenuButton>
          
          <GetStartedButton to="/register">
            Get Started
          </GetStartedButton>
        </NavLinksContainer>
      </NavContent>
      
      <MobileMenu isOpen={mobileMenuOpen}>
        <MobileMenuHeader>
          <MenuButton onClick={() => setMobileMenuOpen(false)}>
            ✕
          </MenuButton>
        </MobileMenuHeader>
        
        <MobileMenuList>
          {navLinks.map(link => (
            <MobileMenuItem key={link}>
              <MobileMenuLink 
                to={`/${link.toLowerCase()}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link}
              </MobileMenuLink>
            </MobileMenuItem>
          ))}
        </MobileMenuList>
        
        <MobileGetStarted to="/register">
          Get Started
        </MobileGetStarted>
      </MobileMenu>
      
      {mobileMenuOpen && (
        <Overlay onClick={() => setMobileMenuOpen(false)} />
      )}
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  padding: ${props => props.isScrolled ? '0.8rem 0' : '1.5rem 0'};
  background-color: ${props => props.isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent'};
  box-shadow: ${props => props.isScrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none'};
  transition: all 0.3s ease;
  font-family: 'Poppins', sans-serif;
`;

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LogoLink = styled(Link)`
  font-weight: 700;
  font-size: 1.8rem;
  text-decoration: none;
  color: ${props => props.isScrolled ? '#1a1a2e' : '#fff'};
  transition: color 0.3s;
`;

const LogoSpan = styled.span`
  color: #4361ee;
`;

const NavLinksContainer = styled.div`
  display: flex;
  align-items: center;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 2rem;
  margin: 0;
  padding: 0;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: ${props => props.isScrolled ? '#1a1a2e' : '#fff'};
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  position: relative;
  transition: color 0.3s;
  padding: 0.5rem 0;
  
  &:hover span {
    width: 100%;
  }
`;

const NavLinkUnderline = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0%;
  height: 2px;
  background-color: #4361ee;
  transition: width 0.3s;
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${props => props.isScrolled ? '#1a1a2e' : '#fff'};
  font-size: 1.5rem;
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const GetStartedButton = styled(Link)`
  background-color: #4361ee;
  color: #fff;
  padding: 0.8rem 1.5rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 500;
  margin-left: 2rem;
  transition: transform 0.3s, box-shadow 0.3s;
  box-shadow: 0 4px 12px rgba(67, 97, 238, 0.3);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 15px rgba(67, 97, 238, 0.4);
  }
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  right: ${props => props.isOpen ? 0 : '-100%'};
  width: 70%;
  height: 100vh;
  background-color: #fff;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  transition: right 0.3s ease;
  z-index: 2000;
  
  @media (min-width: 769px) {
    display: none;
  }
`;

const MobileMenuHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2rem;
`;

const MobileMenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const MobileMenuItem = styled.li`
  margin-bottom: 1.5rem;
`;

const MobileMenuLink = styled(Link)`
  color: #1a1a2e;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.2rem;
  display: block;
  padding: 0.5rem 0;
`;

const MobileGetStarted = styled(Link)`
  background-color: #4361ee;
  color: #fff;
  padding: 0.8rem 1.5rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 500;
  display: inline-block;
  margin-top: 1.5rem;
  text-align: center;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1500;
  
  @media (min-width: 769px) {
    display: none;
  }
`;


export default Navbar;