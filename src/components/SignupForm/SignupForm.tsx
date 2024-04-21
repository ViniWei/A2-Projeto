"use client"
import React from 'react';
import "./signupForm.css";
import InputText from '../InputText/InputText';

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
      <InputText id="nome" name="nome" value={formData.nome} onChange={handleChange} />

      <label htmlFor="email">Email</label>
      <InputText id="email" name="email" value={formData.email} onChange={handleChange} />

      <label htmlFor="senha">Senha</label>
      <InputText id="senha" name="senha" value={formData.senha} onChange={handleChange} />

      <label htmlFor="bio">Bio</label>
      <textarea id="bio" name="bio" value={formData.bio} onChange={handleChange} />

      <button onClick={handleSubmit}>Cadastrar</button>
    </div>
  );
};

export default SignupForm;