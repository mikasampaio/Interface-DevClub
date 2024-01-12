import styles from '@emotion/styled'
import TableCell from '@mui/material/TableCell'
import ReactSelect from 'react-select'
import styled from 'styled-components'

export const Container = styled.div``

export const Menu = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin: 20px 0;
`

export const NavLink = styled.a`
  cursor: pointer;
  border-bottom: ${props => props.isActive && '2px solid #c8161d'};
  font-weight: ${props => (props.isActive ? '400' : '300')};
`

export const Img = styled.img`
  width: 50px;
  border-radius: 50px;
`

export const TableTitle = styles(TableCell)`
  font-family: "Poppins",sans-serif;
  font-weight: 500;
  line-height: 1.5rem;
  display: table-cell;
  vertical-align: inherit;
  border-bottom: 1px solid rgba(224, 224, 224, 1);
  text-align: left;
  padding: 16px;
  color: #c8161d;
  font-size: 16px;
`

export const Select = styled(ReactSelect)`
  width: 250px;
`
