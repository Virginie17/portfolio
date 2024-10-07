import React from 'react';

interface LinkProps {
  content: React.ReactNode;
}

const Link: React.FC<LinkProps> = ({ content }) => {
  return (
    <span>{content}</span>
  );
};

export default Link;