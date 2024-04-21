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

  React.useEffect(() => {
    const storedData = localStorage.getItem('formData');
    if (storedData) {
      setFormData(JSON.parse(storedData));
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = () => {
    const savedData = JSON.parse(localStorage.getItem('formData') || '[]');
    const newData = Array.isArray(savedData) ? [...savedData, formData] : [formData];
    localStorage.setItem('formData', JSON.stringify(newData));
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

      <Button onClick={handleSubmit} text='Cadastrar' />
    </div>
  );
};

export default SignupForm;