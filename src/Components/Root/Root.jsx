import { Outlet } from "react-router-dom"
import SignUp from "../Pages/SignUp/SignUp"
import Login from "../Pages/Login/Login"


const Root = () => {
  return (
    <div>
     
      <Outlet></Outlet>
    </div>
  )
}

export default Root
