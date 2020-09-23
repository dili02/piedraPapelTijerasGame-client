import React from 'react'
import Button from '../Button'

export default function Home (props) {
   return (
      <>
         <h2>HOME PAGE (REGLAS)</h2>
         <Button text="Boton" />
         <Button text="Boton" type="primary" />
         <Button text="Boton" type="danger" />
         <Button text="Boton" type="success" />
      </>
   )
}
