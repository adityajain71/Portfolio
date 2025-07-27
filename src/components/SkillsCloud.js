import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SkillsCloudContainer = styled.div`
  width: 100%;
  height: 400px;
  margin: 30px 0;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.headerBg};
`;

const SkillTag = styled(motion.div)`
  position: absolute;
  background-color: ${({ theme }) => theme.tagBg};
  color: ${({ theme }) => theme.tagColor};
  padding: 8px 16px;
  border-radius: 20px;
  font-weight: 500;
  box-shadow: 0 4px 8px ${({ theme }) => theme.shadowColor};
  cursor: pointer;
  user-select: none;
  z-index: ${props => props.$zIndex || 1};
  
  &:hover {
    background-color: ${({ theme }) => theme.accentColor};
    color: white;
  }
`;

const SkillsCloud = () => {
  const skills = [
    "JavaScript", "React", "Node.js", "TypeScript", "HTML5", "CSS3",
    "Angular", "Express", "MongoDB", "MySQL", "Git", "GitHub",
    "Firebase", "Bootstrap", "Tailwind CSS", "Python", "Java", "REST API",
    "Redux", "Webpack", "Docker", "AWS", "UI/UX", "Responsive Design"
  ];
  
  // Generate random positions for each skill
  const skillPositions = skills.map((skill, index) => {
    const size = skill.length > 8 ? 'large' : skill.length > 5 ? 'medium' : 'small';
    
    return {
      name: skill,
      x: Math.random() * 80 + 10, // 10% to 90% of container width
      y: Math.random() * 80 + 10, // 10% to 90% of container height
      size,
      duration: Math.random() * 20 + 20,
      delay: index * 0.2,
      zIndex: Math.floor(Math.random() * 3) + 1
    };
  });
  
  return (
    <SkillsCloudContainer>
      {skillPositions.map((skill, index) => (
        <SkillTag
          key={index}
          style={{
            left: `${skill.x}%`,
            top: `${skill.y}%`,
            fontSize: skill.size === 'large' ? '18px' : skill.size === 'medium' ? '16px' : '14px',
          }}
          $zIndex={skill.zIndex}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: skill.delay }}
          whileHover={{ scale: 1.2, rotate: [-5, 5, 0] }}
          drag
          dragConstraints={{
            top: -50,
            left: -50,
            right: 50,
            bottom: 50,
          }}
        >
          {skill.name}
        </SkillTag>
      ))}
    </SkillsCloudContainer>
  );
};

export default SkillsCloud;