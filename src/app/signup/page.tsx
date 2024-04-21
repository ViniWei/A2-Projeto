import Container from "@/components/ContainerAuth/ContainerAuth"
import Signup from "@/components/Signup/Signup"

export default function SignupPage(){
    return <>
        <body style={{backgroundColor: "#121214"}}>
            <div className="signup">
                <Signup></Signup> 
                <Container></Container>
            </div>
        </body>
    </>
}