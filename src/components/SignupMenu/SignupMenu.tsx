"use client";
import React from "react";
import { useRouter } from "next/router";
import "./signupMenu.css";
import Link from "next/link";

const SignupMenu: React.FC = () => {
  return (
    <div className="signupMenu">
      <h2>Cadastro</h2>
      <Link href="/" passHref>
        <button className="buttonReturn">Voltar</button>
      </Link>
    </div>
  );
};

export default SignupMenu;
