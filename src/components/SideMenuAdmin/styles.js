import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
  padding: 50px 10px 20px;
  min-height: 100vh;
  width: 300px;
  background-color: #c8161d;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const ContainerList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const ContainerItems = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  background: ${props => (props.isActive ? '#cf4046' : 'none')};
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;

  span {
    display: flex;
    align-items: center;
    color: #fff;
    font-size: 18px;
  }
`

export const Links = styled(Link)`
  color: #fff;
`
