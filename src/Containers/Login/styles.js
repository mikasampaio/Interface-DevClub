import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
`

export const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #c8161d;

  width: 40vw;
  height: 100vh;

  img {
    width: 35vw;
  }
`

export const ContainerItens = styled.div`
  width: 60vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const H1 = styled.h1`
  color: #c8161d;
`
export const Form = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
  width: 30vw;
`

export const P = styled.label`
  color: black;
`
export const Input = styled.input`
  outline: none;
  border: none;
  padding-left: 10px;
  border-left: 5px solid #c8161d;
  border-radius: 5px;
  height: 40px;
  box-shadow: rgba(52, 118, 8, 0.3) 0px 7px 29px 0px;
`

export const Button = styled.button`
  width: 30vw;
  height: 40px;
  margin-top: 50px;

  border: none;
  border-radius: 5px;

  background: #c8161d;
  color: #ffffff;
  cursor: pointer;

  font-weight: 600;
  font-size: 15px;

  &:hover {
    opacity: 0.8;
  }
`

export const SignIn = styled.p`
  margin-top: 10px;

  a {
    cursor: pointer;
    color: #c8161d;
  }
`
