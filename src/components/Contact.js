import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa';
import SectionTitle from './SectionTitle';
import emailjs from '@emailjs/browser';

const ContactSection = styled.section`
  padding: 40px 0;
`;

const ContactContainer = styled.div`
  background-color: ${({ theme }) => theme.cardBg};
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 8px;
  padding: 30px;
  box-shadow: 0 4px 12px ${({ theme }) => theme.shadowColor};
`;

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div``;

const ContactHeading = styled.h3`
  font-size: 22px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.accentColor};
`;

const ContactText = styled.p`
  margin-bottom: 24px;
  line-height: 1.7;
`;

const SocialLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.headerBg};
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  transition: all 0.3s ease;
  border: 1px solid ${({ theme }) => theme.borderColor};
  
  &:hover {
    background-color: ${({ theme }) => theme.accentColor};
    color: white;
    transform: translateX(5px);
  }
  
  svg {
    font-size: 20px;
  }
`;

const ContactForm = styled.form``;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  background-color: ${({ theme }) => theme.headerBg};
  color: ${({ theme }) => theme.text};
  font-size: 16px;
  transition: border-color 0.3s;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.accentColor};
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px 16px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  background-color: ${({ theme }) => theme.headerBg};
  color: ${({ theme }) => theme.text};
  font-size: 16px;
  resize: vertical;
  min-height: 150px;
  transition: border-color 0.3s;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.accentColor};
  }
`;

const SubmitButton = styled(motion.button)`
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
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: ${({ theme }) => theme.theme === 'light' ? '#0256b9' : '#2188ff'};
  }
  
  &:disabled {
    background-color: ${({ theme }) => theme.borderColor};
    cursor: not-allowed;
  }
`;

const SuccessMessage = styled(motion.div)`
  padding: 16px;
  background-color: #28a7452a;
  color: #28a745;
  border-radius: 6px;
  margin-top: 20px;
  text-align: center;
`;

const ErrorMessage = styled(motion.div)`
  padding: 16px;
  background-color: #dc35452a;
  color: #dc3545;
  border-radius: 6px;
  margin-top: 20px;
  text-align: center;
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    // EmailJS configuration
    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
    
    // Check if all required env variables are present
    if (!serviceID || !templateID || !publicKey) {
      setError('EmailJS configuration is missing. Please check your environment variables.');
      setIsSubmitting(false);
      return;
    }
    
    // Use the simplest possible template parameters
    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };
    
    console.log('Sending email with params:', templateParams);
    console.log('Service ID:', serviceID);
    console.log('Template ID:', templateID);
    
    try {
      const result = await emailjs.send(serviceID, templateID, templateParams, publicKey);
      console.log('EmailJS Success:', result);
      
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error('EmailJS Error Details:', error);
      
      let errorMessage = 'Failed to send message. Please try again later.';
      
      if (error.status === 412) {
        errorMessage = 'Email service authentication failed. Please check your EmailJS service configuration.';
      } else if (error.status === 422) {
        errorMessage = 'Email template configuration error. Please check your EmailJS template settings.';
      } else if (error.status === 400) {
        errorMessage = 'Invalid email data. Please check your input and try again.';
      } else if (error.status === 403) {
        errorMessage = 'EmailJS service access denied. Please check your API keys.';
      }
      
      setError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <ContactSection id="contact">
      <div className="container">
        <SectionTitle icon={<FaEnvelope />} title="Contact Me" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <ContactContainer>
            <ContactContent>
              <ContactInfo>
                <ContactHeading>Get In Touch</ContactHeading>
                <ContactText>
                  Feel free to reach out to me for opportunities, collaborations, or just to say hello! I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </ContactText>
                
                <SocialLinks>
                  <SocialLink href="mailto:adityapradipjain205@gmail.com">
                    <FaEnvelope /> adityapradipjain205@gmail.com
                  </SocialLink>
                  <SocialLink href="https://linkedin.com/in/aditya-jain-07357328b/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin /> LinkedIn
                  </SocialLink>
                  <SocialLink href="https://github.com/adityajain71" target="_blank" rel="noopener noreferrer">
                    <FaGithub /> GitHub
                  </SocialLink>
                </SocialLinks>
              </ContactInfo>
              
              <ContactForm onSubmit={handleSubmit}>
                <FormGroup>
                  <Label htmlFor="name">Name</Label>
                  <Input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                  />
                </FormGroup>
                
                <FormGroup>
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                  />
                </FormGroup>
                
                <FormGroup>
                  <Label htmlFor="message">Message</Label>
                  <TextArea 
                    id="message" 
                    name="message" 
                    value={formData.message}
                    onChange={handleChange}
                    required 
                  />
                </FormGroup>
                
                <SubmitButton 
                  type="submit" 
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isSubmitting ? 'Sending...' : (
                    <>
                      <FaPaperPlane /> Send Message
                    </>
                  )}
                </SubmitButton>
                
                {isSubmitted && (
                  <SuccessMessage
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                  >
                    Thank you! Your message has been sent successfully.
                  </SuccessMessage>
                )}
                
                {error && (
                  <ErrorMessage
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                  >
                    {error}
                  </ErrorMessage>
                )}
              </ContactForm>
            </ContactContent>
          </ContactContainer>
        </motion.div>
      </div>
    </ContactSection>
  );
};

export default Contact;