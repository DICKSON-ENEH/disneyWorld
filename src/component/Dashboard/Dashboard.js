import React from 'react'
import styled from 'styled-components'
import{Link} from 'react-router-dom'

const Dashboard = () => {
  return (
    <Container>
        <Wrapper>
<Head>
Welcome User
<Link to ="/create"><Create>
    Create
</Create>
</Link>
</Head>
<Card>
    <Cardwrap>
<Topic>
    Tuesday story
    </Topic>
    <Content>

        haegfioegjv riobteik ituovuprk t
        sgarieviotrn
        js
        </Content>        
    </Cardwrap>
</Card>
        </Wrapper>
    </Container>
  )
}

export default Dashboard
const Container = styled.div``
const Wrapper = styled.div``
const Head = styled.div``
const Card = styled.div``
const Cardwrap = styled.div``
const Topic = styled.div``
const Content = styled.div``
const Create = styled.button``
