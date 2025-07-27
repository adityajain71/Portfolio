import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const TitleContainer = styled.div`
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  gap: 12px;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.accentColor};
  color: white;
  font-size: 18px;
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 60px;
    height: 3px;
    background-color: ${({ theme }) => theme.accentColor};
  }
`;

const SectionTitle = ({ icon, title }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <TitleContainer>
        <IconWrapper>{icon}</IconWrapper>
        <Title>{title}</Title>
      </TitleContainer>
    </motion.div>
  );
};

export default SectionTitle;