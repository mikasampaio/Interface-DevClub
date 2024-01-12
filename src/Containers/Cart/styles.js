import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 30px;
  padding: 30px;

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`
