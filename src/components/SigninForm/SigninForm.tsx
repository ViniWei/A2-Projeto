"use client"
import React from 'react';
import "./signinForm.css";
import InputText from '../InputText/InputText';
import Button from '../Button/Button';
import { toast } from 'react-toastify';

const SigninForm: React.FC = () => {
    const [formData, setFormData] = React.useState({
      email: '',
      senha: '',
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
        [name]: value,
      });
    };
  
    const handleSubmit = () => {
      const savedData = JSON.parse(localStorage.getItem('formData') || '[]');

      const user = savedData.find((element: any) => {
        return element.email === formData.email && element.senha === formData.senha;
      });
    
      if (user) {
        toast.success('Login realizado com sucesso!');
      } else {
        toast.error('Usuário não encontrado!');
      }


      setFormData({
        email: '',
        senha: '',
      });
    };
  
    return (
      <div className="signinForm">
        <label htmlFor="email">Email</label>
        <InputText placeholder="Digite o seu email" id="email" name="email" value={formData.email} onChange={handleChange} />
  
        <label htmlFor="senha">Senha</label>
        <InputText placeholder="Digite sua senha" id="senha" name="senha" value={formData.senha} onChange={handleChange} />
  
        <Button onClick={handleSubmit} text='Entrar' />

        <Button onClick={handleSubmit} text='Cadastro' />
  
      </div>
    );
  };

export default SigninForm;