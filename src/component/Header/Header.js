import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
  <Container>
       <Head>
    
    <Logo/>
    <Navigation>
      <Link to="/Signin">  <Navs>Sign in</Navs></Link>
        <Link to ="/signup">
        <Navs>Sign up</Navs>
        </Link>
    </Navigation>
</Head>
  </Container>
  )
}

export default Header

const Container = styled.div`
display: flex;
width: 100%;
justify-content: center;
align-items: center;
flex-wrap: wrap;
@media(min-width: 330px) and (max-width:400px){
    display: none;
}
@media(min-width: 410px) and (max-width:440px){
    display: none;
}
`
const Head= styled.div`
display: flex;
justify-content: space-between;
width: 90%;

`
const Logo= styled.img`
width: 60px;
height: 60px;
border-radius: 50%;
background: #123456;
`
const Navigation= styled.div`
display: flex;
justify-content: space-around;
align-items: center;
width: 500px;
`
const Navs= styled.button`

`