import React from 'react'
import StyledButton from './styledButton'
export default function Button ({onClick, props, text, type}) {
   return (
      <StyledButton
         onClick={onClick}
         type={type}
         {...props}
      >
         {text}
      </StyledButton>
   )
}
