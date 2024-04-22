"use client"
import React from 'react';
import { useRouter } from 'next/router';
import "./signupMenu.css"
import Link from 'next/link';

const SignupMenu: React.FC= () => {


  return (
    <div className="signupMenu">
        <h2>Nome Proj</h2>
        <Link href="/signin" passHref>
          <button>Voltar</button>
        </Link>
    </div>
  );
}

export default SignupMenu;
