import React from 'react';

interface ButtonProps {
  text: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button
      className="border border-black rounded-lg mb-8 max-w-full w-36 h-11 bg-primary-color text-secondary-color no-underline cursor-pointer"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;