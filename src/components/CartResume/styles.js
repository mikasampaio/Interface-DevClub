import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 4px 16px;
  border-radius: 10px;
  height: max-content;

  .line {
    background: rgba(0, 0, 0, 0.1);
    height: 1px;
    margin: 0;
    width: 100%;
  }
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: 500;
  padding: 15px 25px;
`

export const ContainerItems = styled.div`
  padding: 25px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 25px;

  .product-price {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    font-weight: 300;
  }

  .product-total {
    display: flex;
    justify-content: space-between;
    font-weight: 500;
    font-size: 18px;
  }
`
