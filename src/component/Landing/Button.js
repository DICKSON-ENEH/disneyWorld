import React from 'react'
import styled from 'styled-components'

const Button = () => {
  return (
    <Butts>
        Get started
    </Butts>
  )
}

export default Button
const Butts= styled.button`
opacity: 0;
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
    @media(min-width: 330px) and (max-width:400px){
opacity: 1;

}
@media(min-width: 410px) and (max-width:440px){
opacity: 1;
    
}
`