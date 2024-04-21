import React from 'react';

interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
  type?: "button" | "submit" | "reset"; // Adicionei a propriedade type explicitamente
}

const CustomButton: React.FC<CustomButtonProps> = ({ onClick, children, ...rest }) => {
  return <button onClick={onClick} {...rest}>{children}</button>;
};

export default CustomButton;