"use client";
import React from "react";
import "./signupForm.css";
import InputText from "../InputText/InputText";
import Button from "../Button/Button";
import { toast } from "react-toastify";
import { useRouter } from 'next/navigation';
import {useUserStore} from "@/Stores/users";

const SignupForm: React.FC = () => {

  const { addUser }: any = useUserStore();

  const router = useRouter()

  const [formData, setFormData] = React.useState({
    nome: "",
    email: "",
    senha: "",
    bio: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (
      !formData.nome ||
      !formData.email ||
      !formData.senha ||
      formData.nome.trim() === "" ||
      formData.email.trim() === "" ||
      formData.senha.trim() === ""
    ) {
      toast.error("Os campos nome, email e senha devem estar preenchidos.");
      return;
    }

    addUser(formData)

    setFormData({
      nome: "",
      email: "",
      senha: "",
      bio: "",
    });
    toast.success("Cadastro realizado com sucesso!", {
      autoClose: 1800
    });

    setTimeout(() => {
      router.push("/signin")
    }, 1800)
  };

  return (
    <div className="signupForm">
      <label htmlFor="nome">
        Nome<span>*</span>
      </label>
      <InputText
        placeholder="Digite o seu nome"
        id="nome"
        name="nome"
        value={formData.nome}
        onChange={handleChange}
      />

      <label htmlFor="email">
        Email<span>*</span>
      </label>
      <InputText
        placeholder="Digite o seu email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />

      <label htmlFor="senha">
        Senha<span>*</span>
      </label>
      <InputText
        placeholder="Digite sua senha"
        id="senha"
        name="senha"
        value={formData.senha}
        onChange={handleChange}
      />

      <label htmlFor="bio">Bio</label>
      <textarea
        id="bio"
        name="bio"
        value={formData.bio}
        onChange={handleChange}
      />

      <Button onClick={() => {
        handleSubmit()
      }} text="Cadastrar" />
    </div>
  );
};

export default SignupForm;
