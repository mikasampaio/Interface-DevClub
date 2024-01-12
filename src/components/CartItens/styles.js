import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 4px 16px;
  height: max-content;
  border-radius: 10px;
  overflow: hidden;
`

export const ContainerCart = styled.div`
  display: flex;
  min-width: 550px;

  .line {
    background: rgba(0, 0, 0, 0.1);
    height: 1px;
  }

  img {
    width: 50px;
    border-radius: 50px;
  }

  p {
    font-size: 12px;
  }

  .quantity-select {
    display: flex;
    align-items: center;
    gap: 15px;
    border: 1px solid #b6b6b6;
    border-radius: 4px;
    height: 30px;
    padding: 10px;

    button {
      border: none;
      background: none;
      cursor: pointer;
      font-size: 18px;
      color: #00a4a5;
    }

    p {
      font-size: 16px;
    }
  }

  @media screen and (max-width: 767px) {
    min-width: auto;
  }
`

export const ContainerItems = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 10px;
  justify-content: space-between;
  width: 50%;

  /* display: grid;
  justify-items: center;
  grid-gap: 10px;
  grid-template-columns: repeat(5, 1fr);*/
`

export const EmptyCart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  min-height: 450px;
  min-width: 550px;

  p {
    font-weight: 500;
  }

  a {
    color: #ffffff;
  }

  div {
    @media screen and (max-width: 767px) {
      width: 80%;
    }
  }

  @media screen and (max-width: 767px) {
    min-width: auto;
  }
`

export const ContainerQuantity = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
`
