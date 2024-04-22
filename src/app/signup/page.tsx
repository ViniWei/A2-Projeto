import Container from "@/components/ContainerAuth/ContainerAuth"
import SignupForm from "@/components/SignupForm/SignupForm"
import SignupMenu from "@/components/SignupMenu/SignupMenu"
import "./signup.css"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function SignupPage(){

    return <>
        <body style={{backgroundColor: "#121214"}}>
            <ToastContainer />
            <div className="signup">
                <SignupMenu></SignupMenu> 
                <Container>
                    <SignupForm></SignupForm>
                </Container>
            </div>
        </body>
    </>
}