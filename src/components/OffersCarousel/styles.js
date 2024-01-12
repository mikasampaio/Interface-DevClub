import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;
  gap: 30px;

  .rec.rec-slider-container {
    margin: 0;
  }

  .rec.rec-arrow {
    border-radius: 0;
    box-shadow: none;
    background: none;

    &:hover {
      color: #000000;
    }
  }

  .rec.rec-dot {
    box-shadow: 0 0 1px 3px rgba(200, 22, 29, 1);
  }
`

export const H1 = styled.h1`
  color: #c8161d;
`

export const ContainerProduct = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 90%;
  gap: 30px;
`

export const ContainerItens = styled.div`
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
  }
`

export const Img = styled.img`
  width: 150px;
  border-radius: 100px;
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
`
