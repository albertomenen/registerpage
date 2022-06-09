import React from "react"
import Input from "./Input"

function Registered() {
  return <form className="form">
  <Input type = "text" placeholder = "username"/>
  <Input  type = "password" placeholder = "password"/>
  </form>
}

export default Registered