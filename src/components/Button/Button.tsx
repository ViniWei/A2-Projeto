import React from 'react';
import { StyledButton } from './style';

interface ButtonProps {
    text: string;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick  }) => {
  return (
    <StyledButton className="button" onClick={onClick} >
        {text}
    </StyledButton>
  );
}

export default Button;
