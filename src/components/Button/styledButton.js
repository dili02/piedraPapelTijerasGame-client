import styled from 'styled-components'

const StyledButton = styled.button`
   border: none;
   box-shadow: 1px, 1px, 6px, 3px rgba(0,0,0,0.3);
   background: white;
   color: black;
   padding: 7px 10px;
   font-size: 16px;
   margin: 5px;
   transition: 0.75s all ease-in-out;
   &:hover {
      cursor: pointer;
      opacity: .75;
   }
   ${props => props.type === 'primary' && `
   background: #3535b2;
   color: white;
   `}
   ${props => props.type === 'danger' && `
   background: #b21111;
   color: white;
   `}
   ${props => props.type === 'success' && `
   background: #46A346;
   color: white;
   `}
`

export default StyledButton