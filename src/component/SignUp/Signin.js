import React, {useState} from 'react'
import styled from 'styled-components'
import {useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../Base/Base'

const Signin = () => {
    const navigate = useNavigate();
    const [email, setEmail] =  useState("")
    const [password, setPassword] =  useState("")

    const authUser = async () => {
		await signInWithEmailAndPassword(auth, email, password);

		setEmail("");
		setPassword("");

		navigate("/dashboard");
	};
  return (
    <Container>
        <Wrapper>
            <Card>
                <Cardwrap>
                    <Email  placeholder='Email'
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}/>
                    <Password placeholder='password'
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}/>
                 
                  <Button onClick={authUser}>
                        Login
                    </Button>
                   
                </Cardwrap>
            </Card>
        </Wrapper>
    </Container>
  )
}

export default Signin

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
`
const Wrapper=  styled.div`
display: flex;
justify-content: center;
align-items: center;


`
const Card = styled.div`
background: blue;
width: 400px;
padding: 20px;
display: flex;
justify-content: center;
align-items: center;

`
const Cardwrap = styled.div`
display: flex;
flex-direction: column;

`
const Email =  styled.input`
width: 300px;
`
const Password =  styled.input`
width: 300px;

`
const Button =  styled.button`

`