import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/themes';
import { GlobalStyles } from './styles/globalStyles';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import styled from 'styled-components';

// Cursor follower
const Cursor = styled.div`
  width: 20px;
  height: 20px;
  border: 2px solid ${({ theme }) => theme.accentColor};
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  transform: translate(-50%, -50%);
  z-index: 9999;
  transition: transform 0.1s ease;
  opacity: 0.7;
  
  &::after {
    content: '';
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.accentColor};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  
  @media (max-width: 768px) {
    display: none;
  }
`;

function App() {
  const [theme, setTheme] = useState('light');
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorScale, setCursorScale] = useState(1);
  
  // Check for saved theme preference or use preferred color scheme
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setTheme('dark');
    }
  }, []);
  
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };
  
  // Custom cursor effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleMouseDown = () => {
      setCursorScale(0.8);
    };
    
    const handleMouseUp = () => {
      setCursorScale(1);
    };
    
    const handleMouseEnter = (e) => {
      if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || 
          e.target.closest('a') || e.target.closest('button')) {
        setCursorScale(1.5);
      }
    };
    
    const handleMouseLeave = () => {
      setCursorScale(1);
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      
      document.querySelectorAll('a, button').forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);
  
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div className="app">
        <Cursor 
          style={{ 
            left: `${cursorPosition.x}px`, 
            top: `${cursorPosition.y}px`,
            transform: `translate(-50%, -50%) scale(${cursorScale})`
          }} 
        />
        <Header theme={theme} toggleTheme={toggleTheme} />
        <HeroSection />
        <main>
          <About />
          <Projects />
          <Skills />
          <Resume />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;