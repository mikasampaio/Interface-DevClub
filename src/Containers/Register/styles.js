import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
`

export const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  img {
    height: 100%;
    object-fit: cover;
  }

  @media screen and (max-width: 900px) {
    img {
      display: none;
    }
  }
`

export const ContainerItens = styled.div`
  width: -webkit-fill-available;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    width: 30vw;
  }

  @media screen and (max-width: 1023px) {
    width: 100%;

    form {
      width: 70%;
    }
  }

  @media screen and (max-width: 767px) {
    form {
      width: 90%;
    }
  }
`
export const H1 = styled.h1`
  color: #c8161d;
`

export const P = styled.label`
  color: black;
  margin-top: 10px;
`
export const Input = styled.input`
  outline: none;
  border: ${props => (props.error ? '1px solid #ed4137;' : 'transparent')};
  padding-left: 10px;
  border-left: 5px solid #c8161d;
  border-radius: 5px;
  height: 40px;
  box-shadow: rgba(52, 118, 8, 0.3) 0px 7px 29px 0px;
`

export const ErrorMessage = styled.p`
  color: #ed4137;
  font-size: 14px;
  font-weight: 500;
`

export const SignIn = styled.p`
  margin-top: 10px;

  a {
    cursor: pointer;
    color: #c8161d;
  }
`
