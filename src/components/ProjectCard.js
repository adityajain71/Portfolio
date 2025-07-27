import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Card = styled(motion.div)`
  background-color: ${({ theme }) => theme.cardBg};
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  
  @media (max-width: 768px) {
    border-radius: 6px;
  }
`;

const ProjectHeader = styled.div`
  padding: 16px;
  background-color: ${({ theme }) => theme.headerBg};
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 480px) {
    padding: 12px;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
  
  @media (max-width: 480px) {
    font-size: 15px;
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 12px;
  
  @media (max-width: 480px) {
    gap: 8px;
  }
`;

const ProjectLink = styled.a`
  color: ${({ theme }) => theme.accentColor};
  font-size: 18px;
  transition: transform 0.2s;
  padding: 8px;
  
  &:hover {
    transform: scale(1.1);
  }
  
  @media (max-width: 768px) {
    font-size: 16px;
    padding: 10px;
  }
  
  @media (max-width: 480px) {
    font-size: 15px;
    padding: 12px;
  }
`;

const ProjectImage = styled.div`
  height: 200px;
  overflow: hidden;
  position: relative;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s;
  }
  
  @media (max-width: 768px) {
    height: 180px;
  }
  
  @media (max-width: 480px) {
    height: 160px;
  }
`;

const ProjectContent = styled.div`
  padding: 20px;
  
  @media (max-width: 768px) {
    padding: 16px;
  }
  
  @media (max-width: 480px) {
    padding: 12px;
  }
`;

const ProjectDescription = styled.p`
  margin-bottom: 20px;
  font-size: 15px;
  line-height: 1.6;
  color: ${({ theme }) => theme.text};
  
  @media (max-width: 768px) {
    font-size: 14px;
    margin-bottom: 16px;
  }
  
  @media (max-width: 480px) {
    font-size: 13px;
    margin-bottom: 12px;
  }
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 16px;
  
  @media (max-width: 768px) {
    gap: 6px;
    margin-top: 12px;
  }
  
  @media (max-width: 480px) {
    gap: 4px;
    margin-top: 8px;
  }
`;

const TechTag = styled(motion.span)`
  background-color: ${({ theme }) => theme.tagBg};
  color: ${({ theme }) => theme.tagColor};
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
  
  @media (max-width: 768px) {
    padding: 3px 8px;
    font-size: 11px;
  }
  
  @media (max-width: 480px) {
    padding: 2px 6px;
    font-size: 10px;
  }
`;

const OverlayButton = styled.button`
  position: absolute;
  bottom: 10px;
  right: 10px;
  background-color: ${({ theme }) => theme.accentColor};
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  opacity: 0;
  transition: opacity 0.3s, transform 0.3s;
  
  &::after {
    content: '↗';
    font-size: 20px;
  }
  
  @media (max-width: 768px) {
    opacity: 1; /* Always visible on mobile */
    width: 36px;
    height: 36px;
    bottom: 8px;
    right: 8px;
    
    &::after {
      font-size: 18px;
    }
  }
  
  @media (max-width: 480px) {
    width: 32px;
    height: 32px;
    
    &::after {
      font-size: 16px;
    }
  }
`;

const Overlay = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  color: white;
  text-align: center;
  opacity: 0;
  pointer-events: none;
`;

const OverlayTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.accentColor};
`;

const OverlayDescription = styled.p`
  margin-bottom: 30px;
  font-size: 16px;
  line-height: 1.6;
`;

const OverlayLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const OverlayLink = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.accentColor};
  color: white;
  border-radius: 6px;
  text-decoration: none;
  
  &:hover {
    text-decoration: none;
    color: white;
  }
`;

const CardContainer = styled.div`
  position: relative;
  
  &:hover ${OverlayButton} {
    opacity: 1;
    transform: translateY(-5px);
  }
  
  &:hover img {
    transform: scale(1.05);
  }
`;

const ProjectCard = ({ project }) => {
  const [showOverlay, setShowOverlay] = useState(false);
  
  return (
    <CardContainer>
      <Card
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        whileHover={{ 
          scale: 1.02,
          boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)'
        }}
      >
        <ProjectHeader>
          <ProjectTitle>{project.title}</ProjectTitle>
          <ProjectLinks>
            <ProjectLink href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository">
              <FaGithub />
            </ProjectLink>
            <ProjectLink href={project.demo} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
              <FaExternalLinkAlt />
            </ProjectLink>
          </ProjectLinks>
        </ProjectHeader>
        
        <ProjectImage>
          <img src={project.image} alt={project.title} />
        </ProjectImage>
        
        <ProjectContent>
          <ProjectDescription>{project.description}</ProjectDescription>
          <TechStack>
            {project.tech.map((tech, i) => (
              <TechTag 
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.1, y: -2 }}
              >
                {tech}
              </TechTag>
            ))}
          </TechStack>
        </ProjectContent>
        
        <Overlay
          animate={{ opacity: showOverlay ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ pointerEvents: showOverlay ? 'auto' : 'none' }}
        >
          <OverlayTitle>{project.title}</OverlayTitle>
          <OverlayDescription>
            {project.extendedDescription || "This project showcases my skills in creating robust, user-friendly applications with modern technologies."}
          </OverlayDescription>
          <OverlayLinks>
            <OverlayLink 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub /> View Code
            </OverlayLink>
            <OverlayLink 
              href={project.demo} 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaExternalLinkAlt /> Live Demo
            </OverlayLink>
          </OverlayLinks>
        </Overlay>
      </Card>
      
      <OverlayButton 
        onClick={() => setShowOverlay(!showOverlay)} 
        aria-label="Show project details" 
      />
    </CardContainer>
  );
};

export default ProjectCard;