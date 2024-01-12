import styled from 'styled-components'

export const Container = styled.div``

export const Header = styled.img`
  width: 100%;
`

export const CategoriesMenu = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;

  @media screen and (max-width: 767px) {
    justify-content: normal;
    overflow-x: scroll;
    padding: 0 15px;
  }
`

export const CategoryLink = styled.button`
  border: none;
  border-bottom: ${props => props.isActive && '2px solid #c8161d'};
  color: ${props => (props.isActive ? '#c8161d' : 'inherit')};

  font-size: 16px;
  margin: 15px 0 35px;

  background: none;
  cursor: pointer;

  &:hover {
    color: #c8161d;
  }
`

export const ContainerProducts = styled.div`
  /*  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center; */
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  padding: 25px;
`
