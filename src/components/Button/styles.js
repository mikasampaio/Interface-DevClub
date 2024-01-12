import styled from 'styled-components'

export const ContainerButton = styled.button`
  width: 30vw;
  height: 40px;

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

  @media screen and (max-width: 1023px) {
    width: 100%;
  }
`
