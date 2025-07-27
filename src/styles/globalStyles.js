import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    line-height: 1.6;
    transition: background-color 0.3s, color 0.3s;
    overflow-x: hidden; /* Prevent horizontal scroll */
  }
  
  .app {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    
    @media (max-width: 768px) {
      padding: 0 16px;
    }
    
    @media (max-width: 480px) {
      padding: 0 12px;
    }
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    
    @media (max-width: 768px) {
      padding: 0 16px;
    }
    
    @media (max-width: 480px) {
      padding: 0 12px;
    }
  }
  
  main {
    padding: 20px 0;
    margin-top: 80px; /* Account for fixed header */
    
    @media (max-width: 768px) {
      margin-top: 70px;
      padding: 16px 0;
    }
    
    @media (max-width: 480px) {
      margin-top: 60px;
      padding: 12px 0;
    }
  }
  
  section {
    margin: 60px 0;
    
    @media (max-width: 768px) {
      margin: 40px 0;
    }
    
    @media (max-width: 480px) {
      margin: 30px 0;
    }
  }
  
  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 0.5em;
    
    @media (max-width: 768px) {
      line-height: 1.2;
    }
  }
  
  h1 {
    font-size: 2.5rem;
    
    @media (max-width: 768px) {
      font-size: 2rem;
    }
    
    @media (max-width: 480px) {
      font-size: 1.75rem;
    }
  }
  
  h2 {
    font-size: 2rem;
    
    @media (max-width: 768px) {
      font-size: 1.75rem;
    }
    
    @media (max-width: 480px) {
      font-size: 1.5rem;
    }
  }
  
  h3 {
    font-size: 1.5rem;
    
    @media (max-width: 768px) {
      font-size: 1.25rem;
    }
    
    @media (max-width: 480px) {
      font-size: 1.125rem;
    }
  }
  
  p {
    margin-bottom: 1em;
    
    @media (max-width: 768px) {
      font-size: 0.95rem;
    }
    
    @media (max-width: 480px) {
      font-size: 0.9rem;
    }
  }
  
  a {
    color: ${({ theme }) => theme.accentColor};
    text-decoration: none;
    transition: color 0.3s;
    
    &:hover {
      text-decoration: underline;
    }
  }
  
  button {
    cursor: pointer;
    font-family: inherit;
    
    @media (max-width: 480px) {
      font-size: 0.9rem;
    }
  }
  
  img {
    max-width: 100%;
    height: auto;
  }
  
  /* Scrollbar styling */
  ::-webkit-scrollbar {
    width: 8px;
    
    @media (max-width: 768px) {
      width: 6px;
    }
  }
  
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.body};
  }
  
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.borderColor};
    border-radius: 4px;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.secondaryColor};
  }
  
  /* Mobile-specific utilities */
  @media (max-width: 768px) {
    .desktop-only {
      display: none !important;
    }
  }
  
  .mobile-only {
    display: none;
    
    @media (max-width: 768px) {
      display: block;
    }
  }
  
  /* Touch-friendly tap targets */
  @media (max-width: 768px) {
    button, a, [role="button"] {
      min-height: 44px;
      min-width: 44px;
    }
  }
`;