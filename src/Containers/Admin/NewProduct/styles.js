import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    border: 1px solid #d1d5db;
    border-radius: 5px;
    padding: 15px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    background-color: #fff;
    min-width: 50%;
  }

  Button {
    width: 100%;
  }
`

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
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

  input {
    opacity: 0;
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
