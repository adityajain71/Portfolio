import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ImageContainer = styled.div`
  width: ${props => props.size || '200px'};
  height: ${props => props.size || '200px'};
  border-radius: 50%;
  border: 3px solid ${({ theme }) => theme.accentColor};
  box-shadow: 0 4px 12px ${({ theme }) => theme.shadowColor};
  overflow: hidden;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
`;

const ProfileImageCircle = ({ src, alt, size, ...props }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
      {...props}
    >
      <ImageContainer size={size}>
        <Image src={src} alt={alt} />
      </ImageContainer>
    </motion.div>
  );
};

export default ProfileImageCircle;