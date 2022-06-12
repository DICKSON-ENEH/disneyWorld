import React, {useState} from 'react'
import styled  from 'styled-components'
import {Link} from 'react-router-dom'
import {addDoc, collection, doc, getDoc, setDoc} from "firebase/firestore"
import{getStorage, ref, uploadBytesResumable, getDownloadURL} from "firebase/storage"

import {db, storage, auth} from '../Base/Base'

import {createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from "firebase/auth"
import {useNavigate} from "react-router-dom"
import test from '../Base/testimonial.png'
const Signup = () => {
    const navigate = useNavigate();
    const [avatar, setAvatar] = useState("")
    const [image, setImage] = useState(test)
    const [email, setEmail] =  useState("")
    const [username, setUsername] =  useState("")
    const [password, setPassword] =  useState("")


    const handleImage= async(e)=>{
        const file = e.target.files[0]
        const save = URL.createObjectURL(file)
          setImage(save)

          const storageRef = ref(storage, "userAvatar/"+file.name)

          const uploadTask = uploadBytesResumable(storageRef, file)
          uploadTask.on(
              "state_changed",
              (snapshot)=>{
                const progress =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log("Upload is " + progress + "% done");
            
              },

              (error) => {
				console.log(error.message);
              }  ,
              () => {
				getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
					console.log("File available at", downloadURL);
					setImage(downloadURL);
					console.log("This is the Avatar: ", avatar);
				});
			}
          )
    }

    const registerAuser = async()=>{
        const user = doc(collection(db, "users"))
        await setDoc(user, {username, email, password, image})

        setUsername("")
        setEmail("")
        setPassword("")
    }

 const authuser =async()=>{
     const user= await createUserWithEmailAndPassword(auth, email, password)

     if(user){
         const userData = doc(collection(db, "users"), user.user.uid)
         await setDoc(userData, { username, email, password, image });
     }
     setUsername("");
		setEmail("");
		setPassword("");

		navigate("/dashboard");
 }
 const authUserWithOther = async () => {
    const provider = new GoogleAuthProvider();
    const user = await signInWithPopup(auth, provider);
    console.log(user);

    if (user) {
        const userData = doc(collection(db, "users"), user.user.uid);
        await setDoc(userData, {
            username: user.user.displayName,
            email: user.user.email,
            image: user.user.photoURL,
        });
    }

    setEmail("");
    setPassword("");

    navigate("/dashboard");
};   
  return (
    <Container>
        <Wrapper>
           
            <Card>
                <Cardwrap>
                    Get started Resgister with us
                    <Avatar src={image}/>
                    <Label htmlFor='pix'>up load </Label>
                    <Image type ="file" id="pix" onChange={handleImage}/>
                    <Email placeholder='Email'
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                    />
                    <Username placeholder="username"
                    value={username}
                    onChange={(e) => {
                        setUsername(e.target.value);
                    }}
                    />
                    <Password placeholder='password'
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                    />
                    <Submit onClick={authuser}>Resgister</Submit>
                    <Google  onClick={authUserWithOther}>Sign up with Googlle</Google>
                    Have an account? <Link to="/signin"><button >Signin</button></Link>
                </Cardwrap>
            </Card>
        </Wrapper>
    </Container>
  )
}

export default Signup

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
width: 100%;
`
const Wrapper = styled.div``
const Card = styled.div`
width: 400px;

padding: 10px;
display: flex;
justify-content: center;
align-items: center;

`
const Cardwrap = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
margin: 30px;
`
const Avatar = styled.img`

width: 100px;
	height: 100px;
	object-fit: cover;
	border-radius: 50%;
`
const Image = styled.input`
display: none;
`
const Label = styled.label`
padding: 20px 50px;
	background-color: #004080;
	margin-top: 30px;
	color: white;
	border-radius: 3px;
	transform: scale(1);
	transition: all 350ms;
	:hover {
		transform: scale(1.04);
		cursor: pointer;
	}

`

const Email = styled.input`
width: 300px;
margin: 10px;
`
const Username = styled.input`
width: 300px;
margin: 10px;

`
const Password = styled.input`
width: 300px;
margin: 10px;

`
const Submit = styled.button``
const Google = styled.button``
