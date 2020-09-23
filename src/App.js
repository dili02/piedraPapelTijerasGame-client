import React from 'react';
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom'

import Header from './components/Header/index'
import Home from './components/screens/Home'
import Register from './components/screens/Register'
import Login from './components/screens/Login'
import Profile from './components/screens/Profile'
import Game from './components/screens/Game'

import { reducer, initialState } from './reducers/authReducer'
export const AuthContext = React.createContext()

const Router = () => {
   const history = useHistory()
   const { dispatch } = React.useContext(AuthContext)

   React.useEffect(() => {
      const user = JSON.parse(sessionStorage.getItem("user"))
      if (user) {
         dispatch({
            type: 'USER',
            payload: user
         })
         history.push('/perfil')
      } else {
         history.push('/')
      }
   }, [dispatch, history])

   return (
      <Switch>
         <Route exact path="/">
            <Home />
         </Route>
         <Route path="/registrarse">
            <Register />
         </Route>
         <Route path="/ingresar">
            <Login />
         </Route>
         <Route path="/perfil">
            <Profile />
         </Route>
         <Route path="/juego">
            <Game />
         </Route>
      </Switch>
   )
}

function App () {
   const [state, dispatch] = React.useReducer(reducer, initialState)

   return(
      <AuthContext.Provider value={{
         state,
         dispatch
      }}>
         <BrowserRouter>
            <Header />
            <Router />
         </BrowserRouter>
      </AuthContext.Provider>
  )

}

export default App;
