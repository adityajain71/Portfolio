import React, { useContext } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaTools } from 'react-icons/fa';
import { ThemeContext } from 'styled-components';
import SectionTitle from './SectionTitle';
import SkillsCloud from './SkillsCloud';

const SkillsSection = styled.section`
  padding: 40px 0;
`;

const SkillsContainer = styled.div`
  background-color: ${({ theme }) => theme.cardBg};
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 8px;
  padding: 30px;
  box-shadow: 0 4px 12px ${({ theme }) => theme.shadowColor};
`;

const SkillsIntro = styled.p`
  text-align: center;
  margin-bottom: 30px;
  font-size: 18px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 40px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SkillCategory = styled(motion.div)`
  margin-bottom: 20px;
`;

const CategoryTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 16px;
  color: ${({ theme }) => theme.accentColor};
  border-bottom: 2px solid ${({ theme }) => theme.borderColor};
  padding-bottom: 8px;
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const SkillItem = styled(motion.div)`
  background-color: ${({ theme }) => theme.tagBg};
  color: ${({ theme }) => theme.tagColor};
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: transform 0.2s, box-shadow 0.2s;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px ${({ theme }) => theme.shadowColor};
  }
`;

const skillsData = {
  languages: [
    { name: 'JavaScript', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'HTML5', level: 95 },
    { name: 'CSS3', level: 90 },
    { name: 'Python', level: 80 },
    { name: 'Java', level: 75 }
  ],
  frameworks: [
    { name: 'React', level: 85 },
    { name: 'Angular', level: 80 },
    { name: 'Node.js', level: 85 },
    { name: 'Express', level: 80 },
    { name: 'Bootstrap', level: 90 },
    { name: 'Tailwind CSS', level: 85 }
  ],
  tools: [
    { name: 'Git', level: 85 },
    { name: 'GitHub', level: 90 },
    { name: 'VS Code', level: 95 },
    { name: 'MySQL', level: 80 },
    { name: 'MongoDB', level: 75 },
    { name: 'Firebase', level: 80 },
    { name: 'Docker', level: 70 }
  ]
};

const Skills = () => {
  const theme = useContext(ThemeContext);
  const themeMode = theme.body === '#ffffff' ? 'light' : 'dark';
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  
  return (
    <SkillsSection id="skills">
      <div className="container">
        <SectionTitle icon={<FaTools />} title="Skills" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SkillsContainer>
            <SkillsIntro>
              Here's an interactive visualization of my technical skills. Explore the 3D cloud to see the technologies I work with.
            </SkillsIntro>
            
            {/* 3D Skills Cloud */}
            <SkillsCloud theme={themeMode} />
            
            <SkillsGrid>
              {/* Languages */}
              <SkillCategory>
                <CategoryTitle>Languages</CategoryTitle>
                <SkillsList as={motion.div} variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  {skillsData.languages.map((skill, index) => (
                    <SkillItem key={index} variants={itemVariants}>
                      {skill.name}
                    </SkillItem>
                  ))}
                </SkillsList>
              </SkillCategory>
              
              {/* Frameworks & Libraries */}
              <SkillCategory>
                <CategoryTitle>Frameworks & Libraries</CategoryTitle>
                <SkillsList as={motion.div} variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  {skillsData.frameworks.map((skill, index) => (
                    <SkillItem key={index} variants={itemVariants}>
                      {skill.name}
                    </SkillItem>
                  ))}
                </SkillsList>
              </SkillCategory>
              
              {/* Tools & Technologies */}
              <SkillCategory>
                <CategoryTitle>Tools & Technologies</CategoryTitle>
                <SkillsList as={motion.div} variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  {skillsData.tools.map((skill, index) => (
                    <SkillItem key={index} variants={itemVariants}>
                      {skill.name}
                    </SkillItem>
                  ))}
                </SkillsList>
              </SkillCategory>
            </SkillsGrid>
          </SkillsContainer>
        </motion.div>
      </div>
    </SkillsSection>
  );
};

export default Skills;