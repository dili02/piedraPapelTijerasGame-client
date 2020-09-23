import React from 'react'
//import { useHistory } from 'react-router-dom'

// TODO => install and validate info Form REACT-HOOK-FORM or JOI setMESSAGES min 1.07
// TODO => loader Component
export default function Register () {
   //const history = useHistory()

   const [data, setData] = React.useState({
      nickname: "",
      password: "",
      passwordConfirm: "",
      isSubmitting: false,
      statusMsg: '',
      message: null
   })

   const handleChangeInputs = e => {
      setData({
         ...data,
         [e.target.name]: e.target.value
      })
   }

   const handleSubmitForm = async e => {
      e.preventDefault()

      setData({
         ...data,
         isSubmitting: true
      })

      try {
         const response = await fetch(`${process.env.EACT_APP_API_PROTOCOL}://${process.env.EACT_APP_API_HOST}:${process.env.EACT_APP_API_PORT}/register`, {
            method: 'POST',
            headers: {
               'Content-Type': "application/json"
            },
            body: JSON.stringify({
               nickname: data.nickname,
               password: data.password,
               passwordConfirm: data.passwordConfirm
            })
         })
         const responseJson = await response.json()

         if (responseJson.status === "error") {
            setData({
               ...data,
               isSubmitting: false,
               statusMsg: responseJson.status,
               message: responseJson.message
            })
         }

         setData({
            ...data,
            nickname: "",
            password: "",
            passwordConfirm: "",
            isSubmitting: false,
            statusMsg: responseJson.status,
            message: responseJson.message
         })
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
         <h2>REGISTRARSE</h2>

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

            <input
               type="password"
               name="passwordConfirm"
               placeholder="Confirmar Contraseña"
               value={data.passwordConfirm}
               onChange={handleChangeInputs}
            />

            <button disabled={data.isSubmitting}>
               {
                  data.isSubmitting
                     ? <span>REGISTRANDO...</span>
                     : "REGISTRARSE"
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
