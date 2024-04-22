import SignupMenu from "@/components/SignupMenu/SignupMenu";
import Container from "@/components/ContainerAuth/ContainerAuth";
import SigninForm from "@/components/SigninForm/SigninForm";
import "./signin.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SignupPage() {
  return (
    <>
      <body style={{ backgroundColor: "#121214" }}>
        <ToastContainer />
        <div className="signin">
          <SignupMenu></SignupMenu>
          <Container>
            <SigninForm></SigninForm>
          </Container>
        </div>
      </body>
    </>
  );
}
