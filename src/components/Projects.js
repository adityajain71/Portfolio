import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaCodeBranch } from 'react-icons/fa';
import SectionTitle from './SectionTitle';
import ProjectCard from './ProjectCard';
import artisnetImage from '../assets/images/bae554ab61f847e4a06211dc9e7fd0f5.jpg';
import { frutikaImage } from '../assets/images';

const ProjectsSection = styled.section`
  padding: 40px 0;
  
  @media (max-width: 768px) {
    padding: 30px 0;
  }
  
  @media (max-width: 480px) {
    padding: 20px 0;
  }
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 25px;
  }
  
  @media (max-width: 480px) {
    gap: 20px;
  }
`;

const projectsData = [
  {
    id: 1,
    title: 'Artisnet',
    description: 'A full-stack artisan marketplace website built using Angular CLI (frontend) and Node.js + MySQL (backend). Features artisan/customer login, role-based access, product listing, image uploads, and cart functionality.',
    extendedDescription: 'Artisnet connects local artisans with customers looking for handcrafted products. The platform features secure authentication, product management, shopping cart, and order processing.',
    image: artisnetImage,
    github: '#',
    demo: '#',
    tech: ['Angular', 'Node.js', 'MySQL', 'Express', 'JWT']
  },
  {
    id: 2,
    title: 'WhatsApp Chatbot',
    description: 'Developed an AI-powered WhatsApp chatbot that provides automated customer support, appointment scheduling, and personalized recommendations using natural language processing.',
    extendedDescription: 'This WhatsApp chatbot integrates with business systems to provide real-time information, handle customer inquiries, and streamline communication processes through an intuitive conversational interface.',
    image: "https://via.placeholder.com/600x400/2188ff/ffffff?text=WhatsApp+Chatbot",
    github: '#',
    demo: '#',
    tech: ['Node.js', 'WhatsApp API', 'NLP', 'AI', 'MongoDB']
  },
  {
    id: 3,
    title: 'Fruitika Export Business',
    description: 'Built the branding, website, and logistics plan for a sweet lime export business. Includes packaging mockups, domain setup (getfruitika.com), and a detailed market plan for scaling.',
    extendedDescription: 'Fruitika is a comprehensive business solution for sweet lime exports, featuring brand identity, e-commerce website, and logistics planning for international distribution.',
    image: frutikaImage, // Now using your actual image!
    github: '#',
    demo: 'https://getfruitika.me',
    tech: ['Web Design', 'Branding', 'Business Planning', 'E-commerce']
  }
];

const Projects = () => {
  return (
    <ProjectsSection id="projects">
      <div className="container">
        <SectionTitle icon={<FaCodeBranch />} title="Projects" />
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <ProjectGrid>
            {projectsData.map((project, index) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </ProjectGrid>
        </motion.div>
      </div>
    </ProjectsSection>
  );
};

export default Projects;