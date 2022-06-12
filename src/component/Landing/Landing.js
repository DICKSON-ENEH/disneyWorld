import React from 'react'
import styled from "styled-components"
import Header from '../Header/Header'
import {Link} from 'react-router-dom'

const Landing = () => {
  return (
      

    <Container>

        <Wrspper>
        
            
            <Hero>
                <Herowrap>
                    <Left>
<div>E-Diary</div>
<p>why have your diaries and secrets loacally
    we provide a space where all your secrets are safe
</p>

<Link to ="/slide"><button>Get Started</button></Link>
                    </Left>
                </Herowrap>
                <Right>
                <img src="laps (2).jpg"/>

                </Right>
            </Hero>
        </Wrspper>
    </Container>
    
  )
}

export default Landing
const Container= styled.div`
height: 100vh;
width: 100%;
display: flex;
justify-content: center;
flex-direction: column;
flex-wrap: wrap;


`
const Wrspper= styled.div`
display: flex;
justify-content:space-between;
align-items: center;
flex-direction: column;
flex-wrap: wrap;

width: 100%;
`
const Hero= styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 90%;
@media(min-width: 330px) and (max-width:400px){
    flex-direction: column-reverse;
}
@media(min-width: 410px) and (max-width:440px){
    flex-direction: column-reverse;
}

`
const Herowrap= styled.div`

`
const Left= styled.div`
width: 400px;
div{
    color: #523E9B;
    font-weight: bold;
    font-size: 4rem;
    font-family: montserrat;
}
p{
    font-size: 20px;
    font-family: quicksand;
}
button{
    padding: 15px 30px;
    border: none;
    outline: none;
    border-radius: 20px;
    background: #E11063;
    color: #fff;
    font-family: quicksand;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    :hover{
        cursor: pointer;
        transition: all 300ms;
        transform: scale(1.1);
    }
}
@media(min-width: 330px) and (max-width:400px){
    width: 300px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p{
        text-align: center;
    }
    button{
        display: block
    }

}
@media(min-width: 410px) and (max-width:440px){
    width: 330px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p{
        text-align: center;
    }
   
}
`
const Right= styled.div`

width: 600px;
img{
    width: 100%
}
@media(min-width: 330px) and (max-width:400px){
    width: 300px;
}
@media(min-width: 410px) and (max-width:440px){
    width: 330px;
}
`
