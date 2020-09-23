import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { AuthContext } from '../../App'

export default function Header () {
   const { state, dispatch } = React.useContext(AuthContext)
   const history = useHistory()

   const renderNavLinks = () => {
      if (state) {
         return [
            <li key="perfil">
               <Link to="/perfil">PERFIL</Link>
            </li>,
            <li key="juego">
               <Link to="/juego">JUEGO</Link>
            </li>,
            <li key="salir">
               <button onClick={() => {
                  sessionStorage.clear()
                  dispatch({
                     type: "LOGOUT"
                  })
                  history.push('/')
               }}>
                  SALIR
               </button>
            </li>
         ]
      } else {
         return [
            <li key="registrarse">
               <Link to="/registrarse">REGISTRARSE</Link>
            </li>,
            <li key="/">
               <Link to="/">REGLAS</Link>
            </li>,
            <li key="ingresar">
               <Link to="/ingresar">INGRESAR</Link>
            </li>
         ]
      }
   }

   return (
      <header>
         <nav>
            <ul>
              {renderNavLinks()}
            </ul>
         </nav>
      </header>
   )
}

