import React from 'react'
import useFetch from './src/hooks/useFetch'

export default function Home () {
   const {data, loading} = useFetch("http://localhost:4000/users")

   if (loading) {
      return <h5>Cargando...</h5>
   }
   return (
      <>
         <h2>TABLERO</h2>
      </>
   )
}
