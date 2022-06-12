import React from 'react'
import styled from 'styled-components'

import {Link} from 'react-router-dom'
const Slide = () => {
  return (
    <Container>
        <Wraooer>
            <Navs>
                Sign in 
            </Navs>
            <Link to="/signup">
            <Navs>
                Sign up
            </Navs>
            </Link>
        </Wraooer>
    </Container>
  )
}

export default Slide
const Container = styled.div`
display: none;
@media (min-width: 320px) and (max-width:440px){
    display: flex;
justify-content: center;
align-self: center;
height: 100vh;
}
`
const Wraooer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

`
const Navs = styled.button`
margin: 30px;
font-size: 40px;
background: transparent;
border: none;
outline: none;
opacity: 0.7;
:hover{
    opacity: 1;
    transition: all 300ms;
  transform: scale(1.05);
}
`