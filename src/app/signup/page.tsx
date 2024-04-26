import Container from "@/components/ContainerAuth/ContainerAuth";
import SignupForm from "@/components/SignupForm/SignupForm";
import SignupMenu from "@/components/SignupMenu/SignupMenu";
import "./signup.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function SignupPage() {
  return (
    <>
      <body className={inter.className} style={{ backgroundColor: "#121214" }}>
        <ToastContainer />
        <div className="signup">
          <SignupMenu></SignupMenu>
          <Container>
            <SignupForm></SignupForm>
          </Container>
        </div>
      </body>
    </>
  );
}
