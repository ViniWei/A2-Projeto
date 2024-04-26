"use client";
import Container from "@/components/ContainerAuth/ContainerAuth";
import SigninForm from "@/components/SigninForm/SigninForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function SignupPage() {
  return (
    <>
      <body className={inter.className} style={{ backgroundColor: "#121214" }}>
        <ToastContainer />
        <div
          className="signin"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "400px",
            margin: "0 auto",
            marginTop: "180px",
          }}
        >
          <Container>
            <SigninForm></SigninForm>
          </Container>
        </div>
      </body>
    </>
  );
}
