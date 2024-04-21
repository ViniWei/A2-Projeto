"use client"
import React from 'react';
import "./signupForm.css";
import InputText from '../InputText/InputText';
import Button from '../Button/Button';

const SignupForm: React.FC = () => {

  const [formData, setFormData] = React.useState({
    nome: '',
    email: '',
    senha: '',
    bio: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = () => {
    localStorage.setItem('formData', JSON.stringify(formData));
    // Limpar os campos após salvar, se necessário
    setFormData({
      nome: '',
      email: '',
      senha: '',
      bio: ''
    });
  };

  return (
    <div className="signupForm">
      <label htmlFor="nome">Nome</label>
      <InputText placeholder="Digite o seu nome" id="nome" name="nome" value={formData.nome} onChange={handleChange} />

      <label htmlFor="email">Email</label>
      <InputText placeholder="Digite o seu email" id="email" name="email" value={formData.email} onChange={handleChange} />

      <label htmlFor="senha">Senha</label>
      <InputText placeholder="Digite sua senha" id="senha" name="senha" value={formData.senha} onChange={handleChange} />

      <label htmlFor="bio">Bio</label>
      <textarea id="bio" name="bio" value={formData.bio} onChange={handleChange} />

      <Button  text='Cadastrar' />
    </div>
  );
};

export default SignupForm;