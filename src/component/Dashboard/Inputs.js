import React, {useState, useContext} from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import { addDoc, collection, doc, getDoc, setDoc } from "firebase/firestore";


import { serverTimestamp } from "firebase/firestore";
import {AuthContext} from "../Base/Auths"


import { db, storage, auth } from "../Base/Base";
import { useNavigate } from "react-router-dom";

const Inputs = () => {
    const { currentUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const [topic, setTopic] = useState("");
	const [msg, setMsg] = useState("");
    const postPost = async () => {
		const userData = doc(collection(db, "post"));
		await setDoc(userData, {
			msg,
			topic,
			createAt: serverTimestamp(),
			createBy: currentUser.uid,
		});

		setMsg("");
		setTopic("");
		navigate("/dashboard");
	};
  return (
    <Container>
        <Wrapper>
            <Card>
                <Cardwrap>

                </Cardwrap>
                <Topic/>
                <Text/>
      
              <Button onClick={postPost
            }>
                    submit
                </Button>
               
            </Card>
        </Wrapper>
    </Container>
  )
}

export default Inputs

const Container = styled.div``
const Wrapper = styled.div``
const Card = styled.div``
const Cardwrap = styled.div``
const Topic = styled.input``
const Text = styled.input``
const Button = styled.button``