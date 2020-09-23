import React from 'react'
import { useHistory } from 'react-router-dom'
import { AuthContext } from '../../App'

//TODO => reparar mensajes retorno login
export default function Login () {
   const history = useHistory()
   const { dispatch } = React.useContext(AuthContext)
   const [data, setData] = React.useState({
      nickname: "",
      password: "",
      isSubmitting: false,
      statusMsg: '',
      message: null,
      userAthenticated: false
   })

   const handleChangeInputs = e => {
      setData({
         ...data,
         [e.target.name]: e.target.value
      })
   }

   const handleSubmitForm = async e => {
      e.preventDefault()

      try {
         setData({
            ...data,
            isSubmitting: true
         })

         const query = await fetch(`${process.env.EACT_APP_API_PROTOCOL}://${process.env.EACT_APP_API_HOST}:${process.env.EACT_APP_API_PORT}/login`, {
            method: 'POST',
            headers: {
               'Content-Type': "application/json"
            },
            body: JSON.stringify({
               nickname: data.nickname,
               password: data.password
            })
         })
         const response = await query.json()

         setData({
            ...data,
            isSubmitting: false,
            statusMsg: response.status,
            message: response.message
         })

         const { token, user } = response

         sessionStorage.setItem("token", token)
         sessionStorage.setItem("user", JSON.stringify(user))

         if (response.status !== "error") {
            dispatch({
               type:"USER",
               payload: user
            })
            history.push('/perfil')
         }
      } catch (error) {
         setData({
            ...data,
            isSubmitting: false,
            statusMsg: error.status,
            message: error.message
         })
      }
   }

   return (
      <>
         <h2>LOGIN PAGE</h2>

         <form onSubmit={handleSubmitForm}>
            <input
               type="text"
               name="nickname"
               placeholder="Usuario"
               value={data.nickname}
               onChange={handleChangeInputs}
            />

            <input
               type="password"
               name="password"
               placeholder="Contraseña"
               value={data.password}
               onChange={handleChangeInputs}
            />

            <button disabled={data.isSubmitting}>
               {
                  data.isSubmitting
                     ? <span>INGRESANDO...</span>
                     : "INGRESAR"
               }
            </button>
         </form>

         {
            data.message &&
            <div className={data.statusMsg}>
               {data.message}
            </div>
         }
      </>
   )
}

