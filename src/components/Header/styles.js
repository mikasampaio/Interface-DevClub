import styled from 'styled-components'

export const Container = styled.div`
  height: 45px;
  padding: 10px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #c8161d;

  @media screen and (max-width: 767px) {
    padding: 10px;
  }
`

export const ContainerRoutes = styled.div`
  display: flex;
  gap: 30px;

  a {
    cursor: pointer;
    color: #ffffff;
    font-weight: 500;
  }

  @media screen and (max-width: 767px) {
    gap: 15px;
  }
`

export const Username = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 13px;
  font-weight: 500;
  color: #ffffff;

  p {
    font-weight: 300;
  }

  a {
    cursor: pointer;
  }
`

export const UserMenu = styled.nav`
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 25px;

  .line {
    height: 30px;
    border: 0.5px solid #ffffff;
  }
`

export const IconsMenu = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;

  p {
    font-size: 14px;
    color: #ffffff;
    position: absolute;
    top: -6px;
    left: 23px;
  }
`
