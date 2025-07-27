import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaSun, FaMoon, FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const HeaderContainer = styled.header`
  background-color: ${({ theme, $scrolled }) => 
    $scrolled ? theme.cardBg : 'transparent'};
  border-bottom: ${({ theme, $scrolled }) => 
    $scrolled ? `1px solid ${theme.borderColor}` : 'none'};
  padding: ${({ $scrolled }) => $scrolled ? '12px 0' : '20px 0'};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  transition: all 0.3s ease;
  backdrop-filter: ${({ $scrolled }) => $scrolled ? 'blur(10px)' : 'none'};
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Logo = styled(motion.div)`
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.accentColor};
  display: flex;
  align-items: center;
  
  span {
    background: linear-gradient(
      45deg, 
      ${({ theme }) => theme.accentColor}, 
      ${({ theme }) => theme.theme === 'light' ? '#0256b9' : '#2188ff'}
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const LogoHighlight = styled.span`
  color: ${({ theme }) => theme.accentColor};
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: ${({ theme }) => theme.accentColor};
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.3s ease-out;
  }
  
  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

const Nav = styled.nav`
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  gap: 24px;
`;

const NavItem = styled.li``;

const NavLink = styled(motion.a)`
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  font-weight: 500;
  padding: 5px 10px;
  border-radius: 4px;
  transition: all 0.3s ease;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.accentColor};
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.3s ease-out;
  }
  
  &:hover {
    color: ${({ theme }) => theme.accentColor};
    text-decoration: none;
    
    &::after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  }
`;

const HeaderControls = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const ThemeToggle = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.navHoverBg};
    transform: rotate(30deg);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 12px;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const SocialLink = styled(motion.a)`
  color: ${({ theme }) => theme.text};
  font-size: 20px;
  transition: all 0.3s ease;
  
  &:hover {
    color: ${({ theme }) => theme.accentColor};
    transform: translateY(-3px);
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${({ theme }) => theme.text};
  font-size: 24px;
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.cardBg};
  z-index: 200;
  padding: 20px;
  
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const MobileNavList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: center;
`;

const MobileNavItem = styled(motion.li)``;

const MobileNavLink = styled.a`
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  font-size: 24px;
  font-weight: 600;
  padding: 10px;
  display: block;
  
  &:hover {
    color: ${({ theme }) => theme.accentColor};
  }
`;

const MobileCloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  color: ${({ theme }) => theme.text};
  font-size: 24px;
  cursor: pointer;
`;

const MobileSocialLinks = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 40px;
`;

const MobileSocialLink = styled(motion.a)`
  color: ${({ theme }) => theme.text};
  font-size: 24px;
  
  &:hover {
    color: ${({ theme }) => theme.accentColor};
  }
`;

const Header = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
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
  
  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' }
  ];
  
  const handleMobileNavClick = () => {
    setIsMobileMenuOpen(false);
  };
  
  return (
    <>
      <HeaderContainer $scrolled={isScrolled}>
        <HeaderContent>
          <Logo
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <LogoHighlight>Aditya</LogoHighlight>
          </Logo>
          
          <Nav>
            <NavList>
              {navItems.map((item, index) => (
                <NavItem key={item.name}>
                  <NavLink 
                    href={item.href}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {item.name}
                  </NavLink>
                </NavItem>
              ))}
            </NavList>
          </Nav>
          
          <HeaderControls>
            <SocialLinks>
              <SocialLink 
                href="https://github.com/adityajain71" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
              >
                <FaGithub />
              </SocialLink>
              <SocialLink 
                href="https://linkedin.com/in/aditya-jain-07357328b/" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
              >
                <FaLinkedin />
              </SocialLink>
            </SocialLinks>
            
            <ThemeToggle 
              onClick={toggleTheme}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <FaMoon /> : <FaSun />}
            </ThemeToggle>
            
            <MobileMenuButton onClick={() => setIsMobileMenuOpen(true)}>
              <FaBars />
            </MobileMenuButton>
          </HeaderControls>
        </HeaderContent>
      </HeaderContainer>
      
      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            <MobileCloseButton onClick={() => setIsMobileMenuOpen(false)}>
              <FaTimes />
            </MobileCloseButton>
            
            <MobileNavList>
              {navItems.map((item, index) => (
                <MobileNavItem
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <MobileNavLink 
                    href={item.href}
                    onClick={handleMobileNavClick}
                  >
                    {item.name}
                  </MobileNavLink>
                </MobileNavItem>
              ))}
            </MobileNavList>
            
            <MobileSocialLinks>
              <MobileSocialLink 
                href="https://github.com/adityajain71" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
              >
                <FaGithub />
              </MobileSocialLink>
              <MobileSocialLink 
                href="https://linkedin.com/in/aditya-jain-07357328b/" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
              >
                <FaLinkedin />
              </MobileSocialLink>
            </MobileSocialLinks>
          </MobileMenu>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;