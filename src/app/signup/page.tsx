import Container from "@/components/ContainerAuth/ContainerAuth"
import SignupForm from "@/components/SignupForm/SignupForm"
import SignupMenu from "@/components/SignupMenu/SignupMenu"
import "./signup.css"

export default function SignupPage(){
    return <>
        <body style={{backgroundColor: "#121214"}}>
            <div className="signup">
                <SignupMenu></SignupMenu> 
                <Container>
                    <SignupForm></SignupForm>
                </Container>
            </div>
        </body>
    </>
}