import React from 'react';
import "./inputText.css"

interface InputTextProps {
    id: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputText: React.FC<InputTextProps> = ({ id, name, value, onChange }) => {
  return (
    <input
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className="inputText"
  />
  );
}

export default InputText;
