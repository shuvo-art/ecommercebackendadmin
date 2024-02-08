import React from "react"
import Navbar from "./Components/Navbar/Navbar"
import Admin from "./Pages/Admin/Admin"
import Login from "./Components/Login/LoginSignup"

const App = () => {
  return (
    <div>
      <Navbar />
      <Admin />
    </div>
  )
}

export default App