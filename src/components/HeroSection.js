import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroContainer = styled.section`
  height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.body};
`;

const ParticleContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const Particle = styled(motion.div)`
  position: absolute;
  background-color: ${({ theme }) => theme.accentColor};
  border-radius: 50%;
  opacity: 0.6;
`;

const HeroContent = styled(motion.div)`
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 0 20px;
  max-width: 800px;
`;

const HeroTitle = styled(motion.h1)`
  font-size: 4rem;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.accentColor};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.5rem;
  margin-bottom: 30px;
  color: ${({ theme }) => theme.text};
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const FloatingText = styled(motion.div)`
  position: absolute;
  font-weight: bold;
  color: ${({ theme }) => theme.accentColor};
  opacity: 0.7;
  font-size: 1.2rem;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  z-index: 1;
`;

const ScrollDownIndicator = styled(motion.div)`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.text};
  font-size: 0.9rem;
  
  &::after {
    content: '';
    width: 20px;
    height: 20px;
    margin-top: 8px;
    border-right: 2px solid ${({ theme }) => theme.text};
    border-bottom: 2px solid ${({ theme }) => theme.text};
    transform: rotate(45deg);
  }
`;

const HeroSection = () => {
  // Generate random particles
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 15 + 5,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10
  }));
  
  // Floating text items
  const floatingTexts = [
    { text: "Full Stack Developer", x: 20, y: 30 },
    { text: "UI/UX Designer", x: 70, y: 60 },
    { text: "Problem Solver", x: 15, y: 70 },
    { text: "React", x: 80, y: 25 },
    { text: "Node.js", x: 60, y: 80 }
  ];

  return (
    <HeroContainer id="hero">
      <ParticleContainer>
        {particles.map(particle => (
          <Particle
            key={particle.id}
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.x}%`,
              top: `${particle.y}%`
            }}
            animate={{
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </ParticleContainer>
      
      {floatingTexts.map((item, index) => (
        <FloatingText
          key={index}
          style={{ left: `${item.x}%`, top: `${item.y}%` }}
          animate={{
            y: [0, -15, 0],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 3 + index,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {item.text}
        </FloatingText>
      ))}
      
      <HeroContent>
        <HeroTitle
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Aditya
        </HeroTitle>
        <HeroSubtitle
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          B.Tech CSE Student at MIT ADT | Full Stack Developer | Digital Innovator
        </HeroSubtitle>
      </HeroContent>
      
      <ScrollDownIndicator
        animate={{
          y: [0, 10, 0],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          y: {
            repeat: Infinity,
            duration: 1.5,
            ease: "easeInOut",
          },
          opacity: {
            repeat: Infinity,
            duration: 1.5,
            ease: "easeInOut",
          },
        }}
      >
        Scroll Down
      </ScrollDownIndicator>
    </HeroContainer>
  );
};

export default HeroSection;