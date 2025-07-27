import React from 'react';
import styled from 'styled-components';
import { FaHeart, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.headerBg};
  border-top: 1px solid ${({ theme }) => theme.borderColor};
  padding: 30px 0;
  margin-top: 60px;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const FooterText = styled.p`
  color: ${({ theme }) => theme.secondaryColor};
  text-align: center;
  font-size: 14px;
`;

const HeartIcon = styled(FaHeart)`
  color: #e25555;
  margin: 0 5px;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const SocialLink = styled.a`
  color: ${({ theme }) => theme.secondaryColor};
  font-size: 20px;
  transition: color 0.3s, transform 0.3s;
  
  &:hover {
    color: ${({ theme }) => theme.accentColor};
    transform: translateY(-3px);
  }
`;

const BackToTop = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.accentColor};
  color: white;
  border-radius: 50%;
  position: fixed;
  bottom: 30px;
  right: 30px;
  opacity: ${({ $visible }) => ($visible ? '1' : '0')};
  visibility: ${({ $visible }) => ($visible ? 'visible' : 'hidden')};
  transition: all 0.3s;
  box-shadow: 0 4px 12px ${({ theme }) => theme.shadowColor};
  
  &:hover {
    transform: translateY(-5px);
  }
  
  &::before {
    content: '↑';
    font-size: 20px;
    font-weight: bold;
  }
`;

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = React.useState(false);
  
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <FooterContainer>
      <div className="container">
        <FooterContent>
          <SocialLinks>
            <SocialLink href="https://github.com/adityajain71" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </SocialLink>
            <SocialLink href="https://linkedin.com/in/aditya-jain-07357328b/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </SocialLink>
            <SocialLink href="mailto:adityapradipjain205@gmail.com" aria-label="Email">
              <FaEnvelope />
            </SocialLink>
          </SocialLinks>
          
          <FooterText>
            &copy; {new Date().getFullYear()} Aditya's Portfolio. All rights reserved.
          </FooterText>
          
          <FooterText>
            Made with <HeartIcon /> using React
          </FooterText>
        </FooterContent>
      </div>
      
      <BackToTop 
        href="#" 
        onClick={(e) => {
          e.preventDefault();
          scrollToTop();
        }}
        $visible={showBackToTop}
        aria-label="Back to top"
      />
    </FooterContainer>
  );
};

export default Footer;