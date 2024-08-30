import styled from 'styled-components'

export const Container = styled.div`
  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  Button {
    width: 100%;
  }
`

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
`

export const ContainerCheck = styled.div`
  display: flex;
  gap: 20px;

  input {
    width: 18px;
    cursor: pointer;
  }
`

export const LabelUpload = styled.label`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  outline: none;
  border: ${props =>
    props.error ? '1px solid #ed4137;' : '1px dashed #D1D5DB'};
  padding: 10px;
  border-radius: 5px;
  height: 40px;
  color: rgba(0, 0, 0, 0.5);
  width: 100%;

  input {
    opacity: 0;
  }

  @media screen and (max-width: 767px) {
    display: block;
  }
`

export const Label = styled.label``

export const Input = styled.input`
  outline: none;
  border: ${props =>
    props.error ? '1px solid #ed4137;' : '1px solid #D1D5DB'};
  padding-left: 10px;
  border-radius: 5px;
  height: 40px;
`

export const ErrorMessage = styled.p`
  color: #ed4137;
  font-size: 14px;
  font-weight: 500;
`
