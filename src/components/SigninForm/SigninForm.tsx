"use client"
import React, { useEffect, useState } from 'react';
import InputText from '../InputText/InputText';
import Button from '../Button/Button';
import { toast } from 'react-toastify';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { StyledContainerDiv, StyledForm, StyledLabel } from './style';

const SigninForm: React.FC = () => {

  const router = useRouter()

  const [formData, setFormData] = useState({
    email: '',
    senha: '',
  });

  useEffect(() => {
    const storedData = localStorage.getItem('formData');
    if (storedData) {
      setFormData(JSON.parse(storedData));
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    const savedData = JSON.parse(localStorage.getItem('formData') || '[]');

    const user = savedData.find((element: any) => {
      return element.email === formData.email && element.senha === formData.senha;
    });
  
    if (user) {
      toast.success('Login realizado com sucesso!', {
        autoClose: 1800
        
      });

      setTimeout(() => {
        router.push("/home")
      }, 2000)
    } else {
      toast.error('Usuário não encontrado!');
    }


    setFormData({
      email: '',
      senha: '',
    });
  };

  return (
    <StyledForm  className="signinForm">

      <h3>Login</h3>

      <StyledContainerDiv className='containerDiv'>
        <StyledLabel htmlFor="email">Email</StyledLabel>
        <InputText placeholder="Digite o seu email" id="email" name="email" value={formData.email} onChange={handleChange} />
      </StyledContainerDiv>

      <StyledContainerDiv className='containerDiv'>
        <StyledLabel htmlFor="senha">Senha</StyledLabel>
        <InputText placeholder="Digite sua senha" id="senha" name="senha" value={formData.senha} onChange={handleChange} />
      </StyledContainerDiv>

      <Button onClick={handleSubmit} text='Entrar' />
      
      <Link href="/signup" passHref style={{textDecoration: "none", color: "white"}}>
        Ainda não possui uma conta?
      </Link>

      <Link href="/signup" passHref style={{width: "100%"}}>
        <Button text='Cadastre-se' />
      </Link>

    </StyledForm >
  );
};

export default SigninForm;