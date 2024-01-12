import styled from 'styled-components'

export const Container = styled.span``

export const Offer = styled.span`
  background-color: ${props => (props.isOffer ? '#22C55E' : '#c8161d')};
  color: #fff;
  font-size: 12px;
  font-weight: 600;
  padding: 3px;
  border-radius: 4px;
`

export const Edit = styled.button`
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
`
