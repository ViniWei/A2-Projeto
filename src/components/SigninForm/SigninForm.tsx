"use client";
import React, { useEffect, useState } from "react";
import InputText from "../InputText/InputText";
import Button from "../Button/Button";
import { toast } from "react-toastify";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { StyledContainerDiv, StyledForm, StyledLabel } from "./style";
import { useUserStore } from "@/Stores/users";

const SigninForm: React.FC = () => {
  const router = useRouter();

  const { users }: any = useUserStore();

  const [formData, setFormData] = useState({
    email: "",
    senha: "",
  });

  useEffect(() => {
    localStorage.clear();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    const usersStore = users

    const user = usersStore.find((element: any) => {
      return (
        element.email === formData.email && element.senha === formData.senha
      );
    });

    const userString = JSON.stringify(user);
    localStorage.setItem('user', userString);

    if (user) {
      toast.success("Login realizado com sucesso!", {
        autoClose: 1800,
      });

      setTimeout(() => {
        router.push("/home");
      }, 2000);
    } else {
      toast.error("Usuário não encontrado!");
    }

    setFormData({
      email: "",
      senha: "",
    });
  };

  return (
    <StyledForm className="signinForm">
      <h3>Login</h3>

      <StyledContainerDiv className="containerDiv">
        <StyledLabel htmlFor="email">Email</StyledLabel>
        <InputText
          placeholder="Digite o seu email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </StyledContainerDiv>

      <StyledContainerDiv className="containerDiv">
        <StyledLabel htmlFor="senha">Senha</StyledLabel>
        <InputText
          placeholder="Digite sua senha"
          id="senha"
          name="senha"
          value={formData.senha}
          onChange={handleChange}
        />
      </StyledContainerDiv>

      <Button onClick={handleSubmit} text="Entrar" />

      <Link
        href="/signup"
        passHref
        style={{ textDecoration: "none", color: "white" }}
      >
        Ainda não possui uma conta?
      </Link>

      <Link href="/signup" passHref style={{ width: "100%" }}>
        <Button text="Cadastre-se" />
        {/* <button style={{backgroundColor: "#59323f", width: "101%", marginTop: "20px", marginBottom: "20px"}} >Cadastre-se</button> */}
      </Link>
    </StyledForm>
  );
};

export default SigninForm;
