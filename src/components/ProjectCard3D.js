import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Card = styled(motion.div)`
  background-color: ${({ theme }) => theme.cardBg};
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  transform-style: preserve-3d;
  perspective: 1000px;
`;

const CardInner = styled(motion.div)`
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.8s;
`;

const CardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
`;

const CardFront = styled(CardFace)``;

const CardBack = styled(CardFace)`
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: ${({ theme }) => theme.headerBg};
`;

const ProjectHeader = styled.div`
  padding: 16px;
  background-color: ${({ theme }) => theme.headerBg};
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProjectTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 12px;
`;

const ProjectLink = styled.a`
  color: ${({ theme }) => theme.accentColor};
  font-size: 18px;
  transition: transform 0.2s;
  
  &:hover {
    transform: scale(1.1);
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
`;

const ProjectContent = styled.div`
  padding: 20px;
`;

const ProjectDescription = styled.p`
  margin-bottom: 20px;
  font-size: 15px;
  line-height: 1.6;
  color: ${({ theme }) => theme.text};
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 16px;
`;

const TechTag = styled.span`
  background-color: ${({ theme }) => theme.tagBg};
  color: ${({ theme }) => theme.tagColor};
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
`;

const FlipButton = styled.button`
  position: absolute;
  bottom: 10px;
  right: 10px;
  background-color: ${({ theme }) => theme.accentColor};
  color: white;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  
  &::after {
    content: '↻';
    font-size: 16px;
  }
`;

const BackContent = styled.div`
  text-align: center;
`;

const BackTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.accentColor};
`;

const BackDescription = styled.p`
  margin-bottom: 30px;
  font-size: 16px;
  line-height: 1.6;
`;

const BackLinks = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
`;

const BackLink = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.accentColor};
  color: white;
  border-radius: 6px;
  text-decoration: none;
  transition: transform 0.3s;
  
  &:hover {
    transform: translateY(-3px);
  }
`;

const ProjectCard3D = ({ project }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const cardRef = useRef();
  
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };
  
  return (
    <Card
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ 
        scale: 1.02,
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)'
      }}
    >
      <CardInner
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
      >
        <CardFront>
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
                <TechTag key={i}>{tech}</TechTag>
              ))}
            </TechStack>
          </ProjectContent>
        </CardFront>
        
        <CardBack>
          <BackContent>
            <BackTitle>{project.title}</BackTitle>
            <BackDescription>
              {project.extendedDescription || "This project showcases my skills in creating robust, user-friendly applications with modern technologies."}
            </BackDescription>
            <BackLinks>
              <BackLink href={project.github} target="_blank" rel="noopener noreferrer">
                <FaGithub /> View Code
              </BackLink>
              <BackLink href={project.demo} target="_blank" rel="noopener noreferrer">
                <FaExternalLinkAlt /> Live Demo
              </BackLink>
            </BackLinks>
          </BackContent>
        </CardBack>
      </CardInner>
      
      <FlipButton onClick={handleFlip} aria-label="Flip card" />
    </Card>
  );
};

export default ProjectCard3D;