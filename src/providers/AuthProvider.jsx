import { createContext } from "react"

const AuthContext = createContext(null)
const AuthProvider = () => {

    const authInfo = {name:'joy'}

  return (
   <AuthContext.Provider value= {authInfo}>

   </AuthContext.Provider>
  )
}

export default AuthProvider
