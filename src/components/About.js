import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaUser, FaGithub, FaLinkedin } from 'react-icons/fa';
import SectionTitle from './SectionTitle';
import ProfileImageCircle from './ProfileImageCircle';
import profileImage from '../assets/images/profile.jpg';

const AboutSection = styled.section`
  padding: 40px 0;
`;

const AboutContainer = styled.div`
  background-color: ${({ theme }) => theme.cardBg};
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 8px;
  padding: 30px;
  box-shadow: 0 4px 12px ${({ theme }) => theme.shadowColor};
`;

const AboutContent = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const ProfileImageContainer = styled.div`
  flex: 0 0 200px;
  
  @media (max-width: 768px) {
    flex: 0 0 150px;
  }
`;

const AboutInfo = styled.div`
  flex: 1;
`;

const Name = styled.h2`
  font-size: 32px;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.accentColor};
`;

const Title = styled.h3`
  font-size: 18px;
  color: ${({ theme }) => theme.secondaryColor};
  margin-bottom: 16px;
`;

const Bio = styled.p`
  margin-bottom: 24px;
  font-size: 16px;
  line-height: 1.7;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 16px;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.headerBg};
  color: ${({ theme }) => theme.text};
  border: 1px solid ${({ theme }) => theme.borderColor};
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.accentColor};
    color: white;
    transform: translateY(-3px);
  }
`;

const About = () => {
  return (
    <AboutSection id="about">
      <div className="container">
        <SectionTitle icon={<FaUser />} title="About Me" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <AboutContainer>
            <AboutContent>
              <ProfileImageContainer>
                <ProfileImageCircle 
                  src={profileImage} 
                  alt="Aditya's Profile" 
                  size="200px"
                />
              </ProfileImageContainer>
              
              <AboutInfo>
                <Name>Aditya</Name>
                <Title>B.Tech CSE Student at MIT ADT</Title>
                <Bio>
                  I'm a passionate full-stack developer and digital innovator, currently pursuing my B.Tech in Computer Science at MIT ADT University. I enjoy building practical solutions that solve real-world problems and am constantly exploring new technologies to expand my skillset.
                  <br /><br />
                  My focus areas include web development, UI/UX design, and creating scalable applications. I'm enthusiastic about collaborating on innovative projects and contributing to the tech community.
                </Bio>
                
                <SocialLinks>
                  <SocialLink href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <FaGithub size={20} />
                  </SocialLink>
                  <SocialLink href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <FaLinkedin size={20} />
                  </SocialLink>
                </SocialLinks>
              </AboutInfo>
            </AboutContent>
          </AboutContainer>
        </motion.div>
      </div>
    </AboutSection>
  );
};

export default About;