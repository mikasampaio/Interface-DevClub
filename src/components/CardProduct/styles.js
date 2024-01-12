import styled from 'styled-components'

export const ContainerProduct = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 0 1 auto;
  width: 230px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 4px 16px;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 18px;
    transition: all 0.5s ease-in-out;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    margin: 30px 0 15px;

    @media screen and (max-width: 767px) {
      margin: 15px 0;
    }
  }

  @media screen and (max-width: 767px) {
    width: 160px;
    padding: 15px;
  }
`

export const Img = styled.img`
  width: 150px;
  border-radius: 100px;

  @media screen and (max-width: 767px) {
    width: 100px;
  }
`

export const Button = styled.button`
  border-radius: 30px;
  border: 1px solid #c8161d;
  font-weight: 500;
  padding: 10px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  color: #c8161d;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    background: #c8161d;
    color: #ffffff;
  }

  @media screen and (max-width: 767px) {
    font-size: 10px;
    padding: 5px;
  }
`
