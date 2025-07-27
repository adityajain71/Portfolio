import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaFileAlt, FaDownload } from 'react-icons/fa';
import SectionTitle from './SectionTitle';
import resumePdf from "../assets/images/Aditya's Resume.pdf";

const ResumeSection = styled.section`
  padding: 40px 0;
`;

const ResumeContainer = styled.div`
  background-color: ${({ theme }) => theme.cardBg};
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 8px;
  padding: 40px;
  text-align: center;
  box-shadow: 0 4px 12px ${({ theme }) => theme.shadowColor};
`;

const ResumeDescription = styled.p`
  font-size: 18px;
  max-width: 600px;
  margin: 0 auto 30px;
  color: ${({ theme }) => theme.text};
`;

const DownloadButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background-color: ${({ theme }) => theme.accentColor};
  color: white;
  padding: 12px 24px;
  border-radius: 6px;
  font-weight: 600;
  font-size: 16px;
  text-decoration: none;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: ${({ theme }) => theme.theme === 'light' ? '#0256b9' : '#2188ff'};
    text-decoration: none;
    color: white;
  }
  
  svg {
    font-size: 18px;
  }
`;



const Resume = () => {
  return (
    <ResumeSection id="resume">
      <div className="container">
        <SectionTitle icon={<FaFileAlt />} title="Resume" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <ResumeContainer>
            <ResumeDescription>
              View or download my resume to learn more about my education, experience, and qualifications.
            </ResumeDescription>
            
            <DownloadButton 
              href={resumePdf} 
              target="_blank"
              rel="noopener noreferrer"
              download="Aditya_Resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDownload /> Download Resume
            </DownloadButton>
          </ResumeContainer>
        </motion.div>
      </div>
    </ResumeSection>
  );
};

export default Resume;