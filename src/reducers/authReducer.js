export const initialState = null

/* const ACTIONS = {
   USER: "USER",
   LOGOUT: "LOGOUT"
} */

export const reducer = (state, action) => {
   if (action.type === "USER")  return action.payload

   if (action.type === "LOGOUT") return null

   return state
}