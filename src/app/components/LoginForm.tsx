import React from 'react';
import useInput from '../hooks/useInput';
import CustomButton from './CustomButton';
import CustomInput from './CustomInput';

const LoginForm: React.FC = () => {
  const username = useInput('');
  const password = useInput('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitting...', username.value, password.value);
    // Aqui você pode adicionar lógica de autenticação
  };

  return (
    <form onSubmit={handleSubmit}>
      <CustomInput label="Username" value={username.value} onChange={username.onChange} />
      <CustomInput label="Password" value={password.value} onChange={password.onChange} />
      <CustomButton type="submit" onClick={function (): void {
              throw new Error('Function not implemented.');
          } }>Login</CustomButton>
    </form>
  );
};

export default LoginForm;