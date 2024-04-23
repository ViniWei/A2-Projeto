"use client"
import SignupMenu from "@/components/SignupMenu/SignupMenu";
import Container from "@/components/ContainerAuth/ContainerAuth";
import SigninForm from "@/components/SigninForm/SigninForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SignupPage() {
  return (
    <>
      <body style={{ backgroundColor: "#121214" }}>
        <ToastContainer />
        <div className="signin" style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '400px',
          margin: '0 auto',
          marginTop: '180px'
        }}>
          <Container>
            <SigninForm></SigninForm>
          </Container>
        </div>
      </body>
    </>
  );
}
